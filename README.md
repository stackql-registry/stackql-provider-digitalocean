# `digitalocean` provider for [`stackql`](https://github.com/stackql/stackql)

This repository is used to generate and document the `digitalocean` provider for StackQL, allowing you to query and manage DigitalOcean resources using SQL. The provider is built from DigitalOcean's public OpenAPI specification using the [`@stackql/provider-utils`](https://www.npmjs.com/package/@stackql/provider-utils) package, and the docs microsite (served at [digitalocean-provider.stackql.io](https://digitalocean-provider.stackql.io)) is built with Docusaurus.

## Prerequisites

- Node.js >= 20 and `yarn` (v1) for the website
- `make` and `bash` (WSL on Windows)
- [StackQL CLI](https://github.com/stackql/stackql) on the PATH for testing
- A DigitalOcean personal access token in `DIGITALOCEAN_TOKEN` (or in a local `.env` file) for live tests

## Quick start

```bash
make all
```

This runs the full pipeline: install deps, download the latest spec, split it into services, normalize, update mappings, generate the provider (with post-processing), run the read-only smoke test, generate docs, and build the website. Run `make help` for the full target list.

## Pipeline steps

### 1. Download the OpenAPI spec

```bash
make download-spec
```

Downloads the official DigitalOcean API spec to `provider-dev/downloaded/digitalocean-public.v2.yaml`.

### 2. Split into service specs

```bash
make split
```

Splits the monolithic spec into service documents in `provider-dev/source/` using OpenAPI tags as the service discriminator. Tag-to-service assignments are controlled by `provider-dev/config/svc-name-overrides.json` - existing assignments must not change between releases (see [Backwards compatibility](#backwards-compatibility)).

### 3. Normalize

```bash
make normalize
```

Reshapes the split specs for relational consumption (flattens `allOf`, renames `oneOf`/`anyOf` variants, strips misplaced keywords). New in provider-utils 0.7.x; replaces the old local `flatten_allOf` post-processing.

### 4. Update mappings

```bash
make mappings
```

Updates `provider-dev/config/all_services.csv`. Existing rows are preserved; new operations are appended with blank `stackql_resource_name`/`stackql_method_name` values that must be filled in by hand. Set the resource name to `skip_this_resource` to exclude an operation from the provider.

### 5. Generate the provider

```bash
make provider
```

Generates the provider into `provider-dev/openapi/src/digitalocean/v00.00.00000/` using:

- `provider-dev/config/servers.json` - base URL (`https://api.digitalocean.com`)
- `provider-dev/config/provider-config.json` - bearer auth via the `DIGITALOCEAN_TOKEN` env var
- `provider-dev/config/service-config.json` - injected as `x-stackQL-config` into every service: link-based pagination (`$.links.pages.next`) and SQL `LIMIT` pushdown to the `per_page` query parameter

The provider is generated with naive request body translation (`--naive-req-body-translate`), so INSERT and UPDATE columns bind directly to request body property names (`name`, `region`, `size`, and so on) with no `data__` prefix:

```sql
INSERT INTO digitalocean.compute.droplets(name, region, size, image)
SELECT 'my-droplet', 'syd1', 's-1vcpu-512mb-10gb', 'ubuntu-24-04-x64';
```

Three post-processing scripts then run automatically:

- `restore-op-servers.mjs` - restores operation-level `servers` for the serverless/batch inference endpoints (`https://inference.do-ai.run`) and agent inference (`https://{agent_url}`)
- `fix-oneof-required.mjs` - relaxes `required` lists that the normalize step over-tightened when flattening `oneOf` request bodies (e.g. droplet create)
- `generate-lifecycle-ops.mjs` - fabricates named lifecycle methods from DigitalOcean's generic type-discriminated actions endpoints, so lifecycle operations read naturally instead of via a `type` parameter:

```sql
EXEC digitalocean.compute.droplets.reboot @droplet_id='123';
EXEC digitalocean.compute.droplets.power_off_by_tag @tag_name='web-fleet';
EXEC digitalocean.compute.volumes.attach @volume_id='...', @@json='{"droplet_id": 12345, "region": "syd1"}';
```

Named lifecycle methods are generated for droplets (power on/off, reboot, shutdown, resize, rename, snapshot, rebuild, restore, backups, kernel - plus `_by_tag` variants), images (convert, transfer), reserved IPs / reserved IPv6 / floating IPs (assign, unassign), volumes (attach, detach, resize), and NFS shares (resize, snapshot, attach, detach, reassign, switch_performance_tier).

### 6. Test the provider

```bash
make test-readonly   # read-only checks against the live API (local provider build)
make test            # adds a droplet + volume create/verify/delete lifecycle
make test-live       # full test against the latest published provider
```

The mutation test provisions the smallest droplet available (`s-1vcpu-512mb-10gb`) and a 1 GiB volume, then deletes both; a cleanup trap prevents leaked resources on failure. A full run costs less than one cent. Pass `--region` to `test/smoke/smoke.sh` to override the default (`syd1`).

Example ad hoc queries against the local build:

```bash
PROVIDER_REGISTRY_ROOT_DIR="$(pwd)/provider-dev/openapi"
REG_STR='{"url": "file://'${PROVIDER_REGISTRY_ROOT_DIR}'", "localDocRoot": "'${PROVIDER_REGISTRY_ROOT_DIR}'", "verifyConfig": {"nopVerify": true}}'
stackql shell --registry="${REG_STR}"
```

```sql
-- droplets with size details
SELECT id, name, status, size_slug,
  JSON_EXTRACT(size, '$.price_monthly') as price_monthly
FROM digitalocean.compute.droplets;

-- serverless inference model catalog (GradientAI)
SELECT id FROM digitalocean.inference.models;

-- NFS shares
SELECT id, name, region, size_gib FROM digitalocean.storage.shares;
```

### 7. Generate web docs

```bash
make docs
```

Generates the documentation site content into `website/docs` from the generated provider, using header templates in `provider-dev/docgen/provider-data/`.

### 8. Build and preview the website

```bash
make website        # production build
make website-start  # dev server
```

The site uses the shared StackQL Docusaurus config, vendored at build time: the `prebuild`/`prestart` hooks clone [`stackql/docusaurus-config`](https://github.com/stackql/docusaurus-config) into `website/.shared-config` (gitignored). Per-provider identity lives in `website/provider.js`.

### 9. Publish the provider

To publish the provider, push the `digitalocean` dir to `providers/src` in a feature branch of the [`stackql-provider-registry`](https://github.com/stackql/stackql-provider-registry). Follow the [registry release flow](https://github.com/stackql/stackql-provider-registry/blob/dev/docs/build-and-deployment.md).

### 10. Publish web docs to GitHub Pages

Handled by `.github/workflows/prod-web-deploy.yml` on push to `main` (paths `website/**`). Under __Pages__ in the repository settings select __GitHub Actions__ as the source, and create a `CNAME` record for `digitalocean-provider.stackql.io` pointing to `stackql.github.io.`.

## Backwards compatibility

`provider-dev/config/all_services.csv` is the compatibility contract: once a resource is published, it remains available with the same service, resource name, method names, and SQL verbs in subsequent releases. Provider updates only add new services/resources/operations and remove operations that are dead upstream.

## stackql-deploy example

An example [stackql-deploy](https://stackql.io/stackql-deploy) stack (VPC + smallest droplet running nginx) is in [`examples/stackql-deploy/digitalocean-web-server`](examples/stackql-deploy/digitalocean-web-server/):

```bash
stackql-deploy build examples/stackql-deploy/digitalocean-web-server dev
```

## License

MIT

## Contributing

Contributions to the DigitalOcean provider are welcome! Please feel free to submit a Pull Request.
