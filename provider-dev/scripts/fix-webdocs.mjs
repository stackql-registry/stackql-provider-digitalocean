#!/usr/bin/env node
// Web-doc-only cleanups, run after `generate-docs` (see the Makefile docs
// target). The provider document itself is not touched - these methods
// remain available for backwards compatibility, they are just not shown
// on the docs site.

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const docsDir = resolve(repoRoot, 'website/docs/services');

// doc page (relative to website/docs/services) -> method names to hide.
// The generic type-discriminated action methods are superseded by the named
// lifecycle methods fabricated by generate-lifecycle-ops.mjs.
const HIDDEN_METHODS = {
  'compute/droplets/index.md': ['droplet_actions_post', 'droplet_actions_post_by_tag'],
};

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

for (const [page, methods] of Object.entries(HIDDEN_METHODS)) {
  const path = join(docsDir, page);
  let src = readFileSync(path, 'utf8');
  const before = src;

  for (const method of methods) {
    const m = escapeRe(method);

    // 1. Methods-table row: <tr> ... href="#<method>" ... </tr>
    src = src.replace(new RegExp(`<tr>(?:(?!<tr>)[\\s\\S])*?href="#${m}"[\\s\\S]*?</tr>\\n?`, 'g'), '');

    // 2. Tabs values entry: { label: '<method>', value: '<method>' },
    src = src.replace(new RegExp(`^\\s*\\{ label: '${m}', value: '${m}' \\},\\n`, 'gm'), '');

    // 3. TabItem block: <TabItem value="<method>"> ... </TabItem>
    src = src.replace(new RegExp(`<TabItem value="${m}">[\\s\\S]*?</TabItem>\\n?`, 'g'), '');

    // 4. If the method was a Tabs defaultValue, repoint to the first
    //    remaining value in that Tabs block (MDX prop syntax: values={[ ... ]}).
    src = src.replace(new RegExp(`defaultValue="${m}"([\\s\\S]*?values=\\{\\[\\s*\\{ label: '([^']+)')`, 'g'),
      (_, mid, firstValue) => `defaultValue="${firstValue}"${mid}`);
  }

  if (src !== before) {
    writeFileSync(path, src);
    console.log(`${page}: hid ${methods.join(', ')}`);
  } else {
    console.log(`${page}: nothing to change (already clean)`);
  }
}
