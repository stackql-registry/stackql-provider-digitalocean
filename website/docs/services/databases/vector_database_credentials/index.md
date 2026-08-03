--- 
title: vector_database_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - vector_database_credentials
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

Creates, updates, deletes, gets or lists a <code>vector_database_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vector_database_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.databases.vector_database_credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="vector_databases_get_credentials"
    values={[
        { label: 'vector_databases_get_credentials', value: 'vector_databases_get_credentials' }
    ]}
>
<TabItem value="vector_databases_get_credentials">

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
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>Database user id from the cluster secret (opaque; matches what was provisioned). (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="api_token" /></td>
    <td><code>string</code></td>
    <td>API token for that user. (example: example string)</td>
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
    <td><a href="#vector_databases_get_credentials"><CopyableCode code="vector_databases_get_credentials" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>To retrieve the admin credentials for a vector database, send a GET request to `/v2/vector-databases/&#123;id&#125;/credentials`. The response body contains the `user_id` and `api_token` for the admin user provisioned on the cluster.</td>
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
    <td>ID of the vector database. (example: "example string")</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="vector_databases_get_credentials"
    values={[
        { label: 'vector_databases_get_credentials', value: 'vector_databases_get_credentials' }
    ]}
>
<TabItem value="vector_databases_get_credentials">

To retrieve the admin credentials for a vector database, send a GET request to `/v2/vector-databases/&#123;id&#125;/credentials`. The response body contains the `user_id` and `api_token` for the admin user provisioned on the cluster.

```sql
SELECT
user_id,
api_token
FROM digitalocean.databases.vector_database_credentials
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
</Tabs>
