--- 
title: models
hide_title: false
hide_table_of_contents: false
keywords:
  - models
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

Creates, updates, deletes, gets or lists a <code>models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.inference.models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="inference_list_models"
    values={[
        { label: 'inference_list_models', value: 'inference_list_models' }
    ]}
>
<TabItem value="inference_list_models">

A list of available models.

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
    <td>The model identifier, which can be referenced in the API endpoints. (example: meta-llama/Meta-Llama-3.1-8B-Instruct)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>integer</code></td>
    <td>The Unix timestamp (in seconds) when the model was created.</td>
</tr>
<tr>
    <td><CopyableCode code="object" /></td>
    <td><code>string</code></td>
    <td>The object type, which is always "model". (model) (example: model)</td>
</tr>
<tr>
    <td><CopyableCode code="owned_by" /></td>
    <td><code>string</code></td>
    <td>The organization that owns the model. (example: digitalocean)</td>
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
    <td><a href="#inference_list_models"><CopyableCode code="inference_list_models" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Lists the currently available models, and provides basic information about each one such as the owner and availability.</td>
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
    defaultValue="inference_list_models"
    values={[
        { label: 'inference_list_models', value: 'inference_list_models' }
    ]}
>
<TabItem value="inference_list_models">

Lists the currently available models, and provides basic information about each one such as the owner and availability.

```sql
SELECT
id,
created,
object,
owned_by
FROM digitalocean.inference.models
;
```
</TabItem>
</Tabs>
