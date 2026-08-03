#!/usr/bin/env bash
# Quick connectivity check: valid token + local provider resolves + live API reachable.
source "$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/lib.sh"
load_env
echo "== curl auth check =="
curl -s -o /dev/null -w "GET /v2/account: %{http_code}\n" -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" https://api.digitalocean.com/v2/account
install_local_provider
echo "== regions (compute) =="
run_stackql local "select slug from digitalocean.compute.regions where available = true" | head -5
echo "== serverless inference models =="
run_stackql local "select id from digitalocean.inference.models" | head -5
echo "== account =="
run_stackql local "select uuid, email, status from digitalocean.account.account"
