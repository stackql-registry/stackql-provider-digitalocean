--- 
title: suppressions
hide_title: false
hide_table_of_contents: false
keywords:
  - suppressions
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

Creates, updates, deletes, gets or lists a <code>suppressions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="suppressions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.security.suppressions" /></td></tr>
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
    <td><a href="#security_create_suppression"><CopyableCode code="security_create_suppression" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To suppress scan findings, send a POST request to `/v2/security/settings/suppressions`.</td>
</tr>
<tr>
    <td><a href="#security_delete_suppression"><CopyableCode code="security_delete_suppression" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-suppression_uuid"><code>suppression_uuid</code></a></td>
    <td></td>
    <td>To remove a suppression, send a DELETE request to `/v2/security/settings/suppressions/&#123;suppression_uuid&#125;`.</td>
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
<tr id="parameter-suppression_uuid">
    <td><CopyableCode code="suppression_uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>The suppression UUID to remove. (example: 5b3b2b2d-5c9c-4a61-9e2f-4d8f80f30a12)</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="security_create_suppression"
    values={[
        { label: 'security_create_suppression', value: 'security_create_suppression' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="security_create_suppression">

To suppress scan findings, send a POST request to `/v2/security/settings/suppressions`.

```sql
INSERT INTO digitalocean.security.suppressions (
rule_uuid,
resources
)
SELECT 
'{{ rule_uuid }}',
'{{ resources }}'
RETURNING
links,
meta,
resources
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: suppressions
  props:
    - name: rule_uuid
      value: "{{ rule_uuid }}"
      description: |
        The rule UUID to suppress for the listed resources.
    - name: resources
      value:
        - "{{ resources }}"
      description: |
        The URNs of resources to suppress for the rule.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="security_delete_suppression"
    values={[
        { label: 'security_delete_suppression', value: 'security_delete_suppression' }
    ]}
>
<TabItem value="security_delete_suppression">

To remove a suppression, send a DELETE request to `/v2/security/settings/suppressions/&#123;suppression_uuid&#125;`.

```sql
DELETE FROM digitalocean.security.suppressions
WHERE suppression_uuid = '{{ suppression_uuid }}' --required
;
```
</TabItem>
</Tabs>
