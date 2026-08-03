--- 
title: access_points
hide_title: false
hide_table_of_contents: false
keywords:
  - access_points
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

Creates, updates, deletes, gets or lists an <code>access_points</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_points" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.storage.access_points" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="nfs_list_access_points"
    values={[
        { label: 'nfs_list_access_points', value: 'nfs_list_access_points' },
        { label: 'nfs_get_access_point', value: 'nfs_get_access_point' }
    ]}
>
<TabItem value="nfs_list_access_points">

The response will be a JSON object with a key called `access_points`. The value will be an array of objects containing the standard attributes associated with NFS access points.

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
    <td><code>string (uuid)</code></td>
    <td>The unique identifier of the access point. (example: a1b2c3d4-e5f6-4a5b-9c8d-1e2f3a4b5c6d)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the access point. Must be unique per share. (example: other-vpc)</td>
</tr>
<tr>
    <td><CopyableCode code="share_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The unique identifier of the share this access point belongs to. (example: 0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The VPC this access point is pinned to. Omitted on the default access point. Every non-default access point owns its own storage gateway in this VPC and is independent of the parent share's VPC lifecycle.  (example: 3f34cdb2-1e4f-4100-b5c7-f55f2762085f)</td>
</tr>
<tr>
    <td><CopyableCode code="access_policy" /></td>
    <td><code>object</code></td>
    <td>Provider-agnostic NFS access policy for an access point. Network CIDRs are managed by attach, detach, and managed-access workflows and are not part of this policy. </td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the access point was created. (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Whether this is the share's default access point.</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The export sub-path for this access point (always starts with `/`). (example: /other-vpc)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle status of an access point. There is no ACCESS_POINT_DELETING state: DELETE soft-deletes the access point synchronously (mirroring share deletion); the response of a delete request returns the access point already in ACCESS_POINT_DELETED.  (ACCESS_POINT_CREATING, ACCESS_POINT_ACTIVE, ACCESS_POINT_FAILED, ACCESS_POINT_DELETED) (example: ACCESS_POINT_ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the access point was last updated. May be empty while the access point is still being created.  (example: 2026-06-25T08:11:16Z)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="nfs_get_access_point">

The response will be a JSON object with a key called `access_point`. The value will be an object containing the standard attributes associated with an NFS access point.

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
    <td><code>string (uuid)</code></td>
    <td>The unique identifier of the access point. (example: a1b2c3d4-e5f6-4a5b-9c8d-1e2f3a4b5c6d)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of the access point. Must be unique per share. (example: other-vpc)</td>
</tr>
<tr>
    <td><CopyableCode code="share_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The unique identifier of the share this access point belongs to. (example: 0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The VPC this access point is pinned to. Omitted on the default access point. Every non-default access point owns its own storage gateway in this VPC and is independent of the parent share's VPC lifecycle.  (example: 3f34cdb2-1e4f-4100-b5c7-f55f2762085f)</td>
</tr>
<tr>
    <td><CopyableCode code="access_policy" /></td>
    <td><code>object</code></td>
    <td>Provider-agnostic NFS access policy for an access point. Network CIDRs are managed by attach, detach, and managed-access workflows and are not part of this policy. </td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the access point was created. (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Whether this is the share's default access point.</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The export sub-path for this access point (always starts with `/`). (example: /other-vpc)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle status of an access point. There is no ACCESS_POINT_DELETING state: DELETE soft-deletes the access point synchronously (mirroring share deletion); the response of a delete request returns the access point already in ACCESS_POINT_DELETED.  (ACCESS_POINT_CREATING, ACCESS_POINT_ACTIVE, ACCESS_POINT_FAILED, ACCESS_POINT_DELETED) (example: ACCESS_POINT_ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the access point was last updated. May be empty while the access point is still being created.  (example: 2026-06-25T08:11:16Z)</td>
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
    <td><a href="#nfs_list_access_points"><CopyableCode code="nfs_list_access_points" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-share_id"><code>share_id</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a></td>
    <td>To list access points for an NFS share, send a GET request to<br />`/v2/nfs/shares/&#123;share_id&#125;/access_points`. You may use query parameters to filter<br />by status.<br /><br />A successful request will return a list of NFS access points ordered with the default<br />access point first, then by `created_at` ascending.<br /></td>
</tr>
<tr>
    <td><a href="#nfs_get_access_point"><CopyableCode code="nfs_get_access_point" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-access_point_id"><code>access_point_id</code></a></td>
    <td></td>
    <td>To get an NFS access point, send a GET request to `/v2/nfs/access_points/&#123;access_point_id&#125;`.<br /><br />A successful request will return the NFS access point.<br /></td>
</tr>
<tr>
    <td><a href="#nfs_create_access_point"><CopyableCode code="nfs_create_access_point" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-share_id"><code>share_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-path"><code>path</code></a>, <a href="#parameter-access_policy"><code>access_policy</code></a>, <a href="#parameter-vpc_id"><code>vpc_id</code></a></td>
    <td></td>
    <td>To create a new access point on an NFS share, send a POST request to<br />`/v2/nfs/shares/&#123;share_id&#125;/access_points`.<br /><br />A successful request will return the newly created access point and an action object.<br /><br />The parent share must be in `ACTIVE` or `INACTIVE` status. Validation failures and<br />precondition errors (such as an ineligible share state) return `400 Bad Request`.<br />Duplicate name or path conflicts return `409 Conflict`.<br /></td>
</tr>
<tr>
    <td><a href="#nfs_delete_access_point"><CopyableCode code="nfs_delete_access_point" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-access_point_id"><code>access_point_id</code></a></td>
    <td></td>
    <td>To delete an NFS access point, send a DELETE request to<br />`/v2/nfs/access_points/&#123;access_point_id&#125;`.<br /><br />A successful request will soft-delete the access point and return the deleted access point<br />with status `ACCESS_POINT_DELETED` and an action object indicating the delete operation.<br /><br />The default access point (`is_default: true`) cannot be deleted. Access points already<br />in `ACCESS_POINT_DELETED` or `ACCESS_POINT_FAILED` status return `400 Bad Request`.<br /></td>
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
<tr id="parameter-access_point_id">
    <td><CopyableCode code="access_point_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The unique identifier of the NFS access point. (example: becd9f04-8afa-4ccd-b03e-9676447df603)</td>
</tr>
<tr id="parameter-share_id">
    <td><CopyableCode code="share_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The unique identifier of the NFS share. (example: baf4827c-6fa9-456f-9dbd-9ddfcacd0720)</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter access points by status. (example: ACCESS_POINT_ACTIVE)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="nfs_list_access_points"
    values={[
        { label: 'nfs_list_access_points', value: 'nfs_list_access_points' },
        { label: 'nfs_get_access_point', value: 'nfs_get_access_point' }
    ]}
>
<TabItem value="nfs_list_access_points">

To list access points for an NFS share, send a GET request to<br />`/v2/nfs/shares/&#123;share_id&#125;/access_points`. You may use query parameters to filter<br />by status.<br /><br />A successful request will return a list of NFS access points ordered with the default<br />access point first, then by `created_at` ascending.<br />

```sql
SELECT
id,
name,
share_id,
vpc_id,
access_policy,
created_at,
is_default,
path,
status,
updated_at
FROM digitalocean.storage.access_points
WHERE share_id = '{{ share_id }}' -- required
AND status = '{{ status }}'
;
```
</TabItem>
<TabItem value="nfs_get_access_point">

To get an NFS access point, send a GET request to `/v2/nfs/access_points/&#123;access_point_id&#125;`.<br /><br />A successful request will return the NFS access point.<br />

```sql
SELECT
id,
name,
share_id,
vpc_id,
access_policy,
created_at,
is_default,
path,
status,
updated_at
FROM digitalocean.storage.access_points
WHERE access_point_id = '{{ access_point_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="nfs_create_access_point"
    values={[
        { label: 'nfs_create_access_point', value: 'nfs_create_access_point' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="nfs_create_access_point">

To create a new access point on an NFS share, send a POST request to<br />`/v2/nfs/shares/&#123;share_id&#125;/access_points`.<br /><br />A successful request will return the newly created access point and an action object.<br /><br />The parent share must be in `ACTIVE` or `INACTIVE` status. Validation failures and<br />precondition errors (such as an ineligible share state) return `400 Bad Request`.<br />Duplicate name or path conflicts return `409 Conflict`.<br />

```sql
INSERT INTO digitalocean.storage.access_points (
name,
path,
access_policy,
vpc_id,
share_id
)
SELECT 
'{{ name }}' /* required */,
'{{ path }}' /* required */,
'{{ access_policy }}' /* required */,
'{{ vpc_id }}' /* required */,
'{{ share_id }}'
RETURNING
access_point,
action
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: access_points
  props:
    - name: share_id
      value: "{{ share_id }}"
      description: Required parameter for the access_points resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name for the access point. Must be unique per share. Must be 2–63
        characters and match \`^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]$\`.
        The name \`default\` is reserved (case-insensitive) for the implicit default
        access point created with each share.
    - name: path
      value: "{{ path }}"
      description: |
        The export sub-path. Must start with \`/\`, must not be exactly \`/\` (reserved
        for the default access point), must be at most 1024 characters, may contain
        only alphanumerics, \`-\`, \`_\`, \`.\`, and \`/\`, and must not contain \`..\` path
        segments.
    - name: access_policy
      description: |
        Provider-agnostic NFS access policy for an access point. Network CIDRs are
        managed by attach, detach, and managed-access workflows and are not part of
        this policy.
      value:
        anonuid: {{ anonuid }}
        anongid: {{ anongid }}
        protocols:
          - "{{ protocols }}"
        squash_config: "{{ squash_config }}"
        identity_enforcement_enabled: {{ identity_enforcement_enabled }}
    - name: vpc_id
      value: "{{ vpc_id }}"
      description: |
        Required. The VPC this access point will be pinned to. A storage gateway is
        provisioned (or reused) in this VPC, and the access point becomes mountable from
        this VPC regardless of whether the parent share is currently attached to it.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="nfs_delete_access_point"
    values={[
        { label: 'nfs_delete_access_point', value: 'nfs_delete_access_point' }
    ]}
>
<TabItem value="nfs_delete_access_point">

To delete an NFS access point, send a DELETE request to<br />`/v2/nfs/access_points/&#123;access_point_id&#125;`.<br /><br />A successful request will soft-delete the access point and return the deleted access point<br />with status `ACCESS_POINT_DELETED` and an action object indicating the delete operation.<br /><br />The default access point (`is_default: true`) cannot be deleted. Access points already<br />in `ACCESS_POINT_DELETED` or `ACCESS_POINT_FAILED` status return `400 Bad Request`.<br />

```sql
DELETE FROM digitalocean.storage.access_points
WHERE access_point_id = '{{ access_point_id }}' --required
;
```
</TabItem>
</Tabs>
