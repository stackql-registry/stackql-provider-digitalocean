--- 
title: model_catalog
hide_title: false
hide_table_of_contents: false
keywords:
  - model_catalog
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

Creates, updates, deletes, gets or lists a <code>model_catalog</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_catalog" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.model_catalog" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_get_model_catalog_card"
    values={[
        { label: 'genai_get_model_catalog_card', value: 'genai_get_model_catalog_card' },
        { label: 'genai_list_model_catalog', value: 'genai_list_model_catalog' }
    ]}
>
<TabItem value="genai_get_model_catalog_card">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Identity (same as Entry) (example: "506a3371-88d0-4047-9212-e2079497ac68")</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td> (example: "Llama 3.1 70B")</td>
</tr>
<tr>
    <td><CopyableCode code="hugging_face_id" /></td>
    <td><code>string</code></td>
    <td>The Hugging Face repository ID (e.g. "meta-llama/Llama-3.3-70B-Instruct") the model is based on, when applicable. Omitted for models not sourced from Hugging Face. (example: "meta-llama/Llama-3.3-70B-Instruct")</td>
</tr>
<tr>
    <td><CopyableCode code="model_id" /></td>
    <td><code>string</code></td>
    <td>Model identifier used for API calls (e.g., "llama3.1-70b-instruct") (example: "llama3.1-70b-instruct")</td>
</tr>
<tr>
    <td><CopyableCode code="availability" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="badges" /></td>
    <td><code>array</code></td>
    <td>Badges for models</td>
</tr>
<tr>
    <td><CopyableCode code="benchmark_score" /></td>
    <td><code>string</code></td>
    <td>Benchmark scores for this model, stored as arbitrary JSON (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="code_snippets" /></td>
    <td><code>object</code></td>
    <td>Code examples for using the model</td>
</tr>
<tr>
    <td><CopyableCode code="context_window" /></td>
    <td><code>string (int64)</code></td>
    <td>Specs (same as Entry) (example: 128000)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td>Model creator/developer (e.g., "Meta", "Anthropic", "OpenAI") (example: "Meta")</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Card-specific (example: "Claude Sonnet 4 is Anthropic's most capable model...")</td>
</tr>
<tr>
    <td><CopyableCode code="max_output_tokens" /></td>
    <td><code>string (int64)</code></td>
    <td>The maximum number of output tokens the model can generate in a single response. (example: 65536)</td>
</tr>
<tr>
    <td><CopyableCode code="modalities" /></td>
    <td><code>object</code></td>
    <td>Input/output modalities</td>
</tr>
<tr>
    <td><CopyableCode code="parameter_count" /></td>
    <td><code>number (float)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pricing" /></td>
    <td><code>object</code></td>
    <td>Pricing per million tokens (aligns with existing ModelPrice pattern)</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_detail" /></td>
    <td><code>object</code></td>
    <td>The complete set of prices for a model, covering every available variant.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td> (MODEL_PROVIDER_DIGITALOCEAN, MODEL_PROVIDER_ANTHROPIC, MODEL_PROVIDER_OPENAI) (default: MODEL_PROVIDER_DIGITALOCEAN, example: MODEL_PROVIDER_DIGITALOCEAN)</td>
</tr>
<tr>
    <td><CopyableCode code="short_description" /></td>
    <td><code>string</code></td>
    <td> (example: "Fast, efficient model for general tasks")</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (example: "text-to-text")</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="genai_list_model_catalog">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Identity (example: "506a3371-88d0-4047-9212-e2079497ac68")</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td> (example: "Llama 3.1 70B")</td>
</tr>
<tr>
    <td><CopyableCode code="hugging_face_id" /></td>
    <td><code>string</code></td>
    <td>The Hugging Face repository ID (e.g. "meta-llama/Llama-3.3-70B-Instruct") the model is based on, when applicable. Omitted for models not sourced from Hugging Face. (example: "meta-llama/Llama-3.3-70B-Instruct")</td>
</tr>
<tr>
    <td><CopyableCode code="model_id" /></td>
    <td><code>string</code></td>
    <td>Model identifier used for API calls (e.g., "llama3.1-70b-instruct") (example: "llama3.1-70b-instruct")</td>
</tr>
<tr>
    <td><CopyableCode code="availability" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="badges" /></td>
    <td><code>array</code></td>
    <td>Badges for models</td>
</tr>
<tr>
    <td><CopyableCode code="benchmark_score" /></td>
    <td><code>string</code></td>
    <td>Benchmark scores for this model, stored as arbitrary JSON (opaque JSON object)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="context_window" /></td>
    <td><code>string (int64)</code></td>
    <td>Specs (flat) (example: 128000)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>RFC 3339 timestamp indicating when the model was added to the catalog. (example: 2021-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td>Model creator/developer (e.g., "Meta", "Anthropic", "OpenAI") (example: "Meta")</td>
</tr>
<tr>
    <td><CopyableCode code="max_output_tokens" /></td>
    <td><code>string (int64)</code></td>
    <td>The maximum number of output tokens the model can generate in a single response. (example: 65536)</td>
</tr>
<tr>
    <td><CopyableCode code="parameter_count" /></td>
    <td><code>number (float)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pricing" /></td>
    <td><code>object</code></td>
    <td>Pricing per million tokens (aligns with existing ModelPrice pattern)</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td> (MODEL_PROVIDER_DIGITALOCEAN, MODEL_PROVIDER_ANTHROPIC, MODEL_PROVIDER_OPENAI) (default: MODEL_PROVIDER_DIGITALOCEAN, example: MODEL_PROVIDER_DIGITALOCEAN)</td>
</tr>
<tr>
    <td><CopyableCode code="scaled_pricing_enabled" /></td>
    <td><code>boolean</code></td>
    <td>True when this model's pricing varies over time. Retrieve the model's details for the full pricing schedule. False for models with fixed pricing.</td>
</tr>
<tr>
    <td><CopyableCode code="short_description" /></td>
    <td><code>string</code></td>
    <td> (example: "Fast, efficient model for general tasks")</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (example: "text-to-text")</td>
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
    <td><a href="#genai_get_model_catalog_card"><CopyableCode code="genai_get_model_catalog_card" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td><a href="#parameter-model_id"><code>model_id</code></a></td>
    <td>Returns detailed information for a specific model in the catalog including capabilities, pricing, and code examples.</td>
</tr>
<tr>
    <td><a href="#genai_list_model_catalog"><CopyableCode code="genai_list_model_catalog" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Returns all available models.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td> (example: "example string")</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td> (example: 1)</td>
</tr>
<tr id="parameter-model_id">
    <td><CopyableCode code="model_id" /></td>
    <td><code>string</code></td>
    <td>Model identifier used for API calls (e.g., "llama3.1-70b-instruct"). Alternative to UUID lookup. (example: "example string")</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td> (example: 1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_get_model_catalog_card"
    values={[
        { label: 'genai_get_model_catalog_card', value: 'genai_get_model_catalog_card' },
        { label: 'genai_list_model_catalog', value: 'genai_list_model_catalog' }
    ]}
>
<TabItem value="genai_get_model_catalog_card">

Returns detailed information for a specific model in the catalog including capabilities, pricing, and code examples.

```sql
SELECT
id,
name,
hugging_face_id,
model_id,
availability,
badges,
benchmark_score,
capabilities,
code_snippets,
context_window,
creator,
description,
max_output_tokens,
modalities,
parameter_count,
pricing,
pricing_detail,
provider,
short_description,
type
FROM digitalocean.genai.model_catalog
WHERE id = '{{ id }}' -- required
AND model_id = '{{ model_id }}'
;
```
</TabItem>
<TabItem value="genai_list_model_catalog">

Returns all available models.

```sql
SELECT
id,
name,
hugging_face_id,
model_id,
availability,
badges,
benchmark_score,
capabilities,
context_window,
created_at,
creator,
max_output_tokens,
parameter_count,
pricing,
provider,
scaled_pricing_enabled,
short_description,
type
FROM digitalocean.genai.model_catalog
WHERE page = '{{ page }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>
