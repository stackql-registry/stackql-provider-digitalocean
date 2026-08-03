--- 
title: droplet_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - droplet_actions
  - compute
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

Creates, updates, deletes, gets or lists a <code>droplet_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="droplet_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.droplet_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="droplet_actions_get"
    values={[
        { label: 'droplet_actions_get', value: 'droplet_actions_get' },
        { label: 'droplet_actions_list', value: 'droplet_actions_list' }
    ]}
>
<TabItem value="droplet_actions_get">

The result will be a JSON object with an action key.  This will be set to an action object containing the standard action attributes.

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
    <td><code>integer</code></td>
    <td>A unique numeric ID that can be used to identify and reference an action.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>integer</code></td>
    <td>A unique identifier for the resource that the action is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the action was completed. (example: 2020-11-14T16:30:06Z)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="region_slug" /></td>
    <td><code>string</code></td>
    <td>A human-readable string that is used as a unique identifier for each region. (example: nyc3)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource that the action is associated with. (example: droplet)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the action was initiated. (example: 2020-11-14T16:29:21Z)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the action. This can be "in-progress", "completed", or "errored". (in-progress, completed, errored) (example: completed, default: in-progress)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>This is the type of action that the object represents. For example, this could be "transfer" to represent the state of an image transfer action. (example: create)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="droplet_actions_list">

A JSON object with an `actions` key.

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
    <td><code>integer</code></td>
    <td>A unique numeric ID that can be used to identify and reference an action.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>integer</code></td>
    <td>A unique identifier for the resource that the action is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the action was completed. (example: 2020-11-14T16:30:06Z)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="region_slug" /></td>
    <td><code>string</code></td>
    <td>A human-readable string that is used as a unique identifier for each region. (example: nyc3)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource that the action is associated with. (example: droplet)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the action was initiated. (example: 2020-11-14T16:29:21Z)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the action. This can be "in-progress", "completed", or "errored". (in-progress, completed, errored) (example: completed, default: in-progress)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>This is the type of action that the object represents. For example, this could be "transfer" to represent the state of an image transfer action. (example: create)</td>
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
    <td><a href="#droplet_actions_get"><CopyableCode code="droplet_actions_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a>, <a href="#parameter-action_id"><code>action_id</code></a></td>
    <td></td>
    <td>To retrieve a Droplet action, send a GET request to<br />`/v2/droplets/$DROPLET_ID/actions/$ACTION_ID`.<br /><br />The response will be a JSON object with a key called `action`. The value will<br />be a Droplet action object.<br /></td>
</tr>
<tr>
    <td><a href="#droplet_actions_list"><CopyableCode code="droplet_actions_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To retrieve a list of all actions that have been executed for a Droplet, send<br />a GET request to `/v2/droplets/$DROPLET_ID/actions`.<br /><br />The results will be returned as a JSON object with an `actions` key. This will<br />be set to an array filled with `action` objects containing the standard<br />`action` attributes.<br /></td>
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
<tr id="parameter-action_id">
    <td><CopyableCode code="action_id" /></td>
    <td><code>integer</code></td>
    <td>A unique numeric ID that can be used to identify and reference an action. (example: 36804636)</td>
</tr>
<tr id="parameter-droplet_id">
    <td><CopyableCode code="droplet_id" /></td>
    <td><code>integer</code></td>
    <td>A unique identifier for a Droplet instance. (example: 3164444)</td>
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
    defaultValue="droplet_actions_get"
    values={[
        { label: 'droplet_actions_get', value: 'droplet_actions_get' },
        { label: 'droplet_actions_list', value: 'droplet_actions_list' }
    ]}
>
<TabItem value="droplet_actions_get">

To retrieve a Droplet action, send a GET request to<br />`/v2/droplets/$DROPLET_ID/actions/$ACTION_ID`.<br /><br />The response will be a JSON object with a key called `action`. The value will<br />be a Droplet action object.<br />

```sql
SELECT
id,
resource_id,
completed_at,
region,
region_slug,
resource_type,
started_at,
status,
type
FROM digitalocean.compute.droplet_actions
WHERE droplet_id = '{{ droplet_id }}' -- required
AND action_id = '{{ action_id }}' -- required
;
```
</TabItem>
<TabItem value="droplet_actions_list">

To retrieve a list of all actions that have been executed for a Droplet, send<br />a GET request to `/v2/droplets/$DROPLET_ID/actions`.<br /><br />The results will be returned as a JSON object with an `actions` key. This will<br />be set to an array filled with `action` objects containing the standard<br />`action` attributes.<br />

```sql
SELECT
id,
resource_id,
completed_at,
region,
region_slug,
resource_type,
started_at,
status,
type
FROM digitalocean.compute.droplet_actions
WHERE droplet_id = '{{ droplet_id }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
