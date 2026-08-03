--- 
title: image_generations
hide_title: false
hide_table_of_contents: false
keywords:
  - image_generations
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

Creates, updates, deletes, gets or lists an <code>image_generations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_generations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.inference.image_generations" /></td></tr>
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
    <td><a href="#inference_create_image"><CopyableCode code="inference_create_image" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-prompt"><code>prompt</code></a>, <a href="#parameter-model"><code>model</code></a>, <a href="#parameter-n"><code>n</code></a></td>
    <td></td>
    <td>Creates a high-quality image from a text prompt using GPT-IMAGE-1, the latest image generation model with automatic prompt optimization and enhanced visual capabilities.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="inference_create_image"
    values={[
        { label: 'inference_create_image', value: 'inference_create_image' }
    ]}
>
<TabItem value="inference_create_image">

Creates a high-quality image from a text prompt using GPT-IMAGE-1, the latest image generation model with automatic prompt optimization and enhanced visual capabilities.

```sql
EXEC digitalocean.inference.image_generations.inference_create_image 
@@json=
'{
"prompt": "{{ prompt }}", 
"model": "{{ model }}", 
"moderation": "{{ moderation }}", 
"background": "{{ background }}", 
"output_format": "{{ output_format }}", 
"output_compression": {{ output_compression }}, 
"n": {{ n }}, 
"quality": "{{ quality }}", 
"size": "{{ size }}", 
"stream": {{ stream }}, 
"partial_images": {{ partial_images }}, 
"user": "{{ user }}"
}'
;
```
</TabItem>
</Tabs>
