--- 
title: model_router_presets
hide_title: false
hide_table_of_contents: false
keywords:
  - model_router_presets
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

Creates, updates, deletes, gets or lists a <code>model_router_presets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_router_presets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.model_router_presets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_list_model_router_presets"
    values={[
        { label: 'genai_list_model_router_presets', value: 'genai_list_model_router_presets' }
    ]}
>
<TabItem value="genai_list_model_router_presets">

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
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Display name for UI surfaces (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="long_description" /></td>
    <td><code>string</code></td>
    <td>Long description for details views (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="short_description" /></td>
    <td><code>string</code></td>
    <td>Short description for list views (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>Stable slug for routing usage (example: example string)</td>
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
    <td><a href="#genai_list_model_router_presets"><CopyableCode code="genai_list_model_router_presets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>To list model router presets, send a GET request to `/v2/gen-ai/models/routers/presets`.</td>
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
    defaultValue="genai_list_model_router_presets"
    values={[
        { label: 'genai_list_model_router_presets', value: 'genai_list_model_router_presets' }
    ]}
>
<TabItem value="genai_list_model_router_presets">

To list model router presets, send a GET request to `/v2/gen-ai/models/routers/presets`.

```sql
SELECT
display_name,
config,
long_description,
short_description,
slug
FROM digitalocean.genai.model_router_presets
WHERE page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
</Tabs>
