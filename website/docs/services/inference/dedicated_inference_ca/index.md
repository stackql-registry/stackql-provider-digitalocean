--- 
title: dedicated_inference_ca
hide_title: false
hide_table_of_contents: false
keywords:
  - dedicated_inference_ca
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

Creates, updates, deletes, gets or lists a <code>dedicated_inference_ca</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dedicated_inference_ca" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.inference.dedicated_inference_ca" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="dedicated_inferences_get_ca"
    values={[
        { label: 'dedicated_inferences_get_ca', value: 'dedicated_inferences_get_ca' }
    ]}
>
<TabItem value="dedicated_inferences_get_ca">

CA certificate for the Dedicated Inference (base64-encoded). Required for private endpoint connectivity.

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
    <td><CopyableCode code="cert" /></td>
    <td><code>string</code></td>
    <td>Base64-encoded CA certificate.</td>
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
    <td><a href="#dedicated_inferences_get_ca"><CopyableCode code="dedicated_inferences_get_ca" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dedicated_inference_id"><code>dedicated_inference_id</code></a></td>
    <td></td>
    <td>Get the CA certificate for a Dedicated Inference instance (base64-encoded).<br />Required for private endpoint connectivity. Send a GET request to<br />`/v2/dedicated-inferences/&#123;dedicated_inference_id&#125;/ca`.<br /></td>
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
<tr id="parameter-dedicated_inference_id">
    <td><CopyableCode code="dedicated_inference_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique identifier for a Dedicated Inference instance. (example: 6b5c619c-359c-44ca-87e2-47e98170c01d)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="dedicated_inferences_get_ca"
    values={[
        { label: 'dedicated_inferences_get_ca', value: 'dedicated_inferences_get_ca' }
    ]}
>
<TabItem value="dedicated_inferences_get_ca">

Get the CA certificate for a Dedicated Inference instance (base64-encoded).<br />Required for private endpoint connectivity. Send a GET request to<br />`/v2/dedicated-inferences/&#123;dedicated_inference_id&#125;/ca`.<br />

```sql
SELECT
cert
FROM digitalocean.inference.dedicated_inference_ca
WHERE dedicated_inference_id = '{{ dedicated_inference_id }}' -- required
;
```
</TabItem>
</Tabs>
