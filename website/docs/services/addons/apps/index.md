--- 
title: apps
hide_title: false
hide_table_of_contents: false
keywords:
  - apps
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

Creates, updates, deletes, gets or lists an <code>apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="apps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.addons.apps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="addons_get_app_metadata"
    values={[
        { label: 'addons_get_app_metadata', value: 'addons_get_app_metadata' },
        { label: 'addons_get_app', value: 'addons_get_app' }
    ]}
>
<TabItem value="addons_get_app_metadata">

The response will be a JSON object with a key called `metadata`. `metadata` will be an array of objects, each representing a metadata item for the app. Each object will contain details such as `id`, `name`, `display_name`, `description`, `type`, and `options`. For additional details specific to the app, find and view its [DigitalOcean Marketplace](https://marketplace.digitalocean.com) page.

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
    <td><code>integer</code></td>
    <td>Unique identifier for the addon metadata item. (title: id)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the metadata item. (title: name, example: country_of_origin)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the metadata item. (title: display_name, example: Country of Origin)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the metadata item. (title: description, example: Country for localization)</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>array</code></td>
    <td> (title: options)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The data type of the metadata value. (string, boolean) (title: type, example: string)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="addons_get_app">

The response will be a JSON object with a key called `apps`. `apps` will be an array of objects.

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
    <td><CopyableCode code="app_slug" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for the application associated with the resource. (title: app_slug, example: example-app)</td>
</tr>
<tr>
    <td><CopyableCode code="eula" /></td>
    <td><code>string</code></td>
    <td>The End User License Agreement URL for the resource. (title: eula, example: https://example.com/eula)</td>
</tr>
<tr>
    <td><CopyableCode code="plans" /></td>
    <td><code>array</code></td>
    <td>A list of plans available for the resource. (title: plans)</td>
</tr>
<tr>
    <td><CopyableCode code="tos" /></td>
    <td><code>string</code></td>
    <td>The Terms of Service URL for the resource. (title: tos, example: https://example.com/tos)</td>
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
    <td><a href="#addons_get_app_metadata"><CopyableCode code="addons_get_app_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_slug"><code>app_slug</code></a></td>
    <td></td>
    <td>To find out what metadata is required for a specific add-on, send a GET request to `/v2/add-ons/apps/&#123;app_slug&#125;/metadata`.<br />Metadata varies by application.<br /></td>
</tr>
<tr>
    <td><a href="#addons_get_app"><CopyableCode code="addons_get_app" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>To fetch details of all available Add-On Applications, send a GET request to `/v2/add-ons/apps`.<br /></td>
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
<tr id="parameter-app_slug">
    <td><CopyableCode code="app_slug" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for the application whose metadata is being requested. (example: example_app)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="addons_get_app_metadata"
    values={[
        { label: 'addons_get_app_metadata', value: 'addons_get_app_metadata' },
        { label: 'addons_get_app', value: 'addons_get_app' }
    ]}
>
<TabItem value="addons_get_app_metadata">

To find out what metadata is required for a specific add-on, send a GET request to `/v2/add-ons/apps/&#123;app_slug&#125;/metadata`.<br />Metadata varies by application.<br />

```sql
SELECT
id,
name,
display_name,
description,
options,
type
FROM digitalocean.addons.apps
WHERE app_slug = '{{ app_slug }}' -- required
;
```
</TabItem>
<TabItem value="addons_get_app">

To fetch details of all available Add-On Applications, send a GET request to `/v2/add-ons/apps`.<br />

```sql
SELECT
app_slug,
eula,
plans,
tos
FROM digitalocean.addons.apps
;
```
</TabItem>
</Tabs>
