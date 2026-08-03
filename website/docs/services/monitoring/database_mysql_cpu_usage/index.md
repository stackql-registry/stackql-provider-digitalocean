--- 
title: database_mysql_cpu_usage
hide_title: false
hide_table_of_contents: false
keywords:
  - database_mysql_cpu_usage
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

Creates, updates, deletes, gets or lists a <code>database_mysql_cpu_usage</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="database_mysql_cpu_usage" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.monitoring.database_mysql_cpu_usage" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="monitoring_get_database_mysql_cpu_usage"
    values={[
        { label: 'monitoring_get_database_mysql_cpu_usage', value: 'monitoring_get_database_mysql_cpu_usage' }
    ]}
>
<TabItem value="monitoring_get_database_mysql_cpu_usage">

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
    <td><a href="#monitoring_get_database_mysql_cpu_usage"><CopyableCode code="monitoring_get_database_mysql_cpu_usage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-db_id"><code>db_id</code></a>, <a href="#parameter-aggregate"><code>aggregate</code></a>, <a href="#parameter-start"><code>start</code></a>, <a href="#parameter-end"><code>end</code></a></td>
    <td></td>
    <td>Retrieve CPU usage (percent) for a MySQL cluster. Response is a time series of cluster-level CPU usage. Use **aggregate** to get avg, max, or min over the range.</td>
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
<tr id="parameter-aggregate">
    <td><CopyableCode code="aggregate" /></td>
    <td><code>string</code></td>
    <td>Aggregation over the time range (avg, max, or min). (example: avg)</td>
</tr>
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
<tr id="parameter-start">
    <td><CopyableCode code="start" /></td>
    <td><code>string</code></td>
    <td>UNIX timestamp to start metric window. (example: 1620683817)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="monitoring_get_database_mysql_cpu_usage"
    values={[
        { label: 'monitoring_get_database_mysql_cpu_usage', value: 'monitoring_get_database_mysql_cpu_usage' }
    ]}
>
<TabItem value="monitoring_get_database_mysql_cpu_usage">

Retrieve CPU usage (percent) for a MySQL cluster. Response is a time series of cluster-level CPU usage. Use **aggregate** to get avg, max, or min over the range.

```sql
SELECT
data,
status
FROM digitalocean.monitoring.database_mysql_cpu_usage
WHERE db_id = '{{ db_id }}' -- required
AND aggregate = '{{ aggregate }}' -- required
AND start = '{{ start }}' -- required
AND end = '{{ end }}' -- required
;
```
</TabItem>
</Tabs>
