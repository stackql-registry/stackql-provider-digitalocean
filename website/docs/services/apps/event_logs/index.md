--- 
title: event_logs
hide_title: false
hide_table_of_contents: false
keywords:
  - event_logs
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

Creates, updates, deletes, gets or lists an <code>event_logs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_logs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.apps.event_logs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="apps_get_event_logs"
    values={[
        { label: 'apps_get_event_logs', value: 'apps_get_event_logs' }
    ]}
>
<TabItem value="apps_get_event_logs">

A JSON object with urls that point to archived logs

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
    <td><a href="#apps_get_event_logs"><CopyableCode code="apps_get_event_logs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-event_id"><code>event_id</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td><a href="#parameter-follow"><code>follow</code></a>, <a href="#parameter-pod_connection_timeout"><code>pod_connection_timeout</code></a></td>
    <td>Retrieve the logs of an autoscaling event for an app.</td>
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
<tr id="parameter-event_id">
    <td><CopyableCode code="event_id" /></td>
    <td><code>string</code></td>
    <td>The event ID (example: 4f6c71e2-1e90-4762-9fee-6cc4a0a9f2cf)</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of logs to retrieve - BUILD: Build-time logs - DEPLOY: Deploy-time logs - RUN: Live run-time logs - RUN_RESTARTED: Logs of crashed/restarted instances during runtime - AUTOSCALE_EVENT: Logs of an autoscaling event (requires event_id) (example: BUILD)</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="apps_get_event_logs"
    values={[
        { label: 'apps_get_event_logs', value: 'apps_get_event_logs' }
    ]}
>
<TabItem value="apps_get_event_logs">

Retrieve the logs of an autoscaling event for an app.

```sql
SELECT
historic_urls,
live_url
FROM digitalocean.apps.event_logs
WHERE app_id = '{{ app_id }}' -- required
AND event_id = '{{ event_id }}' -- required
AND type = '{{ type }}' -- required
AND follow = '{{ follow }}'
AND pod_connection_timeout = '{{ pod_connection_timeout }}'
;
```
</TabItem>
</Tabs>
