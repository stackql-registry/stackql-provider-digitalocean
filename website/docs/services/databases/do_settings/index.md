--- 
title: do_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - do_settings
  - databases
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

Creates, updates, deletes, gets or lists a <code>do_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="do_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.do_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="databases_get_do_settings"
    values={[
        { label: 'databases_get_do_settings', value: 'databases_get_do_settings' }
    ]}
>
<TabItem value="databases_get_do_settings">

A JSON object with a key of `do_settings`.

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
    <td><CopyableCode code="service_cnames" /></td>
    <td><code>array</code></td>
    <td>An array of custom CNAMEs for the database cluster. Each CNAME must be a valid RFC 1123 hostname (e.g., "db.example.com"). Maximum of 16 CNAMEs allowed, each up to 253 characters.</td>
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
    <td><a href="#databases_get_do_settings"><CopyableCode code="databases_get_do_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a></td>
    <td></td>
    <td>To retrieve the DigitalOcean-specific settings for a database cluster, send a GET request to `/v2/databases/$DATABASE_ID/do_settings`.<br />The response will include the current `service_cnames` configuration.</td>
</tr>
<tr>
    <td><a href="#databases_update_do_settings"><CopyableCode code="databases_update_do_settings" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-database_cluster_uuid"><code>database_cluster_uuid</code></a>, <a href="#parameter-do_settings"><code>do_settings</code></a></td>
    <td></td>
    <td>To update the DigitalOcean-specific settings for a database cluster, send a PUT request to `/v2/databases/$DATABASE_ID/do_settings`.<br />Currently, the only supported setting is `service_cnames`, which allows you to specify custom DNS names (CNAMEs) to be included in the TLS certificate Subject Alternative Names (SANs) for the database cluster nodes. This enables TLS verification when connecting via a custom hostname.<br />After updating, the database nodes will be replaced to apply the new certificate. This process is performed as a rolling replacement and does not cause downtime.<br />To clear all custom CNAMEs, send an empty array or omit the field.</td>
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
<tr id="parameter-database_cluster_uuid">
    <td><CopyableCode code="database_cluster_uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique identifier for a database cluster. (example: 9cc10173-e9ea-4176-9dbc-a4cee4c4ff30)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="databases_get_do_settings"
    values={[
        { label: 'databases_get_do_settings', value: 'databases_get_do_settings' }
    ]}
>
<TabItem value="databases_get_do_settings">

To retrieve the DigitalOcean-specific settings for a database cluster, send a GET request to `/v2/databases/$DATABASE_ID/do_settings`.<br />The response will include the current `service_cnames` configuration.

```sql
SELECT
service_cnames
FROM digitalocean.databases.do_settings
WHERE database_cluster_uuid = '{{ database_cluster_uuid }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="databases_update_do_settings"
    values={[
        { label: 'databases_update_do_settings', value: 'databases_update_do_settings' }
    ]}
>
<TabItem value="databases_update_do_settings">

To update the DigitalOcean-specific settings for a database cluster, send a PUT request to `/v2/databases/$DATABASE_ID/do_settings`.<br />Currently, the only supported setting is `service_cnames`, which allows you to specify custom DNS names (CNAMEs) to be included in the TLS certificate Subject Alternative Names (SANs) for the database cluster nodes. This enables TLS verification when connecting via a custom hostname.<br />After updating, the database nodes will be replaced to apply the new certificate. This process is performed as a rolling replacement and does not cause downtime.<br />To clear all custom CNAMEs, send an empty array or omit the field.

```sql
REPLACE digitalocean.databases.do_settings
SET 
do_settings = '{{ do_settings }}'
WHERE 
database_cluster_uuid = '{{ database_cluster_uuid }}' --required
AND do_settings = '{{ do_settings }}' --required;
```
</TabItem>
</Tabs>
