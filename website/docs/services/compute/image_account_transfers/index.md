--- 
title: image_account_transfers
hide_title: false
hide_table_of_contents: false
keywords:
  - image_account_transfers
  - compute
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

Creates, updates, deletes, gets or lists an <code>image_account_transfers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_account_transfers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.image_account_transfers" /></td></tr>
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
    <td><a href="#images_post_account_transfer_create"><CopyableCode code="images_post_account_transfer_create" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-image_id"><code>image_id</code></a>, <a href="#parameter-recipient_email"><code>recipient_email</code></a>, <a href="#parameter-recipient_uuid"><code>recipient_uuid</code></a></td>
    <td></td>
    <td>To initiate an account transfer for an image, send a POST request to<br />`/v2/images/$IMAGE_ID/account_transfer`.<br /><br />Only snapshot images may be transferred by this endpoint to another account.<br /><br />An image account transfer always has exactly one recipient, specified in the request body.<br />The recipient can be one of the following:<br /><br />* A DigitalOcean account, denoted by `recipient_email` in the request body.<br />The recipient will receive an email with instructions to accept the transfer.<br />Once the recipient accepts the transfer, the image will be moved to their<br />account.<br /><br />* A DigitalOcean team, denoted by `recipient_uuid` in the request body. If the<br />user has sufficient permissions in the recipient team, the transfer will be<br />automatically accepted and the image will be moved to the recipient team's<br />account. Otherwise, the transfer will be pending until a user with sufficient<br />permissions in the recipient team accepts the transfer.<br /></td>
</tr>
<tr>
    <td><a href="#images_post_account_transfer_accept"><CopyableCode code="images_post_account_transfer_accept" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-image_id"><code>image_id</code></a>, <a href="#parameter-transfer_id"><code>transfer_id</code></a>, <a href="#parameter-recipient_uuid"><code>recipient_uuid</code></a></td>
    <td></td>
    <td>To accept an account transfer for an image, send a POST request to<br />`/v2/images/$IMAGE_ID/account_transfer/accept`.<br /></td>
</tr>
<tr>
    <td><a href="#images_post_account_transfer_cancel"><CopyableCode code="images_post_account_transfer_cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-image_id"><code>image_id</code></a>, <a href="#parameter-transfer_id"><code>transfer_id</code></a></td>
    <td></td>
    <td>To cancel an account transfer for an image, send a POST request to<br />`/v2/images/$IMAGE_ID/account_transfer/cancel`.<br /><br />Only the sender of an image account transfer can cancel the transfer.<br />If the transfer is canceled, the image will remain in the sender's account<br />and will not be transferred to the recipient.<br /></td>
</tr>
<tr>
    <td><a href="#images_post_account_transfer_decline"><CopyableCode code="images_post_account_transfer_decline" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-image_id"><code>image_id</code></a>, <a href="#parameter-transfer_id"><code>transfer_id</code></a></td>
    <td></td>
    <td>To decline an account transfer for an image, send a POST request to<br />`/v2/images/$IMAGE_ID/account_transfer/decline`.<br /><br />Only the recipient of an image account transfer can decline the transfer.<br />If the transfer is declined, the image will remain in the sender's account<br />and will not be transferred to the recipient.<br /></td>
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
<tr id="parameter-image_id">
    <td><CopyableCode code="image_id" /></td>
    <td><code>integer</code></td>
    <td>A unique number that can be used to identify and reference a specific image. (example: 62137902)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="images_post_account_transfer_create"
    values={[
        { label: 'images_post_account_transfer_create', value: 'images_post_account_transfer_create' },
        { label: 'images_post_account_transfer_accept', value: 'images_post_account_transfer_accept' },
        { label: 'images_post_account_transfer_cancel', value: 'images_post_account_transfer_cancel' },
        { label: 'images_post_account_transfer_decline', value: 'images_post_account_transfer_decline' }
    ]}
>
<TabItem value="images_post_account_transfer_create">

To initiate an account transfer for an image, send a POST request to<br />`/v2/images/$IMAGE_ID/account_transfer`.<br /><br />Only snapshot images may be transferred by this endpoint to another account.<br /><br />An image account transfer always has exactly one recipient, specified in the request body.<br />The recipient can be one of the following:<br /><br />* A DigitalOcean account, denoted by `recipient_email` in the request body.<br />The recipient will receive an email with instructions to accept the transfer.<br />Once the recipient accepts the transfer, the image will be moved to their<br />account.<br /><br />* A DigitalOcean team, denoted by `recipient_uuid` in the request body. If the<br />user has sufficient permissions in the recipient team, the transfer will be<br />automatically accepted and the image will be moved to the recipient team's<br />account. Otherwise, the transfer will be pending until a user with sufficient<br />permissions in the recipient team accepts the transfer.<br />

```sql
EXEC digitalocean.compute.image_account_transfers.images_post_account_transfer_create 
@image_id='{{ image_id }}' --required 
@@json=
'{
"recipient_email": "{{ recipient_email }}", 
"recipient_uuid": "{{ recipient_uuid }}"
}'
;
```
</TabItem>
<TabItem value="images_post_account_transfer_accept">

To accept an account transfer for an image, send a POST request to<br />`/v2/images/$IMAGE_ID/account_transfer/accept`.<br />

```sql
EXEC digitalocean.compute.image_account_transfers.images_post_account_transfer_accept 
@image_id='{{ image_id }}' --required 
@@json=
'{
"transfer_id": {{ transfer_id }}, 
"recipient_uuid": "{{ recipient_uuid }}"
}'
;
```
</TabItem>
<TabItem value="images_post_account_transfer_cancel">

To cancel an account transfer for an image, send a POST request to<br />`/v2/images/$IMAGE_ID/account_transfer/cancel`.<br /><br />Only the sender of an image account transfer can cancel the transfer.<br />If the transfer is canceled, the image will remain in the sender's account<br />and will not be transferred to the recipient.<br />

```sql
EXEC digitalocean.compute.image_account_transfers.images_post_account_transfer_cancel 
@image_id='{{ image_id }}' --required 
@@json=
'{
"transfer_id": {{ transfer_id }}
}'
;
```
</TabItem>
<TabItem value="images_post_account_transfer_decline">

To decline an account transfer for an image, send a POST request to<br />`/v2/images/$IMAGE_ID/account_transfer/decline`.<br /><br />Only the recipient of an image account transfer can decline the transfer.<br />If the transfer is declined, the image will remain in the sender's account<br />and will not be transferred to the recipient.<br />

```sql
EXEC digitalocean.compute.image_account_transfers.images_post_account_transfer_decline 
@image_id='{{ image_id }}' --required 
@@json=
'{
"transfer_id": {{ transfer_id }}
}'
;
```
</TabItem>
</Tabs>
