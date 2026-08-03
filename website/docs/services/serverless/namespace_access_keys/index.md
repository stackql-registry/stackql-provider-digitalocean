--- 
title: namespace_access_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - namespace_access_keys
  - serverless
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

Creates, updates, deletes, gets or lists a <code>namespace_access_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="namespace_access_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.serverless.namespace_access_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="functions_access_key_list"
    values={[
        { label: 'functions_access_key_list', value: 'functions_access_key_list' }
    ]}
>
<TabItem value="functions_access_key_list">

A JSON response containing a list of access keys for the namespace.

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
    <td>The access key's unique identifier with prefix 'dof_v1_'. (example: dof_v1_d79e8aeb42e5476893c7d4c59a166264)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The access key's name. (example: my-function-access-key)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the key was created. (example: 2025-12-19T10:30:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the key expires (null for non-expiring keys). (example: 2026-12-19T10:30:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the key was last updated. (example: 2025-12-19T10:30:00Z)</td>
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
    <td><a href="#functions_access_key_list"><CopyableCode code="functions_access_key_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-namespace_id"><code>namespace_id</code></a></td>
    <td></td>
    <td>Lists all access keys for a serverless functions namespace.<br /><br />To list access keys, send a GET request to `/v2/functions/namespaces/&#123;namespace_id&#125;/keys`.<br /></td>
</tr>
<tr>
    <td><a href="#functions_access_key_create"><CopyableCode code="functions_access_key_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-namespace_id"><code>namespace_id</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new access key for a serverless functions namespace. <br />The access key can be used to authenticate requests to the namespace's functions.<br />The secret key is only returned once upon creation.<br /><br />To create an access key, send a POST request to `/v2/functions/namespaces/&#123;namespace_id&#125;/keys`.<br /></td>
</tr>
<tr>
    <td><a href="#functions_access_key_update"><CopyableCode code="functions_access_key_update" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-namespace_id"><code>namespace_id</code></a>, <a href="#parameter-key_id"><code>key_id</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Updates the name of an access key for a serverless functions namespace.<br /><br />To update an access key, send a PUT request to `/v2/functions/namespaces/&#123;namespace_id&#125;/keys/&#123;key_id&#125;`.<br /></td>
</tr>
<tr>
    <td><a href="#functions_access_key_delete"><CopyableCode code="functions_access_key_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-namespace_id"><code>namespace_id</code></a>, <a href="#parameter-key_id"><code>key_id</code></a></td>
    <td></td>
    <td>Deletes an access key for a serverless functions namespace.<br /><br />To delete an access key, send a DELETE request to `/v2/functions/namespaces/&#123;namespace_id&#125;/keys/&#123;key_id&#125;`.<br /></td>
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
<tr id="parameter-key_id">
    <td><CopyableCode code="key_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the access key to be managed. (example: dof-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)</td>
</tr>
<tr id="parameter-namespace_id">
    <td><CopyableCode code="namespace_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the namespace to be managed. (example: fn-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="functions_access_key_list"
    values={[
        { label: 'functions_access_key_list', value: 'functions_access_key_list' }
    ]}
>
<TabItem value="functions_access_key_list">

Lists all access keys for a serverless functions namespace.<br /><br />To list access keys, send a GET request to `/v2/functions/namespaces/&#123;namespace_id&#125;/keys`.<br />

```sql
SELECT
id,
name,
created_at,
expires_at,
updated_at
FROM digitalocean.serverless.namespace_access_keys
WHERE namespace_id = '{{ namespace_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="functions_access_key_create"
    values={[
        { label: 'functions_access_key_create', value: 'functions_access_key_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="functions_access_key_create">

Creates a new access key for a serverless functions namespace. <br />The access key can be used to authenticate requests to the namespace's functions.<br />The secret key is only returned once upon creation.<br /><br />To create an access key, send a POST request to `/v2/functions/namespaces/&#123;namespace_id&#125;/keys`.<br />

```sql
INSERT INTO digitalocean.serverless.namespace_access_keys (
name,
expires_in,
namespace_id
)
SELECT 
'{{ name }}' /* required */,
'{{ expires_in }}',
'{{ namespace_id }}'
RETURNING
access_key
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: namespace_access_keys
  props:
    - name: namespace_id
      value: "{{ namespace_id }}"
      description: Required parameter for the namespace_access_keys resource.
    - name: name
      value: "{{ name }}"
      description: |
        The access key's name.
    - name: expires_in
      value: "{{ expires_in }}"
      description: |
        The duration after which the access key expires, specified as a human-readable duration string in the format \`<int>h\` (hours) or \`<int>d\` (days). Minimum value is \`1h\`. If omitted, the key will never expire.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="functions_access_key_update"
    values={[
        { label: 'functions_access_key_update', value: 'functions_access_key_update' }
    ]}
>
<TabItem value="functions_access_key_update">

Updates the name of an access key for a serverless functions namespace.<br /><br />To update an access key, send a PUT request to `/v2/functions/namespaces/&#123;namespace_id&#125;/keys/&#123;key_id&#125;`.<br />

```sql
REPLACE digitalocean.serverless.namespace_access_keys
SET 
name = '{{ name }}'
WHERE 
namespace_id = '{{ namespace_id }}' --required
AND key_id = '{{ key_id }}' --required
AND name = '{{ name }}' --required
RETURNING
access_key;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="functions_access_key_delete"
    values={[
        { label: 'functions_access_key_delete', value: 'functions_access_key_delete' }
    ]}
>
<TabItem value="functions_access_key_delete">

Deletes an access key for a serverless functions namespace.<br /><br />To delete an access key, send a DELETE request to `/v2/functions/namespaces/&#123;namespace_id&#125;/keys/&#123;key_id&#125;`.<br />

```sql
DELETE FROM digitalocean.serverless.namespace_access_keys
WHERE namespace_id = '{{ namespace_id }}' --required
AND key_id = '{{ key_id }}' --required
;
```
</TabItem>
</Tabs>
