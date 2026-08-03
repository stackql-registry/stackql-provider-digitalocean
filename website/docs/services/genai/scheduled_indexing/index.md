--- 
title: scheduled_indexing
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduled_indexing
  - genai
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

Creates, updates, deletes, gets or lists a <code>scheduled_indexing</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scheduled_indexing" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.scheduled_indexing" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_get_scheduled_indexing"
    values={[
        { label: 'genai_get_scheduled_indexing', value: 'genai_get_scheduled_indexing' }
    ]}
>
<TabItem value="genai_get_scheduled_indexing">

A successful response.

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Created at timestamp (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="days" /></td>
    <td><code>array</code></td>
    <td>Days for execution (day is represented same as in a cron expression, e.g. Monday begins with 1 )</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Deleted at timestamp (if soft deleted) (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="is_active" /></td>
    <td><code>boolean</code></td>
    <td>Whether the schedule is currently active</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_uuid" /></td>
    <td><code>string</code></td>
    <td>Knowledge base uuid associated with this schedule (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="last_ran_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last time the schedule was executed (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="next_run_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Next scheduled run (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="time" /></td>
    <td><code>string</code></td>
    <td>Scheduled time of execution (HH:MM:SS format) (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Updated at timestamp (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the scheduled indexing entry (example: 123e4567-e89b-12d3-a456-426614174000)</td>
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
    <td><a href="#genai_get_scheduled_indexing"><CopyableCode code="genai_get_scheduled_indexing" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-knowledge_base_uuid"><code>knowledge_base_uuid</code></a></td>
    <td></td>
    <td>Get Scheduled Indexing for knowledge base using knoweldge base uuid, send a GET request to `/v2/gen-ai/scheduled-indexing/knowledge-base/&#123;knowledge_base_uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_create_scheduled_indexing"><CopyableCode code="genai_create_scheduled_indexing" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To create scheduled indexing for a knowledge base, send a POST request to `/v2/gen-ai/scheduled-indexing`.</td>
</tr>
<tr>
    <td><a href="#genai_delete_scheduled_indexing"><CopyableCode code="genai_delete_scheduled_indexing" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>Delete Scheduled Indexing for knowledge base, send a DELETE request to `/v2/gen-ai/scheduled-indexing/&#123;uuid&#125;`.</td>
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
<tr id="parameter-knowledge_base_uuid">
    <td><CopyableCode code="knowledge_base_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the scheduled indexing entry (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
<tr id="parameter-uuid">
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the scheduled indexing (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_get_scheduled_indexing"
    values={[
        { label: 'genai_get_scheduled_indexing', value: 'genai_get_scheduled_indexing' }
    ]}
>
<TabItem value="genai_get_scheduled_indexing">

Get Scheduled Indexing for knowledge base using knoweldge base uuid, send a GET request to `/v2/gen-ai/scheduled-indexing/knowledge-base/&#123;knowledge_base_uuid&#125;`.

```sql
SELECT
created_at,
days,
deleted_at,
is_active,
knowledge_base_uuid,
last_ran_at,
next_run_at,
time,
updated_at,
uuid
FROM digitalocean.genai.scheduled_indexing
WHERE knowledge_base_uuid = '{{ knowledge_base_uuid }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="genai_create_scheduled_indexing"
    values={[
        { label: 'genai_create_scheduled_indexing', value: 'genai_create_scheduled_indexing' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="genai_create_scheduled_indexing">

To create scheduled indexing for a knowledge base, send a POST request to `/v2/gen-ai/scheduled-indexing`.

```sql
INSERT INTO digitalocean.genai.scheduled_indexing (
days,
knowledge_base_uuid,
time
)
SELECT 
'{{ days }}',
'{{ knowledge_base_uuid }}',
'{{ time }}'
RETURNING
indexing_info
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: scheduled_indexing
  props:
    - name: days
      value:
        - {{ days }}
      description: |
        Days for execution (day is represented same as in a cron expression, e.g. Monday begins with 1 )
    - name: knowledge_base_uuid
      value: "{{ knowledge_base_uuid }}"
      description: |
        Knowledge base uuid for which the schedule is created
    - name: time
      value: "{{ time }}"
      description: |
        Time of execution (HH:MM) UTC
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="genai_delete_scheduled_indexing"
    values={[
        { label: 'genai_delete_scheduled_indexing', value: 'genai_delete_scheduled_indexing' }
    ]}
>
<TabItem value="genai_delete_scheduled_indexing">

Delete Scheduled Indexing for knowledge base, send a DELETE request to `/v2/gen-ai/scheduled-indexing/&#123;uuid&#125;`.

```sql
DELETE FROM digitalocean.genai.scheduled_indexing
WHERE uuid = '{{ uuid }}' --required
;
```
</TabItem>
</Tabs>
