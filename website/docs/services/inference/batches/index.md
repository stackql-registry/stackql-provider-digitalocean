--- 
title: batches
hide_title: false
hide_table_of_contents: false
keywords:
  - batches
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

Creates, updates, deletes, gets or lists a <code>batches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="batches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.inference.batches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="inference_get_batch"
    values={[
        { label: 'inference_get_batch', value: 'inference_get_batch' },
        { label: 'inference_list_batches', value: 'inference_list_batches' }
    ]}
>
<TabItem value="inference_get_batch">

The batch job.

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
    <td>Unique identifier for the batch job. (example: 0e9d1d35-3d1e-4d66-9a2f-8c7e0f6b3e21)</td>
</tr>
<tr>
    <td><CopyableCode code="error_file_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Error sidecar file. Null when no errors were produced.</td>
</tr>
<tr>
    <td><CopyableCode code="input_file_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The uploaded JSONL input file. (example: a1b2c3d4-e5f6-4789-90ab-cdef12345678)</td>
</tr>
<tr>
    <td><CopyableCode code="output_file_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Output JSONL file. Populated once the job completes.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The idempotency key supplied at creation. (example: c7e3ad1e-20c3-4e47-9bf2-6f2a4d6a2f11)</td>
</tr>
<tr>
    <td><CopyableCode code="cancelled_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2026-04-24T19:45:11Z)</td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2026-04-24T20:15:30Z)</td>
</tr>
<tr>
    <td><CopyableCode code="completion_window" /></td>
    <td><code>string</code></td>
    <td> (24h) (example: 24h)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2026-04-24T19:19:19Z)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Inference endpoint each request is dispatched to. (example: /v1/chat/completions)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Top-level errors that prevented the batch from completing.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Derived from `created_at` plus `completion_window`. (example: 2026-04-25T19:19:19Z)</td>
</tr>
<tr>
    <td><CopyableCode code="failed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2026-04-24T19:50:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="finalizing_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2026-04-24T20:10:42Z)</td>
</tr>
<tr>
    <td><CopyableCode code="in_progress_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2026-04-24T19:20:05Z)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata attached at creation.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td> (openai, anthropic) (example: openai)</td>
</tr>
<tr>
    <td><CopyableCode code="request_counts" /></td>
    <td><code>object</code></td>
    <td>Aggregate request counts.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Lifecycle status. Terminal states: `completed`, `failed`, `expired`, `cancelled`.  (validating, in_progress, finalizing, completed, failed, expired, cancelling, cancelled) (example: in_progress)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="inference_list_batches">

Page of batch jobs.

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
    <td>Unique identifier for the batch job. (example: 0e9d1d35-3d1e-4d66-9a2f-8c7e0f6b3e21)</td>
</tr>
<tr>
    <td><CopyableCode code="error_file_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Error sidecar file. Null when no errors were produced.</td>
</tr>
<tr>
    <td><CopyableCode code="input_file_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The uploaded JSONL input file. (example: a1b2c3d4-e5f6-4789-90ab-cdef12345678)</td>
</tr>
<tr>
    <td><CopyableCode code="output_file_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Output JSONL file. Populated once the job completes.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The idempotency key supplied at creation. (example: c7e3ad1e-20c3-4e47-9bf2-6f2a4d6a2f11)</td>
</tr>
<tr>
    <td><CopyableCode code="cancelled_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2026-04-24T19:45:11Z)</td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2026-04-24T20:15:30Z)</td>
</tr>
<tr>
    <td><CopyableCode code="completion_window" /></td>
    <td><code>string</code></td>
    <td> (24h) (example: 24h)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2026-04-24T19:19:19Z)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Inference endpoint each request is dispatched to. (example: /v1/chat/completions)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Top-level errors that prevented the batch from completing.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Derived from `created_at` plus `completion_window`. (example: 2026-04-25T19:19:19Z)</td>
</tr>
<tr>
    <td><CopyableCode code="failed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2026-04-24T19:50:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="finalizing_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2026-04-24T20:10:42Z)</td>
</tr>
<tr>
    <td><CopyableCode code="in_progress_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2026-04-24T19:20:05Z)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata attached at creation.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td> (openai, anthropic) (example: openai)</td>
</tr>
<tr>
    <td><CopyableCode code="request_counts" /></td>
    <td><code>object</code></td>
    <td>Aggregate request counts.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Lifecycle status. Terminal states: `completed`, `failed`, `expired`, `cancelled`.  (validating, in_progress, finalizing, completed, failed, expired, cancelling, cancelled) (example: in_progress)</td>
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
    <td><a href="#inference_get_batch"><CopyableCode code="inference_get_batch" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-batch_id"><code>batch_id</code></a></td>
    <td></td>
    <td>Returns the current state of a batch job. Poll until `status` reaches a terminal value (`completed`, `failed`, `expired`, or `cancelled`).<br /></td>
</tr>
<tr>
    <td><a href="#inference_list_batches"><CopyableCode code="inference_list_batches" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-after"><code>after</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>Returns a cursor-paginated list of batch jobs, ordered newest first. Use `limit` to control page size and `after` to page forward using the `last_id` from the previous response.<br /></td>
</tr>
<tr>
    <td><a href="#inference_create_batch"><CopyableCode code="inference_create_batch" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-file_id"><code>file_id</code></a>, <a href="#parameter-provider"><code>provider</code></a>, <a href="#parameter-completion_window"><code>completion_window</code></a>, <a href="#parameter-request_id"><code>request_id</code></a></td>
    <td></td>
    <td>Submits a batch job against a previously uploaded JSONL input file. The upload must have completed before this call; otherwise the request is rejected.<br /><br />Supply a unique `request_id` to make the submission idempotent — retries with the same value return the existing job. When `provider` is `openai`, the `url` on each JSONL line must match `endpoint`.<br /></td>
</tr>
<tr>
    <td><a href="#inference_cancel_batch"><CopyableCode code="inference_cancel_batch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-batch_id"><code>batch_id</code></a></td>
    <td></td>
    <td>Requests cancellation of a batch job. The job transitions to `cancelling` and, once in-flight requests drain, to `cancelled`. Jobs already in a terminal state (`completed`, `failed`, `expired`, `cancelled`) cannot be cancelled and return `409 Conflict`. Cancellation is also rejected with `409 Conflict` while the job has not yet been submitted to the upstream provider — there is nothing to cancel until the provider batch id is assigned.<br /><br />Partial results produced before cancellation remain available via `GET /v1/batches/&#123;batch_id&#125;/results`.<br /></td>
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
<tr id="parameter-after">
    <td><CopyableCode code="after" /></td>
    <td><code>string (uuid)</code></td>
    <td>Cursor for pagination. Pass the `last_id` value from the previous response to fetch the next page. Omit for the first page.  (example: 7b2e9c1a-6f4d-4d9b-a0f1-5c4b7e2f8a12)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of batches to return per page. (example: 20)</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Optional filter restricting results to batches in the given lifecycle state.  (example: in_progress)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="inference_get_batch"
    values={[
        { label: 'inference_get_batch', value: 'inference_get_batch' },
        { label: 'inference_list_batches', value: 'inference_list_batches' }
    ]}
>
<TabItem value="inference_get_batch">

Returns the current state of a batch job. Poll until `status` reaches a terminal value (`completed`, `failed`, `expired`, or `cancelled`).<br />

```sql
SELECT
batch_id,
error_file_id,
input_file_id,
output_file_id,
request_id,
cancelled_at,
completed_at,
completion_window,
created_at,
endpoint,
errors,
expires_at,
failed_at,
finalizing_at,
in_progress_at,
metadata,
provider,
request_counts,
status
FROM digitalocean.inference.batches
WHERE batch_id = '{{ batch_id }}' -- required
;
```
</TabItem>
<TabItem value="inference_list_batches">

Returns a cursor-paginated list of batch jobs, ordered newest first. Use `limit` to control page size and `after` to page forward using the `last_id` from the previous response.<br />

```sql
SELECT
batch_id,
error_file_id,
input_file_id,
output_file_id,
request_id,
cancelled_at,
completed_at,
completion_window,
created_at,
endpoint,
errors,
expires_at,
failed_at,
finalizing_at,
in_progress_at,
metadata,
provider,
request_counts,
status
FROM digitalocean.inference.batches
WHERE after = '{{ after }}'
AND limit = '{{ limit }}'
AND status = '{{ status }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="inference_create_batch"
    values={[
        { label: 'inference_create_batch', value: 'inference_create_batch' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="inference_create_batch">

Submits a batch job against a previously uploaded JSONL input file. The upload must have completed before this call; otherwise the request is rejected.<br /><br />Supply a unique `request_id` to make the submission idempotent — retries with the same value return the existing job. When `provider` is `openai`, the `url` on each JSONL line must match `endpoint`.<br />

```sql
INSERT INTO digitalocean.inference.batches (
file_id,
provider,
endpoint,
completion_window,
request_id,
metadata
)
SELECT 
'{{ file_id }}' /* required */,
'{{ provider }}' /* required */,
'{{ endpoint }}',
'{{ completion_window }}' /* required */,
'{{ request_id }}' /* required */,
'{{ metadata }}'
RETURNING
batch_id,
error_file_id,
input_file_id,
output_file_id,
request_id,
cancelled_at,
completed_at,
completion_window,
created_at,
endpoint,
errors,
expires_at,
failed_at,
finalizing_at,
in_progress_at,
metadata,
provider,
request_counts,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: batches
  props:
    - name: file_id
      value: "{{ file_id }}"
      description: |
        The \`file_id\` returned by \`POST /v1/batches/files\`.
    - name: provider
      value: "{{ provider }}"
      description: |
        The inference provider whose JSONL schema the input file conforms to. \`openai\` follows the OpenAI Batch API input schema (\`custom_id\`, \`method\`, \`url\`, \`body\`); \`anthropic\` follows the Anthropic Message Batches JSONL conventions.
      valid_values: ['openai', 'anthropic']
    - name: endpoint
      value: "{{ endpoint }}"
      description: |
        Inference endpoint each request is dispatched to. **Required when \`provider\` is \`openai\` and must match the \`url\` on every JSONL line. Must be omitted when \`provider\` is \`anthropic\`.**
      valid_values: ['/v1/responses', '/v1/chat/completions']
    - name: completion_window
      value: "{{ completion_window }}"
      description: |
        Time window in which the job must complete. Jobs that do not finish in time transition to \`expired\`.
      valid_values: ['24h']
      default: 24h
    - name: request_id
      value: "{{ request_id }}"
      description: |
        Client-supplied idempotency key. Retries with the same value return the existing job instead of creating a duplicate.
    - name: metadata
      value: "{{ metadata }}"
      description: |
        Optional string-valued metadata to attach to the job.
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="inference_cancel_batch"
    values={[
        { label: 'inference_cancel_batch', value: 'inference_cancel_batch' }
    ]}
>
<TabItem value="inference_cancel_batch">

Requests cancellation of a batch job. The job transitions to `cancelling` and, once in-flight requests drain, to `cancelled`. Jobs already in a terminal state (`completed`, `failed`, `expired`, `cancelled`) cannot be cancelled and return `409 Conflict`. Cancellation is also rejected with `409 Conflict` while the job has not yet been submitted to the upstream provider — there is nothing to cancel until the provider batch id is assigned.<br /><br />Partial results produced before cancellation remain available via `GET /v1/batches/&#123;batch_id&#125;/results`.<br />

```sql
EXEC digitalocean.inference.batches.inference_cancel_batch 
@batch_id='{{ batch_id }}' --required
;
```
</TabItem>
</Tabs>
