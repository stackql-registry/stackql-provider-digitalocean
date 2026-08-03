--- 
title: custom_evaluation_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_evaluation_metrics
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

Creates, updates, deletes, gets or lists a <code>custom_evaluation_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_evaluation_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.custom_evaluation_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#genai_create_custom_evaluation_metric"><CopyableCode code="genai_create_custom_evaluation_metric" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To create a custom LLM-as-judge metric for model evaluation, send a POST request to `/v2/gen-ai/custom_evaluation_metrics`.</td>
</tr>
<tr>
    <td><a href="#genai_update_custom_evaluation_metric"><CopyableCode code="genai_update_custom_evaluation_metric" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-metric_uuid"><code>metric_uuid</code></a></td>
    <td></td>
    <td>To update a custom metric (issuing a new metric UUID), send a PUT request to `/v2/gen-ai/custom_evaluation_metrics/&#123;metric_uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_delete_custom_evaluation_metric"><CopyableCode code="genai_delete_custom_evaluation_metric" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-metric_uuid"><code>metric_uuid</code></a></td>
    <td></td>
    <td>To soft-delete a custom model evaluation metric, send a DELETE request to `/v2/gen-ai/custom_evaluation_metrics/&#123;metric_uuid&#125;`.</td>
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
<tr id="parameter-metric_uuid">
    <td><CopyableCode code="metric_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the custom metric to delete. (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="genai_create_custom_evaluation_metric"
    values={[
        { label: 'genai_create_custom_evaluation_metric', value: 'genai_create_custom_evaluation_metric' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="genai_create_custom_evaluation_metric">

To create a custom LLM-as-judge metric for model evaluation, send a POST request to `/v2/gen-ai/custom_evaluation_metrics`.

```sql
INSERT INTO digitalocean.genai.custom_evaluation_metrics (
config,
description,
metric_name
)
SELECT 
'{{ config }}',
'{{ description }}',
'{{ metric_name }}'
RETURNING
metric
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_evaluation_metrics
  props:
    - name: config
      description: |
        Configuration for a custom model-evaluation metric scored by an LLM judge.
        Prompt and model response are always included in the judge context.
      value:
        created_at: "{{ created_at }}"
        deleted_at: "{{ deleted_at }}"
        requires_ground_truth: {{ requires_ground_truth }}
        scoring_prompt: "{{ scoring_prompt }}"
        updated_at: "{{ updated_at }}"
    - name: description
      value: "{{ description }}"
    - name: metric_name
      value: "{{ metric_name }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="genai_update_custom_evaluation_metric"
    values={[
        { label: 'genai_update_custom_evaluation_metric', value: 'genai_update_custom_evaluation_metric' }
    ]}
>
<TabItem value="genai_update_custom_evaluation_metric">

To update a custom metric (issuing a new metric UUID), send a PUT request to `/v2/gen-ai/custom_evaluation_metrics/&#123;metric_uuid&#125;`.

```sql
REPLACE digitalocean.genai.custom_evaluation_metrics
SET 
config = '{{ config }}',
description = '{{ description }}',
metric_name = '{{ metric_name }}',
metric_uuid = '{{ metric_uuid }}'
WHERE 
metric_uuid = '{{ metric_uuid }}' --required
RETURNING
metric;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="genai_delete_custom_evaluation_metric"
    values={[
        { label: 'genai_delete_custom_evaluation_metric', value: 'genai_delete_custom_evaluation_metric' }
    ]}
>
<TabItem value="genai_delete_custom_evaluation_metric">

To soft-delete a custom model evaluation metric, send a DELETE request to `/v2/gen-ai/custom_evaluation_metrics/&#123;metric_uuid&#125;`.

```sql
DELETE FROM digitalocean.genai.custom_evaluation_metrics
WHERE metric_uuid = '{{ metric_uuid }}' --required
;
```
</TabItem>
</Tabs>
