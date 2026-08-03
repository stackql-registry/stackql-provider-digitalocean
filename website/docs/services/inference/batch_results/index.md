--- 
title: batch_results
hide_title: false
hide_table_of_contents: false
keywords:
  - batch_results
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

Creates, updates, deletes, gets or lists a <code>batch_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="batch_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.inference.batch_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="inference_get_batch_results"
    values={[
        { label: 'inference_get_batch_results', value: 'inference_get_batch_results' }
    ]}
>
<TabItem value="inference_get_batch_results">

Presigned download URLs.

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
    <td><CopyableCode code="batch_id" /></td>
    <td><code>string (uuid)</code></td>
    <td> (example: 0e9d1d35-3d1e-4d66-9a2f-8c7e0f6b3e21)</td>
</tr>
<tr>
    <td><CopyableCode code="error_file_url" /></td>
    <td><code>string (uri)</code></td>
    <td>Presigned URL for the error sidecar JSONL, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the presigned URLs expire. (example: 2026-04-24T20:19:19Z)</td>
</tr>
<tr>
    <td><CopyableCode code="output_file_url" /></td>
    <td><code>string (uri)</code></td>
    <td>Presigned URL for the main results JSONL. (example: https://batch-inference.nyc3.digitaloceanspaces.com/outputs/0e9d1d35-3d1e-4d66-9a2f-8c7e0f6b3e21.jsonl?X-Amz-Signature=...)</td>
</tr>
<tr>
    <td><CopyableCode code="result_available" /></td>
    <td><code>boolean</code></td>
    <td>When `false`, keep polling batch status and retry later. </td>
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
    <td><a href="#inference_get_batch_results"><CopyableCode code="inference_get_batch_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-batch_id"><code>batch_id</code></a></td>
    <td></td>
    <td>Returns short-lived presigned download URLs for the output (and optional error sidecar) of a completed batch job. If results are not yet ready, the response sets `result_available: false` or returns `412 Precondition Failed`; in both cases, keep polling batch status and retry.<br /><br />Download the artifacts soon after fetching — the URLs are short-lived. Result files themselves are retained for up to 30 days after the job completes, after which they are deleted.<br /></td>
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
<tr id="parameter-batch_id">
    <td><CopyableCode code="batch_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The batch job identifier. (example: 0e9d1d35-3d1e-4d66-9a2f-8c7e0f6b3e21)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="inference_get_batch_results"
    values={[
        { label: 'inference_get_batch_results', value: 'inference_get_batch_results' }
    ]}
>
<TabItem value="inference_get_batch_results">

Returns short-lived presigned download URLs for the output (and optional error sidecar) of a completed batch job. If results are not yet ready, the response sets `result_available: false` or returns `412 Precondition Failed`; in both cases, keep polling batch status and retry.<br /><br />Download the artifacts soon after fetching — the URLs are short-lived. Result files themselves are retained for up to 30 days after the job completes, after which they are deleted.<br />

```sql
SELECT
batch_id,
error_file_url,
expires_at,
output_file_url,
result_available
FROM digitalocean.inference.batch_results
WHERE batch_id = '{{ batch_id }}' -- required
;
```
</TabItem>
</Tabs>
