#!/usr/bin/env node
// Generate named lifecycle operations from DigitalOcean's generic
// type-discriminated "actions" endpoints.
//
// DigitalOcean models all lifecycle mutations as POST <entity>/actions with
// a `type` field in the JSON body (e.g. {"type": "reboot"}). The raw mapping
// exposes these as one generic exec method per endpoint, which is poor UX.
// This script fabricates one named exec method per action type on the entity
// resource itself, AWS-style:
//
//   EXEC digitalocean.compute.droplets.reboot @droplet_id='123';
//   EXEC digitalocean.compute.droplets.power_off_by_tag @tag_name='web';
//
// Mechanics (all standard any-sdk features):
// - a faux path key per action: <real path>?__type=<action>. The __-prefixed
//   query param exists only to make the path key unique; the method config
//   requestTranslate: drop_double_underscore_params strips it from the wire
//   request (the AWS ec2/acmpca pattern).
// - request.base: '{"type": "<action>"}' injects the discriminator into the
//   JSON body; user-supplied body params are merged on top.
// - each faux operation carries the variant-specific body schema (with
//   `type` removed and nothing required), so SHOW/EXEC/docs surface exactly
//   the params that action accepts, optionally suppliable via @@json.
// - integer path params are re-typed as string on faux operations: path
//   params are strings on the wire anyway, and this sidesteps an any-sdk
//   EXEC validation bug where `integer`-typed params never validate.
//
// The generic *_actions_post methods are left in place for backwards
// compatibility and for any future action types DigitalOcean adds.

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const servicesDir = resolve(repoRoot, 'provider-dev/openapi/src/digitalocean/v00.00.00000/services');

// Reusable body property schemas (types faithful to the DigitalOcean spec).
const P = {
  backup_policy: { type: 'object', description: 'An object specifying the backup policy for the Droplet (keys: plan, weekday, hour).' },
  image_int_or_slug: { description: 'The image ID of a public or private image or the slug identifier for a public image.' },
  name: { type: 'string', description: 'The new name for the resource.' },
  snapshot_name: { type: 'string', description: 'The name to give the new snapshot.' },
  disk: { type: 'boolean', description: 'When true, the Droplet disk will be resized in addition to CPU and RAM (permanent).' },
  size: { type: 'string', description: 'The slug identifier for the size to which the Droplet will be resized.' },
  kernel: { type: 'integer', description: 'A unique number identifying the kernel to be used.' },
  region: { type: 'string', description: 'The slug identifier for the region.' },
  droplet_id: { type: 'integer', description: 'The unique identifier for the Droplet.' },
  tags: { type: 'array', items: { type: 'string' }, description: 'A flat array of tag names as strings.' },
  size_gigabytes: { type: 'integer', description: 'The new size of the block storage volume in GiB (1024).' },
  nfs_params: { type: 'object', description: 'Action-specific parameters (e.g. size_gib for resize, name for snapshot, vpc_ids for attach/detach).' },
};

// service file -> resource -> { realPath, actions: { methodName: {type, props} } }
const LIFECYCLE = {
  'compute.yaml': {
    droplets: [
      {
        realPath: '/v2/droplets/{droplet_id}/actions',
        actions: {
          enable_backups: { type: 'enable_backups', props: { backup_policy: P.backup_policy } },
          disable_backups: { type: 'disable_backups', props: {} },
          reboot: { type: 'reboot', props: {} },
          power_cycle: { type: 'power_cycle', props: {} },
          shutdown: { type: 'shutdown', props: {} },
          power_off: { type: 'power_off', props: {} },
          power_on: { type: 'power_on', props: {} },
          password_reset: { type: 'password_reset', props: {} },
          enable_ipv6: { type: 'enable_ipv6', props: {} },
          restore: { type: 'restore', props: { image: P.image_int_or_slug } },
          resize: { type: 'resize', props: { disk: P.disk, size: P.size } },
          rebuild: { type: 'rebuild', props: { image: P.image_int_or_slug } },
          rename: { type: 'rename', props: { name: P.name } },
          change_kernel: { type: 'change_kernel', props: { kernel: P.kernel } },
          snapshot: { type: 'snapshot', props: { name: P.snapshot_name } },
          change_backup_policy: { type: 'change_backup_policy', props: { backup_policy: P.backup_policy } },
        },
      },
      {
        // Tag-addressed variants; DigitalOcean supports a subset of action
        // types on the by-tag endpoint.
        realPath: '/v2/droplets/actions',
        actions: {
          power_cycle_by_tag: { type: 'power_cycle', props: {} },
          power_on_by_tag: { type: 'power_on', props: {} },
          power_off_by_tag: { type: 'power_off', props: {} },
          shutdown_by_tag: { type: 'shutdown', props: {} },
          enable_ipv6_by_tag: { type: 'enable_ipv6', props: {} },
          enable_backups_by_tag: { type: 'enable_backups', props: {} },
          disable_backups_by_tag: { type: 'disable_backups', props: {} },
          snapshot_by_tag: { type: 'snapshot', props: { name: P.snapshot_name } },
        },
      },
    ],
    images: [
      {
        realPath: '/v2/images/{image_id}/actions',
        actions: {
          convert: { type: 'convert', props: {} },
          transfer: { type: 'transfer', props: { region: P.region } },
        },
      },
    ],
    reserved_ips: [
      {
        realPath: '/v2/reserved_ips/{reserved_ip}/actions',
        actions: {
          assign: { type: 'assign', props: { droplet_id: P.droplet_id } },
          unassign: { type: 'unassign', props: {} },
        },
      },
    ],
    reserved_ipv6: [
      {
        realPath: '/v2/reserved_ipv6/{reserved_ipv6}/actions',
        actions: {
          assign: { type: 'assign', props: { droplet_id: P.droplet_id } },
          unassign: { type: 'unassign', props: {} },
        },
      },
    ],
    volumes: [
      {
        realPath: '/v2/volumes/{volume_id}/actions',
        actions: {
          attach: { type: 'attach', props: { droplet_id: P.droplet_id, region: P.region, tags: P.tags } },
          detach: { type: 'detach', props: { droplet_id: P.droplet_id, region: P.region } },
          resize: { type: 'resize', props: { size_gigabytes: P.size_gigabytes, region: P.region } },
        },
      },
    ],
  },
  'network.yaml': {
    floating_ips: [
      {
        realPath: '/v2/floating_ips/{floating_ip}/actions',
        actions: {
          assign: { type: 'assign', props: { droplet_id: P.droplet_id } },
          unassign: { type: 'unassign', props: {} },
        },
      },
    ],
  },
  'storage.yaml': {
    shares: [
      {
        realPath: '/v2/nfs/{nfs_id}/actions',
        actions: {
          resize: { type: 'resize', props: { region: P.region, params: P.nfs_params } },
          snapshot: { type: 'snapshot', props: { region: P.region, params: P.nfs_params } },
          attach: { type: 'attach', props: { region: P.region, params: P.nfs_params } },
          detach: { type: 'detach', props: { region: P.region, params: P.nfs_params } },
          reassign: { type: 'reassign', props: { region: P.region, params: P.nfs_params } },
          switch_performance_tier: { type: 'switch_performance_tier', props: { region: P.region, params: P.nfs_params } },
        },
      },
    ],
  },
};

function encodeJsonPointer(s) {
  return s.replace(/~/g, '~0').replace(/\//g, '~1');
}

function successCode(op) {
  for (const code of Object.keys(op.responses ?? {})) {
    if (String(code).startsWith('2')) return String(code);
  }
  return '200';
}

let total = 0;
for (const [file, resources] of Object.entries(LIFECYCLE)) {
  const svcPath = join(servicesDir, file);
  const doc = yaml.load(readFileSync(svcPath, 'utf8'));
  let count = 0;

  for (const [resourceName, endpoints] of Object.entries(resources)) {
    const resource = doc.components?.['x-stackQL-resources']?.[resourceName];
    if (!resource) throw new Error(`resource ${resourceName} not found in ${file}`);

    for (const { realPath, actions } of endpoints) {
      const realOp = doc.paths?.[realPath]?.post;
      if (!realOp) throw new Error(`POST ${realPath} not found in ${file}`);
      const code = successCode(realOp);

      for (const [methodName, { type, props }] of Object.entries(actions)) {
        const fauxPath = `${realPath}?__type=${type}`;

        // Faux operation: clone the real one shallowly, swap in the
        // variant-specific body schema, string-coerce integer path params.
        // Parameters may be $refs into components.parameters - resolve them
        // to inline copies first (without mutating the shared component).
        const derefParam = (p) => {
          if (p?.$ref) {
            const key = p.$ref.split('/').pop();
            const target = doc.components?.parameters?.[key];
            if (target) return JSON.parse(JSON.stringify(target));
          }
          return { ...p };
        };
        const parameters = (realOp.parameters ?? []).map((raw) => {
          const p = derefParam(raw);
          if (p?.in === 'path' && p?.schema?.type === 'integer') {
            p.schema = { ...p.schema, type: 'string' };
          }
          return p;
        });
        const fauxOp = {
          operationId: `${resourceName}_${methodName}_lifecycle`,
          summary: (realOp.summary ? `${realOp.summary}: ` : '') + type,
          description: `Alias for the \`${type}\` action.`,
          tags: realOp.tags,
          parameters,
          requestBody: {
            required: false,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: props,
                },
              },
            },
          },
          responses: realOp.responses,
          security: realOp.security,
        };
        // The requestBody declaration must be present even for zero-param
        // actions - without a declared request schema any-sdk refuses to
        // send the base body ("no request body for operation").
        doc.paths[fauxPath] = { post: fauxOp };

        resource.methods[methodName] = {
          config: {
            requestTranslate: { algorithm: 'drop_double_underscore_params' },
            requestBodyTranslate: { algorithm: 'naive' },
          },
          operation: { $ref: `#/paths/${encodeJsonPointer(fauxPath)}/post` },
          request: {
            mediaType: 'application/json',
            base: JSON.stringify({ type }),
          },
          response: {
            mediaType: 'application/json',
            openAPIDocKey: code,
          },
        };
        count++;
      }
    }
  }

  writeFileSync(svcPath, yaml.dump(doc, { lineWidth: -1, noRefs: true }));
  console.log(`${file}: added ${count} lifecycle methods`);
  total += count;
}
console.log(`total lifecycle methods added: ${total}`);
