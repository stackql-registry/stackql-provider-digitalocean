--- 
title: evaluation_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluation_metrics
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

Creates, updates, deletes, gets or lists an <code>evaluation_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="evaluation_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.evaluation_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_list_evaluation_metrics"
    values={[
        { label: 'genai_list_evaluation_metrics', value: 'genai_list_evaluation_metrics' }
    ]}
>
<TabItem value="genai_list_evaluation_metrics">

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
    <td><CopyableCode code="metric_name" /></td>
    <td><code>string</code></td>
    <td> (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="associated_presets" /></td>
    <td><code>array</code></td>
    <td>Saved model evaluation presets that reference this metric. Populated for custom metrics when listing metrics so the dashboard can warn that deleting the metric will also delete these presets. Empty for built-in metrics.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td> (METRIC_CATEGORY_UNSPECIFIED, METRIC_CATEGORY_CORRECTNESS, METRIC_CATEGORY_USER_OUTCOMES, METRIC_CATEGORY_SAFETY_AND_SECURITY, METRIC_CATEGORY_CONTEXT_QUALITY, METRIC_CATEGORY_MODEL_FIT) (default: METRIC_CATEGORY_UNSPECIFIED, example: METRIC_CATEGORY_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="custom_eval_config" /></td>
    <td><code>object</code></td>
    <td>Configuration for a custom model-evaluation metric scored by an LLM judge. Prompt and model response are always included in the judge context.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td> (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_scope" /></td>
    <td><code>string</code></td>
    <td>Scope that determines whether a metric belongs to agent evaluation or model evaluation. For backwards compatibility, UNSPECIFIED defaults to agent metrics only in list operations. (EVALUATION_SCOPE_UNSPECIFIED, EVALUATION_SCOPE_AGENT, EVALUATION_SCOPE_MODEL) (default: EVALUATION_SCOPE_UNSPECIFIED, example: EVALUATION_SCOPE_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="inverted" /></td>
    <td><code>boolean</code></td>
    <td>If true, the metric is inverted, meaning that a lower value is better.</td>
</tr>
<tr>
    <td><CopyableCode code="is_metric_goal" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="metric_rank" /></td>
    <td><code>integer (int64)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="metric_type" /></td>
    <td><code>string</code></td>
    <td> (METRIC_TYPE_UNSPECIFIED, METRIC_TYPE_GENERAL_QUALITY, METRIC_TYPE_RAG_AND_TOOL, METRIC_TYPE_MODEL_QUALITY, METRIC_TYPE_MODEL_SAFETY) (default: METRIC_TYPE_UNSPECIFIED, example: METRIC_TYPE_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="metric_uuid" /></td>
    <td><code>string</code></td>
    <td> (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="metric_value_type" /></td>
    <td><code>string</code></td>
    <td> (METRIC_VALUE_TYPE_UNSPECIFIED, METRIC_VALUE_TYPE_NUMBER, METRIC_VALUE_TYPE_STRING, METRIC_VALUE_TYPE_PERCENTAGE) (default: METRIC_VALUE_TYPE_UNSPECIFIED, example: METRIC_VALUE_TYPE_UNSPECIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="range_max" /></td>
    <td><code>number (float)</code></td>
    <td>The maximum value for the metric.</td>
</tr>
<tr>
    <td><CopyableCode code="range_min" /></td>
    <td><code>number (float)</code></td>
    <td>The minimum value for the metric.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Distinguishes platform catalog metrics from user-defined LLM-as-judge metrics. (EVALUATION_METRIC_SOURCE_UNSPECIFIED, EVALUATION_METRIC_SOURCE_BUILTIN, EVALUATION_METRIC_SOURCE_CUSTOM) (default: EVALUATION_METRIC_SOURCE_UNSPECIFIED, example: EVALUATION_METRIC_SOURCE_UNSPECIFIED)</td>
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
    <td><a href="#genai_list_evaluation_metrics"><CopyableCode code="genai_list_evaluation_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>To list all evaluation metrics, send a GET request to `/v2/gen-ai/evaluation_metrics`.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_list_evaluation_metrics"
    values={[
        { label: 'genai_list_evaluation_metrics', value: 'genai_list_evaluation_metrics' }
    ]}
>
<TabItem value="genai_list_evaluation_metrics">

To list all evaluation metrics, send a GET request to `/v2/gen-ai/evaluation_metrics`.

```sql
SELECT
metric_name,
associated_presets,
category,
custom_eval_config,
description,
evaluation_scope,
inverted,
is_metric_goal,
metric_rank,
metric_type,
metric_uuid,
metric_value_type,
range_max,
range_min,
source
FROM digitalocean.genai.evaluation_metrics
;
```
</TabItem>
</Tabs>
