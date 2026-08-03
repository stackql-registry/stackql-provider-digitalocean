--- 
title: database_mysql_schema_throughput
hide_title: false
hide_table_of_contents: false
keywords:
  - database_mysql_schema_throughput
  - monitoring
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

Creates, updates, deletes, gets or lists a <code>database_mysql_schema_throughput</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="database_mysql_schema_throughput" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.monitoring.database_mysql_schema_throughput" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="monitoring_get_database_mysql_schema_throughput"
    values={[
        { label: 'monitoring_get_database_mysql_schema_throughput', value: 'monitoring_get_database_mysql_schema_throughput' }
    ]}
>
<TabItem value="monitoring_get_database_mysql_schema_throughput">

The response will be a JSON object with a key called `data` and `status`.

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
    <td><CopyableCode code="data" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (success, error) (example: success)</td>
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
    <td><a href="#monitoring_get_database_mysql_schema_throughput"><CopyableCode code="monitoring_get_database_mysql_schema_throughput" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-db_id"><code>db_id</code></a>, <a href="#parameter-schema"><code>schema</code></a>, <a href="#parameter-metric"><code>metric</code></a>, <a href="#parameter-start"><code>start</code></a>, <a href="#parameter-end"><code>end</code></a></td>
    <td></td>
    <td>Retrieve table I/O throughput (rows per second) for a schema. Requires **schema** and **metric** (insert, fetch, update, delete).</td>
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
<tr id="parameter-db_id">
    <td><CopyableCode code="db_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The DBaaS cluster UUID (database ID). (example: 9cc10173-e9ea-4176-9dbc-a4cee4c4ff30)</td>
</tr>
<tr id="parameter-end">
    <td><CopyableCode code="end" /></td>
    <td><code>string</code></td>
    <td>UNIX timestamp to end metric window. (example: 1620705417)</td>
</tr>
<tr id="parameter-metric">
    <td><CopyableCode code="metric" /></td>
    <td><code>string</code></td>
    <td>Table I/O operation (insert, fetch, update, or delete). (example: insert)</td>
</tr>
<tr id="parameter-schema">
    <td><CopyableCode code="schema" /></td>
    <td><code>string</code></td>
    <td>The schema (database) name. (example: defaultdb)</td>
</tr>
<tr id="parameter-start">
    <td><CopyableCode code="start" /></td>
    <td><code>string</code></td>
    <td>UNIX timestamp to start metric window. (example: 1620683817)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="monitoring_get_database_mysql_schema_throughput"
    values={[
        { label: 'monitoring_get_database_mysql_schema_throughput', value: 'monitoring_get_database_mysql_schema_throughput' }
    ]}
>
<TabItem value="monitoring_get_database_mysql_schema_throughput">

Retrieve table I/O throughput (rows per second) for a schema. Requires **schema** and **metric** (insert, fetch, update, delete).

```sql
SELECT
data,
status
FROM digitalocean.monitoring.database_mysql_schema_throughput
WHERE db_id = '{{ db_id }}' -- required
AND schema = '{{ schema }}' -- required
AND metric = '{{ metric }}' -- required
AND start = '{{ start }}' -- required
AND end = '{{ end }}' -- required
;
```
</TabItem>
</Tabs>
