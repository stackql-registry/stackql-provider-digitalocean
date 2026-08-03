--- 
title: shares
hide_title: false
hide_table_of_contents: false
keywords:
  - shares
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

Creates, updates, deletes, gets or lists a <code>shares</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="shares" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.storage.shares" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="nfs_get"
    values={[
        { label: 'nfs_get', value: 'nfs_get' },
        { label: 'nfs_list', value: 'nfs_list' }
    ]}
>
<TabItem value="nfs_get">

The response will be a JSON object with a key called `share`. The value will be an object containing the standard attributes associated with an NFS share.

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
    <td>The unique identifier of the NFS share. (example: 0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the share. (example: sammy-share-drive)</td>
</tr>
<tr>
    <td><CopyableCode code="access_points" /></td>
    <td><code>array</code></td>
    <td>Access points configured on this share. The default access point is returned first.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp for when the NFS share was created. (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="host" /></td>
    <td><code>string</code></td>
    <td>The host IP of the NFS server that will be accessible from the associated VPC (example: 10.128.32.2)</td>
</tr>
<tr>
    <td><CopyableCode code="mount_path" /></td>
    <td><code>string</code></td>
    <td>Path at which the share will be available, to be mounted at a target of the user's choice within the client (example: /123456/your-nfs-share-uuid)</td>
</tr>
<tr>
    <td><CopyableCode code="performance_tier" /></td>
    <td><code>string</code></td>
    <td>The performance tier of the share. (example: PERFORMANCE_TIER_HIGH)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides. (example: atl1)</td>
</tr>
<tr>
    <td><CopyableCode code="size_gib" /></td>
    <td><code>integer</code></td>
    <td>The desired/provisioned size of the share in GiB (Gibibytes). Must be &gt;= 50.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the share. `INACTIVE` means the share exists but is not attached to any VPC.  (CREATING, ACTIVE, INACTIVE, FAILED, DELETED) (example: ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_ids" /></td>
    <td><code>array</code></td>
    <td>List of VPC IDs that should be able to access the share.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="nfs_list">

The response will be a JSON object with a key called `shares`.  The value will be an array of objects, each containing the standard  attributes associated with  an NFS share. 

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
    <td>The unique identifier of the NFS share. (example: 0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the share. (example: sammy-share-drive)</td>
</tr>
<tr>
    <td><CopyableCode code="access_points" /></td>
    <td><code>array</code></td>
    <td>Access points configured on this share. The default access point is returned first.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp for when the NFS share was created. (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="host" /></td>
    <td><code>string</code></td>
    <td>The host IP of the NFS server that will be accessible from the associated VPC (example: 10.128.32.2)</td>
</tr>
<tr>
    <td><CopyableCode code="mount_path" /></td>
    <td><code>string</code></td>
    <td>Path at which the share will be available, to be mounted at a target of the user's choice within the client (example: /123456/your-nfs-share-uuid)</td>
</tr>
<tr>
    <td><CopyableCode code="performance_tier" /></td>
    <td><code>string</code></td>
    <td>The performance tier of the share. (example: PERFORMANCE_TIER_HIGH)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides. (example: atl1)</td>
</tr>
<tr>
    <td><CopyableCode code="size_gib" /></td>
    <td><code>integer</code></td>
    <td>The desired/provisioned size of the share in GiB (Gibibytes). Must be &gt;= 50.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the share. `INACTIVE` means the share exists but is not attached to any VPC.  (CREATING, ACTIVE, INACTIVE, FAILED, DELETED) (example: ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_ids" /></td>
    <td><code>array</code></td>
    <td>List of VPC IDs that should be able to access the share.</td>
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
    <td><a href="#nfs_get"><CopyableCode code="nfs_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-nfs_id"><code>nfs_id</code></a></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td>To get an NFS share, send a GET request to `/v2/nfs/&#123;nfs_id&#125;?region=$&#123;region&#125;`.<br /><br />A successful request will return the NFS share.<br /></td>
</tr>
<tr>
    <td><a href="#nfs_list"><CopyableCode code="nfs_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td>To list NFS shares, send a GET request to `/v2/nfs?region=$&#123;region&#125;`.<br /><br />A successful request will return all NFS shares belonging to the authenticated user.<br /></td>
</tr>
<tr>
    <td><a href="#nfs_create"><CopyableCode code="nfs_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-size_gib"><code>size_gib</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-vpc_ids"><code>vpc_ids</code></a></td>
    <td></td>
    <td>To create a new NFS share, send a POST request to `/v2/nfs`.<br /></td>
</tr>
<tr>
    <td><a href="#nfs_delete"><CopyableCode code="nfs_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-nfs_id"><code>nfs_id</code></a></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td>To delete an NFS share, send a DELETE request to `/v2/nfs/&#123;nfs_id&#125;?region=$&#123;region&#125;`.<br /><br />A successful request will return a `204 No Content` status code.<br /></td>
</tr>
<tr>
    <td><a href="#resize"><CopyableCode code="resize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-nfs_id"><code>nfs_id</code></a></td>
    <td></td>
    <td>Alias for the `resize` action.</td>
</tr>
<tr>
    <td><a href="#snapshot"><CopyableCode code="snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-nfs_id"><code>nfs_id</code></a></td>
    <td></td>
    <td>Alias for the `snapshot` action.</td>
</tr>
<tr>
    <td><a href="#attach"><CopyableCode code="attach" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-nfs_id"><code>nfs_id</code></a></td>
    <td></td>
    <td>Alias for the `attach` action.</td>
</tr>
<tr>
    <td><a href="#detach"><CopyableCode code="detach" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-nfs_id"><code>nfs_id</code></a></td>
    <td></td>
    <td>Alias for the `detach` action.</td>
</tr>
<tr>
    <td><a href="#reassign"><CopyableCode code="reassign" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-nfs_id"><code>nfs_id</code></a></td>
    <td></td>
    <td>Alias for the `reassign` action.</td>
</tr>
<tr>
    <td><a href="#switch_performance_tier"><CopyableCode code="switch_performance_tier" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-nfs_id"><code>nfs_id</code></a></td>
    <td></td>
    <td>Alias for the `switch_performance_tier` action.</td>
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
<tr id="parameter-nfs_id">
    <td><CopyableCode code="nfs_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the NFS share (example: 0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides. (example: atl1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="nfs_get"
    values={[
        { label: 'nfs_get', value: 'nfs_get' },
        { label: 'nfs_list', value: 'nfs_list' }
    ]}
>
<TabItem value="nfs_get">

To get an NFS share, send a GET request to `/v2/nfs/&#123;nfs_id&#125;?region=$&#123;region&#125;`.<br /><br />A successful request will return the NFS share.<br />

```sql
SELECT
id,
name,
access_points,
created_at,
host,
mount_path,
performance_tier,
region,
size_gib,
status,
vpc_ids
FROM digitalocean.storage.shares
WHERE nfs_id = '{{ nfs_id }}' -- required
AND region = '{{ region }}'
;
```
</TabItem>
<TabItem value="nfs_list">

To list NFS shares, send a GET request to `/v2/nfs?region=$&#123;region&#125;`.<br /><br />A successful request will return all NFS shares belonging to the authenticated user.<br />

```sql
SELECT
id,
name,
access_points,
created_at,
host,
mount_path,
performance_tier,
region,
size_gib,
status,
vpc_ids
FROM digitalocean.storage.shares
WHERE region = '{{ region }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="nfs_create"
    values={[
        { label: 'nfs_create', value: 'nfs_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="nfs_create">

To create a new NFS share, send a POST request to `/v2/nfs`.<br />

```sql
INSERT INTO digitalocean.storage.shares (
name,
size_gib,
region,
vpc_ids,
performance_tier
)
SELECT 
'{{ name }}' /* required */,
{{ size_gib }} /* required */,
'{{ region }}' /* required */,
'{{ vpc_ids }}' /* required */,
'{{ performance_tier }}'
RETURNING
share
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: shares
  props:
    - name: name
      value: "{{ name }}"
      description: |
        The human-readable name of the share.
    - name: size_gib
      value: {{ size_gib }}
      description: |
        The desired/provisioned size of the share in GiB (Gibibytes). Must be >= 50.
    - name: region
      value: "{{ region }}"
      description: |
        The DigitalOcean region slug (e.g., nyc2, atl1) where the NFS share resides.
    - name: vpc_ids
      value:
        - "{{ vpc_ids }}"
      description: |
        List of VPC IDs that should be able to access the share.
    - name: performance_tier
      value: "{{ performance_tier }}"
      description: |
        The performance tier of the share.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="nfs_delete"
    values={[
        { label: 'nfs_delete', value: 'nfs_delete' }
    ]}
>
<TabItem value="nfs_delete">

To delete an NFS share, send a DELETE request to `/v2/nfs/&#123;nfs_id&#125;?region=$&#123;region&#125;`.<br /><br />A successful request will return a `204 No Content` status code.<br />

```sql
DELETE FROM digitalocean.storage.shares
WHERE nfs_id = '{{ nfs_id }}' --required
AND region = '{{ region }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="resize"
    values={[
        { label: 'resize', value: 'resize' },
        { label: 'snapshot', value: 'snapshot' },
        { label: 'attach', value: 'attach' },
        { label: 'detach', value: 'detach' },
        { label: 'reassign', value: 'reassign' },
        { label: 'switch_performance_tier', value: 'switch_performance_tier' }
    ]}
>
<TabItem value="resize">

Alias for the `resize` action.

```sql
EXEC digitalocean.storage.shares.resize 
@nfs_id='{{ nfs_id }}' --required 
@@json=
'{
"region": "{{ region }}", 
"params": "{{ params }}"
}'
;
```
</TabItem>
<TabItem value="snapshot">

Alias for the `snapshot` action.

```sql
EXEC digitalocean.storage.shares.snapshot 
@nfs_id='{{ nfs_id }}' --required 
@@json=
'{
"region": "{{ region }}", 
"params": "{{ params }}"
}'
;
```
</TabItem>
<TabItem value="attach">

Alias for the `attach` action.

```sql
EXEC digitalocean.storage.shares.attach 
@nfs_id='{{ nfs_id }}' --required 
@@json=
'{
"region": "{{ region }}", 
"params": "{{ params }}"
}'
;
```
</TabItem>
<TabItem value="detach">

Alias for the `detach` action.

```sql
EXEC digitalocean.storage.shares.detach 
@nfs_id='{{ nfs_id }}' --required 
@@json=
'{
"region": "{{ region }}", 
"params": "{{ params }}"
}'
;
```
</TabItem>
<TabItem value="reassign">

Alias for the `reassign` action.

```sql
EXEC digitalocean.storage.shares.reassign 
@nfs_id='{{ nfs_id }}' --required 
@@json=
'{
"region": "{{ region }}", 
"params": "{{ params }}"
}'
;
```
</TabItem>
<TabItem value="switch_performance_tier">

Alias for the `switch_performance_tier` action.

```sql
EXEC digitalocean.storage.shares.switch_performance_tier 
@nfs_id='{{ nfs_id }}' --required 
@@json=
'{
"region": "{{ region }}", 
"params": "{{ params }}"
}'
;
```
</TabItem>
</Tabs>
