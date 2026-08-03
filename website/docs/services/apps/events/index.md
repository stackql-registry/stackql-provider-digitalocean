--- 
title: events
hide_title: false
hide_table_of_contents: false
keywords:
  - events
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

Creates, updates, deletes, gets or lists an <code>events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.apps.events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="apps_get_event"
    values={[
        { label: 'apps_get_event', value: 'apps_get_event' },
        { label: 'apps_list_events', value: 'apps_list_events' }
    ]}
>
<TabItem value="apps_get_event">

A JSON with key `event`

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
    <td> (title: The ID of the event (UUID), example: ba32b134-569c-4c0c-ba02-8ffdb0492ece)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td>For deployment events, this is the same as the deployment's ID. For autoscaling events, this is the deployment that was autoscaled. (title: The deployment ID associated with this event, example: c020763f-ddb7-4112-a0df-7f01c69fc00b)</td>
</tr>
<tr>
    <td><CopyableCode code="autoscaling" /></td>
    <td><code>object</code></td>
    <td>Autoscaling event details. Only present for autoscaling events.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (title: When the event was created, example: 2023-10-01T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment" /></td>
    <td><code>object</code></td>
    <td> (title: An app deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of event (UNKNOWN, DEPLOYMENT, AUTOSCALING) (example: DEPLOYMENT)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="apps_list_events">

A JSON with key `events`

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
    <td> (title: The ID of the event (UUID), example: ba32b134-569c-4c0c-ba02-8ffdb0492ece)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td>For deployment events, this is the same as the deployment's ID. For autoscaling events, this is the deployment that was autoscaled. (title: The deployment ID associated with this event, example: c020763f-ddb7-4112-a0df-7f01c69fc00b)</td>
</tr>
<tr>
    <td><CopyableCode code="autoscaling" /></td>
    <td><code>object</code></td>
    <td>Autoscaling event details. Only present for autoscaling events.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (title: When the event was created, example: 2023-10-01T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment" /></td>
    <td><code>object</code></td>
    <td> (title: An app deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of event (UNKNOWN, DEPLOYMENT, AUTOSCALING) (example: DEPLOYMENT)</td>
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
    <td><a href="#apps_get_event"><CopyableCode code="apps_get_event" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-event_id"><code>event_id</code></a></td>
    <td></td>
    <td>Get a single event for an app.</td>
</tr>
<tr>
    <td><a href="#apps_list_events"><CopyableCode code="apps_list_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-event_types"><code>event_types</code></a></td>
    <td>List all events for an app, including deployments and autoscaling events.</td>
</tr>
<tr>
    <td><a href="#apps_cancel_event"><CopyableCode code="apps_cancel_event" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-event_id"><code>event_id</code></a></td>
    <td></td>
    <td>Cancel an in-progress autoscaling event.</td>
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
<tr id="parameter-event_types">
    <td><CopyableCode code="event_types" /></td>
    <td><code>array</code></td>
    <td>Filter events by event type. (example: [DEPLOYMENT])</td>
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
    defaultValue="apps_get_event"
    values={[
        { label: 'apps_get_event', value: 'apps_get_event' },
        { label: 'apps_list_events', value: 'apps_list_events' }
    ]}
>
<TabItem value="apps_get_event">

Get a single event for an app.

```sql
SELECT
id,
deployment_id,
autoscaling,
created_at,
deployment,
type
FROM digitalocean.apps.events
WHERE app_id = '{{ app_id }}' -- required
AND event_id = '{{ event_id }}' -- required
;
```
</TabItem>
<TabItem value="apps_list_events">

List all events for an app, including deployments and autoscaling events.

```sql
SELECT
id,
deployment_id,
autoscaling,
created_at,
deployment,
type
FROM digitalocean.apps.events
WHERE app_id = '{{ app_id }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND event_types = '{{ event_types }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="apps_cancel_event"
    values={[
        { label: 'apps_cancel_event', value: 'apps_cancel_event' }
    ]}
>
<TabItem value="apps_cancel_event">

Cancel an in-progress autoscaling event.

```sql
EXEC digitalocean.apps.events.apps_cancel_event 
@app_id='{{ app_id }}' --required, 
@event_id='{{ event_id }}' --required
;
```
</TabItem>
</Tabs>
