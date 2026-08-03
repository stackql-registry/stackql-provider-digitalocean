--- 
title: evaluation_datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluation_datasets
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

Creates, updates, deletes, gets or lists an <code>evaluation_datasets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="evaluation_datasets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.genai.evaluation_datasets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="genai_list_evaluation_datasets"
    values={[
        { label: 'genai_list_evaluation_datasets', value: 'genai_list_evaluation_datasets' }
    ]}
>
<TabItem value="genai_list_evaluation_datasets">

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
    <td><CopyableCode code="dataset_name" /></td>
    <td><code>string</code></td>
    <td>Name of the dataset. (example: example name)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time created at. (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_type" /></td>
    <td><code>string</code></td>
    <td> (EVALUATION_DATASET_TYPE_UNKNOWN, EVALUATION_DATASET_TYPE_ADK, EVALUATION_DATASET_TYPE_NON_ADK, EVALUATION_DATASET_TYPE_MODEL) (default: EVALUATION_DATASET_TYPE_UNKNOWN, example: EVALUATION_DATASET_TYPE_UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the dataset. (example: 123e4567-e89b-12d3-a456-426614174000)</td>
</tr>
<tr>
    <td><CopyableCode code="file_size" /></td>
    <td><code>string (uint64)</code></td>
    <td>The size of the dataset uploaded file in bytes. (example: 12345)</td>
</tr>
<tr>
    <td><CopyableCode code="has_ground_truth" /></td>
    <td><code>boolean</code></td>
    <td>Does the dataset have a ground truth column?</td>
</tr>
<tr>
    <td><CopyableCode code="row_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of rows in the dataset.</td>
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
    <td><a href="#genai_list_evaluation_datasets"><CopyableCode code="genai_list_evaluation_datasets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-dataset_type"><code>dataset_type</code></a></td>
    <td>To list evaluation datasets, send a GET request to `/v2/gen-ai/evaluation_datasets`.</td>
</tr>
<tr>
    <td><a href="#genai_create_evaluation_dataset"><CopyableCode code="genai_create_evaluation_dataset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>To create an evaluation dataset, send a POST request to `/v2/gen-ai/evaluation_datasets`.</td>
</tr>
<tr>
    <td><a href="#genai_delete_evaluation_dataset"><CopyableCode code="genai_delete_evaluation_dataset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-dataset_uuid"><code>dataset_uuid</code></a></td>
    <td></td>
    <td>To delete an evaluation dataset, send a DELETE request to `/v2/genai/evaluation_datasets/&#123;dataset_uuid&#125;`. This works for both model and agent evaluation datasets.</td>
</tr>
<tr>
    <td><a href="#genai_create_evaluation_dataset_file_upload_presigned_urls"><CopyableCode code="genai_create_evaluation_dataset_file_upload_presigned_urls" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>To create presigned URLs for evaluation dataset file upload, send a POST request to `/v2/gen-ai/evaluation_datasets/file_upload_presigned_urls`.</td>
</tr>
<tr>
    <td><a href="#genai_create_model_eval_dataset_upload_presigned_urls"><CopyableCode code="genai_create_model_eval_dataset_upload_presigned_urls" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>To create presigned URLs for model evaluation dataset file upload, send a POST request to `/v2/genai/model_evaluation/datasets/file_upload_presigned_urls`.</td>
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
    <td>UUID of the evaluation dataset to delete. (example: "123e4567-e89b-12d3-a456-426614174000")</td>
</tr>
<tr id="parameter-dataset_type">
    <td><CopyableCode code="dataset_type" /></td>
    <td><code>string</code></td>
    <td>Filter by evaluation dataset type. (example: EVALUATION_DATASET_TYPE_UNKNOWN)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="genai_list_evaluation_datasets"
    values={[
        { label: 'genai_list_evaluation_datasets', value: 'genai_list_evaluation_datasets' }
    ]}
>
<TabItem value="genai_list_evaluation_datasets">

To list evaluation datasets, send a GET request to `/v2/gen-ai/evaluation_datasets`.

```sql
SELECT
dataset_name,
created_at,
dataset_type,
dataset_uuid,
file_size,
has_ground_truth,
row_count
FROM digitalocean.genai.evaluation_datasets
WHERE dataset_type = '{{ dataset_type }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="genai_create_evaluation_dataset"
    values={[
        { label: 'genai_create_evaluation_dataset', value: 'genai_create_evaluation_dataset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="genai_create_evaluation_dataset">

To create an evaluation dataset, send a POST request to `/v2/gen-ai/evaluation_datasets`.

```sql
INSERT INTO digitalocean.genai.evaluation_datasets (
dataset_type,
file_upload_dataset,
name
)
SELECT 
'{{ dataset_type }}',
'{{ file_upload_dataset }}',
'{{ name }}'
RETURNING
evaluation_dataset_uuid
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: evaluation_datasets
  props:
    - name: dataset_type
      value: "{{ dataset_type }}"
      valid_values: ['EVALUATION_DATASET_TYPE_UNKNOWN', 'EVALUATION_DATASET_TYPE_ADK', 'EVALUATION_DATASET_TYPE_NON_ADK', 'EVALUATION_DATASET_TYPE_MODEL']
      default: EVALUATION_DATASET_TYPE_UNKNOWN
    - name: file_upload_dataset
      description: |
        File to upload as data source for knowledge base.
      value:
        original_file_name: "{{ original_file_name }}"
        size_in_bytes: "{{ size_in_bytes }}"
        stored_object_key: "{{ stored_object_key }}"
    - name: name
      value: "{{ name }}"
      description: |
        The name of the agent evaluation dataset.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="genai_delete_evaluation_dataset"
    values={[
        { label: 'genai_delete_evaluation_dataset', value: 'genai_delete_evaluation_dataset' }
    ]}
>
<TabItem value="genai_delete_evaluation_dataset">

To delete an evaluation dataset, send a DELETE request to `/v2/genai/evaluation_datasets/&#123;dataset_uuid&#125;`. This works for both model and agent evaluation datasets.

```sql
DELETE FROM digitalocean.genai.evaluation_datasets
WHERE dataset_uuid = '{{ dataset_uuid }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="genai_create_evaluation_dataset_file_upload_presigned_urls"
    values={[
        { label: 'genai_create_evaluation_dataset_file_upload_presigned_urls', value: 'genai_create_evaluation_dataset_file_upload_presigned_urls' },
        { label: 'genai_create_model_eval_dataset_upload_presigned_urls', value: 'genai_create_model_eval_dataset_upload_presigned_urls' }
    ]}
>
<TabItem value="genai_create_evaluation_dataset_file_upload_presigned_urls">

To create presigned URLs for evaluation dataset file upload, send a POST request to `/v2/gen-ai/evaluation_datasets/file_upload_presigned_urls`.

```sql
EXEC digitalocean.genai.evaluation_datasets.genai_create_evaluation_dataset_file_upload_presigned_urls 
@@json=
'{
"files": "{{ files }}"
}'
;
```
</TabItem>
<TabItem value="genai_create_model_eval_dataset_upload_presigned_urls">

To create presigned URLs for model evaluation dataset file upload, send a POST request to `/v2/genai/model_evaluation/datasets/file_upload_presigned_urls`.

```sql
EXEC digitalocean.genai.evaluation_datasets.genai_create_model_eval_dataset_upload_presigned_urls 
@@json=
'{
"files": "{{ files }}"
}'
;
```
</TabItem>
</Tabs>
