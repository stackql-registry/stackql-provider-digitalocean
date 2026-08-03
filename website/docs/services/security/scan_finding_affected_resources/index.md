--- 
title: scan_finding_affected_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - scan_finding_affected_resources
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

Creates, updates, deletes, gets or lists a <code>scan_finding_affected_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scan_finding_affected_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.security.scan_finding_affected_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="security_list_scan_finding_affected_resources"
    values={[
        { label: 'security_list_scan_finding_affected_resources', value: 'security_list_scan_finding_affected_resources' }
    ]}
>
<TabItem value="security_list_scan_finding_affected_resources">

The response will be a JSON object with a key called `affected_resources`.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the affected resource. (title: name, example: Test Droplet)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the affected resource. (title: type, example: Droplet)</td>
</tr>
<tr>
    <td><CopyableCode code="urn" /></td>
    <td><code>string</code></td>
    <td>The URN for the affected resource. (title: urn, example: do:droplet:760e09ef-dc84-11e8-981e-3cfdfeaae000)</td>
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
    <td><a href="#security_list_scan_finding_affected_resources"><CopyableCode code="security_list_scan_finding_affected_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-scan_id"><code>scan_id</code></a>, <a href="#parameter-finding_uuid"><code>finding_uuid</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To get affected resources for a scan finding, send a GET request to `/v2/security/scans/&#123;scan_id&#125;/findings/&#123;finding_uuid&#125;/affected_resources`.</td>
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
<tr id="parameter-finding_uuid">
    <td><CopyableCode code="finding_uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>The finding UUID. (example: 50e14f43-dd4e-412f-864d-78943ea28d91)</td>
</tr>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="security_list_scan_finding_affected_resources"
    values={[
        { label: 'security_list_scan_finding_affected_resources', value: 'security_list_scan_finding_affected_resources' }
    ]}
>
<TabItem value="security_list_scan_finding_affected_resources">

To get affected resources for a scan finding, send a GET request to `/v2/security/scans/&#123;scan_id&#125;/findings/&#123;finding_uuid&#125;/affected_resources`.

```sql
SELECT
name,
type,
urn
FROM digitalocean.security.scan_finding_affected_resources
WHERE scan_id = '{{ scan_id }}' -- required
AND finding_uuid = '{{ finding_uuid }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
