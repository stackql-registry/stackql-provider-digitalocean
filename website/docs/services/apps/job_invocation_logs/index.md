--- 
title: job_invocation_logs
hide_title: false
hide_table_of_contents: false
keywords:
  - job_invocation_logs
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

Creates, updates, deletes, gets or lists a <code>job_invocation_logs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_invocation_logs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.apps.job_invocation_logs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="apps_get_job_invocation_logs"
    values={[
        { label: 'apps_get_job_invocation_logs', value: 'apps_get_job_invocation_logs' }
    ]}
>
<TabItem value="apps_get_job_invocation_logs">

A JSON object with urls that point to Job Invocation logs

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
    <td><CopyableCode code="historic_urls" /></td>
    <td><code>array</code></td>
    <td> (title: A list of URLs to archived log files)</td>
</tr>
<tr>
    <td><CopyableCode code="live_url" /></td>
    <td><code>string</code></td>
    <td>A URL of the real-time live logs. This URL may use either the `https://` or `wss://` protocols and will keep pushing live logs as they become available. (example: ws://logs/build)</td>
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
    <td><a href="#apps_get_job_invocation_logs"><CopyableCode code="apps_get_job_invocation_logs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-job_name"><code>job_name</code></a>, <a href="#parameter-job_invocation_id"><code>job_invocation_id</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td><a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-follow"><code>follow</code></a>, <a href="#parameter-pod_connection_timeout"><code>pod_connection_timeout</code></a>, <a href="#parameter-tail_lines"><code>tail_lines</code></a></td>
    <td>Retrieve the logs of a past, in-progress, or active deployment. If a component name is specified, the logs will be limited to only that component. If deployment is omitted the active deployment will be selected (if available). The response will include links to either real-time logs of an in-progress or active deployment or archived logs of a past deployment.</td>
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
<tr id="parameter-job_name">
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The job name to list job invocations for. (example: component)</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of logs to retrieve (example: JOB_INVOCATION)</td>
</tr>
<tr id="parameter-deployment_id">
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td>The deployment ID (example: 3aa4d20e-5527-4c00-b496-601fbd22520a)</td>
</tr>
<tr id="parameter-follow">
    <td><CopyableCode code="follow" /></td>
    <td><code>boolean</code></td>
    <td>Whether the logs should follow live updates. (example: true)</td>
</tr>
<tr id="parameter-pod_connection_timeout">
    <td><CopyableCode code="pod_connection_timeout" /></td>
    <td><code>string</code></td>
    <td>An optional time duration to wait if the underlying component instance is not immediately available. Default: `3m`. (example: 3m)</td>
</tr>
<tr id="parameter-tail_lines">
    <td><CopyableCode code="tail_lines" /></td>
    <td><code>string (int64)</code></td>
    <td>The number of lines from the end of the logs to retrieve. (example: 100)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="apps_get_job_invocation_logs"
    values={[
        { label: 'apps_get_job_invocation_logs', value: 'apps_get_job_invocation_logs' }
    ]}
>
<TabItem value="apps_get_job_invocation_logs">

Retrieve the logs of a past, in-progress, or active deployment. If a component name is specified, the logs will be limited to only that component. If deployment is omitted the active deployment will be selected (if available). The response will include links to either real-time logs of an in-progress or active deployment or archived logs of a past deployment.

```sql
SELECT
historic_urls,
live_url
FROM digitalocean.apps.job_invocation_logs
WHERE app_id = '{{ app_id }}' -- required
AND job_name = '{{ job_name }}' -- required
AND job_invocation_id = '{{ job_invocation_id }}' -- required
AND type = '{{ type }}' -- required
AND deployment_id = '{{ deployment_id }}'
AND follow = '{{ follow }}'
AND pod_connection_timeout = '{{ pod_connection_timeout }}'
AND tail_lines = '{{ tail_lines }}'
;
```
</TabItem>
</Tabs>
