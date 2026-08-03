--- 
title: responses
hide_title: false
hide_table_of_contents: false
keywords:
  - responses
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

Creates, updates, deletes, gets or lists a <code>responses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="responses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.inference.responses" /></td></tr>
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
    <td><a href="#inference_create_response"><CopyableCode code="inference_create_response" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-model"><code>model</code></a>, <a href="#parameter-input"><code>input</code></a></td>
    <td></td>
    <td>Generate text responses from text prompts. This endpoint supports both streaming and non-streaming responses for supported text models.<br /></td>
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
    defaultValue="inference_create_response"
    values={[
        { label: 'inference_create_response', value: 'inference_create_response' }
    ]}
>
<TabItem value="inference_create_response">

Generate text responses from text prompts. This endpoint supports both streaming and non-streaming responses for supported text models.<br />

```sql
EXEC digitalocean.inference.responses.inference_create_response 
@@json=
'{
"model": "{{ model }}", 
"input": "{{ input }}", 
"max_output_tokens": {{ max_output_tokens }}, 
"temperature": {{ temperature }}, 
"stream": {{ stream }}, 
"instructions": "{{ instructions }}", 
"top_p": {{ top_p }}, 
"stream_options": "{{ stream_options }}", 
"tools": "{{ tools }}", 
"tool_choice": "{{ tool_choice }}", 
"stop": "{{ stop }}", 
"metadata": "{{ metadata }}", 
"user": "{{ user }}"
}'
;
```
</TabItem>
</Tabs>
