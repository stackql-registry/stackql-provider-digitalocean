--- 
title: registries
hide_title: false
hide_table_of_contents: false
keywords:
  - registries
  - kubernetes
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

Creates, updates, deletes, gets or lists a <code>registries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="registries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.kubernetes.registries" /></td></tr>
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
    <td><a href="#kubernetes_add_registries"><CopyableCode code="kubernetes_add_registries" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>To integrate the container registries with Kubernetes clusters, send a POST request to `/v2/kubernetes/registries`.</td>
</tr>
<tr>
    <td><a href="#kubernetes_remove_registries"><CopyableCode code="kubernetes_remove_registries" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>To remove the container registries from Kubernetes clusters, send a DELETE request to `/v2/kubernetes/registries`.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="kubernetes_add_registries"
    values={[
        { label: 'kubernetes_add_registries', value: 'kubernetes_add_registries' },
        { label: 'kubernetes_remove_registries', value: 'kubernetes_remove_registries' }
    ]}
>
<TabItem value="kubernetes_add_registries">

To integrate the container registries with Kubernetes clusters, send a POST request to `/v2/kubernetes/registries`.

```sql
EXEC digitalocean.kubernetes.registries.kubernetes_add_registries 
@@json=
'{
"cluster_uuids": "{{ cluster_uuids }}", 
"registries": "{{ registries }}"
}'
;
```
</TabItem>
<TabItem value="kubernetes_remove_registries">

To remove the container registries from Kubernetes clusters, send a DELETE request to `/v2/kubernetes/registries`.

```sql
EXEC digitalocean.kubernetes.registries.kubernetes_remove_registries 
@@json=
'{
"cluster_uuids": "{{ cluster_uuids }}", 
"registries": "{{ registries }}"
}'
;
```
</TabItem>
</Tabs>
