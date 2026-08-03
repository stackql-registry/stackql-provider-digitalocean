--- 
title: async_invocations
hide_title: false
hide_table_of_contents: false
keywords:
  - async_invocations
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

Creates, updates, deletes, gets or lists an <code>async_invocations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="async_invocations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.inference.async_invocations" /></td></tr>
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
    <td><a href="#inference_create_async_invoke"><CopyableCode code="inference_create_async_invoke" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-model_id"><code>model_id</code></a>, <a href="#parameter-input"><code>input</code></a></td>
    <td></td>
    <td>Generate Image, Audio, or Text-to-Speech Using fal Models. This endpoint starts an asynchronous job and returns a request_id. The job status is QUEUED initially. Use the request_id to poll for the result.<br /></td>
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
    defaultValue="inference_create_async_invoke"
    values={[
        { label: 'inference_create_async_invoke', value: 'inference_create_async_invoke' }
    ]}
>
<TabItem value="inference_create_async_invoke">

Generate Image, Audio, or Text-to-Speech Using fal Models. This endpoint starts an asynchronous job and returns a request_id. The job status is QUEUED initially. Use the request_id to poll for the result.<br />

```sql
EXEC digitalocean.inference.async_invocations.inference_create_async_invoke 
@@json=
'{
"model_id": "{{ model_id }}", 
"input": "{{ input }}", 
"tags": "{{ tags }}"
}'
;
```
</TabItem>
</Tabs>
