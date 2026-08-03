--- 
title: settings
hide_title: false
hide_table_of_contents: false
keywords:
  - settings
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

Creates, updates, deletes, gets or lists a <code>settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.security.settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="security_list_settings"
    values={[
        { label: 'security_list_settings', value: 'security_list_settings' }
    ]}
>
<TabItem value="security_list_settings">

The response will be a JSON object with scan settings.

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
    <td><CopyableCode code="plan_downgrades" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="settings" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="tier_coverage" /></td>
    <td><code>object</code></td>
    <td></td>
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
    <td><a href="#security_list_settings"><CopyableCode code="security_list_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>To list CSPM scan settings, send a GET request to `/v2/security/settings`.</td>
</tr>
<tr>
    <td><a href="#security_update_settings_plan"><CopyableCode code="security_update_settings_plan" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td></td>
    <td></td>
    <td>To update CSPM plan coverage, send a PUT request to `/v2/security/settings/plan`.</td>
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
    defaultValue="security_list_settings"
    values={[
        { label: 'security_list_settings', value: 'security_list_settings' }
    ]}
>
<TabItem value="security_list_settings">

To list CSPM scan settings, send a GET request to `/v2/security/settings`.

```sql
SELECT
plan_downgrades,
settings,
tier_coverage
FROM digitalocean.security.settings
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="security_update_settings_plan"
    values={[
        { label: 'security_update_settings_plan', value: 'security_update_settings_plan' }
    ]}
>
<TabItem value="security_update_settings_plan">

To update CSPM plan coverage, send a PUT request to `/v2/security/settings/plan`.

```sql
REPLACE digitalocean.security.settings
SET 
tier_coverage = '{{ tier_coverage }}'
RETURNING
tier_coverage;
```
</TabItem>
</Tabs>
