# digitalocean-web-server stackql-deploy example

Example [stackql-deploy](https://stackql.io/stackql-deploy) stack for the `digitalocean` provider. It provisions:

- a VPC (`example_vpc`)
- the smallest available droplet (`s-1vcpu-512mb-10gb`, ~$4/mo) running nginx via cloud-init user data (`example_droplet`)
- a query-only resource that exports the droplet public IP and URL (`get_droplet_public_ip`)

## Prerequisites

- [stackql-deploy](https://github.com/stackql/stackql-deploy-rs) installed
- `DIGITALOCEAN_TOKEN` exported in your shell (provider auth is sourced from the process environment)

## Usage

Deploy the stack to a `dev` environment:

```bash
export DIGITALOCEAN_TOKEN="your_token_here"
stackql-deploy build examples/stackql-deploy/digitalocean-web-server dev
```

Test that the stack is in its desired state:

```bash
stackql-deploy test examples/stackql-deploy/digitalocean-web-server dev
```

Tear it down (resources are deleted in reverse order):

```bash
stackql-deploy teardown examples/stackql-deploy/digitalocean-web-server dev
```

The `region`, `droplet_size`, and `droplet_image` globals in `stackql_manifest.yml` can be edited directly, and the VPC CIDR varies per environment (`dev`, `sit`, `prd`) via the `vpc_ip_range` prop.

On completion, `build` prints the stack exports including `web_server_url`. Cost: a full build plus teardown costs a few cents at most; the droplet bills ~$0.006/hr while it exists.
