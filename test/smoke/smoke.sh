#!/usr/bin/env bash
# Smoke test for the DigitalOcean StackQL provider.
#
# Default mode tests the locally generated provider (provider-dev/openapi).
# With --live it tests the latest published provider pulled from the public
# StackQL registry instead.
#
# Cost budget: well under $1 per run. The mutation phase provisions the
# smallest possible droplet (s-1vcpu-512mb-10gb, $4/mo ~ $0.006/hr) and a
# 1 GiB volume ($0.10/GB/mo), both deleted at the end of the run and by a
# cleanup trap on failure. A full run costs less than one cent.
#
# Usage:
#   ./test/smoke/smoke.sh [--live] [--read-only] [--region REGION]

source "$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/lib.sh"

MODE="local"
READ_ONLY="false"
REGION="syd1"
while [ $# -gt 0 ]; do
  case "$1" in
    --live) MODE="live"; shift ;;
    --read-only) READ_ONLY="true"; shift ;;
    --region) REGION="$2"; shift 2 ;;
    *) echo "unknown arg: $1" >&2; exit 1 ;;
  esac
done

RUN_ID="$(date +%s)"
DROPLET_NAME="stackql-smoke-${RUN_ID}"
VOLUME_NAME="stackql-smoke-vol-${RUN_ID}"
PASS=0
FAIL=0

q() { run_stackql "$MODE" "$1"; }

check() {
  # check <description> <query> <grep-pattern>
  local desc="$1" query="$2" want="$3" out
  if out=$(q "$query" 2>&1) && echo "$out" | grep -qE "$want"; then
    echo "PASS: $desc"
    PASS=$((PASS+1))
  else
    echo "FAIL: $desc"
    echo "      query: $query"
    echo "      output: $(echo "$out" | head -3 | tr '\n' ' ')"
    FAIL=$((FAIL+1))
  fi
}

cleanup() {
  # Best-effort teardown so failed runs never leak billable resources.
  local ids
  ids=$(q "select id from digitalocean.compute.droplets where name = '${DROPLET_NAME}'" 2>/dev/null | tail -n +2 || true)
  for id in $ids; do
    echo "cleanup: destroying droplet $id"
    q "delete from digitalocean.compute.droplets where droplet_id = '$id'" >/dev/null 2>&1 || true
  done
  ids=$(q "select id from digitalocean.compute.volumes where name = '${VOLUME_NAME}'" 2>/dev/null | tail -n +2 || true)
  for id in $ids; do
    echo "cleanup: deleting volume $id"
    q "delete from digitalocean.compute.volumes where volume_id = '$id'" >/dev/null 2>&1 || true
  done
}
trap cleanup EXIT

load_env

echo "=== DigitalOcean provider smoke test (mode: $MODE, region: $REGION) ==="

if [ "$MODE" = "live" ]; then
  rm -rf "$REPO_ROOT/.stackql-live"
  stackql --approot "$REPO_ROOT/.stackql-live" exec "registry pull digitalocean" >/dev/null
else
  install_local_provider
fi

echo "--- read-only checks ---"
check "account is accessible"            "select status from digitalocean.account.account" "^active$"
check "compute: regions returns rows"    "select count(*) as n from digitalocean.compute.regions" "^[1-9][0-9]*$"
check "compute: sizes paginates (>20)"   "select count(*) as n from digitalocean.compute.sizes" "^([2-9][1-9]|[1-9][0-9][0-9]+)$"
check "compute: droplets lists"          "select count(*) as n from digitalocean.compute.droplets" "^[0-9]+$"
check "compute: images paginates (>20)"  "select count(*) as n from digitalocean.compute.images" "^([2-9][1-9]|[1-9][0-9][0-9]+)$"
check "storage (volumes) lists"          "select count(*) as n from digitalocean.compute.volumes" "^[0-9]+$"
check "kubernetes: clusters lists"       "select count(*) as n from digitalocean.kubernetes.clusters" "^[0-9]+$"
check "databases: clusters lists"        "select count(*) as n from digitalocean.databases.clusters" "^[0-9]+$"

if [ "$MODE" = "local" ]; then
  # Services introduced in this release - only present in the local build
  # until the next registry release is published.
  check "inference: models lists"        "select count(*) as n from digitalocean.inference.models" "^[1-9][0-9]*$"
  check "storage: nfs shares lists"      "select count(*) as n from digitalocean.storage.shares" "^[0-9]+$"
  check "genai: model catalog lists"     "select count(*) as n from digitalocean.genai.model_catalog" "^[0-9]+$"
  check "security: scans resource resolves" "show methods in digitalocean.security.scans" "security_list_scans"
fi

if [ "$READ_ONLY" = "true" ]; then
  echo "--- skipping mutation checks (--read-only) ---"
else
  echo "--- mutation checks (droplet + volume lifecycle, < \$0.01) ---"

  check "create droplet ${DROPLET_NAME}" \
    "insert into digitalocean.compute.droplets(name, region, size, image, tags) select '${DROPLET_NAME}', '${REGION}', 's-1vcpu-512mb-10gb', 'ubuntu-24-04-x64', '[\"${DROPLET_NAME}\"]'" \
    "despatched successfully"

  # Wait for the droplet to become active (typically ~30-60s).
  DROPLET_ACTIVE="false"
  for i in $(seq 1 20); do
    status=$(q "select status from digitalocean.compute.droplets where name = '${DROPLET_NAME}'" 2>/dev/null | tail -n +2 | head -1 || true)
    if [ "$status" = "active" ]; then DROPLET_ACTIVE="true"; break; fi
    sleep 10
  done
  if [ "$DROPLET_ACTIVE" = "true" ]; then
    echo "PASS: droplet became active"; PASS=$((PASS+1))
  else
    echo "FAIL: droplet did not become active (last status: ${status:-unknown})"; FAIL=$((FAIL+1))
  fi

  DROPLET_ID=$(q "select id from digitalocean.compute.droplets where name = '${DROPLET_NAME}'" | tail -n +2 | head -1)
  check "droplet queryable by id"   "select name from digitalocean.compute.droplets where droplet_id = '${DROPLET_ID}'" "^${DROPLET_NAME}$"

  # Named lifecycle ops (stop -> start) on the droplets resource. These are
  # fabricated per-action exec methods over the generic actions endpoint
  # (see provider-dev/scripts/generate-lifecycle-ops.mjs).
  check "lifecycle: stop (power_off)" "exec digitalocean.compute.droplets.power_off @droplet_id='${DROPLET_ID}'" "power_off|in-progress|completed|despatched successfully"

  DROPLET_OFF="false"
  for i in $(seq 1 12); do
    status=$(q "select status from digitalocean.compute.droplets where name = '${DROPLET_NAME}'" 2>/dev/null | tail -n +2 | head -1 || true)
    if [ "$status" = "off" ]; then DROPLET_OFF="true"; break; fi
    sleep 10
  done
  if [ "$DROPLET_OFF" = "true" ]; then
    echo "PASS: droplet powered off"; PASS=$((PASS+1))
  else
    echo "FAIL: droplet did not power off (last status: ${status:-unknown})"; FAIL=$((FAIL+1))
  fi

  check "lifecycle: start (power_on)" "exec digitalocean.compute.droplets.power_on @droplet_id='${DROPLET_ID}'" "power_on|in-progress|completed|despatched successfully"

  DROPLET_ON="false"
  for i in $(seq 1 12); do
    status=$(q "select status from digitalocean.compute.droplets where name = '${DROPLET_NAME}'" 2>/dev/null | tail -n +2 | head -1 || true)
    if [ "$status" = "active" ]; then DROPLET_ON="true"; break; fi
    sleep 10
  done
  if [ "$DROPLET_ON" = "true" ]; then
    echo "PASS: droplet powered back on"; PASS=$((PASS+1))
  else
    echo "FAIL: droplet did not power back on (last status: ${status:-unknown})"; FAIL=$((FAIL+1))
  fi

  # Tag-addressed variant - the smoke droplet is tagged with its own
  # unique name at create time.
  check "lifecycle: power_off_by_tag"  "exec digitalocean.compute.droplets.power_off_by_tag @tag_name='${DROPLET_NAME}'" "power_off|in-progress|completed|despatched successfully"

  check "create 1GiB volume"        "insert into digitalocean.compute.volumes(name, region, size_gigabytes) select '${VOLUME_NAME}', '${REGION}', 1" "despatched successfully"
  check "volume visible in list"    "select name from digitalocean.compute.volumes where name = '${VOLUME_NAME}'" "^${VOLUME_NAME}$"

  VOLUME_ID=$(q "select id from digitalocean.compute.volumes where name = '${VOLUME_NAME}'" | tail -n +2 | head -1)
  check "delete volume"             "delete from digitalocean.compute.volumes where volume_id = '${VOLUME_ID}'" "despatched successfully"
  check "delete droplet"            "delete from digitalocean.compute.droplets where droplet_id = '${DROPLET_ID}'" "despatched successfully"

  # Confirm deletion propagated.
  sleep 5
  check "droplet gone"              "select count(*) as n from digitalocean.compute.droplets where name = '${DROPLET_NAME}'" "^0$"
fi

echo "=== smoke test complete: ${PASS} passed, ${FAIL} failed ==="
[ "$FAIL" -eq 0 ]
