--- 
title: scans
hide_title: false
hide_table_of_contents: false
keywords:
  - scans
  - security
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

Creates, updates, deletes, gets or lists a <code>scans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.security.scans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="security_get_scan"
    values={[
        { label: 'security_get_scan', value: 'security_get_scan' },
        { label: 'security_list_scans', value: 'security_list_scans' },
        { label: 'security_get_latest_scan', value: 'security_get_latest_scan' }
    ]}
>
<TabItem value="security_get_scan">

The response will be a JSON object with a key called `scan`.

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
    <td>The unique identifier for the scan. (title: id, example: 760e09ef-dc84-11e8-981e-3cfdfeaae000)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When scan was created. (title: created_at, example: 2025-12-04T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="findings" /></td>
    <td><code>array</code></td>
    <td> (title: findings)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the scan. (IN_PROGRESS, COMPLETED, FAILED, CSPM_NOT_ENABLED, SCAN_NOT_RUN) (title: status, example: COMPLETED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="security_list_scans">

The response will be a JSON object with a key called `scans`. This will be set to an array of objects, each of which will contain the standard attributes associated with a scan.

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
    <td>The unique identifier for the scan. (title: id, example: 760e09ef-dc84-11e8-981e-3cfdfeaae000)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When scan was created. (title: created_at, example: 2025-12-04T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="findings" /></td>
    <td><code>array</code></td>
    <td> (title: findings)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the scan. (IN_PROGRESS, COMPLETED, FAILED, CSPM_NOT_ENABLED, SCAN_NOT_RUN) (title: status, example: COMPLETED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="security_get_latest_scan">

The response will be a JSON object with a key called `scan`.

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
    <td>The unique identifier for the scan. (title: id, example: 760e09ef-dc84-11e8-981e-3cfdfeaae000)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When scan was created. (title: created_at, example: 2025-12-04T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="findings" /></td>
    <td><code>array</code></td>
    <td> (title: findings)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the scan. (IN_PROGRESS, COMPLETED, FAILED, CSPM_NOT_ENABLED, SCAN_NOT_RUN) (title: status, example: COMPLETED)</td>
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
    <td><a href="#security_get_scan"><CopyableCode code="security_get_scan" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-scan_id"><code>scan_id</code></a></td>
    <td><a href="#parameter-severity"><code>severity</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>To get a CSPM scan by ID, send a GET request to `/v2/security/scans/&#123;scan_id&#125;`.</td>
</tr>
<tr>
    <td><a href="#security_list_scans"><CopyableCode code="security_list_scans" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list all CSPM scans, send a GET request to `/v2/security/scans`.</td>
</tr>
<tr>
    <td><a href="#security_get_latest_scan"><CopyableCode code="security_get_latest_scan" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-severity"><code>severity</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>To get the latest CSPM scan, send a GET request to `/v2/security/scans/latest`.</td>
</tr>
<tr>
    <td><a href="#security_create_scan"><CopyableCode code="security_create_scan" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To create a CSPM scan, send a POST request to `/v2/security/scans`.</td>
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
<tr id="parameter-scan_id">
    <td><CopyableCode code="scan_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The scan UUID. (example: 497dcba3-ecbf-4587-a2dd-5eb0665e6880)</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>Which 'page' of paginated results to return. (example: 1)</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>Number of items returned per page (example: 2)</td>
</tr>
<tr id="parameter-severity">
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The finding severity level to include. (example: CRITICAL)</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The finding type to include. (example: CSPM)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="security_get_scan"
    values={[
        { label: 'security_get_scan', value: 'security_get_scan' },
        { label: 'security_list_scans', value: 'security_list_scans' },
        { label: 'security_get_latest_scan', value: 'security_get_latest_scan' }
    ]}
>
<TabItem value="security_get_scan">

To get a CSPM scan by ID, send a GET request to `/v2/security/scans/&#123;scan_id&#125;`.

```sql
SELECT
id,
created_at,
findings,
status
FROM digitalocean.security.scans
WHERE scan_id = '{{ scan_id }}' -- required
AND severity = '{{ severity }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND type = '{{ type }}'
;
```
</TabItem>
<TabItem value="security_list_scans">

To list all CSPM scans, send a GET request to `/v2/security/scans`.

```sql
SELECT
id,
created_at,
findings,
status
FROM digitalocean.security.scans
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="security_get_latest_scan">

To get the latest CSPM scan, send a GET request to `/v2/security/scans/latest`.

```sql
SELECT
id,
created_at,
findings,
status
FROM digitalocean.security.scans
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND severity = '{{ severity }}'
AND type = '{{ type }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="security_create_scan"
    values={[
        { label: 'security_create_scan', value: 'security_create_scan' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="security_create_scan">

To create a CSPM scan, send a POST request to `/v2/security/scans`.

```sql
INSERT INTO digitalocean.security.scans (

)
SELECT 

RETURNING
scan
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: scans
  props:
`}</CodeBlock>

</TabItem>
</Tabs>
