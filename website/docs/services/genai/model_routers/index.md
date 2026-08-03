--- 
title: model_routers
hide_title: false
hide_table_of_contents: false
keywords:
  - model_routers
  - genai
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

Creates, updates, deletes, gets or lists a <code>model_routers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_routers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.model_routers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_get_model_router"
    values={[
        { label: 'genai_get_model_router', value: 'genai_get_model_router' },
        { label: 'genai_list_model_routers', value: 'genai_list_model_routers' }
    ]}
>
<TabItem value="genai_get_model_router">

A successful response.

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
    <td>Name of the model router (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date / time (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>Target regions for the router</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modified (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Unique id (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="genai_list_model_routers">

A successful response.

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
    <td>Name of the model router (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date / time (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>Target regions for the router</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modified (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Unique id (example: 123e4567-e89b-12d3-a456-426614174000)</td>
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
    <td><a href="#genai_get_model_router"><CopyableCode code="genai_get_model_router" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>To retrieve details of a model router, send a GET request to `/v2/gen-ai/models/routers/&#123;uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_list_model_routers"><CopyableCode code="genai_list_model_routers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>To list model routers, send a GET request to `/v2/gen-ai/models/routers`.</td>
</tr>
<tr>
    <td><a href="#genai_create_model_router"><CopyableCode code="genai_create_model_router" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To create a model router, send a POST request to `/v2/gen-ai/models/routers`.</td>
</tr>
<tr>
    <td><a href="#genai_update_model_router"><CopyableCode code="genai_update_model_router" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>To update a model router, send a PUT request to `/v2/gen-ai/models/routers/&#123;uuid&#125;`.</td>
</tr>
<tr>
    <td><a href="#genai_delete_model_router"><CopyableCode code="genai_delete_model_router" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>To delete a model router, send a DELETE request to `/v2/gen-ai/models/routers/&#123;uuid&#125;`.</td>
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
<tr id="parameter-uuid">
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Model router id (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>Page number. (example: 1)</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>Items per page. (example: 1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_get_model_router"
    values={[
        { label: 'genai_get_model_router', value: 'genai_get_model_router' },
        { label: 'genai_list_model_routers', value: 'genai_list_model_routers' }
    ]}
>
<TabItem value="genai_get_model_router">

To retrieve details of a model router, send a GET request to `/v2/gen-ai/models/routers/&#123;uuid&#125;`.

```sql
SELECT
name,
config,
created_at,
description,
regions,
updated_at,
uuid
FROM digitalocean.genai.model_routers
WHERE uuid = '{{ uuid }}' -- required
;
```
</TabItem>
<TabItem value="genai_list_model_routers">

To list model routers, send a GET request to `/v2/gen-ai/models/routers`.

```sql
SELECT
name,
config,
created_at,
description,
regions,
updated_at,
uuid
FROM digitalocean.genai.model_routers
WHERE page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="genai_create_model_router"
    values={[
        { label: 'genai_create_model_router', value: 'genai_create_model_router' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="genai_create_model_router">

To create a model router, send a POST request to `/v2/gen-ai/models/routers`.

```sql
INSERT INTO digitalocean.genai.model_routers (
description,
fallback_models,
name,
policies,
regions
)
SELECT 
'{{ description }}',
'{{ fallback_models }}',
'{{ name }}',
'{{ policies }}',
'{{ regions }}'
RETURNING
model_router
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: model_routers
  props:
    - name: description
      value: "{{ description }}"
      description: |
        Model router description
    - name: fallback_models
      value:
        - "{{ fallback_models }}"
      description: |
        At least one fallback model is required; order defines failover priority
    - name: name
      value: "{{ name }}"
      description: |
        Model router name: lowercase, at most 255 characters, only a-z, 0-9, and hyphens
    - name: policies
      description: |
        Router policies
      value:
        - custom_task:
            description: "{{ description }}"
            name: "{{ name }}"
          models: "{{ models }}"
          selection_policy:
            prefer: "{{ prefer }}"
          task_slug: "{{ task_slug }}"
    - name: regions
      value:
        - "{{ regions }}"
      description: |
        DEPRECATED: this field does not affect deployment and model routers are always
        deployed to all regions. Must be omitted or set to ["all"].
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="genai_update_model_router"
    values={[
        { label: 'genai_update_model_router', value: 'genai_update_model_router' }
    ]}
>
<TabItem value="genai_update_model_router">

To update a model router, send a PUT request to `/v2/gen-ai/models/routers/&#123;uuid&#125;`.

```sql
REPLACE digitalocean.genai.model_routers
SET 
description = '{{ description }}',
fallback_models = '{{ fallback_models }}',
name = '{{ name }}',
policies = '{{ policies }}',
regions = '{{ regions }}',
uuid = '{{ uuid }}'
WHERE 
uuid = '{{ uuid }}' --required
RETURNING
model_router;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="genai_delete_model_router"
    values={[
        { label: 'genai_delete_model_router', value: 'genai_delete_model_router' }
    ]}
>
<TabItem value="genai_delete_model_router">

To delete a model router, send a DELETE request to `/v2/gen-ai/models/routers/&#123;uuid&#125;`.

```sql
DELETE FROM digitalocean.genai.model_routers
WHERE uuid = '{{ uuid }}' --required
;
```
</TabItem>
</Tabs>
