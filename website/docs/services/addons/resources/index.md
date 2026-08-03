--- 
title: resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resources
  - addons
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

Creates, updates, deletes, gets or lists a <code>resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.addons.resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="addons_get"
    values={[
        { label: 'addons_get', value: 'addons_get' },
        { label: 'addons_list', value: 'addons_list' }
    ]}
>
<TabItem value="addons_get">

The response will be a JSON object with a key called `resource`.

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
    <td>The name of the addon resource. (title: name, example: my-resource-01)</td>
</tr>
<tr>
    <td><CopyableCode code="app_name" /></td>
    <td><code>string</code></td>
    <td>The name of the application associated with the resource. (title: app_name, example: Example App)</td>
</tr>
<tr>
    <td><CopyableCode code="plan_name" /></td>
    <td><code>string</code></td>
    <td>The name of the plan associated with the resource. (title: plan_name, example: Basic Plan)</td>
</tr>
<tr>
    <td><CopyableCode code="app_slug" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for the application associated with the resource. (title: app_slug, example: example_app)</td>
</tr>
<tr>
    <td><CopyableCode code="has_config" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the resource has configuration values set by the vendor. (title: has_config)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A message related to the resource, if applicable. (title: message, example: Resource is provisioned successfully.)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>array</code></td>
    <td>Metadata associated with the resource, set by the user. (title: metadata)</td>
</tr>
<tr>
    <td><CopyableCode code="plan_price_per_month" /></td>
    <td><code>integer</code></td>
    <td>The price of the plan per month in US dollars. (title: plan_price_per_month)</td>
</tr>
<tr>
    <td><CopyableCode code="plan_slug" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for the plan associated with the resource. (title: plan_slug, example: basic_plan)</td>
</tr>
<tr>
    <td><CopyableCode code="sso_url" /></td>
    <td><code>string</code></td>
    <td>The Single Sign-On URL for the resource, if applicable. (title: sso_url, example: https://example.com/sso)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state the resource is currently in. (pending, provisioning, provisioned, deprovisioning, deprovisioned, provisioning-failed, deprovisioning-failed, suspended) (title: state, example: provisioned)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the addon resource. (title: uuid, example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="addons_list">

The response will be an array of JSON objects with a key called `resources`.

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
    <td>The name of the addon resource. (title: name, example: my-resource-01)</td>
</tr>
<tr>
    <td><CopyableCode code="app_name" /></td>
    <td><code>string</code></td>
    <td>The name of the application associated with the resource. (title: app_name, example: Example App)</td>
</tr>
<tr>
    <td><CopyableCode code="plan_name" /></td>
    <td><code>string</code></td>
    <td>The name of the plan associated with the resource. (title: plan_name, example: Basic Plan)</td>
</tr>
<tr>
    <td><CopyableCode code="app_slug" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for the application associated with the resource. (title: app_slug, example: example_app)</td>
</tr>
<tr>
    <td><CopyableCode code="has_config" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the resource has configuration values set by the vendor. (title: has_config)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A message related to the resource, if applicable. (title: message, example: Resource is provisioned successfully.)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>array</code></td>
    <td>Metadata associated with the resource, set by the user. (title: metadata)</td>
</tr>
<tr>
    <td><CopyableCode code="plan_price_per_month" /></td>
    <td><code>integer</code></td>
    <td>The price of the plan per month in US dollars. (title: plan_price_per_month)</td>
</tr>
<tr>
    <td><CopyableCode code="plan_slug" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for the plan associated with the resource. (title: plan_slug, example: basic_plan)</td>
</tr>
<tr>
    <td><CopyableCode code="sso_url" /></td>
    <td><code>string</code></td>
    <td>The Single Sign-On URL for the resource, if applicable. (title: sso_url, example: https://example.com/sso)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state the resource is currently in. (pending, provisioning, provisioned, deprovisioning, deprovisioned, provisioning-failed, deprovisioning-failed, suspended) (title: state, example: provisioned)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the addon resource. (title: uuid, example: 123e4567-e89b-12d3-a456-426614174000)</td>
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
    <td><a href="#addons_get"><CopyableCode code="addons_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_uuid"><code>resource_uuid</code></a></td>
    <td></td>
    <td>To fetch details of a specific Add-On Resource, send a GET request to `/v2/add-ons/saas/&#123;resource_uuid&#125;`.<br />Replace `&#123;resource_uuid&#125;` with the UUID of the resource you want to retrieve.<br /></td>
</tr>
<tr>
    <td><a href="#addons_list"><CopyableCode code="addons_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>To fetch all Add-On Resources under your team, send a GET request to `/v2/add-ons/saas`.<br /></td>
</tr>
<tr>
    <td><a href="#addons_create"><CopyableCode code="addons_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-app_slug"><code>app_slug</code></a>, <a href="#parameter-plan_slug"><code>plan_slug</code></a>, <a href="#parameter-metadata"><code>metadata</code></a></td>
    <td></td>
    <td>To create an add-on resource, send a POST request to `/v2/add-ons/saas` with required parameters.<br />Some add-ons require additional metadata to be provided in the request body. To find out<br />what metadata is required for a specific add-on, send a GET request to `/v2/add-ons/apps/&#123;app_slug&#125;/metadata`.<br /></td>
</tr>
<tr>
    <td><a href="#addons_patch"><CopyableCode code="addons_patch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_uuid"><code>resource_uuid</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>To change the name of an Add-On Resource, send a PATCH request to `/v2/add-ons/saas/&#123;resource_uuid&#125;`.<br />Replace `&#123;resource_uuid&#125;` with the UUID of the resource for which you want to change the name.<br /></td>
</tr>
<tr>
    <td><a href="#addons_patch_plan"><CopyableCode code="addons_patch_plan" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_uuid"><code>resource_uuid</code></a>, <a href="#parameter-plan_slug"><code>plan_slug</code></a></td>
    <td></td>
    <td>To change the plan associated with an Add-On Resource, send a PATCH request to `/v2/add-ons/saas/&#123;resource_uuid&#125;/plan`.<br />Replace `&#123;resource_uuid&#125;` with the UUID of the resource for which you want to change the plan.<br /></td>
</tr>
<tr>
    <td><a href="#addons_delete"><CopyableCode code="addons_delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-resource_uuid"><code>resource_uuid</code></a></td>
    <td></td>
    <td>To delete an add-on resource, send a DELETE request to `/v2/add-ons/saas/&#123;resource_uuid&#125;` with the UUID of the resource to delete. <br />You cannot retrieve the resource after it has been deleted. The response indicates a request was sent to the 3rd party add-on provider to delete the resource.<br />You will no longer be billed for this resource.<br /></td>
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
<tr id="parameter-resource_uuid">
    <td><CopyableCode code="resource_uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique identifier for the add-on resource. (example: 4de7ac8b-495b-4884-9a69-1050c6793cd6)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="addons_get"
    values={[
        { label: 'addons_get', value: 'addons_get' },
        { label: 'addons_list', value: 'addons_list' }
    ]}
>
<TabItem value="addons_get">

To fetch details of a specific Add-On Resource, send a GET request to `/v2/add-ons/saas/&#123;resource_uuid&#125;`.<br />Replace `&#123;resource_uuid&#125;` with the UUID of the resource you want to retrieve.<br />

```sql
SELECT
name,
app_name,
plan_name,
app_slug,
has_config,
message,
metadata,
plan_price_per_month,
plan_slug,
sso_url,
state,
uuid
FROM digitalocean.addons.resources
WHERE resource_uuid = '{{ resource_uuid }}' -- required
;
```
</TabItem>
<TabItem value="addons_list">

To fetch all Add-On Resources under your team, send a GET request to `/v2/add-ons/saas`.<br />

```sql
SELECT
name,
app_name,
plan_name,
app_slug,
has_config,
message,
metadata,
plan_price_per_month,
plan_slug,
sso_url,
state,
uuid
FROM digitalocean.addons.resources
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="addons_create"
    values={[
        { label: 'addons_create', value: 'addons_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="addons_create">

To create an add-on resource, send a POST request to `/v2/add-ons/saas` with required parameters.<br />Some add-ons require additional metadata to be provided in the request body. To find out<br />what metadata is required for a specific add-on, send a GET request to `/v2/add-ons/apps/&#123;app_slug&#125;/metadata`.<br />

```sql
INSERT INTO digitalocean.addons.resources (
app_slug,
plan_slug,
name,
metadata,
linked_droplet_id,
fleet_uuid
)
SELECT 
'{{ app_slug }}' /* required */,
'{{ plan_slug }}' /* required */,
'{{ name }}' /* required */,
'{{ metadata }}' /* required */,
{{ linked_droplet_id }},
'{{ fleet_uuid }}'
RETURNING
resource
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resources
  props:
    - name: app_slug
      value: "{{ app_slug }}"
      description: |
        The slug identifier for the application associated with the resource.
    - name: plan_slug
      value: "{{ plan_slug }}"
      description: |
        The slug identifier for the plan associated with the resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the addon resource.
    - name: metadata
      description: |
        Metadata associated with the resource, set by the user. Metadata expected varies per app, and can be verified with a GET request to "/v2/add-ons/apps/{app_slug}/metadata"
      value:
        - name: "{{ name }}"
          value: "{{ value }}"
    - name: linked_droplet_id
      value: {{ linked_droplet_id }}
      description: |
        ID of the droplet to be linked to this resource, if applicable.
    - name: fleet_uuid
      value: "{{ fleet_uuid }}"
      description: |
        UUID of the fleet/project to which this resource will belong.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="addons_patch"
    values={[
        { label: 'addons_patch', value: 'addons_patch' },
        { label: 'addons_patch_plan', value: 'addons_patch_plan' }
    ]}
>
<TabItem value="addons_patch">

To change the name of an Add-On Resource, send a PATCH request to `/v2/add-ons/saas/&#123;resource_uuid&#125;`.<br />Replace `&#123;resource_uuid&#125;` with the UUID of the resource for which you want to change the name.<br />

```sql
UPDATE digitalocean.addons.resources
SET 
name = '{{ name }}'
WHERE 
resource_uuid = '{{ resource_uuid }}' --required
AND name = '{{ name }}' --required
RETURNING
resource;
```
</TabItem>
<TabItem value="addons_patch_plan">

To change the plan associated with an Add-On Resource, send a PATCH request to `/v2/add-ons/saas/&#123;resource_uuid&#125;/plan`.<br />Replace `&#123;resource_uuid&#125;` with the UUID of the resource for which you want to change the plan.<br />

```sql
UPDATE digitalocean.addons.resources
SET 
plan_slug = '{{ plan_slug }}'
WHERE 
resource_uuid = '{{ resource_uuid }}' --required
AND plan_slug = '{{ plan_slug }}' --required
RETURNING
resource;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="addons_delete"
    values={[
        { label: 'addons_delete', value: 'addons_delete' }
    ]}
>
<TabItem value="addons_delete">

To delete an add-on resource, send a DELETE request to `/v2/add-ons/saas/&#123;resource_uuid&#125;` with the UUID of the resource to delete. <br />You cannot retrieve the resource after it has been deleted. The response indicates a request was sent to the 3rd party add-on provider to delete the resource.<br />You will no longer be billed for this resource.<br />

```sql
DELETE FROM digitalocean.addons.resources
WHERE resource_uuid = '{{ resource_uuid }}' --required
;
```
</TabItem>
</Tabs>
