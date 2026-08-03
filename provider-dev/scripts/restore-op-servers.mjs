#!/usr/bin/env node
// Restore operation-level servers for endpoints that do not use the
// provider-wide base URL (https://api.digitalocean.com).
//
// The DigitalOcean spec marks serverless/batch inference operations with
// `x-inference-base-url` (https://inference.do-ai.run) and the agent
// inference operation with a templated server (https://{agent_url}).
// The normalize step strips operation-level `servers`, so this script
// re-adds them after `generate-provider`. any-sdk resolves servers at the
// operation level ahead of the service root, so these take precedence.

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const svcPath = resolve(repoRoot, 'provider-dev/openapi/src/digitalocean/v00.00.00000/services/inference.yaml');

const HTTP_VERBS = ['get', 'post', 'put', 'patch', 'delete', 'head'];
const AGENT_INFERENCE_PATH = '/api/v1/chat/completions';
const INFERENCE_BASE_URL = 'https://inference.do-ai.run';

const doc = yaml.load(readFileSync(svcPath, 'utf8'));
let restored = 0;

for (const [pathKey, pathItem] of Object.entries(doc.paths ?? {})) {
  for (const verb of HTTP_VERBS) {
    const op = pathItem?.[verb];
    if (!op) continue;
    if (pathKey === AGENT_INFERENCE_PATH) {
      op.servers = [{
        url: 'https://{agent_url}',
        variables: {
          agent_url: {
            default: 'your-agent-url.agents.do-ai.run',
            description: 'The agent URL assigned to your provisioned agent (e.g. fuauiziwb5xm6xka4c7aer5k.agents.do-ai.run).',
          },
        },
      }];
      restored++;
    } else if (pathKey.startsWith('/v1/')) {
      // All serverless/batch inference operations are rooted at /v1/ and
      // served from inference.do-ai.run; dedicated inference stays on the
      // provider-wide base URL under /v2/.
      op.servers = [{ url: op['x-inference-base-url'] || INFERENCE_BASE_URL }];
      restored++;
    }
  }
}

writeFileSync(svcPath, yaml.dump(doc, { lineWidth: -1, noRefs: true }));
console.log(`restored servers on ${restored} operations in ${svcPath}`);
