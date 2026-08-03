--- 
title: indexing_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - indexing_jobs
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

Creates, updates, deletes, gets or lists an <code>indexing_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="indexing_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.indexing_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_get_indexing_job"
    values={[
        { label: 'genai_get_indexing_job', value: 'genai_get_indexing_job' },
        { label: 'genai_list_indexing_jobs_by_knowledge_base', value: 'genai_list_indexing_jobs_by_knowledge_base' },
        { label: 'genai_list_indexing_jobs', value: 'genai_list_indexing_jobs' }
    ]}
>
<TabItem value="genai_get_indexing_job">

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
    <td><CopyableCode code="completed_datasources" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of datasources indexed completed</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date / time (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_jobs" /></td>
    <td><code>array</code></td>
    <td>Details on Data Sources included in the Indexing Job</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_uuids" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="finished_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="is_report_available" /></td>
    <td><code>boolean</code></td>
    <td>Boolean value to determine if the indexing job details are available</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_uuid" /></td>
    <td><code>string</code></td>
    <td>Knowledge base id (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="phase" /></td>
    <td><code>string</code></td>
    <td> (BATCH_JOB_PHASE_UNKNOWN, BATCH_JOB_PHASE_PENDING, BATCH_JOB_PHASE_RUNNING, BATCH_JOB_PHASE_SUCCEEDED, BATCH_JOB_PHASE_FAILED, BATCH_JOB_PHASE_ERROR, BATCH_JOB_PHASE_CANCELLED) (default: BATCH_JOB_PHASE_UNKNOWN, example: BATCH_JOB_PHASE_UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (INDEX_JOB_STATUS_UNKNOWN, INDEX_JOB_STATUS_PARTIAL, INDEX_JOB_STATUS_IN_PROGRESS, INDEX_JOB_STATUS_COMPLETED, INDEX_JOB_STATUS_FAILED, INDEX_JOB_STATUS_NO_CHANGES, INDEX_JOB_STATUS_PENDING, INDEX_JOB_STATUS_CANCELLED) (default: INDEX_JOB_STATUS_UNKNOWN, example: INDEX_JOB_STATUS_UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="tokens" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of tokens [This field is deprecated]</td>
</tr>
<tr>
    <td><CopyableCode code="total_datasources" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of datasources being indexed</td>
</tr>
<tr>
    <td><CopyableCode code="total_tokens" /></td>
    <td><code>string (uint64)</code></td>
    <td>Total Tokens Consumed By the Indexing Job (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modified (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Unique id (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="genai_list_indexing_jobs_by_knowledge_base">

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
    <td><CopyableCode code="completed_datasources" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of datasources indexed completed</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date / time (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_jobs" /></td>
    <td><code>array</code></td>
    <td>Details on Data Sources included in the Indexing Job</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_uuids" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="finished_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="is_report_available" /></td>
    <td><code>boolean</code></td>
    <td>Boolean value to determine if the indexing job details are available</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_uuid" /></td>
    <td><code>string</code></td>
    <td>Knowledge base id (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="phase" /></td>
    <td><code>string</code></td>
    <td> (BATCH_JOB_PHASE_UNKNOWN, BATCH_JOB_PHASE_PENDING, BATCH_JOB_PHASE_RUNNING, BATCH_JOB_PHASE_SUCCEEDED, BATCH_JOB_PHASE_FAILED, BATCH_JOB_PHASE_ERROR, BATCH_JOB_PHASE_CANCELLED) (default: BATCH_JOB_PHASE_UNKNOWN, example: BATCH_JOB_PHASE_UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (INDEX_JOB_STATUS_UNKNOWN, INDEX_JOB_STATUS_PARTIAL, INDEX_JOB_STATUS_IN_PROGRESS, INDEX_JOB_STATUS_COMPLETED, INDEX_JOB_STATUS_FAILED, INDEX_JOB_STATUS_NO_CHANGES, INDEX_JOB_STATUS_PENDING, INDEX_JOB_STATUS_CANCELLED) (default: INDEX_JOB_STATUS_UNKNOWN, example: INDEX_JOB_STATUS_UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="tokens" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of tokens [This field is deprecated]</td>
</tr>
<tr>
    <td><CopyableCode code="total_datasources" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of datasources being indexed</td>
</tr>
<tr>
    <td><CopyableCode code="total_tokens" /></td>
    <td><code>string (uint64)</code></td>
    <td>Total Tokens Consumed By the Indexing Job (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modified (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Unique id (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="genai_list_indexing_jobs">

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
    <td><CopyableCode code="jobs" /></td>
    <td><code>array</code></td>
    <td>The indexing jobs</td>
</tr>
<tr>
    <td><CopyableCode code="links" /></td>
    <td><code>object</code></td>
    <td>Links to other pages</td>
</tr>
<tr>
    <td><CopyableCode code="meta" /></td>
    <td><code>object</code></td>
    <td>Meta information about the data set</td>
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
    <td><a href="#genai_get_indexing_job"><CopyableCode code="genai_get_indexing_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>To get status of an indexing Job for a knowledge base, send a GET request to `/v2/gen-ai/indexing_jobs/&#123;uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_list_indexing_jobs_by_knowledge_base"><CopyableCode code="genai_list_indexing_jobs_by_knowledge_base" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-knowledge_base_uuid"><code>knowledge_base_uuid</code></a></td>
    <td></td>
    <td>To list latest 15 indexing jobs for a knowledge base, send a GET request to `/v2/gen-ai/knowledge_bases/&#123;knowledge_base_uuid&#125;/indexing_jobs`.</td>
</tr>
<tr>
    <td><a href="#genai_list_indexing_jobs"><CopyableCode code="genai_list_indexing_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>To list all indexing jobs for a knowledge base, send a GET request to `/v2/gen-ai/indexing_jobs`.</td>
</tr>
<tr>
    <td><a href="#genai_create_indexing_job"><CopyableCode code="genai_create_indexing_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To start an indexing job for a knowledge base, send a POST request to `/v2/gen-ai/indexing_jobs`.</td>
</tr>
<tr>
    <td><a href="#genai_cancel_indexing_job"><CopyableCode code="genai_cancel_indexing_job" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>To cancel an indexing job for a knowledge base, send a PUT request to `/v2/gen-ai/indexing_jobs/&#123;uuid&#125;/cancel`.</td>
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
    <td>Knowledge base uuid in string (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
<tr id="parameter-uuid">
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for an indexing job. (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>Page number. (example: 1)</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>Items per page. (example: 1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_get_indexing_job"
    values={[
        { label: 'genai_get_indexing_job', value: 'genai_get_indexing_job' },
        { label: 'genai_list_indexing_jobs_by_knowledge_base', value: 'genai_list_indexing_jobs_by_knowledge_base' },
        { label: 'genai_list_indexing_jobs', value: 'genai_list_indexing_jobs' }
    ]}
>
<TabItem value="genai_get_indexing_job">

To get status of an indexing Job for a knowledge base, send a GET request to `/v2/gen-ai/indexing_jobs/&#123;uuid&#125;`.

```sql
SELECT
completed_datasources,
created_at,
data_source_jobs,
data_source_uuids,
finished_at,
is_report_available,
knowledge_base_uuid,
phase,
started_at,
status,
tokens,
total_datasources,
total_tokens,
updated_at,
uuid
FROM digitalocean.genai.indexing_jobs
WHERE uuid = '{{ uuid }}' -- required
;
```
</TabItem>
<TabItem value="genai_list_indexing_jobs_by_knowledge_base">

To list latest 15 indexing jobs for a knowledge base, send a GET request to `/v2/gen-ai/knowledge_bases/&#123;knowledge_base_uuid&#125;/indexing_jobs`.

```sql
SELECT
completed_datasources,
created_at,
data_source_jobs,
data_source_uuids,
finished_at,
is_report_available,
knowledge_base_uuid,
phase,
started_at,
status,
tokens,
total_datasources,
total_tokens,
updated_at,
uuid
FROM digitalocean.genai.indexing_jobs
WHERE knowledge_base_uuid = '{{ knowledge_base_uuid }}' -- required
;
```
</TabItem>
<TabItem value="genai_list_indexing_jobs">

To list all indexing jobs for a knowledge base, send a GET request to `/v2/gen-ai/indexing_jobs`.

```sql
SELECT
jobs,
links,
meta
FROM digitalocean.genai.indexing_jobs
WHERE page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="genai_create_indexing_job"
    values={[
        { label: 'genai_create_indexing_job', value: 'genai_create_indexing_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="genai_create_indexing_job">

To start an indexing job for a knowledge base, send a POST request to `/v2/gen-ai/indexing_jobs`.

```sql
INSERT INTO digitalocean.genai.indexing_jobs (
data_source_uuids,
knowledge_base_uuid
)
SELECT 
'{{ data_source_uuids }}',
'{{ knowledge_base_uuid }}'
RETURNING
job
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: indexing_jobs
  props:
    - name: data_source_uuids
      value:
        - "{{ data_source_uuids }}"
      description: |
        List of data source ids to index, if none are provided, all data sources will be indexed
    - name: knowledge_base_uuid
      value: "{{ knowledge_base_uuid }}"
      description: |
        Knowledge base id
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="genai_cancel_indexing_job"
    values={[
        { label: 'genai_cancel_indexing_job', value: 'genai_cancel_indexing_job' }
    ]}
>
<TabItem value="genai_cancel_indexing_job">

To cancel an indexing job for a knowledge base, send a PUT request to `/v2/gen-ai/indexing_jobs/&#123;uuid&#125;/cancel`.

```sql
REPLACE digitalocean.genai.indexing_jobs
SET 
uuid = '{{ uuid }}'
WHERE 
uuid = '{{ uuid }}' --required
RETURNING
job;
```
</TabItem>
</Tabs>
