#!/usr/bin/env node
// Fix request-body `required` lists for operations whose original request
// body was a top-level oneOf/anyOf union.
//
// The normalize step flattens those unions into a single object schema and
// merges (unions) the variants' `required` lists. For mutually exclusive
// variants this produces unsatisfiable schemas - e.g. droplets_create ends
// up requiring both `name` (single create) and `names` (multi create), so
// no INSERT can ever route. The published provider kept the raw oneOf with
// no top-level required, which routed any subset.
//
// This script rewrites `required` on the affected generated operations to
// the INTERSECTION of the variants' required lists (empty -> removed),
// restoring the published provider's routing behaviour.

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const rawSpecPath = resolve(repoRoot, 'provider-dev/downloaded/digitalocean-public.v2.yaml');
const servicesDir = resolve(repoRoot, 'provider-dev/openapi/src/digitalocean/v00.00.00000/services');
const HTTP_VERBS = ['get', 'post', 'put', 'patch', 'delete'];

const raw = yaml.load(readFileSync(rawSpecPath, 'utf8'));

function deref(node, depth = 0) {
  while (node && typeof node === 'object' && node.$ref && depth < 10) {
    let n = raw;
    for (const part of node.$ref.split('/').slice(1)) n = n?.[part];
    node = n;
    depth++;
  }
  return node;
}

// Collect a variant's effective required list, resolving refs and allOf.
function requiredOf(schema, depth = 0) {
  schema = deref(schema);
  if (!schema || typeof schema !== 'object' || depth > 6) return [];
  let req = [...(schema.required ?? [])];
  for (const sub of schema.allOf ?? []) req.push(...requiredOf(sub, depth + 1));
  return req;
}

// Map of "VERB path" -> intersection of variant required lists.
const fixes = new Map();
for (const [pathKey, pathItem] of Object.entries(raw.paths ?? {})) {
  for (const verb of HTTP_VERBS) {
    const op = pathItem?.[verb];
    if (!op) continue;
    const rb = deref(op.requestBody);
    const schema = deref(rb?.content?.['application/json']?.schema);
    const variants = schema?.oneOf ?? schema?.anyOf;
    if (!variants?.length) continue;
    const lists = variants.map((v) => requiredOf(v));
    const intersection = [...new Set(lists.reduce((acc, l) => acc.filter((x) => l.includes(x))))];
    fixes.set(`${verb} ${pathKey}`, intersection);
  }
}

let patched = 0;
for (const file of readdirSync(servicesDir).filter((f) => f.endsWith('.yaml'))) {
  const svcPath = join(servicesDir, file);
  const doc = yaml.load(readFileSync(svcPath, 'utf8'));
  let changed = false;
  for (const [pathKey, pathItem] of Object.entries(doc.paths ?? {})) {
    for (const verb of HTTP_VERBS) {
      const key = `${verb} ${pathKey}`;
      if (!fixes.has(key)) continue;
      const schema = pathItem?.[verb]?.requestBody?.content?.['application/json']?.schema;
      if (!schema || typeof schema !== 'object') continue;
      const intersection = fixes.get(key);
      const current = schema.required ?? [];
      // Only ever relax: keep the subset of the current required list that
      // every variant agrees on. Never add new requirements.
      const next = current.filter((x) => intersection.includes(x));
      if (JSON.stringify(current) === JSON.stringify(next)) continue;
      if (next.length) schema.required = next; else delete schema.required;
      console.log(`${file}: ${key} required ${JSON.stringify(current)} -> ${JSON.stringify(next)}`);
      changed = true;
      patched++;
    }
  }
  if (changed) writeFileSync(svcPath, yaml.dump(doc, { lineWidth: -1, noRefs: true }));
}
console.log(`patched ${patched} operations`);
