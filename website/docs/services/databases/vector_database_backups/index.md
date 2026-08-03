--- 
title: vector_database_backups
hide_title: false
hide_table_of_contents: false
keywords:
  - vector_database_backups
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

Creates, updates, deletes, gets or lists a <code>vector_database_backups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vector_database_backups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.vector_database_backups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="vector_databases_get_restore_status"
    values={[
        { label: 'vector_databases_get_restore_status', value: 'vector_databases_get_restore_status' },
        { label: 'vector_databases_list_backups', value: 'vector_databases_list_backups' }
    ]}
>
<TabItem value="vector_databases_get_restore_status">

A successful response.

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
    <td><CopyableCode code="backup_id" /></td>
    <td><code>string</code></td>
    <td>The backup ID being restored. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>Error message if the restore failed. (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status: STARTED, TRANSFERRING, TRANSFERRED, FINALIZING, SUCCESS, FAILED, CANCELLING, CANCELED. (example: example string)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="vector_databases_list_backups">

A successful response.

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
    <td><CopyableCode code="backup_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the backup (e.g., "vectordb-&#123;uuid&#125;-20240101-120000"). (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the backup process completed. (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the backup process started. (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the backup: SUCCESS. (example: example string)</td>
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
    <td><a href="#vector_databases_get_restore_status"><CopyableCode code="vector_databases_get_restore_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-backup_id"><code>backup_id</code></a></td>
    <td></td>
    <td>To check the status of a restore operation, send a GET request to `/v2/vector-databases/&#123;id&#125;/backups/&#123;backup_id&#125;/restore`. The response body contains the current status of the restore.</td>
</tr>
<tr>
    <td><a href="#vector_databases_list_backups"><CopyableCode code="vector_databases_list_backups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>To list the available backups for a vector database, send a GET request to `/v2/vector-databases/&#123;id&#125;/backups`. Only backups with a status of `SUCCESS` are returned.</td>
</tr>
<tr>
    <td><a href="#vector_databases_post_restore_backup"><CopyableCode code="vector_databases_post_restore_backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-backup_id"><code>backup_id</code></a></td>
    <td></td>
    <td>To restore a vector database from a backup, send a POST request to `/v2/vector-databases/&#123;id&#125;/backups/&#123;backup_id&#125;/restore`. The restore runs asynchronously; use the restore-status endpoint to monitor its progress.</td>
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
<tr id="parameter-backup_id">
    <td><CopyableCode code="backup_id" /></td>
    <td><code>string</code></td>
    <td>Required. ID of the backup to restore from. (example: "example string")</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Required. ID of the vector database. (example: "example string")</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="vector_databases_get_restore_status"
    values={[
        { label: 'vector_databases_get_restore_status', value: 'vector_databases_get_restore_status' },
        { label: 'vector_databases_list_backups', value: 'vector_databases_list_backups' }
    ]}
>
<TabItem value="vector_databases_get_restore_status">

To check the status of a restore operation, send a GET request to `/v2/vector-databases/&#123;id&#125;/backups/&#123;backup_id&#125;/restore`. The response body contains the current status of the restore.

```sql
SELECT
backup_id,
error,
status
FROM digitalocean.databases.vector_database_backups
WHERE id = '{{ id }}' -- required
AND backup_id = '{{ backup_id }}' -- required
;
```
</TabItem>
<TabItem value="vector_databases_list_backups">

To list the available backups for a vector database, send a GET request to `/v2/vector-databases/&#123;id&#125;/backups`. Only backups with a status of `SUCCESS` are returned.

```sql
SELECT
backup_id,
completed_at,
started_at,
status
FROM digitalocean.databases.vector_database_backups
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="vector_databases_post_restore_backup"
    values={[
        { label: 'vector_databases_post_restore_backup', value: 'vector_databases_post_restore_backup' }
    ]}
>
<TabItem value="vector_databases_post_restore_backup">

To restore a vector database from a backup, send a POST request to `/v2/vector-databases/&#123;id&#125;/backups/&#123;backup_id&#125;/restore`. The restore runs asynchronously; use the restore-status endpoint to monitor its progress.

```sql
EXEC digitalocean.databases.vector_database_backups.vector_databases_post_restore_backup 
@id='{{ id }}' --required, 
@backup_id='{{ backup_id }}' --required 
@@json=
'{
"backup_id": "{{ backup_id }}", 
"id": "{{ id }}"
}'
;
```
</TabItem>
</Tabs>
