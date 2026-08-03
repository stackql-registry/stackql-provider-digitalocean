--- 
title: vector_databases
hide_title: false
hide_table_of_contents: false
keywords:
  - vector_databases
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

Creates, updates, deletes, gets or lists a <code>vector_databases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vector_databases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.vector_databases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="vector_databases_get"
    values={[
        { label: 'vector_databases_get', value: 'vector_databases_get' },
        { label: 'vector_databases_list', value: 'vector_databases_list' }
    ]}
>
<TabItem value="vector_databases_get">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td> (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td> (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="forked_from_id" /></td>
    <td><code>string</code></td>
    <td>ID of the vector database this instance was forked from. Empty when the instance was created directly via CreateVectorDB. Read-only and set by the platform at fork time; never modifiable through UpdateVectorDB. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="last_restore_id" /></td>
    <td><code>string</code></td>
    <td>Backup_id of the most recent restore initiated against this instance. Empty if no restore has ever been triggered. Lets callers recover the identifier of an in-flight or last-completed restore without having to retain the RestoreBackupResponse themselves. Use it with GetRestoreStatus to fetch the live status. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>Project this database belongs to. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>VectorDBConfig holds optional, advanced cluster settings.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoints" /></td>
    <td><code>object</code></td>
    <td>VectorDBEndpoints contains the connection endpoints for a vector database instance.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_uuid" /></td>
    <td><code>string</code></td>
    <td> (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td> (example: tor1)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string</code></td>
    <td>Resource tier: small, medium, or large. (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Lifecycle state: pending, creating, active, errored, or deleting. (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2023-01-01T00:00:00Z)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="vector_databases_list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td> (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td> (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="forked_from_id" /></td>
    <td><code>string</code></td>
    <td>ID of the vector database this instance was forked from. Empty when the instance was created directly via CreateVectorDB. Read-only and set by the platform at fork time; never modifiable through UpdateVectorDB. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="last_restore_id" /></td>
    <td><code>string</code></td>
    <td>Backup_id of the most recent restore initiated against this instance. Empty if no restore has ever been triggered. Lets callers recover the identifier of an in-flight or last-completed restore without having to retain the RestoreBackupResponse themselves. Use it with GetRestoreStatus to fetch the live status. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>Project this database belongs to. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>VectorDBConfig holds optional, advanced cluster settings.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoints" /></td>
    <td><code>object</code></td>
    <td>VectorDBEndpoints contains the connection endpoints for a vector database instance.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_uuid" /></td>
    <td><code>string</code></td>
    <td> (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td> (example: tor1)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>string</code></td>
    <td>Resource tier: small, medium, or large. (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Lifecycle state: pending, creating, active, errored, or deleting. (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2023-01-01T00:00:00Z)</td>
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
    <td><a href="#vector_databases_get"><CopyableCode code="vector_databases_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>To show information about an existing vector database, send a GET request to `/v2/vector-databases/&#123;id&#125;`. The response body contains a JSON object with a `vector_db` key holding the standard vector database attributes, including an embedded `endpoints` object with the connection information needed to access the database.</td>
</tr>
<tr>
    <td><a href="#vector_databases_list"><CopyableCode code="vector_databases_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>To list all of the vector databases on your account, send a GET request to `/v2/vector-databases`. Use the `page` and `per_page` query parameters to paginate the results. The response body contains a `vector_dbs` array of vector database objects and a `total` field with the overall count.</td>
</tr>
<tr>
    <td><a href="#vector_databases_create"><CopyableCode code="vector_databases_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To create a vector database, send a POST request to `/v2/vector-databases`. The response body contains a JSON object with a `vector_db` key holding the newly created database. Its initial `status` is `creating` and changes to `active` once the database is ready to receive traffic.</td>
</tr>
<tr>
    <td><a href="#vector_databases_update"><CopyableCode code="vector_databases_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>To update an existing vector database, send a PUT request to `/v2/vector-databases/&#123;id&#125;`. The response body contains a JSON object with a `vector_db` key holding the updated vector database.</td>
</tr>
<tr>
    <td><a href="#vector_databases_delete"><CopyableCode code="vector_databases_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>To delete a vector database, send a DELETE request to `/v2/vector-databases/&#123;id&#125;`. Deleting a vector database is irreversible and destroys the underlying instance along with its data.</td>
</tr>
<tr>
    <td><a href="#vector_databases_post_resize"><CopyableCode code="vector_databases_post_resize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>To resize a vector database, send a POST request to `/v2/vector-databases/&#123;id&#125;/resize`. This changes the database's resource tier. The response body contains a JSON object with the updated vector database.</td>
</tr>
<tr>
    <td><a href="#vector_databases_update_tags"><CopyableCode code="vector_databases_update_tags" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>To update the tags on a vector database, send a PUT request to `/v2/vector-databases/&#123;id&#125;/tags`. The supplied set of tags replaces the database's existing tags.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Required. ID of the vector database to update tags for. (example: "example string")</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td> (example: 1)</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td> (example: 1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="vector_databases_get"
    values={[
        { label: 'vector_databases_get', value: 'vector_databases_get' },
        { label: 'vector_databases_list', value: 'vector_databases_list' }
    ]}
>
<TabItem value="vector_databases_get">

To show information about an existing vector database, send a GET request to `/v2/vector-databases/&#123;id&#125;`. The response body contains a JSON object with a `vector_db` key holding the standard vector database attributes, including an embedded `endpoints` object with the connection information needed to access the database.

```sql
SELECT
id,
name,
forked_from_id,
last_restore_id,
project_id,
config,
created_at,
endpoints,
owner_uuid,
region,
size,
status,
tags,
updated_at
FROM digitalocean.databases.vector_databases
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="vector_databases_list">

To list all of the vector databases on your account, send a GET request to `/v2/vector-databases`. Use the `page` and `per_page` query parameters to paginate the results. The response body contains a `vector_dbs` array of vector database objects and a `total` field with the overall count.

```sql
SELECT
id,
name,
forked_from_id,
last_restore_id,
project_id,
config,
created_at,
endpoints,
owner_uuid,
region,
size,
status,
tags,
updated_at
FROM digitalocean.databases.vector_databases
WHERE page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="vector_databases_create"
    values={[
        { label: 'vector_databases_create', value: 'vector_databases_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="vector_databases_create">

To create a vector database, send a POST request to `/v2/vector-databases`. The response body contains a JSON object with a `vector_db` key holding the newly created database. Its initial `status` is `creating` and changes to `active` once the database is ready to receive traffic.

```sql
INSERT INTO digitalocean.databases.vector_databases (
name,
project_id,
region,
size,
tags
)
SELECT 
'{{ name }}',
'{{ project_id }}',
'{{ region }}',
'{{ size }}',
'{{ tags }}'
RETURNING
vector_db
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vector_databases
  props:
    - name: name
      value: "{{ name }}"
      description: |
        Required. Human-readable name for the database.
    - name: project_id
      value: "{{ project_id }}"
      description: |
        Required. ID of the project to create the vector database in.
    - name: region
      value: "{{ region }}"
      description: |
        Required. Region slug where the database will be provisioned.
    - name: size
      value: "{{ size }}"
      description: |
        Required. Resource tier: small, medium, or large.
    - name: tags
      value:
        - "{{ tags }}"
      description: |
        A set of arbitrary tags to organize your vector database
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="vector_databases_update"
    values={[
        { label: 'vector_databases_update', value: 'vector_databases_update' }
    ]}
>
<TabItem value="vector_databases_update">

To update an existing vector database, send a PUT request to `/v2/vector-databases/&#123;id&#125;`. The response body contains a JSON object with a `vector_db` key holding the updated vector database.

```sql
REPLACE digitalocean.databases.vector_databases
SET 
config = '{{ config }}',
id = '{{ id }}',
project_id = '{{ project_id }}'
WHERE 
id = '{{ id }}' --required
RETURNING
vector_db;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="vector_databases_delete"
    values={[
        { label: 'vector_databases_delete', value: 'vector_databases_delete' }
    ]}
>
<TabItem value="vector_databases_delete">

To delete a vector database, send a DELETE request to `/v2/vector-databases/&#123;id&#125;`. Deleting a vector database is irreversible and destroys the underlying instance along with its data.

```sql
DELETE FROM digitalocean.databases.vector_databases
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="vector_databases_post_resize"
    values={[
        { label: 'vector_databases_post_resize', value: 'vector_databases_post_resize' },
        { label: 'vector_databases_update_tags', value: 'vector_databases_update_tags' }
    ]}
>
<TabItem value="vector_databases_post_resize">

To resize a vector database, send a POST request to `/v2/vector-databases/&#123;id&#125;/resize`. This changes the database's resource tier. The response body contains a JSON object with the updated vector database.

```sql
EXEC digitalocean.databases.vector_databases.vector_databases_post_resize 
@id='{{ id }}' --required 
@@json=
'{
"id": "{{ id }}", 
"size": "{{ size }}"
}'
;
```
</TabItem>
<TabItem value="vector_databases_update_tags">

To update the tags on a vector database, send a PUT request to `/v2/vector-databases/&#123;id&#125;/tags`. The supplied set of tags replaces the database's existing tags.

```sql
EXEC digitalocean.databases.vector_databases.vector_databases_update_tags 
@id='{{ id }}' --required 
@@json=
'{
"id": "{{ id }}", 
"tags": "{{ tags }}"
}'
;
```
</TabItem>
</Tabs>
