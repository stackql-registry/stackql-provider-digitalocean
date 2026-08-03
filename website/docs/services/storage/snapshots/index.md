--- 
title: snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshots
  - storage
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

Creates, updates, deletes, gets or lists a <code>snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.storage.snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="nfs_get_snapshot"
    values={[
        { label: 'nfs_get_snapshot', value: 'nfs_get_snapshot' },
        { label: 'nfs_list_snapshot', value: 'nfs_list_snapshot' }
    ]}
>
<TabItem value="nfs_get_snapshot">

The response will be a JSON object with a key called `snapshot`. The value will be an object containing the standard attributes associated with an NFS snapshot.

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
    <td>The unique identifier of the snapshot. (example: 0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the snapshot. (example: daily-backup)</td>
</tr>
<tr>
    <td><CopyableCode code="share_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The unique identifier of the share from which this snapshot was created. (example: 1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the snapshot was created. (example: 2023-11-14T16:29:21Z)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The DigitalOcean region slug where the snapshot is located. (example: atl1)</td>
</tr>
<tr>
    <td><CopyableCode code="size_gib" /></td>
    <td><code>integer (uint64)</code></td>
    <td>The size of the snapshot in GiB.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the snapshot. (UNKNOWN, CREATING, ACTIVE, FAILED, DELETED) (example: CREATING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="nfs_list_snapshot">

The response will be a JSON object with a key called `snapshots`.  The value will be an array of objects, each containing the standard  attributes associated with an NFS snapshot. 

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
    <td>The unique identifier of the snapshot. (example: 0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the snapshot. (example: daily-backup)</td>
</tr>
<tr>
    <td><CopyableCode code="share_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The unique identifier of the share from which this snapshot was created. (example: 1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the snapshot was created. (example: 2023-11-14T16:29:21Z)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The DigitalOcean region slug where the snapshot is located. (example: atl1)</td>
</tr>
<tr>
    <td><CopyableCode code="size_gib" /></td>
    <td><code>integer (uint64)</code></td>
    <td>The size of the snapshot in GiB.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the snapshot. (UNKNOWN, CREATING, ACTIVE, FAILED, DELETED) (example: CREATING)</td>
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
    <td><a href="#nfs_get_snapshot"><CopyableCode code="nfs_get_snapshot" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-nfs_snapshot_id"><code>nfs_snapshot_id</code></a></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td>To get an NFS snapshot, send a GET request to `/v2/nfs/snapshots/&#123;nfs_snapshot_id&#125;?region=$&#123;region&#125;`.<br /><br />A successful request will return the NFS snapshot.<br /></td>
</tr>
<tr>
    <td><a href="#nfs_list_snapshot"><CopyableCode code="nfs_list_snapshot" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-share_id"><code>share_id</code></a></td>
    <td>To list all NFS snapshots, send a GET request to `/v2/nfs/snapshots?region=$&#123;region&#125;&share_id=&#123;share_id&#125;`.<br /><br />A successful request will return all NFS snapshots belonging to the authenticated user in the specified region.<br /><br />Optionally, you can filter snapshots by a specific NFS share by including the `share_id` query parameter.<br /></td>
</tr>
<tr>
    <td><a href="#nfs_delete_snapshot"><CopyableCode code="nfs_delete_snapshot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-nfs_snapshot_id"><code>nfs_snapshot_id</code></a></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td>To delete an NFS snapshot, send a DELETE request to `/v2/nfs/snapshots/&#123;nfs_snapshot_id&#125;?region=$&#123;region&#125;`.<br /><br />A successful request will return a `204 No Content` status code.<br /></td>
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
<tr id="parameter-nfs_snapshot_id">
    <td><CopyableCode code="nfs_snapshot_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the NFS snapshot (example: 0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides. (example: atl1)</td>
</tr>
<tr id="parameter-share_id">
    <td><CopyableCode code="share_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of an NFS share. If provided, only snapshots of this specific share will be returned. (example: 0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="nfs_get_snapshot"
    values={[
        { label: 'nfs_get_snapshot', value: 'nfs_get_snapshot' },
        { label: 'nfs_list_snapshot', value: 'nfs_list_snapshot' }
    ]}
>
<TabItem value="nfs_get_snapshot">

To get an NFS snapshot, send a GET request to `/v2/nfs/snapshots/&#123;nfs_snapshot_id&#125;?region=$&#123;region&#125;`.<br /><br />A successful request will return the NFS snapshot.<br />

```sql
SELECT
id,
name,
share_id,
created_at,
region,
size_gib,
status
FROM digitalocean.storage.snapshots
WHERE nfs_snapshot_id = '{{ nfs_snapshot_id }}' -- required
AND region = '{{ region }}'
;
```
</TabItem>
<TabItem value="nfs_list_snapshot">

To list all NFS snapshots, send a GET request to `/v2/nfs/snapshots?region=$&#123;region&#125;&share_id=&#123;share_id&#125;`.<br /><br />A successful request will return all NFS snapshots belonging to the authenticated user in the specified region.<br /><br />Optionally, you can filter snapshots by a specific NFS share by including the `share_id` query parameter.<br />

```sql
SELECT
id,
name,
share_id,
created_at,
region,
size_gib,
status
FROM digitalocean.storage.snapshots
WHERE region = '{{ region }}'
AND share_id = '{{ share_id }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="nfs_delete_snapshot"
    values={[
        { label: 'nfs_delete_snapshot', value: 'nfs_delete_snapshot' }
    ]}
>
<TabItem value="nfs_delete_snapshot">

To delete an NFS snapshot, send a DELETE request to `/v2/nfs/snapshots/&#123;nfs_snapshot_id&#125;?region=$&#123;region&#125;`.<br /><br />A successful request will return a `204 No Content` status code.<br />

```sql
DELETE FROM digitalocean.storage.snapshots
WHERE nfs_snapshot_id = '{{ nfs_snapshot_id }}' --required
AND region = '{{ region }}'
;
```
</TabItem>
</Tabs>
