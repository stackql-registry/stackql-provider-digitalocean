--- 
title: dedicated_inferences
hide_title: false
hide_table_of_contents: false
keywords:
  - dedicated_inferences
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

Creates, updates, deletes, gets or lists a <code>dedicated_inferences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dedicated_inferences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.inference.dedicated_inferences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="dedicated_inferences_get"
    values={[
        { label: 'dedicated_inferences_get', value: 'dedicated_inferences_get' },
        { label: 'dedicated_inferences_list', value: 'dedicated_inferences_list' }
    ]}
>
<TabItem value="dedicated_inferences_get">

Response containing a single Dedicated Inference instance.

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
    <td>Unique ID of the Dedicated Inference. (example: 6b5c619c-359c-44ca-87e2-47e98170c01d)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the Dedicated Inference was created. (example: 2024-01-09T20:44:32Z)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoints" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pending_deployment_spec" /></td>
    <td><code>object</code></td>
    <td>Pending deployment when status is provisioning or updating.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>DigitalOcean region where the Dedicated Inference is hosted. (example: atl1)</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>Structured configuration for a Dedicated Inference deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current state of the Dedicated Inference. (active, new, provisioning, updating, deleting, error) (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the Dedicated Inference was last updated. (example: 2024-01-09T20:44:32Z)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>VPC UUID of the Dedicated Inference. (example: 997615ce-132d-4bae-9270-9ee21b395e5d)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="dedicated_inferences_list">

The response will be a JSON object with a key called `dedicated_inferences`. This will be set to an array of objects, each of which will contain the standard attributes associated with a Dedicated Inference. Pagination uses the same `links` and `meta` structure as other list endpoints.

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
    <td>Unique ID of the Dedicated Inference. (example: 6b5c619c-359c-44ca-87e2-47e98170c01d)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the Dedicated Inference was created. (example: 2024-01-09T20:44:32Z)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoints" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pending_deployment_spec" /></td>
    <td><code>object</code></td>
    <td>Pending deployment when status is provisioning or updating.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>DigitalOcean region where the Dedicated Inference is hosted. (example: atl1)</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>object</code></td>
    <td>Structured configuration for a Dedicated Inference deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current state of the Dedicated Inference. (active, new, provisioning, updating, deleting, error) (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the Dedicated Inference was last updated. (example: 2024-01-09T20:44:32Z)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>VPC UUID of the Dedicated Inference. (example: 997615ce-132d-4bae-9270-9ee21b395e5d)</td>
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
    <td><a href="#dedicated_inferences_get"><CopyableCode code="dedicated_inferences_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dedicated_inference_id"><code>dedicated_inference_id</code></a></td>
    <td></td>
    <td>Retrieve an existing Dedicated Inference by ID. Send a GET request to<br />`/v2/dedicated-inferences/&#123;dedicated_inference_id&#125;`. The status in the response<br />is one of active, new, provisioning, updating, deleting, or error.<br /></td>
</tr>
<tr>
    <td><a href="#dedicated_inferences_list"><CopyableCode code="dedicated_inferences_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td>List all Dedicated Inference instances for your team. Send a GET request to<br />`/v2/dedicated-inferences`. You may filter by region and use page and per_page<br />for pagination.<br /></td>
</tr>
<tr>
    <td><a href="#dedicated_inferences_create"><CopyableCode code="dedicated_inferences_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Create a new Dedicated Inference for your team. Send a POST request to<br />`/v2/dedicated-inferences` with a `spec` object (version, name, region, vpc,<br />enable_public_endpoint, model_deployments) and optional `access_tokens` (e.g.<br />hugging_face_token for gated models). The response code 202 Accepted indicates<br />the request was accepted for processing; it does not indicate success or failure.<br />The token value is returned only on create; store it securely.<br /></td>
</tr>
<tr>
    <td><a href="#dedicated_inferences_patch"><CopyableCode code="dedicated_inferences_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-dedicated_inference_id"><code>dedicated_inference_id</code></a></td>
    <td></td>
    <td>Update an existing Dedicated Inference. Send a PATCH request to<br />`/v2/dedicated-inferences/&#123;dedicated_inference_id&#125;` with updated `spec` and/or<br />`access_tokens`. Status will move to updating and return to active when done.<br /></td>
</tr>
<tr>
    <td><a href="#dedicated_inferences_delete"><CopyableCode code="dedicated_inferences_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-dedicated_inference_id"><code>dedicated_inference_id</code></a></td>
    <td></td>
    <td>Delete an existing Dedicated Inference. Send a DELETE request to<br />`/v2/dedicated-inferences/&#123;dedicated_inference_id&#125;`. The response 202 Accepted<br />indicates the request was accepted for processing.<br /></td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Filter by region. Dedicated Inference is only available in nyc2, tor1, and atl1. (example: atl1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="dedicated_inferences_get"
    values={[
        { label: 'dedicated_inferences_get', value: 'dedicated_inferences_get' },
        { label: 'dedicated_inferences_list', value: 'dedicated_inferences_list' }
    ]}
>
<TabItem value="dedicated_inferences_get">

Retrieve an existing Dedicated Inference by ID. Send a GET request to<br />`/v2/dedicated-inferences/&#123;dedicated_inference_id&#125;`. The status in the response<br />is one of active, new, provisioning, updating, deleting, or error.<br />

```sql
SELECT
id,
created_at,
endpoints,
pending_deployment_spec,
region,
spec,
status,
updated_at,
vpc_uuid
FROM digitalocean.inference.dedicated_inferences
WHERE dedicated_inference_id = '{{ dedicated_inference_id }}' -- required
;
```
</TabItem>
<TabItem value="dedicated_inferences_list">

List all Dedicated Inference instances for your team. Send a GET request to<br />`/v2/dedicated-inferences`. You may filter by region and use page and per_page<br />for pagination.<br />

```sql
SELECT
id,
created_at,
endpoints,
pending_deployment_spec,
region,
spec,
status,
updated_at,
vpc_uuid
FROM digitalocean.inference.dedicated_inferences
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND region = '{{ region }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="dedicated_inferences_create"
    values={[
        { label: 'dedicated_inferences_create', value: 'dedicated_inferences_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="dedicated_inferences_create">

Create a new Dedicated Inference for your team. Send a POST request to<br />`/v2/dedicated-inferences` with a `spec` object (version, name, region, vpc,<br />enable_public_endpoint, model_deployments) and optional `access_tokens` (e.g.<br />hugging_face_token for gated models). The response code 202 Accepted indicates<br />the request was accepted for processing; it does not indicate success or failure.<br />The token value is returned only on create; store it securely.<br />

```sql
INSERT INTO digitalocean.inference.dedicated_inferences (
spec,
access_tokens
)
SELECT 
'{{ spec }}' /* required */,
'{{ access_tokens }}'
RETURNING
dedicated_inference,
token
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dedicated_inferences
  props:
    - name: spec
      description: |
        Structured configuration for a Dedicated Inference deployment.
      value:
        version: {{ version }}
        name: "{{ name }}"
        region: "{{ region }}"
        vpc:
          uuid: "{{ uuid }}"
        enable_public_endpoint: {{ enable_public_endpoint }}
        model_deployments:
          - model_id: "{{ model_id }}"
            model_slug: "{{ model_slug }}"
            model_provider: "{{ model_provider }}"
            workload_config: "{{ workload_config }}"
            accelerators: "{{ accelerators }}"
    - name: access_tokens
      value: "{{ access_tokens }}"
      description: |
        Key-value pairs for provider tokens (e.g. Hugging Face).
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="dedicated_inferences_patch"
    values={[
        { label: 'dedicated_inferences_patch', value: 'dedicated_inferences_patch' }
    ]}
>
<TabItem value="dedicated_inferences_patch">

Update an existing Dedicated Inference. Send a PATCH request to<br />`/v2/dedicated-inferences/&#123;dedicated_inference_id&#125;` with updated `spec` and/or<br />`access_tokens`. Status will move to updating and return to active when done.<br />

```sql
UPDATE digitalocean.inference.dedicated_inferences
SET 
spec = '{{ spec }}',
access_tokens = '{{ access_tokens }}'
WHERE 
dedicated_inference_id = '{{ dedicated_inference_id }}' --required
RETURNING
dedicated_inference;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="dedicated_inferences_delete"
    values={[
        { label: 'dedicated_inferences_delete', value: 'dedicated_inferences_delete' }
    ]}
>
<TabItem value="dedicated_inferences_delete">

Delete an existing Dedicated Inference. Send a DELETE request to<br />`/v2/dedicated-inferences/&#123;dedicated_inference_id&#125;`. The response 202 Accepted<br />indicates the request was accepted for processing.<br />

```sql
DELETE FROM digitalocean.inference.dedicated_inferences
WHERE dedicated_inference_id = '{{ dedicated_inference_id }}' --required
;
```
</TabItem>
</Tabs>
