--- 
title: model_evaluation_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - model_evaluation_runs
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

Creates, updates, deletes, gets or lists a <code>model_evaluation_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_evaluation_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.model_evaluation_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_get_model_evaluation_run"
    values={[
        { label: 'genai_get_model_evaluation_run', value: 'genai_get_model_evaluation_run' },
        { label: 'genai_list_model_evaluation_runs', value: 'genai_list_model_evaluation_runs' }
    ]}
>
<TabItem value="genai_get_model_evaluation_run">

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
    <td>Name of the evaluation run. (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="candidate_model_name" /></td>
    <td><code>string</code></td>
    <td> (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_name" /></td>
    <td><code>string</code></td>
    <td> (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="eval_preset_name" /></td>
    <td><code>string</code></td>
    <td> (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="judge_model_name" /></td>
    <td><code>string</code></td>
    <td> (example: example name)</td>
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
    <td>Candidate model being evaluated. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_uuid" /></td>
    <td><code>string</code></td>
    <td>Dataset used for the evaluation. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="error_description" /></td>
    <td><code>string</code></td>
    <td>Error description if the run failed or partially succeeded. (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="eval_preset_uuid" /></td>
    <td><code>string</code></td>
    <td> (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="eval_run_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the evaluation run. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="judge_model_uuid" /></td>
    <td><code>string</code></td>
    <td>Judge model used to score responses. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>array</code></td>
    <td>Metrics selected for this evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>object</code></td>
    <td>Per-phase progress for a model evaluation run. The candidate phase invokes the candidate model once per dataset row; the judge phase scores each candidate-success row with the configured metrics. Counts grow as the run advances; compare against total_rows to render a progress bar.</td>
</tr>
<tr>
    <td><CopyableCode code="result_summary" /></td>
    <td><code>object</code></td>
    <td>Aggregated result summary for a completed model evaluation run.</td>
</tr>
<tr>
    <td><CopyableCode code="star_metric" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Model Evaluation Run Statuses (MODEL_EVALUATION_RUN_STATUS_UNSPECIFIED, MODEL_EVALUATION_RUN_QUEUED, MODEL_EVALUATION_RUN_RUNNING_DATASET, MODEL_EVALUATION_RUN_EVALUATING_RESULTS, MODEL_EVALUATION_RUN_CANCELLING, MODEL_EVALUATION_RUN_CANCELLED, MODEL_EVALUATION_RUN_SUCCESSFUL, MODEL_EVALUATION_RUN_PARTIALLY_SUCCESSFUL, MODEL_EVALUATION_RUN_FAILED) (default: MODEL_EVALUATION_RUN_STATUS_UNSPECIFIED, example: MODEL_EVALUATION_RUN_STATUS_UNSPECIFIED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="genai_list_model_evaluation_runs">

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
    <td>Name of the evaluation run. (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="candidate_model_name" /></td>
    <td><code>string</code></td>
    <td>Name of the candidate model being evaluated. (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_name" /></td>
    <td><code>string</code></td>
    <td>Name of the dataset used for evaluation. (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="judge_model_name" /></td>
    <td><code>string</code></td>
    <td> (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="candidate_model_source" /></td>
    <td><code>string</code></td>
    <td>Whether inference runs against the serverless platform, a dedicated deployment, or a model router. (CANDIDATE_MODEL_SOURCE_SERVERLESS, CANDIDATE_MODEL_SOURCE_DEDICATED, CANDIDATE_MODEL_SOURCE_ROUTER) (default: CANDIDATE_MODEL_SOURCE_SERVERLESS, example: CANDIDATE_MODEL_SOURCE_SERVERLESS)</td>
</tr>
<tr>
    <td><CopyableCode code="candidate_model_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the candidate model being evaluated. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the run was created. (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the dataset used for evaluation. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="eval_run_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the evaluation run. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="judge_model_uuid" /></td>
    <td><code>string</code></td>
    <td>Judge model used to score responses. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>object</code></td>
    <td>Per-phase progress for a model evaluation run. The candidate phase invokes the candidate model once per dataset row; the judge phase scores each candidate-success row with the configured metrics. Counts grow as the run advances; compare against total_rows to render a progress bar.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Model Evaluation Run Statuses (MODEL_EVALUATION_RUN_STATUS_UNSPECIFIED, MODEL_EVALUATION_RUN_QUEUED, MODEL_EVALUATION_RUN_RUNNING_DATASET, MODEL_EVALUATION_RUN_EVALUATING_RESULTS, MODEL_EVALUATION_RUN_CANCELLING, MODEL_EVALUATION_RUN_CANCELLED, MODEL_EVALUATION_RUN_SUCCESSFUL, MODEL_EVALUATION_RUN_PARTIALLY_SUCCESSFUL, MODEL_EVALUATION_RUN_FAILED) (default: MODEL_EVALUATION_RUN_STATUS_UNSPECIFIED, example: MODEL_EVALUATION_RUN_STATUS_UNSPECIFIED)</td>
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
    <td><a href="#genai_get_model_evaluation_run"><CopyableCode code="genai_get_model_evaluation_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-eval_run_uuid"><code>eval_run_uuid</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>To retrieve a model evaluation run, send a GET request to `/v2/genai/model_evaluation_runs/&#123;eval_run_uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_list_model_evaluation_runs"><CopyableCode code="genai_list_model_evaluation_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-eval_preset_uuid"><code>eval_preset_uuid</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-statuses"><code>statuses</code></a>, <a href="#parameter-candidate_types"><code>candidate_types</code></a>, <a href="#parameter-search"><code>search</code></a>, <a href="#parameter-sort_by"><code>sort_by</code></a>, <a href="#parameter-sort_direction"><code>sort_direction</code></a></td>
    <td>To list model evaluation runs, send a GET request to `/v2/genai/model_evaluation_runs`.</td>
</tr>
<tr>
    <td><a href="#genai_create_model_evaluation_run"><CopyableCode code="genai_create_model_evaluation_run" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To create a model evaluation run, send a POST request to `/v2/genai/model_evaluation_runs`.</td>
</tr>
<tr>
    <td><a href="#genai_update_model_evaluation_run"><CopyableCode code="genai_update_model_evaluation_run" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-eval_run_uuid"><code>eval_run_uuid</code></a></td>
    <td></td>
    <td>To update a model evaluation run's display name, send a PATCH request to `/v2/gen-ai/model_evaluation_runs/&#123;eval_run_uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_cancel_model_evaluation_run"><CopyableCode code="genai_cancel_model_evaluation_run" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-eval_run_uuid"><code>eval_run_uuid</code></a></td>
    <td></td>
    <td>To cancel an in-progress model evaluation run, send a PUT request to `/v2/gen-ai/model_evaluation_runs/&#123;eval_run_uuid&#125;/cancel`.</td>
</tr>
<tr>
    <td><a href="#genai_delete_model_evaluation_run"><CopyableCode code="genai_delete_model_evaluation_run" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-eval_run_uuid"><code>eval_run_uuid</code></a></td>
    <td></td>
    <td>To delete a model evaluation run, send a DELETE request to `/v2/gen-ai/model_evaluation_runs/&#123;eval_run_uuid&#125;`. The run must be in a terminal status (`successful`, `partially_successful`, `failed`, or `cancelled`). For runs still in progress, either wait for the run to finish or cancel it, then retry the delete once the run reaches a terminal status.</td>
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
<tr id="parameter-eval_run_uuid">
    <td><CopyableCode code="eval_run_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the model evaluation run to delete. The run must be in a terminal status (`successful`, `partially_successful`, `failed`, or `cancelled`). For runs still in progress, either wait for the run to finish or cancel it, then retry the delete. (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
<tr id="parameter-candidate_types">
    <td><CopyableCode code="candidate_types" /></td>
    <td><code>array</code></td>
    <td>Filter by one or more candidate model source types (serverless, dedicated, router). Empty means no candidate-type filter. (example: [CANDIDATE_MODEL_SOURCE_SERVERLESS])</td>
</tr>
<tr id="parameter-eval_preset_uuid">
    <td><CopyableCode code="eval_preset_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the evaluation preset to filter by. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>Page number. (example: 1)</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>Items per page. (example: 1)</td>
</tr>
<tr id="parameter-search">
    <td><CopyableCode code="search" /></td>
    <td><code>string</code></td>
    <td>Free-text search across the eval run name, candidate model name and dataset name (case-insensitive substring match). Empty means no search. (example: example string)</td>
</tr>
<tr id="parameter-sort_by">
    <td><CopyableCode code="sort_by" /></td>
    <td><code>string</code></td>
    <td>Field to sort by. Defaults to creation date when unspecified. (example: MODEL_EVALUATION_RUN_SORT_FIELD_UNSPECIFIED)</td>
</tr>
<tr id="parameter-sort_direction">
    <td><CopyableCode code="sort_direction" /></td>
    <td><code>string</code></td>
    <td>Sort direction. Defaults to descending when unspecified. (example: SORT_DIRECTION_UNSPECIFIED)</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter by evaluation run status. (example: MODEL_EVALUATION_RUN_STATUS_UNSPECIFIED)</td>
</tr>
<tr id="parameter-statuses">
    <td><CopyableCode code="statuses" /></td>
    <td><code>array</code></td>
    <td>Filter by one or more statuses. Empty means no status filter. (example: [MODEL_EVALUATION_RUN_STATUS_UNSPECIFIED])</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_get_model_evaluation_run"
    values={[
        { label: 'genai_get_model_evaluation_run', value: 'genai_get_model_evaluation_run' },
        { label: 'genai_list_model_evaluation_runs', value: 'genai_list_model_evaluation_runs' }
    ]}
>
<TabItem value="genai_get_model_evaluation_run">

To retrieve a model evaluation run, send a GET request to `/v2/genai/model_evaluation_runs/&#123;eval_run_uuid&#125;`.

```sql
SELECT
name,
candidate_model_name,
dataset_name,
eval_preset_name,
judge_model_name,
candidate_inference_config,
candidate_model_source,
candidate_model_uuid,
completed_at,
created_at,
dataset_uuid,
error_description,
eval_preset_uuid,
eval_run_uuid,
judge_model_uuid,
metrics,
progress,
result_summary,
star_metric,
started_at,
status
FROM digitalocean.genai.model_evaluation_runs
WHERE eval_run_uuid = '{{ eval_run_uuid }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
<TabItem value="genai_list_model_evaluation_runs">

To list model evaluation runs, send a GET request to `/v2/genai/model_evaluation_runs`.

```sql
SELECT
name,
candidate_model_name,
dataset_name,
judge_model_name,
candidate_model_source,
candidate_model_uuid,
created_at,
dataset_uuid,
eval_run_uuid,
judge_model_uuid,
progress,
status
FROM digitalocean.genai.model_evaluation_runs
WHERE eval_preset_uuid = '{{ eval_preset_uuid }}'
AND status = '{{ status }}'
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND statuses = '{{ statuses }}'
AND candidate_types = '{{ candidate_types }}'
AND search = '{{ search }}'
AND sort_by = '{{ sort_by }}'
AND sort_direction = '{{ sort_direction }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="genai_create_model_evaluation_run"
    values={[
        { label: 'genai_create_model_evaluation_run', value: 'genai_create_model_evaluation_run' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="genai_create_model_evaluation_run">

To create a model evaluation run, send a POST request to `/v2/genai/model_evaluation_runs`.

```sql
INSERT INTO digitalocean.genai.model_evaluation_runs (
candidate_inference_config,
candidate_model_name,
candidate_model_source,
candidate_model_uuid,
dataset_uuid,
eval_preset_uuid,
judge_model_uuid,
metric_uuids,
name,
preset_name,
preset_save_sections,
save_as_preset,
source,
star_metric
)
SELECT 
'{{ candidate_inference_config }}',
'{{ candidate_model_name }}',
'{{ candidate_model_source }}',
'{{ candidate_model_uuid }}',
'{{ dataset_uuid }}',
'{{ eval_preset_uuid }}',
'{{ judge_model_uuid }}',
'{{ metric_uuids }}',
'{{ name }}',
'{{ preset_name }}',
'{{ preset_save_sections }}',
{{ save_as_preset }},
'{{ source }}',
'{{ star_metric }}'
RETURNING
eval_run_uuid
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: model_evaluation_runs
  props:
    - name: candidate_inference_config
      description: |
        Inference configuration for the candidate model during evaluation.
      value:
        max_tokens: {{ max_tokens }}
        stop_token: "{{ stop_token }}"
        system_prompt: "{{ system_prompt }}"
        temperature: {{ temperature }}
    - name: candidate_model_name
      value: "{{ candidate_model_name }}"
      description: |
        Model slug used to call the candidate model API.
        For dedicated inference, this is the model slug from the deployment.
        For serverless, this should match the model's internal name.
    - name: candidate_model_source
      value: "{{ candidate_model_source }}"
      description: |
        Whether inference runs against the serverless platform, a dedicated deployment, or a model router.
      valid_values: ['CANDIDATE_MODEL_SOURCE_SERVERLESS', 'CANDIDATE_MODEL_SOURCE_DEDICATED', 'CANDIDATE_MODEL_SOURCE_ROUTER']
      default: CANDIDATE_MODEL_SOURCE_SERVERLESS
    - name: candidate_model_uuid
      value: "{{ candidate_model_uuid }}"
      description: |
        UUID of the candidate model to evaluate.
    - name: dataset_uuid
      value: "{{ dataset_uuid }}"
      description: |
        UUID of the dataset to use for evaluation.
    - name: eval_preset_uuid
      value: "{{ eval_preset_uuid }}"
    - name: judge_model_uuid
      value: "{{ judge_model_uuid }}"
      description: |
        UUID of the judge model used to score responses.
    - name: metric_uuids
      value:
        - "{{ metric_uuids }}"
      description: |
        UUIDs of metrics to evaluate (selected from ListModelEvaluationMetrics).
    - name: name
      value: "{{ name }}"
    - name: preset_name
      value: "{{ preset_name }}"
    - name: preset_save_sections
      value:
        - "{{ preset_save_sections }}"
      description: |
        Which sections of this run's resolved configuration to persist as a
        reusable preset. Each selected section saves only its own fields; the
        remaining sections stay empty on the preset and must be supplied inline
        on future runs that reference it. Empty means do not save a preset
        (unless the deprecated \`save_as_preset\` boolean is true, in which case
        all sections are saved). Ignored when \`eval_preset_uuid\` is set. Use
        \`preset_name\` to label the saved preset.
    - name: save_as_preset
      value: {{ save_as_preset }}
      description: |
        Deprecated: use \`preset_save_sections\`. When \`true\` and
        \`preset_save_sections\` is empty, all five sections of the resolved
        configuration are saved as a reusable preset (legacy behavior). Ignored
        when \`eval_preset_uuid\` is set.
    - name: source
      value: "{{ source }}"
      description: |
        Source of the run creation (api, sdk, cli).
    - name: star_metric
      value:
        metric_uuid: "{{ metric_uuid }}"
        name: "{{ name }}"
        success_threshold: {{ success_threshold }}
        success_threshold_pct: {{ success_threshold_pct }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="genai_update_model_evaluation_run"
    values={[
        { label: 'genai_update_model_evaluation_run', value: 'genai_update_model_evaluation_run' }
    ]}
>
<TabItem value="genai_update_model_evaluation_run">

To update a model evaluation run's display name, send a PATCH request to `/v2/gen-ai/model_evaluation_runs/&#123;eval_run_uuid&#125;`.

```sql
UPDATE digitalocean.genai.model_evaluation_runs
SET 
eval_run_uuid = '{{ eval_run_uuid }}',
name = '{{ name }}'
WHERE 
eval_run_uuid = '{{ eval_run_uuid }}' --required
RETURNING
run;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="genai_cancel_model_evaluation_run"
    values={[
        { label: 'genai_cancel_model_evaluation_run', value: 'genai_cancel_model_evaluation_run' }
    ]}
>
<TabItem value="genai_cancel_model_evaluation_run">

To cancel an in-progress model evaluation run, send a PUT request to `/v2/gen-ai/model_evaluation_runs/&#123;eval_run_uuid&#125;/cancel`.

```sql
REPLACE digitalocean.genai.model_evaluation_runs
SET 
eval_run_uuid = '{{ eval_run_uuid }}'
WHERE 
eval_run_uuid = '{{ eval_run_uuid }}' --required
RETURNING
run;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="genai_delete_model_evaluation_run"
    values={[
        { label: 'genai_delete_model_evaluation_run', value: 'genai_delete_model_evaluation_run' }
    ]}
>
<TabItem value="genai_delete_model_evaluation_run">

To delete a model evaluation run, send a DELETE request to `/v2/gen-ai/model_evaluation_runs/&#123;eval_run_uuid&#125;`. The run must be in a terminal status (`successful`, `partially_successful`, `failed`, or `cancelled`). For runs still in progress, either wait for the run to finish or cancel it, then retry the delete once the run reaches a terminal status.

```sql
DELETE FROM digitalocean.genai.model_evaluation_runs
WHERE eval_run_uuid = '{{ eval_run_uuid }}' --required
;
```
</TabItem>
</Tabs>
