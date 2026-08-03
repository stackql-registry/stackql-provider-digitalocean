--- 
title: insights
hide_title: false
hide_table_of_contents: false
keywords:
  - insights
  - billing
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

Creates, updates, deletes, gets or lists an <code>insights</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="insights" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.billing.insights" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="billing_insights_list"
    values={[
        { label: 'billing_insights_list', value: 'billing_insights_list' }
    ]}
>
<TabItem value="billing_insights_list">

The response will be a JSON object that contains a list of billing data points under the `data_points` key, along with pagination metadata including `total_items`, `total_pages`, and `current_page`.

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the billed resource or service as shown on an invoice item (example: droplet name (c-2-4GiB))</td>
</tr>
<tr>
    <td><CopyableCode code="group_description" /></td>
    <td><code>string</code></td>
    <td>Optional invoice item group name of the billed resource or service, blank when not part an invoice item group (example: kubernetes cluster name)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region where the usage occurred (example: nyc3)</td>
</tr>
<tr>
    <td><CopyableCode code="sku" /></td>
    <td><code>string</code></td>
    <td>Unique SKU identifier for the billed resource (example: 1-DO-DROP-0109)</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date)</code></td>
    <td>Start date of the billing data point in YYYY-MM-DD format (example: 2025-01-15)</td>
</tr>
<tr>
    <td><CopyableCode code="total_amount" /></td>
    <td><code>string</code></td>
    <td>Total amount for this data point in USD (example: 12.45)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_team_urn" /></td>
    <td><code>string</code></td>
    <td>URN of the team that incurred the usage (example: do:team:12345678-1234-1234-1234-123456789012)</td>
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
    <td><a href="#billing_insights_list"><CopyableCode code="billing_insights_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_urn"><code>account_urn</code></a>, <a href="#parameter-start_date"><code>start_date</code></a>, <a href="#parameter-end_date"><code>end_date</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td><br />This endpoint returns day-over-day changes in billing resource usage based on nightly invoice items, including total amount, region, SKU, and description for a specified date range. It is important to note that the daily resource usage may not reflect month-end billing totals when totaled for a given month as nightly invoice item estimates do not necessarily encompass all invoicing factors for the entire month.</td>
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
<tr id="parameter-account_urn">
    <td><CopyableCode code="account_urn" /></td>
    <td><code>string</code></td>
    <td>URN of the customer account, can be a team (do:team:uuid) or an organization (do:teamgroup:uuid) (example: do:team:12345678-1234-1234-1234-123456789012)</td>
</tr>
<tr id="parameter-end_date">
    <td><CopyableCode code="end_date" /></td>
    <td><code>string (date)</code></td>
    <td>End date for billing insights in YYYY-MM-DD format. Must be within 31 days of start_date (example: 2025-01-31)</td>
</tr>
<tr id="parameter-start_date">
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date)</code></td>
    <td>Start date for billing insights in YYYY-MM-DD format (example: 2025-01-01)</td>
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
    defaultValue="billing_insights_list"
    values={[
        { label: 'billing_insights_list', value: 'billing_insights_list' }
    ]}
>
<TabItem value="billing_insights_list">

<br />This endpoint returns day-over-day changes in billing resource usage based on nightly invoice items, including total amount, region, SKU, and description for a specified date range. It is important to note that the daily resource usage may not reflect month-end billing totals when totaled for a given month as nightly invoice item estimates do not necessarily encompass all invoicing factors for the entire month.

```sql
SELECT
description,
group_description,
region,
sku,
start_date,
total_amount,
usage_team_urn
FROM digitalocean.billing.insights
WHERE account_urn = '{{ account_urn }}' -- required
AND start_date = '{{ start_date }}' -- required
AND end_date = '{{ end_date }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
