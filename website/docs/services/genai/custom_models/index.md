--- 
title: custom_models
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_models
  - genai
  - digitalocean
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage digitalocean resources using SQL
custom_edit_url: null
image: /img/stackql-digitalocean-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>custom_models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.custom_models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_get_custom_model"
    values={[
        { label: 'genai_get_custom_model', value: 'genai_get_custom_model' },
        { label: 'genai_list_custom_models', value: 'genai_list_custom_models' }
    ]}
>
<TabItem value="genai_get_custom_model">

A successful response.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the custom model (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="team_id" /></td>
    <td><code>string (uint64)</code></td>
    <td>Team that owns the model (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="active_deployments" /></td>
    <td><code>array</code></td>
    <td>List of active deployments using this model</td>
</tr>
<tr>
    <td><CopyableCode code="architecture" /></td>
    <td><code>string</code></td>
    <td>Model architecture type (free-form string from config.json) (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="config_json" /></td>
    <td><code>string</code></td>
    <td>Raw config.json contents from the model repository (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="context_length" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum context length supported by the model</td>
</tr>
<tr>
    <td><CopyableCode code="cost_estimate_per_month" /></td>
    <td><code>integer (int64)</code></td>
    <td>Estimated monthly cost in dollars for hosting</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the model was created (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the custom model (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>User-facing reason the most recent import failed; empty otherwise. (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="file_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of files in the model</td>
</tr>
<tr>
    <td><CopyableCode code="input_modalities" /></td>
    <td><code>array</code></td>
    <td>Input modalities supported (e.g., text, image)</td>
</tr>
<tr>
    <td><CopyableCode code="license" /></td>
    <td><code>string</code></td>
    <td>License under which the model is distributed (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="output_modalities" /></td>
    <td><code>array</code></td>
    <td>Output modalities supported (e.g., text, image)</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>string (uint64)</code></td>
    <td>Number of parameters in the model (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="source_ref" /></td>
    <td><code>object</code></td>
    <td>Reference to the original source of the model</td>
</tr>
<tr>
    <td><CopyableCode code="source_type" /></td>
    <td><code>string</code></td>
    <td>Source from which the model was imported (SOURCE_TYPE_UNSPECIFIED, SOURCE_TYPE_HUGGINGFACE, SOURCE_TYPE_SPACES_BUCKET, SOURCE_TYPE_SDK_UPLOAD, SOURCE_TYPE_FINE_TUNING) (default: SOURCE_TYPE_UNSPECIFIED, example: SOURCE_TYPE_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Import and deployment status of the custom model (STATUS_UNSPECIFIED, STATUS_IMPORTING, STATUS_READY, STATUS_FAILED, STATUS_DELETED) (default: STATUS_UNSPECIFIED, example: STATUS_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="storage_region" /></td>
    <td><code>string</code></td>
    <td>Region of the Spaces bucket where model files are stored (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>User-defined tags for organizing models</td>
</tr>
<tr>
    <td><CopyableCode code="total_size_bytes" /></td>
    <td><code>string (uint64)</code></td>
    <td>Total size of model files in bytes (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the model was last updated (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the custom model (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="genai_list_custom_models">

A successful response.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the custom model (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="team_id" /></td>
    <td><code>string (uint64)</code></td>
    <td>Team that owns the model (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="active_deployments" /></td>
    <td><code>array</code></td>
    <td>List of active deployments using this model</td>
</tr>
<tr>
    <td><CopyableCode code="architecture" /></td>
    <td><code>string</code></td>
    <td>Model architecture type (free-form string from config.json) (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="config_json" /></td>
    <td><code>string</code></td>
    <td>Raw config.json contents from the model repository (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="context_length" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum context length supported by the model</td>
</tr>
<tr>
    <td><CopyableCode code="cost_estimate_per_month" /></td>
    <td><code>integer (int64)</code></td>
    <td>Estimated monthly cost in dollars for hosting</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the model was created (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the custom model (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>User-facing reason the most recent import failed; empty otherwise. (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="file_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of files in the model</td>
</tr>
<tr>
    <td><CopyableCode code="input_modalities" /></td>
    <td><code>array</code></td>
    <td>Input modalities supported (e.g., text, image)</td>
</tr>
<tr>
    <td><CopyableCode code="license" /></td>
    <td><code>string</code></td>
    <td>License under which the model is distributed (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="output_modalities" /></td>
    <td><code>array</code></td>
    <td>Output modalities supported (e.g., text, image)</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>string (uint64)</code></td>
    <td>Number of parameters in the model (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="source_ref" /></td>
    <td><code>object</code></td>
    <td>Reference to the original source of the model</td>
</tr>
<tr>
    <td><CopyableCode code="source_type" /></td>
    <td><code>string</code></td>
    <td>Source from which the model was imported (SOURCE_TYPE_UNSPECIFIED, SOURCE_TYPE_HUGGINGFACE, SOURCE_TYPE_SPACES_BUCKET, SOURCE_TYPE_SDK_UPLOAD, SOURCE_TYPE_FINE_TUNING) (default: SOURCE_TYPE_UNSPECIFIED, example: SOURCE_TYPE_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Import and deployment status of the custom model (STATUS_UNSPECIFIED, STATUS_IMPORTING, STATUS_READY, STATUS_FAILED, STATUS_DELETED) (default: STATUS_UNSPECIFIED, example: STATUS_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="storage_region" /></td>
    <td><code>string</code></td>
    <td>Region of the Spaces bucket where model files are stored (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>User-defined tags for organizing models</td>
</tr>
<tr>
    <td><CopyableCode code="total_size_bytes" /></td>
    <td><code>string (uint64)</code></td>
    <td>Total size of model files in bytes (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the model was last updated (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the custom model (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#genai_get_custom_model"><CopyableCode code="genai_get_custom_model" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>To retrieve details of a custom model, send a GET request to `/v2/gen-ai/custom_models/&#123;uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_list_custom_models"><CopyableCode code="genai_list_custom_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>To list custom models, send a GET request to `/v2/gen-ai/custom_models`.</td>
</tr>
<tr>
    <td><a href="#genai_import_custom_model"><CopyableCode code="genai_import_custom_model" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To import a custom model, send a POST request to `/v2/gen-ai/custom_models/import`.</td>
</tr>
<tr>
    <td><a href="#genai_update_custom_model_metadata"><CopyableCode code="genai_update_custom_model_metadata" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>To update custom model metadata, send a PATCH request to `/v2/gen-ai/custom_models/&#123;uuid&#125;/metadata`.</td>
</tr>
<tr>
    <td><a href="#genai_delete_custom_model"><CopyableCode code="genai_delete_custom_model" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>To delete a custom model, send a DELETE request to `/v2/genai/custom_models/&#123;uuid&#125;`.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-uuid">
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the custom model to delete (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>Page number for pagination. (example: 1)</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>Number of items per page. (example: 1)</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter by model status. (example: STATUS_UNSPECIFIED)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_get_custom_model"
    values={[
        { label: 'genai_get_custom_model', value: 'genai_get_custom_model' },
        { label: 'genai_list_custom_models', value: 'genai_list_custom_models' }
    ]}
>
<TabItem value="genai_get_custom_model">

To retrieve details of a custom model, send a GET request to `/v2/gen-ai/custom_models/&#123;uuid&#125;`.

```sql
SELECT
name,
team_id,
active_deployments,
architecture,
config_json,
context_length,
cost_estimate_per_month,
created_at,
description,
error_message,
file_count,
input_modalities,
license,
output_modalities,
parameters,
source_ref,
source_type,
status,
storage_region,
tags,
total_size_bytes,
updated_at,
uuid
FROM digitalocean.genai.custom_models
WHERE uuid = '{{ uuid }}' -- required
;
```
</TabItem>
<TabItem value="genai_list_custom_models">

To list custom models, send a GET request to `/v2/gen-ai/custom_models`.

```sql
SELECT
name,
team_id,
active_deployments,
architecture,
config_json,
context_length,
cost_estimate_per_month,
created_at,
description,
error_message,
file_count,
input_modalities,
license,
output_modalities,
parameters,
source_ref,
source_type,
status,
storage_region,
tags,
total_size_bytes,
updated_at,
uuid
FROM digitalocean.genai.custom_models
WHERE page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND status = '{{ status }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="genai_import_custom_model"
    values={[
        { label: 'genai_import_custom_model', value: 'genai_import_custom_model' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="genai_import_custom_model">

To import a custom model, send a POST request to `/v2/gen-ai/custom_models/import`.

```sql
INSERT INTO digitalocean.genai.custom_models (
accept_hf_token_storage,
accept_terms_and_conditions,
description,
name,
preferred_gpu_region,
source_ref,
source_type,
tags
)
SELECT 
{{ accept_hf_token_storage }},
{{ accept_terms_and_conditions }},
'{{ description }}',
'{{ name }}',
'{{ preferred_gpu_region }}',
'{{ source_ref }}',
'{{ source_type }}',
'{{ tags }}'
RETURNING
error,
import_job,
model,
validation_steps
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_models
  props:
    - name: accept_hf_token_storage
      value: {{ accept_hf_token_storage }}
      description: |
        Whether the caller accepts storage of their HuggingFace token for gated model access
    - name: accept_terms_and_conditions
      value: {{ accept_terms_and_conditions }}
      description: |
        Whether the caller accepts the terms and conditions for importing this model
    - name: description
      value: "{{ description }}"
      description: |
        Description of the model
    - name: name
      value: "{{ name }}"
      description: |
        Name for the imported model
    - name: preferred_gpu_region
      value: "{{ preferred_gpu_region }}"
      description: |
        Preferred GPU region for deployment
    - name: source_ref
      description: |
        Reference to the original source of the model
      value:
        access_type: "{{ access_type }}"
        bucket: "{{ bucket }}"
        commit_sha: "{{ commit_sha }}"
        hf_token: "{{ hf_token }}"
        prefix: "{{ prefix }}"
        region: "{{ region }}"
        repo_id: "{{ repo_id }}"
    - name: source_type
      value: "{{ source_type }}"
      description: |
        Source from which the model was imported
      valid_values: ['SOURCE_TYPE_UNSPECIFIED', 'SOURCE_TYPE_HUGGINGFACE', 'SOURCE_TYPE_SPACES_BUCKET', 'SOURCE_TYPE_SDK_UPLOAD', 'SOURCE_TYPE_FINE_TUNING']
      default: SOURCE_TYPE_UNSPECIFIED
    - name: tags
      description: |
        User-defined tags for organizing models
      value:
        tags:
          - "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="genai_update_custom_model_metadata"
    values={[
        { label: 'genai_update_custom_model_metadata', value: 'genai_update_custom_model_metadata' }
    ]}
>
<TabItem value="genai_update_custom_model_metadata">

To update custom model metadata, send a PATCH request to `/v2/gen-ai/custom_models/&#123;uuid&#125;/metadata`.

```sql
UPDATE digitalocean.genai.custom_models
SET 
description = '{{ description }}',
input_modalities = '{{ input_modalities }}',
license = '{{ license }}',
name = '{{ name }}',
output_modalities = '{{ output_modalities }}',
parameters = '{{ parameters }}',
tags = '{{ tags }}',
uuid = '{{ uuid }}'
WHERE 
uuid = '{{ uuid }}' --required
RETURNING
model;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="genai_delete_custom_model"
    values={[
        { label: 'genai_delete_custom_model', value: 'genai_delete_custom_model' }
    ]}
>
<TabItem value="genai_delete_custom_model">

To delete a custom model, send a DELETE request to `/v2/genai/custom_models/&#123;uuid&#125;`.

```sql
DELETE FROM digitalocean.genai.custom_models
WHERE uuid = '{{ uuid }}' --required
;
```
</TabItem>
</Tabs>
