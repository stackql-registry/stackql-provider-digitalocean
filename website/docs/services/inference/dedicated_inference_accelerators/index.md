--- 
title: dedicated_inference_accelerators
hide_title: false
hide_table_of_contents: false
keywords:
  - dedicated_inference_accelerators
  - inference
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

Creates, updates, deletes, gets or lists a <code>dedicated_inference_accelerators</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dedicated_inference_accelerators" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.inference.dedicated_inference_accelerators" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="dedicated_inferences_get_accelerator"
    values={[
        { label: 'dedicated_inferences_get_accelerator', value: 'dedicated_inferences_get_accelerator' },
        { label: 'dedicated_inferences_list_accelerators', value: 'dedicated_inferences_list_accelerators' }
    ]}
>
<TabItem value="dedicated_inferences_get_accelerator">

Single accelerator object.

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
    <td><code>string (uuid)</code></td>
    <td>Unique ID of the accelerator. (example: 5b5c619c-359c-44ca-87e2-47e98170c02f)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the accelerator. (example: mi300x1-ghfpsf)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2024-01-09T20:44:32Z)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>Role of the accelerator (e.g. prefill_decode). (example: prefill_decode)</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>DigitalOcean GPU slug. (example: gpu-mi300x1-192gb)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the accelerator. (example: active)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="dedicated_inferences_list_accelerators">

The response will be a JSON object with a key called `accelerators`. This will be set to an array of accelerator objects. Pagination uses the same `links` and `meta` structure as other list endpoints.

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
    <td><code>string (uuid)</code></td>
    <td>Unique ID of the accelerator. (example: 5b5c619c-359c-44ca-87e2-47e98170c02f)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the accelerator. (example: mi300x1-ghfpsf)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2024-01-09T20:44:32Z)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>Role of the accelerator (e.g. prefill_decode). (example: prefill_decode)</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>DigitalOcean GPU slug. (example: gpu-mi300x1-192gb)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the accelerator. (example: active)</td>
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
    <td><a href="#dedicated_inferences_get_accelerator"><CopyableCode code="dedicated_inferences_get_accelerator" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dedicated_inference_id"><code>dedicated_inference_id</code></a>, <a href="#parameter-accelerator_id"><code>accelerator_id</code></a></td>
    <td></td>
    <td>Retrieve a single accelerator by ID for a Dedicated Inference instance. Send a<br />GET request to `/v2/dedicated-inferences/&#123;dedicated_inference_id&#125;/accelerators/&#123;accelerator_id&#125;`.<br /></td>
</tr>
<tr>
    <td><a href="#dedicated_inferences_list_accelerators"><CopyableCode code="dedicated_inferences_list_accelerators" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dedicated_inference_id"><code>dedicated_inference_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-slug"><code>slug</code></a></td>
    <td>List all accelerators (GPUs) in use by a Dedicated Inference instance. Send a<br />GET request to `/v2/dedicated-inferences/&#123;dedicated_inference_id&#125;/accelerators`.<br />Optionally filter by slug and use page/per_page for pagination.<br /></td>
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
<tr id="parameter-accelerator_id">
    <td><CopyableCode code="accelerator_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique identifier for a Dedicated Inference accelerator. (example: 5b5c619c-359c-44ca-87e2-47e98170c02f)</td>
</tr>
<tr id="parameter-dedicated_inference_id">
    <td><CopyableCode code="dedicated_inference_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique identifier for a Dedicated Inference instance. (example: 6b5c619c-359c-44ca-87e2-47e98170c01d)</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>Which 'page' of paginated results to return. (example: 1)</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>Number of items returned per page (example: 20)</td>
</tr>
<tr id="parameter-slug">
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>Filter accelerators by GPU slug. (example: gpu-mi300x1-192gb)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="dedicated_inferences_get_accelerator"
    values={[
        { label: 'dedicated_inferences_get_accelerator', value: 'dedicated_inferences_get_accelerator' },
        { label: 'dedicated_inferences_list_accelerators', value: 'dedicated_inferences_list_accelerators' }
    ]}
>
<TabItem value="dedicated_inferences_get_accelerator">

Retrieve a single accelerator by ID for a Dedicated Inference instance. Send a<br />GET request to `/v2/dedicated-inferences/&#123;dedicated_inference_id&#125;/accelerators/&#123;accelerator_id&#125;`.<br />

```sql
SELECT
id,
name,
created_at,
role,
slug,
status
FROM digitalocean.inference.dedicated_inference_accelerators
WHERE dedicated_inference_id = '{{ dedicated_inference_id }}' -- required
AND accelerator_id = '{{ accelerator_id }}' -- required
;
```
</TabItem>
<TabItem value="dedicated_inferences_list_accelerators">

List all accelerators (GPUs) in use by a Dedicated Inference instance. Send a<br />GET request to `/v2/dedicated-inferences/&#123;dedicated_inference_id&#125;/accelerators`.<br />Optionally filter by slug and use page/per_page for pagination.<br />

```sql
SELECT
id,
name,
created_at,
role,
slug,
status
FROM digitalocean.inference.dedicated_inference_accelerators
WHERE dedicated_inference_id = '{{ dedicated_inference_id }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND slug = '{{ slug }}'
;
```
</TabItem>
</Tabs>
