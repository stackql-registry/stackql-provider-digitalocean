--- 
title: embeddings
hide_title: false
hide_table_of_contents: false
keywords:
  - embeddings
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

Creates, updates, deletes, gets or lists an <code>embeddings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="embeddings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.inference.embeddings" /></td></tr>
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
    <td><a href="#inference_create_embedding"><CopyableCode code="inference_create_embedding" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-model"><code>model</code></a>, <a href="#parameter-input"><code>input</code></a></td>
    <td></td>
    <td>Create vector embeddings for one or more text inputs. OpenAI-compatible request and response. Unknown fields in the request body are rejected. There is no streaming response for this endpoint.<br /></td>
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
    defaultValue="inference_create_embedding"
    values={[
        { label: 'inference_create_embedding', value: 'inference_create_embedding' }
    ]}
>
<TabItem value="inference_create_embedding">

Create vector embeddings for one or more text inputs. OpenAI-compatible request and response. Unknown fields in the request body are rejected. There is no streaming response for this endpoint.<br />

```sql
EXEC digitalocean.inference.embeddings.inference_create_embedding 
@@json=
'{
"model": "{{ model }}", 
"input": "{{ input }}", 
"user": "{{ user }}", 
"encoding_format": "{{ encoding_format }}"
}'
;
```
</TabItem>
</Tabs>
