--- 
title: scan_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - scan_rules
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

Creates, updates, deletes, gets or lists a <code>scan_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scan_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.security.scan_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#security_create_scan_rule"><CopyableCode code="security_create_scan_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To mark a scan finding as a false positive, send a POST request to<br />`/v2/security/scans/rules` to create a new scan rule.</td>
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
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="security_create_scan_rule"
    values={[
        { label: 'security_create_scan_rule', value: 'security_create_scan_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="security_create_scan_rule">

To mark a scan finding as a false positive, send a POST request to<br />`/v2/security/scans/rules` to create a new scan rule.

```sql
INSERT INTO digitalocean.security.scan_rules (
resource
)
SELECT 
'{{ resource }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: scan_rules
  props:
    - name: resource
      value: "{{ resource }}"
      description: |
        The URN of a resource to exclude from future scans.
`}</CodeBlock>

</TabItem>
</Tabs>
