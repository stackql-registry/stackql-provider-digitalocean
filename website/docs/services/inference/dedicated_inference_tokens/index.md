--- 
title: dedicated_inference_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - dedicated_inference_tokens
  - inference
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

Creates, updates, deletes, gets or lists a <code>dedicated_inference_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dedicated_inference_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.inference.dedicated_inference_tokens" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="dedicated_inferences_list_tokens"
    values={[
        { label: 'dedicated_inferences_list_tokens', value: 'dedicated_inferences_list_tokens' }
    ]}
>
<TabItem value="dedicated_inferences_list_tokens">

The response will be a JSON object with a key called `tokens`. This will be set to an array of objects (id, name, created_at, is_managed; value is not returned). Pagination uses the same `links` and `meta` structure as other list endpoints (e.g. VPC peerings).

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
    <td><code>string (uuid)</code></td>
    <td>Unique ID of the token. (example: 01333f14-a903-4b8e-92b3-363a767aa052)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the token. (example: first-token)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2024-01-09T20:44:32Z)</td>
</tr>
<tr>
    <td><CopyableCode code="is_managed" /></td>
    <td><code>boolean</code></td>
    <td>When true, the token is managed by DigitalOcean (for example, system-provisioned). When false, the token was created by the user.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>Token value; only returned once on create. Store securely. (example: di_xxxxxxxxxxxxxxxxxxxxxxxx)</td>
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
    <td><a href="#dedicated_inferences_list_tokens"><CopyableCode code="dedicated_inferences_list_tokens" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dedicated_inference_id"><code>dedicated_inference_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>List all access tokens for a Dedicated Inference instance. Token values are<br />not returned; only id, name, created_at, and is_managed. Send a GET request to<br />`/v2/dedicated-inferences/&#123;dedicated_inference_id&#125;/tokens`.<br /></td>
</tr>
<tr>
    <td><a href="#dedicated_inferences_create_tokens"><CopyableCode code="dedicated_inferences_create_tokens" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-dedicated_inference_id"><code>dedicated_inference_id</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create a new access token for a Dedicated Inference instance. Send a POST<br />request to `/v2/dedicated-inferences/&#123;dedicated_inference_id&#125;/tokens` with a<br />`name`. The token value is returned only once in the response; store it securely.<br /></td>
</tr>
<tr>
    <td><a href="#dedicated_inferences_delete_tokens"><CopyableCode code="dedicated_inferences_delete_tokens" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-dedicated_inference_id"><code>dedicated_inference_id</code></a>, <a href="#parameter-token_id"><code>token_id</code></a></td>
    <td></td>
    <td>Revoke (delete) an access token for a Dedicated Inference instance. Send a<br />DELETE request to `/v2/dedicated-inferences/&#123;dedicated_inference_id&#125;/tokens/&#123;token_id&#125;`.<br /></td>
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
<tr id="parameter-dedicated_inference_id">
    <td><CopyableCode code="dedicated_inference_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique identifier for a Dedicated Inference instance. (example: 6b5c619c-359c-44ca-87e2-47e98170c01d)</td>
</tr>
<tr id="parameter-token_id">
    <td><CopyableCode code="token_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique identifier for a Dedicated Inference access token. (example: f11d4795-c1db-4ac3-9aa6-a0ea3c58877e)</td>
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
    defaultValue="dedicated_inferences_list_tokens"
    values={[
        { label: 'dedicated_inferences_list_tokens', value: 'dedicated_inferences_list_tokens' }
    ]}
>
<TabItem value="dedicated_inferences_list_tokens">

List all access tokens for a Dedicated Inference instance. Token values are<br />not returned; only id, name, created_at, and is_managed. Send a GET request to<br />`/v2/dedicated-inferences/&#123;dedicated_inference_id&#125;/tokens`.<br />

```sql
SELECT
id,
name,
created_at,
is_managed,
value
FROM digitalocean.inference.dedicated_inference_tokens
WHERE dedicated_inference_id = '{{ dedicated_inference_id }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="dedicated_inferences_create_tokens"
    values={[
        { label: 'dedicated_inferences_create_tokens', value: 'dedicated_inferences_create_tokens' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="dedicated_inferences_create_tokens">

Create a new access token for a Dedicated Inference instance. Send a POST<br />request to `/v2/dedicated-inferences/&#123;dedicated_inference_id&#125;/tokens` with a<br />`name`. The token value is returned only once in the response; store it securely.<br />

```sql
INSERT INTO digitalocean.inference.dedicated_inference_tokens (
name,
dedicated_inference_id
)
SELECT 
'{{ name }}' /* required */,
'{{ dedicated_inference_id }}'
RETURNING
token
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dedicated_inference_tokens
  props:
    - name: dedicated_inference_id
      value: "{{ dedicated_inference_id }}"
      description: Required parameter for the dedicated_inference_tokens resource.
    - name: name
      value: "{{ name }}"
      description: |
        Name for the new token.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="dedicated_inferences_delete_tokens"
    values={[
        { label: 'dedicated_inferences_delete_tokens', value: 'dedicated_inferences_delete_tokens' }
    ]}
>
<TabItem value="dedicated_inferences_delete_tokens">

Revoke (delete) an access token for a Dedicated Inference instance. Send a<br />DELETE request to `/v2/dedicated-inferences/&#123;dedicated_inference_id&#125;/tokens/&#123;token_id&#125;`.<br />

```sql
DELETE FROM digitalocean.inference.dedicated_inference_tokens
WHERE dedicated_inference_id = '{{ dedicated_inference_id }}' --required
AND token_id = '{{ token_id }}' --required
;
```
</TabItem>
</Tabs>
