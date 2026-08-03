--- 
title: agent_chat_completions
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_chat_completions
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

Creates, updates, deletes, gets or lists an <code>agent_chat_completions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_chat_completions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.inference.agent_chat_completions" /></td></tr>
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
    <td><a href="#agent_inference_create_chat_completion"><CopyableCode code="agent_inference_create_chat_completion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-agent"><code>agent</code></a>, <a href="#parameter-model"><code>model</code></a>, <a href="#parameter-messages"><code>messages</code></a></td>
    <td></td>
    <td>Creates a model response for the given chat conversation via a customer-provisioned<br />agent endpoint.</td>
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
<tr id="parameter-agent">
    <td><CopyableCode code="agent" /></td>
    <td><code>boolean</code></td>
    <td>Must be set to true for agent-based completion behavior. (example: true)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="agent_inference_create_chat_completion"
    values={[
        { label: 'agent_inference_create_chat_completion', value: 'agent_inference_create_chat_completion' }
    ]}
>
<TabItem value="agent_inference_create_chat_completion">

Creates a model response for the given chat conversation via a customer-provisioned<br />agent endpoint.

```sql
EXEC digitalocean.inference.agent_chat_completions.agent_inference_create_chat_completion 
@agent='{{ agent }}' --required 
@@json=
'{
"messages": "{{ messages }}", 
"model": "{{ model }}", 
"max_tokens": {{ max_tokens }}, 
"max_completion_tokens": {{ max_completion_tokens }}, 
"frequency_penalty": {{ frequency_penalty }}, 
"presence_penalty": {{ presence_penalty }}, 
"top_logprobs": {{ top_logprobs }}, 
"tools": "{{ tools }}", 
"tool_choice": "{{ tool_choice }}", 
"stream": {{ stream }}, 
"stop": "{{ stop }}", 
"logit_bias": "{{ logit_bias }}", 
"logprobs": {{ logprobs }}, 
"n": {{ n }}, 
"stream_options": "{{ stream_options }}", 
"reasoning_effort": "{{ reasoning_effort }}", 
"seed": {{ seed }}, 
"metadata": "{{ metadata }}", 
"temperature": {{ temperature }}, 
"top_p": {{ top_p }}, 
"user": "{{ user }}"
}'
;
```
</TabItem>
</Tabs>
