--- 
title: share_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - share_actions
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

Creates, updates, deletes, gets or lists a <code>share_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="share_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.storage.share_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#nfs_create_action"><CopyableCode code="nfs_create_action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-nfs_id"><code>nfs_id</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>To execute an action (such as resize) on a specified NFS share, <br />send a POST request to `/v2/nfs/&#123;nfs_id&#125;/actions`. In the JSON body <br />to the request, set the `type` attribute to on of the supported action types:<br /><br />| Action                           | Details |<br />| -------------------------------- | ----------- |<br />| `resize`            | Resizes an NFS share. Set the size_gib attribute to a desired value in GiB |<br />| `snapshot`          | Takes a snapshot of an NFS share |<br />| `attach`            | Attaches an NFS share to a VPC. Set the vpc_id attribute to the desired VPC ID |<br />| `detach`            | Detaches an NFS share from a VPC. Set the vpc_id attribute to the desired VPC ID |<br />| `reassign`          | Reassigns an NFS share from one VPC to another. Set the old_vpc_id and new_vpc_id attributes to the desired VPC IDs |<br />| `switch_performance_tier` | Switches the performance tier of an NFS share. Set the performance_tier attribute to the desired tier (e.g., standard, high) |<br /></td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="nfs_create_action"
    values={[
        { label: 'nfs_create_action', value: 'nfs_create_action' }
    ]}
>
<TabItem value="nfs_create_action">

To execute an action (such as resize) on a specified NFS share, <br />send a POST request to `/v2/nfs/&#123;nfs_id&#125;/actions`. In the JSON body <br />to the request, set the `type` attribute to on of the supported action types:<br /><br />| Action                           | Details |<br />| -------------------------------- | ----------- |<br />| `resize`            | Resizes an NFS share. Set the size_gib attribute to a desired value in GiB |<br />| `snapshot`          | Takes a snapshot of an NFS share |<br />| `attach`            | Attaches an NFS share to a VPC. Set the vpc_id attribute to the desired VPC ID |<br />| `detach`            | Detaches an NFS share from a VPC. Set the vpc_id attribute to the desired VPC ID |<br />| `reassign`          | Reassigns an NFS share from one VPC to another. Set the old_vpc_id and new_vpc_id attributes to the desired VPC IDs |<br />| `switch_performance_tier` | Switches the performance tier of an NFS share. Set the performance_tier attribute to the desired tier (e.g., standard, high) |<br />

```sql
EXEC digitalocean.storage.share_actions.nfs_create_action 
@nfs_id='{{ nfs_id }}' --required 
@@json=
'{
"type": "{{ type }}", 
"region": "{{ region }}", 
"params": "{{ params }}"
}'
;
```
</TabItem>
</Tabs>
