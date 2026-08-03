--- 
title: batch_files
hide_title: false
hide_table_of_contents: false
keywords:
  - batch_files
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

Creates, updates, deletes, gets or lists a <code>batch_files</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="batch_files" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.inference.batch_files" /></td></tr>
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
    <td><a href="#inference_create_batch_file"><CopyableCode code="inference_create_batch_file" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-file_name"><code>file_name</code></a></td>
    <td></td>
    <td>Creates a file record and returns a `file_id` plus a short-lived presigned `PUT` URL (typically valid for ~15 minutes). Upload the raw JSONL bytes to `upload_url` (see `PUT /&#123;upload_path&#125;`) before calling `POST /v1/batches`.<br /></td>
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
    defaultValue="inference_create_batch_file"
    values={[
        { label: 'inference_create_batch_file', value: 'inference_create_batch_file' }
    ]}
>
<TabItem value="inference_create_batch_file">

Creates a file record and returns a `file_id` plus a short-lived presigned `PUT` URL (typically valid for ~15 minutes). Upload the raw JSONL bytes to `upload_url` (see `PUT /&#123;upload_path&#125;`) before calling `POST /v1/batches`.<br />

```sql
EXEC digitalocean.inference.batch_files.inference_create_batch_file 
@@json=
'{
"file_name": "{{ file_name }}"
}'
;
```
</TabItem>
</Tabs>
