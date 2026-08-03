--- 
title: job_invocations
hide_title: false
hide_table_of_contents: false
keywords:
  - job_invocations
  - apps
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

Creates, updates, deletes, gets or lists a <code>job_invocations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_invocations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.apps.job_invocations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="apps_get_job_invocation"
    values={[
        { label: 'apps_get_job_invocation', value: 'apps_get_job_invocation' },
        { label: 'apps_list_job_invocations', value: 'apps_list_job_invocations' }
    ]}
>
<TabItem value="apps_get_job_invocation">

A JSON with key `job_invocation`

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td> (title: The ID of the job invocation, example: ba32b134-569c-4c0c-ba02-8ffdb0492ece)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td> (title: The deployment ID this job invocation belongs to., example: c020763f-ddb7-4112-a0df-7f01c69fc00b)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td> (title: The name of the job this invocation belongs to., example: good-job)</td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (title: The time when the job invocation completed, example: 2023-10-01T12:10:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (title: The time when the job invocation was created, example: 2023-10-01T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="phase" /></td>
    <td><code>string</code></td>
    <td>The phase of the job invocation (UNKNOWN, PENDING, RUNNING, SUCCEEDED, FAILED, CANCELED, SKIPPED) (example: SUCCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (title: The time when the job invocation started, example: 2023-10-01T12:05:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="trigger" /></td>
    <td><code>object</code></td>
    <td> (title: The JobInvocation Trigger)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="apps_list_job_invocations">

A JSON with key `job_invocations`

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td> (title: The ID of the job invocation, example: ba32b134-569c-4c0c-ba02-8ffdb0492ece)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td> (title: The deployment ID this job invocation belongs to., example: c020763f-ddb7-4112-a0df-7f01c69fc00b)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td> (title: The name of the job this invocation belongs to., example: good-job)</td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (title: The time when the job invocation completed, example: 2023-10-01T12:10:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (title: The time when the job invocation was created, example: 2023-10-01T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="phase" /></td>
    <td><code>string</code></td>
    <td>The phase of the job invocation (UNKNOWN, PENDING, RUNNING, SUCCEEDED, FAILED, CANCELED, SKIPPED) (example: SUCCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (title: The time when the job invocation started, example: 2023-10-01T12:05:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="trigger" /></td>
    <td><code>object</code></td>
    <td> (title: The JobInvocation Trigger)</td>
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
    <td><a href="#apps_get_job_invocation"><CopyableCode code="apps_get_job_invocation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-job_invocation_id"><code>job_invocation_id</code></a></td>
    <td><a href="#parameter-job_name"><code>job_name</code></a></td>
    <td>Get a specific job invocation for an app.</td>
</tr>
<tr>
    <td><a href="#apps_list_job_invocations"><CopyableCode code="apps_list_job_invocations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a></td>
    <td><a href="#parameter-job_names"><code>job_names</code></a>, <a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>List all job invocations for an app.</td>
</tr>
<tr>
    <td><a href="#apps_cancel_job_invocation"><CopyableCode code="apps_cancel_job_invocation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-job_invocation_id"><code>job_invocation_id</code></a></td>
    <td><a href="#parameter-job_name"><code>job_name</code></a></td>
    <td>Cancel a specific job invocation for an app.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The app ID (example: 4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf)</td>
</tr>
<tr id="parameter-job_invocation_id">
    <td><CopyableCode code="job_invocation_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job invocation to retrieve. (example: 123e4567-e89b-12d3-a456-426)</td>
</tr>
<tr id="parameter-deployment_id">
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td>The deployment ID (example: 3aa4d20e-5527-4c00-b496-601fbd22520a)</td>
</tr>
<tr id="parameter-job_name">
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The job name to list job invocations for. (example: component)</td>
</tr>
<tr id="parameter-job_names">
    <td><CopyableCode code="job_names" /></td>
    <td><code>array</code></td>
    <td>The job names to list job invocations for. (example: [component1, component2])</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>Which 'page' of paginated results to return. (example: 1)</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>Number of items returned per page (example: 2)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="apps_get_job_invocation"
    values={[
        { label: 'apps_get_job_invocation', value: 'apps_get_job_invocation' },
        { label: 'apps_list_job_invocations', value: 'apps_list_job_invocations' }
    ]}
>
<TabItem value="apps_get_job_invocation">

Get a specific job invocation for an app.

```sql
SELECT
id,
deployment_id,
job_name,
completed_at,
created_at,
phase,
started_at,
trigger
FROM digitalocean.apps.job_invocations
WHERE app_id = '{{ app_id }}' -- required
AND job_invocation_id = '{{ job_invocation_id }}' -- required
AND job_name = '{{ job_name }}'
;
```
</TabItem>
<TabItem value="apps_list_job_invocations">

List all job invocations for an app.

```sql
SELECT
id,
deployment_id,
job_name,
completed_at,
created_at,
phase,
started_at,
trigger
FROM digitalocean.apps.job_invocations
WHERE app_id = '{{ app_id }}' -- required
AND job_names = '{{ job_names }}'
AND deployment_id = '{{ deployment_id }}'
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="apps_cancel_job_invocation"
    values={[
        { label: 'apps_cancel_job_invocation', value: 'apps_cancel_job_invocation' }
    ]}
>
<TabItem value="apps_cancel_job_invocation">

Cancel a specific job invocation for an app.

```sql
EXEC digitalocean.apps.job_invocations.apps_cancel_job_invocation 
@app_id='{{ app_id }}' --required, 
@job_invocation_id='{{ job_invocation_id }}' --required, 
@job_name='{{ job_name }}'
;
```
</TabItem>
</Tabs>
