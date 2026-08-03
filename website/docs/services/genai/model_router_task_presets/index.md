--- 
title: model_router_task_presets
hide_title: false
hide_table_of_contents: false
keywords:
  - model_router_task_presets
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

Creates, updates, deletes, gets or lists a <code>model_router_task_presets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_router_task_presets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.model_router_task_presets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_list_model_router_task_presets"
    values={[
        { label: 'genai_list_model_router_task_presets', value: 'genai_list_model_router_task_presets' }
    ]}
>
<TabItem value="genai_list_model_router_task_presets">

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
    <td>Display name (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Higher-level grouping used by the UI (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Task description (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="models" /></td>
    <td><code>array</code></td>
    <td>Default models assigned to this task</td>
</tr>
<tr>
    <td><CopyableCode code="selection_policy" /></td>
    <td><code>object</code></td>
    <td>Selection policy preference for choosing among assigned models.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Lightweight labels for filtering</td>
</tr>
<tr>
    <td><CopyableCode code="task_slug" /></td>
    <td><code>string</code></td>
    <td>Task slug (example: example string)</td>
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
    <td><a href="#genai_list_model_router_task_presets"><CopyableCode code="genai_list_model_router_task_presets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>To list model router task presets, send a GET request to `/v2/gen-ai/models/routers/tasks/presets`.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_list_model_router_task_presets"
    values={[
        { label: 'genai_list_model_router_task_presets', value: 'genai_list_model_router_task_presets' }
    ]}
>
<TabItem value="genai_list_model_router_task_presets">

To list model router task presets, send a GET request to `/v2/gen-ai/models/routers/tasks/presets`.

```sql
SELECT
name,
category,
description,
models,
selection_policy,
tags,
task_slug
FROM digitalocean.genai.model_router_task_presets
WHERE page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
</Tabs>
