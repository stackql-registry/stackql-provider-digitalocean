--- 
title: model_evaluation_presets
hide_title: false
hide_table_of_contents: false
keywords:
  - model_evaluation_presets
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

Creates, updates, deletes, gets or lists a <code>model_evaluation_presets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_evaluation_presets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.model_evaluation_presets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_get_model_evaluation_preset"
    values={[
        { label: 'genai_get_model_evaluation_preset', value: 'genai_get_model_evaluation_preset' },
        { label: 'genai_list_model_evaluation_presets', value: 'genai_list_model_evaluation_presets' }
    ]}
>
<TabItem value="genai_get_model_evaluation_preset">

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
    <td>Name of the evaluation preset. (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="candidate_model_name" /></td>
    <td><code>string</code></td>
    <td>Model slug used to call the candidate model API. Empty when the CANDIDATE section was not saved. (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_name" /></td>
    <td><code>string</code></td>
    <td>Display name of the dataset stored on this preset. Empty when the DATASET section was not saved or the dataset no longer exists. (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="judge_model_name" /></td>
    <td><code>string</code></td>
    <td>Display name of the judge model stored on this preset. Empty when the JUDGE section was not saved or the model no longer exists. (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="candidate_inference_config" /></td>
    <td><code>object</code></td>
    <td>Inference configuration for the candidate model during evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="candidate_model_source" /></td>
    <td><code>string</code></td>
    <td>Whether inference runs against the serverless platform, a dedicated deployment, or a model router. (CANDIDATE_MODEL_SOURCE_SERVERLESS, CANDIDATE_MODEL_SOURCE_DEDICATED, CANDIDATE_MODEL_SOURCE_ROUTER) (default: CANDIDATE_MODEL_SOURCE_SERVERLESS, example: CANDIDATE_MODEL_SOURCE_SERVERLESS)</td>
</tr>
<tr>
    <td><CopyableCode code="candidate_model_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the candidate model stored on this preset. Empty when the CANDIDATE section was not saved. For DEDICATED candidates this is the dedicated inference deployment UUID. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="candidate_system_prompt" /></td>
    <td><code>string</code></td>
    <td>System prompt / instructions to send to the candidate model. Empty when the SYSTEM_PROMPT section was not saved (check `saved_sections`). (example: 2023-01-01)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the preset was created. (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the dataset stored on this preset. Empty when the DATASET section was not saved (check `saved_sections`). (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="eval_preset_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the evaluation preset. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="judge_model_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the judge model stored on this preset. Empty when the JUDGE section was not saved (check `saved_sections`). (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>array</code></td>
    <td>Metrics selected for this preset. Empty when the METRICS section was not saved.</td>
</tr>
<tr>
    <td><CopyableCode code="saved_sections" /></td>
    <td><code>array</code></td>
    <td>Sections of the inline evaluation config that were persisted when this preset was created. Use this to tell "section was saved with an empty value" apart from "section was not saved" — scalar fields like `dataset_uuid` or `candidate_system_prompt` are always emitted as the empty string when the section was not saved.</td>
</tr>
<tr>
    <td><CopyableCode code="star_metric" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="genai_list_model_evaluation_presets">

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
    <td>Name of the evaluation preset. (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="candidate_model_name" /></td>
    <td><code>string</code></td>
    <td>Model slug used to call the candidate model API. Empty when the CANDIDATE section was not saved. (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_name" /></td>
    <td><code>string</code></td>
    <td>Display name of the dataset stored on this preset. Empty when the DATASET section was not saved or the dataset no longer exists. (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="judge_model_name" /></td>
    <td><code>string</code></td>
    <td>Display name of the judge model stored on this preset. Empty when the JUDGE section was not saved or the model no longer exists. (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="candidate_inference_config" /></td>
    <td><code>object</code></td>
    <td>Inference configuration for the candidate model during evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="candidate_model_source" /></td>
    <td><code>string</code></td>
    <td>Whether inference runs against the serverless platform, a dedicated deployment, or a model router. (CANDIDATE_MODEL_SOURCE_SERVERLESS, CANDIDATE_MODEL_SOURCE_DEDICATED, CANDIDATE_MODEL_SOURCE_ROUTER) (default: CANDIDATE_MODEL_SOURCE_SERVERLESS, example: CANDIDATE_MODEL_SOURCE_SERVERLESS)</td>
</tr>
<tr>
    <td><CopyableCode code="candidate_model_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the candidate model stored on this preset. Empty when the CANDIDATE section was not saved. For DEDICATED candidates this is the dedicated inference deployment UUID. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="candidate_system_prompt" /></td>
    <td><code>string</code></td>
    <td>System prompt / instructions to send to the candidate model. Empty when the SYSTEM_PROMPT section was not saved (check `saved_sections`). (example: 2023-01-01)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the preset was created. (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the dataset stored on this preset. Empty when the DATASET section was not saved (check `saved_sections`). (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="eval_preset_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the evaluation preset. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="judge_model_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the judge model stored on this preset. Empty when the JUDGE section was not saved (check `saved_sections`). (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>array</code></td>
    <td>Metrics selected for this preset. Empty when the METRICS section was not saved.</td>
</tr>
<tr>
    <td><CopyableCode code="saved_sections" /></td>
    <td><code>array</code></td>
    <td>Sections of the inline evaluation config that were persisted when this preset was created. Use this to tell "section was saved with an empty value" apart from "section was not saved" — scalar fields like `dataset_uuid` or `candidate_system_prompt` are always emitted as the empty string when the section was not saved.</td>
</tr>
<tr>
    <td><CopyableCode code="star_metric" /></td>
    <td><code>object</code></td>
    <td></td>
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
    <td><a href="#genai_get_model_evaluation_preset"><CopyableCode code="genai_get_model_evaluation_preset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-eval_preset_uuid"><code>eval_preset_uuid</code></a></td>
    <td></td>
    <td>To retrieve a saved model evaluation preset, send a GET request to `/v2/genai/model_evaluation_presets/&#123;eval_preset_uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_list_model_evaluation_presets"><CopyableCode code="genai_list_model_evaluation_presets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>To list all saved model evaluation presets, send a GET request to `/v2/genai/model_evaluation_presets`.</td>
</tr>
<tr>
    <td><a href="#genai_delete_model_evaluation_preset"><CopyableCode code="genai_delete_model_evaluation_preset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-eval_preset_uuid"><code>eval_preset_uuid</code></a></td>
    <td></td>
    <td>To delete a saved model evaluation preset, send a DELETE request to `/v2/gen-ai/model_evaluation_presets/&#123;eval_preset_uuid&#125;`.</td>
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
<tr id="parameter-eval_preset_uuid">
    <td><CopyableCode code="eval_preset_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the evaluation preset to delete. (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_get_model_evaluation_preset"
    values={[
        { label: 'genai_get_model_evaluation_preset', value: 'genai_get_model_evaluation_preset' },
        { label: 'genai_list_model_evaluation_presets', value: 'genai_list_model_evaluation_presets' }
    ]}
>
<TabItem value="genai_get_model_evaluation_preset">

To retrieve a saved model evaluation preset, send a GET request to `/v2/genai/model_evaluation_presets/&#123;eval_preset_uuid&#125;`.

```sql
SELECT
name,
candidate_model_name,
dataset_name,
judge_model_name,
candidate_inference_config,
candidate_model_source,
candidate_model_uuid,
candidate_system_prompt,
created_at,
dataset_uuid,
eval_preset_uuid,
judge_model_uuid,
metrics,
saved_sections,
star_metric
FROM digitalocean.genai.model_evaluation_presets
WHERE eval_preset_uuid = '{{ eval_preset_uuid }}' -- required
;
```
</TabItem>
<TabItem value="genai_list_model_evaluation_presets">

To list all saved model evaluation presets, send a GET request to `/v2/genai/model_evaluation_presets`.

```sql
SELECT
name,
candidate_model_name,
dataset_name,
judge_model_name,
candidate_inference_config,
candidate_model_source,
candidate_model_uuid,
candidate_system_prompt,
created_at,
dataset_uuid,
eval_preset_uuid,
judge_model_uuid,
metrics,
saved_sections,
star_metric
FROM digitalocean.genai.model_evaluation_presets
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="genai_delete_model_evaluation_preset"
    values={[
        { label: 'genai_delete_model_evaluation_preset', value: 'genai_delete_model_evaluation_preset' }
    ]}
>
<TabItem value="genai_delete_model_evaluation_preset">

To delete a saved model evaluation preset, send a DELETE request to `/v2/gen-ai/model_evaluation_presets/&#123;eval_preset_uuid&#125;`.

```sql
DELETE FROM digitalocean.genai.model_evaluation_presets
WHERE eval_preset_uuid = '{{ eval_preset_uuid }}' --required
;
```
</TabItem>
</Tabs>
