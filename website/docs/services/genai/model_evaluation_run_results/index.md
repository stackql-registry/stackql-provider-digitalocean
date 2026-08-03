--- 
title: model_evaluation_run_results
hide_title: false
hide_table_of_contents: false
keywords:
  - model_evaluation_run_results
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

Creates, updates, deletes, gets or lists a <code>model_evaluation_run_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="model_evaluation_run_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.model_evaluation_run_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_get_model_evaluation_run_results_download_url"
    values={[
        { label: 'genai_get_model_evaluation_run_results_download_url', value: 'genai_get_model_evaluation_run_results_download_url' }
    ]}
>
<TabItem value="genai_get_model_evaluation_run_results_download_url">

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
    <td>The presigned URL to download the gzip-compressed JSON results file (.json.gz). (example: example string)</td>
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
    <td><a href="#genai_get_model_evaluation_run_results_download_url"><CopyableCode code="genai_get_model_evaluation_run_results_download_url" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-eval_run_uuid"><code>eval_run_uuid</code></a></td>
    <td></td>
    <td>To get a presigned download URL for model evaluation run results (gzip-compressed JSON), send a GET request to `/v2/genai/model_evaluation_runs/&#123;eval_run_uuid&#125;/results/download_url`.</td>
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
<tr id="parameter-eval_run_uuid">
    <td><CopyableCode code="eval_run_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the evaluation run. (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_get_model_evaluation_run_results_download_url"
    values={[
        { label: 'genai_get_model_evaluation_run_results_download_url', value: 'genai_get_model_evaluation_run_results_download_url' }
    ]}
>
<TabItem value="genai_get_model_evaluation_run_results_download_url">

To get a presigned download URL for model evaluation run results (gzip-compressed JSON), send a GET request to `/v2/genai/model_evaluation_runs/&#123;eval_run_uuid&#125;/results/download_url`.

```sql
SELECT
download_url,
expires_at
FROM digitalocean.genai.model_evaluation_run_results
WHERE eval_run_uuid = '{{ eval_run_uuid }}' -- required
;
```
</TabItem>
</Tabs>
