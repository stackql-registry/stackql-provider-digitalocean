--- 
title: dedicated_inference_sizes
hide_title: false
hide_table_of_contents: false
keywords:
  - dedicated_inference_sizes
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

Creates, updates, deletes, gets or lists a <code>dedicated_inference_sizes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dedicated_inference_sizes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.inference.dedicated_inference_sizes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="dedicated_inferences_list_sizes"
    values={[
        { label: 'dedicated_inferences_list_sizes', value: 'dedicated_inferences_list_sizes' }
    ]}
>
<TabItem value="dedicated_inferences_list_sizes">

Enabled regions and sizes with pricing.

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
    <td><CopyableCode code="currency" /></td>
    <td><code>string</code></td>
    <td> (example: USD)</td>
</tr>
<tr>
    <td><CopyableCode code="gpu_slug" /></td>
    <td><code>string</code></td>
    <td> (example: gpu-mi300x1-192gb)</td>
</tr>
<tr>
    <td><CopyableCode code="price_per_hour" /></td>
    <td><code>string</code></td>
    <td> (example: 2)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td> (example: nyc2)</td>
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
    <td><a href="#dedicated_inferences_list_sizes"><CopyableCode code="dedicated_inferences_list_sizes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get available Dedicated Inference sizes and pricing for supported GPUs. Send a<br />GET request to `/v2/dedicated-inferences/sizes`.<br /></td>
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
    defaultValue="dedicated_inferences_list_sizes"
    values={[
        { label: 'dedicated_inferences_list_sizes', value: 'dedicated_inferences_list_sizes' }
    ]}
>
<TabItem value="dedicated_inferences_list_sizes">

Get available Dedicated Inference sizes and pricing for supported GPUs. Send a<br />GET request to `/v2/dedicated-inferences/sizes`.<br />

```sql
SELECT
currency,
gpu_slug,
price_per_hour,
region
FROM digitalocean.inference.dedicated_inference_sizes
;
```
</TabItem>
</Tabs>
