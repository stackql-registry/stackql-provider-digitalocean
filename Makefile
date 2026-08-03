# Makefile for the DigitalOcean StackQL provider.
#
# Run from bash (WSL, Linux, or macOS). Node >= 20 is required for the
# generation steps; the smoke tests additionally need the `stackql` binary
# on the PATH and DIGITALOCEAN_TOKEN set (or present in .env).

SHELL := /bin/bash

PROVIDER_NAME := digitalocean
SPEC_URL      := https://api-engineering.nyc3.digitaloceanspaces.com/spec-ci/DigitalOcean-public.v2.yaml
SPEC_FILE     := provider-dev/downloaded/digitalocean-public.v2.yaml
SOURCE_DIR    := provider-dev/source
CONFIG_DIR    := provider-dev/config
OUTPUT_DIR    := provider-dev/openapi/src/$(PROVIDER_NAME)
PROVIDER_DIR  := $(OUTPUT_DIR)/v00.00.00000

.PHONY: all deps download-spec split normalize mappings provider post-process \
        test test-live test-readonly docs website website-start clean help

help:
	@echo "Targets:"
	@echo "  deps           install node dependencies (repo + website)"
	@echo "  download-spec  download the latest DigitalOcean OpenAPI spec"
	@echo "  split          split the spec into service-level documents"
	@echo "  normalize      normalize the split specs for relational consumption"
	@echo "  mappings       update $(CONFIG_DIR)/all_services.csv (preserves existing mappings)"
	@echo "  provider       generate the StackQL provider (includes post-processing)"
	@echo "  test-readonly  smoke test, read-only checks only (local provider)"
	@echo "  test           full smoke test incl droplet/volume lifecycle (local provider)"
	@echo "  test-live      full smoke test against the latest published provider"
	@echo "  docs           generate the provider docs into website/"
	@echo "  website        build the Docusaurus microsite"
	@echo "  website-start  run the microsite dev server"
	@echo "  all            deps download-spec split normalize mappings provider test-readonly docs website"

all: deps download-spec split normalize mappings provider test-readonly docs website

deps:
	npm install
	cd website && yarn install

download-spec:
	curl -L $(SPEC_URL) -o $(SPEC_FILE)

split:
	npm run split -- \
	  --provider-name $(PROVIDER_NAME) \
	  --api-doc $(SPEC_FILE) \
	  --svc-discriminator tag \
	  --output-dir $(SOURCE_DIR) \
	  --overwrite \
	  --svc-name-overrides $(CONFIG_DIR)/svc-name-overrides.json

normalize:
	npm run normalize -- --api-dir $(SOURCE_DIR)

mappings:
	npm run generate-mappings -- \
	  --provider-name $(PROVIDER_NAME) \
	  --input-dir $(SOURCE_DIR) \
	  --output-dir $(CONFIG_DIR)

provider:
	npm run generate-provider -- \
	  --provider-name $(PROVIDER_NAME) \
	  --input-dir $(SOURCE_DIR) \
	  --output-dir $(OUTPUT_DIR) \
	  --config-path $(CONFIG_DIR)/all_services.csv \
	  --servers $(CONFIG_DIR)/servers.json \
	  --provider-config $(CONFIG_DIR)/provider-config.json \
	  --service-config $(CONFIG_DIR)/service-config.json \
	  --naive-req-body-translate \
	  --overwrite
	$(MAKE) post-process

post-process:
	node provider-dev/scripts/restore-op-servers.mjs
	node provider-dev/scripts/fix-oneof-required.mjs
	node provider-dev/scripts/generate-lifecycle-ops.mjs

test-readonly:
	bash test/smoke/smoke.sh --read-only

test:
	bash test/smoke/smoke.sh

test-live:
	bash test/smoke/smoke.sh --live

docs:
	rm -rf website/docs
	npm run generate-docs -- \
	  --provider-name $(PROVIDER_NAME) \
	  --provider-dir ./$(PROVIDER_DIR) \
	  --output-dir ./website \
	  --provider-data-dir ./provider-dev/docgen/provider-data

website:
	cd website && yarn build

website-start:
	cd website && yarn start

clean:
	rm -rf .stackql/src .stackql-live website/build website/.docusaurus
