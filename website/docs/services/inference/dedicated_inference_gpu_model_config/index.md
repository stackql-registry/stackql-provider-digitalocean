--- 
title: dedicated_inference_gpu_model_config
hide_title: false
hide_table_of_contents: false
keywords:
  - dedicated_inference_gpu_model_config
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

Creates, updates, deletes, gets or lists a <code>dedicated_inference_gpu_model_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dedicated_inference_gpu_model_config" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.inference.dedicated_inference_gpu_model_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="dedicated_inferences_get_gpu_model_config"
    values={[
        { label: 'dedicated_inferences_get_gpu_model_config', value: 'dedicated_inferences_get_gpu_model_config' }
    ]}
>
<TabItem value="dedicated_inferences_get_gpu_model_config">

GPU model configs (gpu_slugs, model_slug, model_name, is_gated_model).

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
    <td><CopyableCode code="model_name" /></td>
    <td><code>string</code></td>
    <td> (example: Mistral-7B-Instruct-v0.3)</td>
</tr>
<tr>
    <td><CopyableCode code="gpu_slugs" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_gated_model" /></td>
    <td><code>boolean</code></td>
    <td>Whether the model requires gated access (e.g. Hugging Face token).</td>
</tr>
<tr>
    <td><CopyableCode code="model_slug" /></td>
    <td><code>string</code></td>
    <td> (example: mistral/mistral-7b-instruct-v3)</td>
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
    <td><a href="#dedicated_inferences_get_gpu_model_config"><CopyableCode code="dedicated_inferences_get_gpu_model_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get supported GPU and model configurations for Dedicated Inference. Use this to<br />discover supported GPU slugs and model slugs (e.g. Hugging Face). Send a GET<br />request to `/v2/dedicated-inferences/gpu-model-config`.<br /></td>
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
    defaultValue="dedicated_inferences_get_gpu_model_config"
    values={[
        { label: 'dedicated_inferences_get_gpu_model_config', value: 'dedicated_inferences_get_gpu_model_config' }
    ]}
>
<TabItem value="dedicated_inferences_get_gpu_model_config">

Get supported GPU and model configurations for Dedicated Inference. Use this to<br />discover supported GPU slugs and model slugs (e.g. Hugging Face). Send a GET<br />request to `/v2/dedicated-inferences/gpu-model-config`.<br />

```sql
SELECT
model_name,
gpu_slugs,
is_gated_model,
model_slug
FROM digitalocean.inference.dedicated_inference_gpu_model_config
;
```
</TabItem>
</Tabs>
