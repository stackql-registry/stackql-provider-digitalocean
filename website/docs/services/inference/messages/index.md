--- 
title: messages
hide_title: false
hide_table_of_contents: false
keywords:
  - messages
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

Creates, updates, deletes, gets or lists a <code>messages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="messages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.inference.messages" /></td></tr>
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
    <td><a href="#inference_create_messages"><CopyableCode code="inference_create_messages" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-model"><code>model</code></a>, <a href="#parameter-max_tokens"><code>max_tokens</code></a>, <a href="#parameter-messages"><code>messages</code></a></td>
    <td></td>
    <td>Send a structured list of input messages with text and/or image content, and the model will generate the next message in the conversation.<br /></td>
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
    defaultValue="inference_create_messages"
    values={[
        { label: 'inference_create_messages', value: 'inference_create_messages' }
    ]}
>
<TabItem value="inference_create_messages">

Send a structured list of input messages with text and/or image content, and the model will generate the next message in the conversation.<br />

```sql
EXEC digitalocean.inference.messages.inference_create_messages 
@@json=
'{
"model": "{{ model }}", 
"max_tokens": {{ max_tokens }}, 
"messages": "{{ messages }}", 
"system": "{{ system }}", 
"stop_sequences": "{{ stop_sequences }}", 
"stream": {{ stream }}, 
"temperature": {{ temperature }}, 
"top_p": {{ top_p }}, 
"top_k": {{ top_k }}, 
"tools": "{{ tools }}", 
"tool_choice": "{{ tool_choice }}", 
"metadata": "{{ metadata }}", 
"reasoning_effort": "{{ reasoning_effort }}", 
"speed": "{{ speed }}", 
"thinking": "{{ thinking }}"
}'
;
```
</TabItem>
</Tabs>
