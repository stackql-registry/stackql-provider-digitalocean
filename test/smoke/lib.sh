#!/usr/bin/env bash
# Shared helpers for the DigitalOcean provider smoke test.
# Runs under bash (WSL or Linux) with the `stackql` binary on the PATH.

set -euo pipefail

REPO_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )/../.." && pwd )"

# Non-login shells (e.g. `wsl bash script.sh`) may not have ~/.local/bin
# on the PATH, which is where the stackql binary is typically installed.
if ! command -v stackql >/dev/null 2>&1; then
  export PATH="$HOME/.local/bin:$PATH"
fi

# Source credentials from .env if present (accepts KEY=VALUE with or
# without a leading `export`).
load_env() {
  if [ -f "$REPO_ROOT/.env" ]; then
    set -a
    # shellcheck disable=SC1091
    . "$REPO_ROOT/.env"
    set +a
  fi
  if [ -z "${DIGITALOCEAN_TOKEN:-}" ]; then
    echo "ERROR: DIGITALOCEAN_TOKEN is not set (env var or .env)" >&2
    exit 1
  fi
}

# Local registry pointing at the generated provider docs.
local_registry() {
  local root="$REPO_ROOT/provider-dev/openapi"
  printf '{"url": "file://%s", "localDocRoot": "%s", "verifyConfig": {"nopVerify": true}}' "$root" "$root"
}

# Install the locally generated provider into the repo-local approot so
# queries resolve v00.00.00000 (registry pull would fetch the published
# version instead).
install_local_provider() {
  mkdir -p "$REPO_ROOT/.stackql/src"
  rm -rf "$REPO_ROOT/.stackql/src/digitalocean"
  cp -r "$REPO_ROOT/provider-dev/openapi/src/digitalocean" "$REPO_ROOT/.stackql/src/"
}

# run_stackql <mode> "<query>" -> csv on stdout
# mode: local (default) uses the locally generated provider;
#       live  uses the latest published provider from the public registry.
run_stackql() {
  local mode="$1"; shift
  local query="$1"; shift
  if [ "$mode" = "live" ]; then
    stackql --approot "$REPO_ROOT/.stackql-live" exec "$query" --output csv "$@"
  else
    stackql --approot "$REPO_ROOT/.stackql" --registry "$(local_registry)" exec "$query" --output csv "$@"
  fi
}
