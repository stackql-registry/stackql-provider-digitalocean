--- 
title: evaluation_dataset_download_urls
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluation_dataset_download_urls
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

Creates, updates, deletes, gets or lists an <code>evaluation_dataset_download_urls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="evaluation_dataset_download_urls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.evaluation_dataset_download_urls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_get_evaluation_dataset_download_url"
    values={[
        { label: 'genai_get_evaluation_dataset_download_url', value: 'genai_get_evaluation_dataset_download_url' }
    ]}
>
<TabItem value="genai_get_evaluation_dataset_download_url">

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
    <td><CopyableCode code="download_url" /></td>
    <td><code>string</code></td>
    <td>The presigned URL to download the dataset file. (example: example string)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the URL expires at. (example: 2023-01-01T00:00:00Z)</td>
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
    <td><a href="#genai_get_evaluation_dataset_download_url"><CopyableCode code="genai_get_evaluation_dataset_download_url" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dataset_uuid"><code>dataset_uuid</code></a></td>
    <td></td>
    <td>To get a presigned download URL for an evaluation dataset, send a GET request to `/v2/genai/evaluation_datasets/&#123;dataset_uuid&#125;/download_url`.</td>
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
<tr id="parameter-dataset_uuid">
    <td><CopyableCode code="dataset_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the evaluation dataset. (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_get_evaluation_dataset_download_url"
    values={[
        { label: 'genai_get_evaluation_dataset_download_url', value: 'genai_get_evaluation_dataset_download_url' }
    ]}
>
<TabItem value="genai_get_evaluation_dataset_download_url">

To get a presigned download URL for an evaluation dataset, send a GET request to `/v2/genai/evaluation_datasets/&#123;dataset_uuid&#125;/download_url`.

```sql
SELECT
download_url,
expires_at
FROM digitalocean.genai.evaluation_dataset_download_urls
WHERE dataset_uuid = '{{ dataset_uuid }}' -- required
;
```
</TabItem>
</Tabs>
