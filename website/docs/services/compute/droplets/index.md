--- 
title: droplets
hide_title: false
hide_table_of_contents: false
keywords:
  - droplets
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

Creates, updates, deletes, gets or lists a <code>droplets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="droplets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.compute.droplets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="droplets_get"
    values={[
        { label: 'droplets_get', value: 'droplets_get' },
        { label: 'droplets_list', value: 'droplets_list' }
    ]}
>
<TabItem value="droplets_get">

The response will be a JSON object with a key called `droplet`. This will be<br />set to a JSON object that contains the standard Droplet attributes.<br />

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
    <td>A unique identifier for each Droplet instance. This is automatically generated upon Droplet creation.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name set for the Droplet instance. (example: example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="backup_ids" /></td>
    <td><code>array</code></td>
    <td>An array of backup IDs of any backups that have been taken of the Droplet instance.  Droplet backups are enabled at the time of the instance creation.<br />Requires `image:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the Droplet was created. (example: 2020-07-21T18:37:44Z)</td>
</tr>
<tr>
    <td><CopyableCode code="disk" /></td>
    <td><code>integer</code></td>
    <td>The size of the Droplet's disk in gigabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="disk_info" /></td>
    <td><code>array</code></td>
    <td>An array of objects containing information about the disks available to the Droplet.</td>
</tr>
<tr>
    <td><CopyableCode code="features" /></td>
    <td><code>array</code></td>
    <td>An array of features enabled on this Droplet.</td>
</tr>
<tr>
    <td><CopyableCode code="gpu_info" /></td>
    <td><code>object</code></td>
    <td>An object containing information about the GPU capabilities of Droplets created with this size.</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>object</code></td>
    <td>The Droplet's image.<br />Requires `image:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="kernel" /></td>
    <td><code>object</code></td>
    <td>**Note**: All Droplets created after March 2017 use internal kernels by default. These Droplets will have this attribute set to `null`.  The current [kernel](https://docs.digitalocean.com/products/droplets/how-to/kernel/) for Droplets with externally managed kernels. This will initially be set to the kernel of the base image when the Droplet is created. </td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether the Droplet has been locked, preventing actions by users.</td>
</tr>
<tr>
    <td><CopyableCode code="memory" /></td>
    <td><code>integer</code></td>
    <td>Memory of the Droplet in megabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="networks" /></td>
    <td><code>object</code></td>
    <td>The details of the network that are configured for the Droplet instance.  This is an object that contains keys for IPv4 and IPv6.  The value of each of these is an array that contains objects describing an individual IP resource allocated to the Droplet.  These will define attributes like the IP address, netmask, and gateway of the specific network depending on the type of network it is.</td>
</tr>
<tr>
    <td><CopyableCode code="next_backup_window" /></td>
    <td><code>object</code></td>
    <td>The details of the Droplet's backups feature, if backups are configured for the Droplet. This object contains keys for the start and end times of the window during which the backup will start.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="size_slug" /></td>
    <td><code>string</code></td>
    <td>The unique slug identifier for the size of this Droplet. (example: s-1vcpu-1gb)</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_ids" /></td>
    <td><code>array</code></td>
    <td>An array of snapshot IDs of any snapshots created from the Droplet instance.<br />Requires `image:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A status string indicating the state of the Droplet instance. This may be "new", "active", "off", or "archive". (new, active, off, archive) (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>An array of Tags the Droplet has been tagged with.<br />Requires `tag:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="vcpus" /></td>
    <td><code>integer</code></td>
    <td>The number of virtual CPUs.</td>
</tr>
<tr>
    <td><CopyableCode code="volume_ids" /></td>
    <td><code>array</code></td>
    <td>A flat array including the unique identifier for each Block Storage volume attached to the Droplet.<br />Requires `block_storage:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_uuid" /></td>
    <td><code>string</code></td>
    <td>A string specifying the UUID of the VPC to which the Droplet is assigned.<br />Requires `vpc:read` scope. (example: 760e09ef-dc84-11e8-981e-3cfdfeaae000)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="droplets_list">

A JSON object with a key of `droplets`.

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
    <td>A unique identifier for each Droplet instance. This is automatically generated upon Droplet creation.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name set for the Droplet instance. (example: example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="backup_ids" /></td>
    <td><code>array</code></td>
    <td>An array of backup IDs of any backups that have been taken of the Droplet instance.  Droplet backups are enabled at the time of the instance creation.<br />Requires `image:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the Droplet was created. (example: 2020-07-21T18:37:44Z)</td>
</tr>
<tr>
    <td><CopyableCode code="disk" /></td>
    <td><code>integer</code></td>
    <td>The size of the Droplet's disk in gigabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="disk_info" /></td>
    <td><code>array</code></td>
    <td>An array of objects containing information about the disks available to the Droplet.</td>
</tr>
<tr>
    <td><CopyableCode code="features" /></td>
    <td><code>array</code></td>
    <td>An array of features enabled on this Droplet.</td>
</tr>
<tr>
    <td><CopyableCode code="gpu_info" /></td>
    <td><code>object</code></td>
    <td>An object containing information about the GPU capabilities of Droplets created with this size.</td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>object</code></td>
    <td>The Droplet's image.<br />Requires `image:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="kernel" /></td>
    <td><code>object</code></td>
    <td>**Note**: All Droplets created after March 2017 use internal kernels by default. These Droplets will have this attribute set to `null`.  The current [kernel](https://docs.digitalocean.com/products/droplets/how-to/kernel/) for Droplets with externally managed kernels. This will initially be set to the kernel of the base image when the Droplet is created. </td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether the Droplet has been locked, preventing actions by users.</td>
</tr>
<tr>
    <td><CopyableCode code="memory" /></td>
    <td><code>integer</code></td>
    <td>Memory of the Droplet in megabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="networks" /></td>
    <td><code>object</code></td>
    <td>The details of the network that are configured for the Droplet instance.  This is an object that contains keys for IPv4 and IPv6.  The value of each of these is an array that contains objects describing an individual IP resource allocated to the Droplet.  These will define attributes like the IP address, netmask, and gateway of the specific network depending on the type of network it is.</td>
</tr>
<tr>
    <td><CopyableCode code="next_backup_window" /></td>
    <td><code>object</code></td>
    <td>The details of the Droplet's backups feature, if backups are configured for the Droplet. This object contains keys for the start and end times of the window during which the backup will start.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="size_slug" /></td>
    <td><code>string</code></td>
    <td>The unique slug identifier for the size of this Droplet. (example: s-1vcpu-1gb)</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_ids" /></td>
    <td><code>array</code></td>
    <td>An array of snapshot IDs of any snapshots created from the Droplet instance.<br />Requires `image:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A status string indicating the state of the Droplet instance. This may be "new", "active", "off", or "archive". (new, active, off, archive) (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>An array of Tags the Droplet has been tagged with.<br />Requires `tag:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="vcpus" /></td>
    <td><code>integer</code></td>
    <td>The number of virtual CPUs.</td>
</tr>
<tr>
    <td><CopyableCode code="volume_ids" /></td>
    <td><code>array</code></td>
    <td>A flat array including the unique identifier for each Block Storage volume attached to the Droplet.<br />Requires `block_storage:read` scope.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_uuid" /></td>
    <td><code>string</code></td>
    <td>A string specifying the UUID of the VPC to which the Droplet is assigned.<br />Requires `vpc:read` scope. (example: 760e09ef-dc84-11e8-981e-3cfdfeaae000)</td>
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
    <td><a href="#droplets_get"><CopyableCode code="droplets_get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>To show information about an individual Droplet, send a GET request to<br />`/v2/droplets/$DROPLET_ID`.<br /></td>
</tr>
<tr>
    <td><a href="#droplets_list"><CopyableCode code="droplets_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-tag_name"><code>tag_name</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>To list all Droplets in your account, send a GET request to `/v2/droplets`.<br /><br />The response body will be a JSON object with a key of `droplets`. This will be<br />set to an array containing objects each representing a Droplet. These will<br />contain the standard Droplet attributes.<br /><br />### Filtering Results by Tag<br /><br />It's possible to request filtered results by including certain query parameters.<br />To only list Droplets assigned to a specific tag, include the `tag_name` query<br />parameter set to the name of the tag in your GET request. For example,<br />`/v2/droplets?tag_name=$TAG_NAME`.<br /><br />### GPU Droplets<br /><br />By default, only non-GPU Droplets are returned. To list only GPU Droplets, set<br />the `type` query parameter to `gpus`. For example, `/v2/droplets?type=gpus`.<br /></td>
</tr>
<tr>
    <td><a href="#droplets_create"><CopyableCode code="droplets_create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-size"><code>size</code></a>, <a href="#parameter-image"><code>image</code></a></td>
    <td></td>
    <td>To create a new Droplet, send a POST request to `/v2/droplets` setting the<br />required attributes.<br /><br />A Droplet will be created using the provided information. The response body<br />will contain a JSON object with a key called `droplet`. The value will be an<br />object containing the standard attributes for your new Droplet. The response<br />code, 202 Accepted, does not indicate the success or failure of the operation,<br />just that the request has been accepted for processing. The `actions` returned<br />as part of the response's `links` object can be used to check the status<br />of the Droplet create event.<br /><br />### Create Multiple Droplets<br /><br />Creating multiple Droplets is very similar to creating a single Droplet.<br />Instead of sending `name` as a string, send `names` as an array of strings. A<br />Droplet will be created for each name you send using the associated<br />information. Up to ten Droplets may be created this way at a time.<br /><br />Rather than returning a single Droplet, the response body will contain a JSON<br />array with a key called `droplets`. This will be set to an array of JSON<br />objects, each of which will contain the standard Droplet attributes. The<br />response code, 202 Accepted, does not indicate the success or failure of any<br />operation, just that the request has been accepted for processing. The array<br />of `actions` returned as part of the response's `links` object can be used to<br />check the status of each individual Droplet create event.<br /></td>
</tr>
<tr>
    <td><a href="#droplets_destroy"><CopyableCode code="droplets_destroy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>To delete a Droplet, send a DELETE request to `/v2/droplets/$DROPLET_ID`.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully.<br /></td>
</tr>
<tr>
    <td><a href="#droplets_destroy_by_tag"><CopyableCode code="droplets_destroy_by_tag" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-tag_name"><code>tag_name</code></a></td>
    <td></td>
    <td>To delete **all** Droplets assigned to a specific tag, include the `tag_name`<br />query parameter set to the name of the tag in your DELETE request. For<br />example, `/v2/droplets?tag_name=$TAG_NAME`.<br /><br />This endpoint requires `tag:read` scope.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully.<br /></td>
</tr>
<tr>
    <td><a href="#droplet_actions_post"><CopyableCode code="droplet_actions_post" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>To initiate an action on a Droplet send a POST request to<br />`/v2/droplets/$DROPLET_ID/actions`. In the JSON body to the request,<br />set the `type` attribute to one of the supported action types:<br /><br />| Action                                   | Details | Required Permissions |<br />| ---------------------------------------- | ----------- | ----------- |<br />| `enable_backups`            | Enables backups for a Droplet | `droplet:update` |<br />| `disable_backups`           | Disables backups for a Droplet | `droplet:update` |<br />| `change_backup_policy`      | Update the backup policy for a Droplet | `droplet:update` |<br />| `reboot`                    | Reboots a Droplet. A `reboot` action is an attempt to reboot the Droplet in a graceful way, similar to using the `reboot` command from the console. | `droplet:update` |<br />| `power_cycle`               | Power cycles a Droplet. A `powercycle` action is similar to pushing the reset button on a physical machine, it's similar to booting from scratch. | `droplet:update` |<br />| `shutdown`                  | Shuts down a Droplet. A shutdown action is an attempt to shutdown the Droplet in a graceful way, similar to using the `shutdown` command from the console. Since a `shutdown` command can fail, this action guarantees that the command is issued, not that it succeeds. The preferred way to turn off a Droplet is to attempt a shutdown, with a reasonable timeout, followed by a `power_off` action to ensure the Droplet is off. | `droplet:update` |<br />| `power_off`                 | Powers off a Droplet. A `power_off` event is a hard shutdown and should only be used if the `shutdown` action is not successful. It is similar to cutting the power on a server and could lead to complications. | `droplet:update` |<br />| `power_on`                  | Powers on a Droplet. | `droplet:update` |<br />| `restore`                   | Restore a Droplet using a backup image. The image ID that is passed in must be a backup of the current Droplet instance. The operation will leave any embedded SSH keys intact. | `droplet:update`<br />`droplet:admin` |<br />| `password_reset`            | Resets the root password for a Droplet. A new password will be provided via email. It must be changed after first use. | `droplet:update`<br />`droplet:admin` |<br />| `resize`                    | Resizes a Droplet. Set the `size` attribute to a size slug. If a permanent resize with disk changes included is desired, set the `disk` attribute to `true`. | `droplet:update`<br />`droplet:create` |<br />| `rebuild`                   | Rebuilds a Droplet from a new base image. Set the `image` attribute to an image ID or slug. | `droplet:update`<br />`droplet:admin` |<br />| `rename`                    | Renames a Droplet. | `droplet:update` |<br />| `change_kernel`             | Changes a Droplet's kernel. Only applies to Droplets with externally managed kernels. All Droplets created after March 2017 use internal kernels by default. | `droplet:update` |<br />| `enable_ipv6`               | Enables IPv6 for a Droplet. Once enabled for a Droplet, IPv6 can not be disabled. When enabling IPv6 on an existing Droplet, [additional OS-level configuration](https://docs.digitalocean.com/products/networking/ipv6/how-to/enable/#on-existing-droplets) is required. | `droplet:update` |<br />| `snapshot`                  | Takes a snapshot of a Droplet. | `droplet:update`<br />`image:create` |<br /></td>
</tr>
<tr>
    <td><a href="#droplet_actions_post_by_tag"><CopyableCode code="droplet_actions_post_by_tag" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-type"><code>type</code></a></td>
    <td><a href="#parameter-tag_name"><code>tag_name</code></a></td>
    <td>Some actions can be performed in bulk on tagged Droplets. The actions can be<br />initiated by sending a POST to `/v2/droplets/actions?tag_name=$TAG_NAME` with<br />the action arguments.<br /><br />Only a sub-set of action types are supported:<br /><br />- `power_cycle`<br />- `power_on`<br />- `power_off`<br />- `shutdown`<br />- `enable_ipv6`<br />- `enable_backups`<br />- `disable_backups`<br />- `snapshot` (also requires `image:create` permission)<br /></td>
</tr>
<tr>
    <td><a href="#enable_backups"><CopyableCode code="enable_backups" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>Invokes the `enable_backups` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.</td>
</tr>
<tr>
    <td><a href="#disable_backups"><CopyableCode code="disable_backups" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>Invokes the `disable_backups` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.</td>
</tr>
<tr>
    <td><a href="#reboot"><CopyableCode code="reboot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>Invokes the `reboot` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.</td>
</tr>
<tr>
    <td><a href="#power_cycle"><CopyableCode code="power_cycle" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>Invokes the `power_cycle` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.</td>
</tr>
<tr>
    <td><a href="#shutdown"><CopyableCode code="shutdown" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>Invokes the `shutdown` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.</td>
</tr>
<tr>
    <td><a href="#power_off"><CopyableCode code="power_off" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>Invokes the `power_off` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.</td>
</tr>
<tr>
    <td><a href="#power_on"><CopyableCode code="power_on" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>Invokes the `power_on` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.</td>
</tr>
<tr>
    <td><a href="#password_reset"><CopyableCode code="password_reset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>Invokes the `password_reset` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.</td>
</tr>
<tr>
    <td><a href="#enable_ipv6"><CopyableCode code="enable_ipv6" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>Invokes the `enable_ipv6` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>Invokes the `restore` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.</td>
</tr>
<tr>
    <td><a href="#resize"><CopyableCode code="resize" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>Invokes the `resize` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.</td>
</tr>
<tr>
    <td><a href="#rebuild"><CopyableCode code="rebuild" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>Invokes the `rebuild` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.</td>
</tr>
<tr>
    <td><a href="#rename"><CopyableCode code="rename" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>Invokes the `rename` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.</td>
</tr>
<tr>
    <td><a href="#change_kernel"><CopyableCode code="change_kernel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>Invokes the `change_kernel` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.</td>
</tr>
<tr>
    <td><a href="#snapshot"><CopyableCode code="snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>Invokes the `snapshot` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.</td>
</tr>
<tr>
    <td><a href="#change_backup_policy"><CopyableCode code="change_backup_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-droplet_id"><code>droplet_id</code></a></td>
    <td></td>
    <td>Invokes the `change_backup_policy` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.</td>
</tr>
<tr>
    <td><a href="#power_cycle_by_tag"><CopyableCode code="power_cycle_by_tag" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-tag_name"><code>tag_name</code></a></td>
    <td>Invokes the `power_cycle` action. Fabricated lifecycle operation over `POST /v2/droplets/actions`.</td>
</tr>
<tr>
    <td><a href="#power_on_by_tag"><CopyableCode code="power_on_by_tag" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-tag_name"><code>tag_name</code></a></td>
    <td>Invokes the `power_on` action. Fabricated lifecycle operation over `POST /v2/droplets/actions`.</td>
</tr>
<tr>
    <td><a href="#power_off_by_tag"><CopyableCode code="power_off_by_tag" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-tag_name"><code>tag_name</code></a></td>
    <td>Invokes the `power_off` action. Fabricated lifecycle operation over `POST /v2/droplets/actions`.</td>
</tr>
<tr>
    <td><a href="#shutdown_by_tag"><CopyableCode code="shutdown_by_tag" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-tag_name"><code>tag_name</code></a></td>
    <td>Invokes the `shutdown` action. Fabricated lifecycle operation over `POST /v2/droplets/actions`.</td>
</tr>
<tr>
    <td><a href="#enable_ipv6_by_tag"><CopyableCode code="enable_ipv6_by_tag" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-tag_name"><code>tag_name</code></a></td>
    <td>Invokes the `enable_ipv6` action. Fabricated lifecycle operation over `POST /v2/droplets/actions`.</td>
</tr>
<tr>
    <td><a href="#enable_backups_by_tag"><CopyableCode code="enable_backups_by_tag" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-tag_name"><code>tag_name</code></a></td>
    <td>Invokes the `enable_backups` action. Fabricated lifecycle operation over `POST /v2/droplets/actions`.</td>
</tr>
<tr>
    <td><a href="#disable_backups_by_tag"><CopyableCode code="disable_backups_by_tag" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-tag_name"><code>tag_name</code></a></td>
    <td>Invokes the `disable_backups` action. Fabricated lifecycle operation over `POST /v2/droplets/actions`.</td>
</tr>
<tr>
    <td><a href="#snapshot_by_tag"><CopyableCode code="snapshot_by_tag" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td><a href="#parameter-tag_name"><code>tag_name</code></a></td>
    <td>Invokes the `snapshot` action. Fabricated lifecycle operation over `POST /v2/droplets/actions`.</td>
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
<tr id="parameter-droplet_id">
    <td><CopyableCode code="droplet_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for a Droplet instance. (example: 3164444)</td>
</tr>
<tr id="parameter-tag_name">
    <td><CopyableCode code="tag_name" /></td>
    <td><code>string</code></td>
    <td>Specifies Droplets to be deleted by tag. (example: env:test)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Used to filter list response by Droplet name returning only exact matches. It is case-insensitive and can not be combined with `tag_name`. (example: web-01)</td>
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
<tr id="parameter-tag_name">
    <td><CopyableCode code="tag_name" /></td>
    <td><code>string</code></td>
    <td>Used to filter Droplets by a specific tag. Can not be combined with `name` or `type`.<br />Requires `tag:read` scope. (example: env:prod)</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>When `type` is set to `gpus`, only GPU Droplets will be returned. By default, only non-GPU Droplets are returned. Can not be combined with `tag_name`. (example: droplets)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="droplets_get"
    values={[
        { label: 'droplets_get', value: 'droplets_get' },
        { label: 'droplets_list', value: 'droplets_list' }
    ]}
>
<TabItem value="droplets_get">

To show information about an individual Droplet, send a GET request to<br />`/v2/droplets/$DROPLET_ID`.<br />

```sql
SELECT
id,
name,
backup_ids,
created_at,
disk,
disk_info,
features,
gpu_info,
image,
kernel,
locked,
memory,
networks,
next_backup_window,
region,
size,
size_slug,
snapshot_ids,
status,
tags,
vcpus,
volume_ids,
vpc_uuid
FROM digitalocean.compute.droplets
WHERE droplet_id = '{{ droplet_id }}' -- required
;
```
</TabItem>
<TabItem value="droplets_list">

To list all Droplets in your account, send a GET request to `/v2/droplets`.<br /><br />The response body will be a JSON object with a key of `droplets`. This will be<br />set to an array containing objects each representing a Droplet. These will<br />contain the standard Droplet attributes.<br /><br />### Filtering Results by Tag<br /><br />It's possible to request filtered results by including certain query parameters.<br />To only list Droplets assigned to a specific tag, include the `tag_name` query<br />parameter set to the name of the tag in your GET request. For example,<br />`/v2/droplets?tag_name=$TAG_NAME`.<br /><br />### GPU Droplets<br /><br />By default, only non-GPU Droplets are returned. To list only GPU Droplets, set<br />the `type` query parameter to `gpus`. For example, `/v2/droplets?type=gpus`.<br />

```sql
SELECT
id,
name,
backup_ids,
created_at,
disk,
disk_info,
features,
gpu_info,
image,
kernel,
locked,
memory,
networks,
next_backup_window,
region,
size,
size_slug,
snapshot_ids,
status,
tags,
vcpus,
volume_ids,
vpc_uuid
FROM digitalocean.compute.droplets
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND tag_name = '{{ tag_name }}'
AND name = '{{ name }}'
AND type = '{{ type }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="droplets_create"
    values={[
        { label: 'droplets_create', value: 'droplets_create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="droplets_create">

To create a new Droplet, send a POST request to `/v2/droplets` setting the<br />required attributes.<br /><br />A Droplet will be created using the provided information. The response body<br />will contain a JSON object with a key called `droplet`. The value will be an<br />object containing the standard attributes for your new Droplet. The response<br />code, 202 Accepted, does not indicate the success or failure of the operation,<br />just that the request has been accepted for processing. The `actions` returned<br />as part of the response's `links` object can be used to check the status<br />of the Droplet create event.<br /><br />### Create Multiple Droplets<br /><br />Creating multiple Droplets is very similar to creating a single Droplet.<br />Instead of sending `name` as a string, send `names` as an array of strings. A<br />Droplet will be created for each name you send using the associated<br />information. Up to ten Droplets may be created this way at a time.<br /><br />Rather than returning a single Droplet, the response body will contain a JSON<br />array with a key called `droplets`. This will be set to an array of JSON<br />objects, each of which will contain the standard Droplet attributes. The<br />response code, 202 Accepted, does not indicate the success or failure of any<br />operation, just that the request has been accepted for processing. The array<br />of `actions` returned as part of the response's `links` object can be used to<br />check the status of each individual Droplet create event.<br />

```sql
INSERT INTO digitalocean.compute.droplets (
name,
region,
size,
image,
ssh_keys,
backups,
backup_policy,
ipv6,
monitoring,
tags,
user_data,
private_networking,
volumes,
vpc_uuid,
with_droplet_agent,
public_networking,
names
)
SELECT 
'{{ name }}',
'{{ region }}',
'{{ size }}' /* required */,
'{{ image }}' /* required */,
'{{ ssh_keys }}',
{{ backups }},
'{{ backup_policy }}',
{{ ipv6 }},
{{ monitoring }},
'{{ tags }}',
'{{ user_data }}',
{{ private_networking }},
'{{ volumes }}',
'{{ vpc_uuid }}',
{{ with_droplet_agent }},
{{ public_networking }},
'{{ names }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: droplets
  props:
    - name: name
      value: "{{ name }}"
      description: |
        The human-readable string you wish to use when displaying the Droplet name. The name, if set to a domain name managed in the DigitalOcean DNS management system, will configure a PTR record for the Droplet. The name set during creation will also determine the hostname for the Droplet in its internal configuration.
    - name: region
      value: "{{ region }}"
      description: |
        The slug identifier for the region that you wish to deploy the Droplet in. If the specific datacenter is not not important, a slug prefix (e.g. \`nyc\`) can be used to deploy the Droplet in any of the that region's locations (\`nyc1\`, \`nyc2\`, or \`nyc3\`). If the region is omitted from the create request completely, the Droplet may deploy in any region.
    - name: size
      value: "{{ size }}"
      description: |
        The slug identifier for the size that you wish to select for this Droplet.
    - name: image
      value: "{{ image }}"
      description: |
        The image ID of a public or private image or the slug identifier for a public image. This image will be the base image for your Droplet.<br>Requires \`image:read\` scope.
    - name: ssh_keys
      value: "{{ ssh_keys }}"
      description: |
        An array containing the IDs or fingerprints of the SSH keys that you wish to embed in the Droplet's root account upon creation. You must add the keys to your team before they can be embedded on a Droplet.<br>Requires \`ssh_key:read\` scope.
      default: 
    - name: backups
      value: {{ backups }}
      description: |
        A boolean indicating whether automated backups should be enabled for the Droplet.
      default: false
    - name: backup_policy
      description: |
        An object specifying the backup policy for the Droplet. If omitted and \`backups\` is \`true\`, the backup plan will default to daily.
      value:
        plan: "{{ plan }}"
        weekday: "{{ weekday }}"
        hour: {{ hour }}
        window_length_hours: {{ window_length_hours }}
        retention_period_days: {{ retention_period_days }}
    - name: ipv6
      value: {{ ipv6 }}
      description: |
        A boolean indicating whether to enable IPv6 on the Droplet.
      default: false
    - name: monitoring
      value: {{ monitoring }}
      description: |
        A boolean indicating whether to install the DigitalOcean agent for monitoring.
      default: false
    - name: tags
      value:
        - "{{ tags }}"
      description: |
        A flat array of tag names as strings to apply to the Droplet after it is created. Tag names can either be existing or new tags.<br>Requires \`tag:create\` scope.
      default: 
    - name: user_data
      value: "{{ user_data }}"
      description: |
        A string containing 'user data' which may be used to configure the Droplet on first boot, often a 'cloud-config' file or Bash script. It must be plain text and may not exceed 64 KiB in size.
    - name: private_networking
      value: {{ private_networking }}
      description: |
        This parameter has been deprecated. Use \`vpc_uuid\` instead to specify a VPC network for the Droplet. If no \`vpc_uuid\` is provided, the Droplet will be placed in your account's default VPC for the region.
      default: false
    - name: volumes
      value:
        - "{{ volumes }}"
      description: |
        An array of IDs for block storage volumes that will be attached to the Droplet once created. The volumes must not already be attached to an existing Droplet.<br>Requires \`block_storage:read\` scpoe.
      default: 
    - name: vpc_uuid
      value: "{{ vpc_uuid }}"
      description: |
        A string specifying the UUID of the VPC to which the Droplet will be assigned. If excluded, the Droplet will be assigned to your account's default VPC for the region.<br>Requires \`vpc:read\` scope.
    - name: with_droplet_agent
      value: {{ with_droplet_agent }}
      description: |
        A boolean indicating whether to install the DigitalOcean agent used for providing access to the Droplet web console in the control panel. By default, the agent is installed on new Droplets but installation errors (i.e. OS not supported) are ignored. To prevent it from being installed, set to \`false\`. To make installation errors fatal, explicitly set it to \`true\`.
    - name: public_networking
      value: {{ public_networking }}
      description: |
        An optional boolean indicating whether this Droplet should be created with public networking or not. By default, all Droplets are created with public networking available. If explicitly set to \`false\`, only private networking will be enabled, and public networking will be disabled; currently this means that it will not have any public static or Reserved IPv4 or IPv6 address, nor can one be assigned later. If explicitly set to \`false\`, \`ipv6\` must also be \`false\`.
      default: true
    - name: names
      value:
        - "{{ names }}"
      description: |
        An array of human human-readable strings you wish to use when displaying the Droplet name. Each name, if set to a domain name managed in the DigitalOcean DNS management system, will configure a PTR record for the Droplet. Each name set during creation will also determine the hostname for the Droplet in its internal configuration.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="droplets_destroy"
    values={[
        { label: 'droplets_destroy', value: 'droplets_destroy' },
        { label: 'droplets_destroy_by_tag', value: 'droplets_destroy_by_tag' }
    ]}
>
<TabItem value="droplets_destroy">

To delete a Droplet, send a DELETE request to `/v2/droplets/$DROPLET_ID`.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully.<br />

```sql
DELETE FROM digitalocean.compute.droplets
WHERE droplet_id = '{{ droplet_id }}' --required
;
```
</TabItem>
<TabItem value="droplets_destroy_by_tag">

To delete **all** Droplets assigned to a specific tag, include the `tag_name`<br />query parameter set to the name of the tag in your DELETE request. For<br />example, `/v2/droplets?tag_name=$TAG_NAME`.<br /><br />This endpoint requires `tag:read` scope.<br /><br />A successful request will receive a 204 status code with no body in response.<br />This indicates that the request was processed successfully.<br />

```sql
DELETE FROM digitalocean.compute.droplets
WHERE tag_name = '{{ tag_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="droplet_actions_post"
    values={[
        { label: 'droplet_actions_post', value: 'droplet_actions_post' },
        { label: 'droplet_actions_post_by_tag', value: 'droplet_actions_post_by_tag' },
        { label: 'enable_backups', value: 'enable_backups' },
        { label: 'disable_backups', value: 'disable_backups' },
        { label: 'reboot', value: 'reboot' },
        { label: 'power_cycle', value: 'power_cycle' },
        { label: 'shutdown', value: 'shutdown' },
        { label: 'power_off', value: 'power_off' },
        { label: 'power_on', value: 'power_on' },
        { label: 'password_reset', value: 'password_reset' },
        { label: 'enable_ipv6', value: 'enable_ipv6' },
        { label: 'restore', value: 'restore' },
        { label: 'resize', value: 'resize' },
        { label: 'rebuild', value: 'rebuild' },
        { label: 'rename', value: 'rename' },
        { label: 'change_kernel', value: 'change_kernel' },
        { label: 'snapshot', value: 'snapshot' },
        { label: 'change_backup_policy', value: 'change_backup_policy' },
        { label: 'power_cycle_by_tag', value: 'power_cycle_by_tag' },
        { label: 'power_on_by_tag', value: 'power_on_by_tag' },
        { label: 'power_off_by_tag', value: 'power_off_by_tag' },
        { label: 'shutdown_by_tag', value: 'shutdown_by_tag' },
        { label: 'enable_ipv6_by_tag', value: 'enable_ipv6_by_tag' },
        { label: 'enable_backups_by_tag', value: 'enable_backups_by_tag' },
        { label: 'disable_backups_by_tag', value: 'disable_backups_by_tag' },
        { label: 'snapshot_by_tag', value: 'snapshot_by_tag' }
    ]}
>
<TabItem value="droplet_actions_post">

To initiate an action on a Droplet send a POST request to<br />`/v2/droplets/$DROPLET_ID/actions`. In the JSON body to the request,<br />set the `type` attribute to one of the supported action types:<br /><br />| Action                                   | Details | Required Permissions |<br />| ---------------------------------------- | ----------- | ----------- |<br />| `enable_backups`            | Enables backups for a Droplet | `droplet:update` |<br />| `disable_backups`           | Disables backups for a Droplet | `droplet:update` |<br />| `change_backup_policy`      | Update the backup policy for a Droplet | `droplet:update` |<br />| `reboot`                    | Reboots a Droplet. A `reboot` action is an attempt to reboot the Droplet in a graceful way, similar to using the `reboot` command from the console. | `droplet:update` |<br />| `power_cycle`               | Power cycles a Droplet. A `powercycle` action is similar to pushing the reset button on a physical machine, it's similar to booting from scratch. | `droplet:update` |<br />| `shutdown`                  | Shuts down a Droplet. A shutdown action is an attempt to shutdown the Droplet in a graceful way, similar to using the `shutdown` command from the console. Since a `shutdown` command can fail, this action guarantees that the command is issued, not that it succeeds. The preferred way to turn off a Droplet is to attempt a shutdown, with a reasonable timeout, followed by a `power_off` action to ensure the Droplet is off. | `droplet:update` |<br />| `power_off`                 | Powers off a Droplet. A `power_off` event is a hard shutdown and should only be used if the `shutdown` action is not successful. It is similar to cutting the power on a server and could lead to complications. | `droplet:update` |<br />| `power_on`                  | Powers on a Droplet. | `droplet:update` |<br />| `restore`                   | Restore a Droplet using a backup image. The image ID that is passed in must be a backup of the current Droplet instance. The operation will leave any embedded SSH keys intact. | `droplet:update`<br />`droplet:admin` |<br />| `password_reset`            | Resets the root password for a Droplet. A new password will be provided via email. It must be changed after first use. | `droplet:update`<br />`droplet:admin` |<br />| `resize`                    | Resizes a Droplet. Set the `size` attribute to a size slug. If a permanent resize with disk changes included is desired, set the `disk` attribute to `true`. | `droplet:update`<br />`droplet:create` |<br />| `rebuild`                   | Rebuilds a Droplet from a new base image. Set the `image` attribute to an image ID or slug. | `droplet:update`<br />`droplet:admin` |<br />| `rename`                    | Renames a Droplet. | `droplet:update` |<br />| `change_kernel`             | Changes a Droplet's kernel. Only applies to Droplets with externally managed kernels. All Droplets created after March 2017 use internal kernels by default. | `droplet:update` |<br />| `enable_ipv6`               | Enables IPv6 for a Droplet. Once enabled for a Droplet, IPv6 can not be disabled. When enabling IPv6 on an existing Droplet, [additional OS-level configuration](https://docs.digitalocean.com/products/networking/ipv6/how-to/enable/#on-existing-droplets) is required. | `droplet:update` |<br />| `snapshot`                  | Takes a snapshot of a Droplet. | `droplet:update`<br />`image:create` |<br />

```sql
EXEC digitalocean.compute.droplets.droplet_actions_post 
@droplet_id='{{ droplet_id }}' --required 
@@json=
'{
"type": "{{ type }}", 
"backup_policy": "{{ backup_policy }}", 
"image": {{ image }}, 
"disk": {{ disk }}, 
"size": "{{ size }}", 
"name": "{{ name }}", 
"kernel": {{ kernel }}
}'
;
```
</TabItem>
<TabItem value="droplet_actions_post_by_tag">

Some actions can be performed in bulk on tagged Droplets. The actions can be<br />initiated by sending a POST to `/v2/droplets/actions?tag_name=$TAG_NAME` with<br />the action arguments.<br /><br />Only a sub-set of action types are supported:<br /><br />- `power_cycle`<br />- `power_on`<br />- `power_off`<br />- `shutdown`<br />- `enable_ipv6`<br />- `enable_backups`<br />- `disable_backups`<br />- `snapshot` (also requires `image:create` permission)<br />

```sql
EXEC digitalocean.compute.droplets.droplet_actions_post_by_tag 
@tag_name='{{ tag_name }}' 
@@json=
'{
"type": "{{ type }}", 
"name": "{{ name }}"
}'
;
```
</TabItem>
<TabItem value="enable_backups">

Invokes the `enable_backups` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.

```sql
EXEC digitalocean.compute.droplets.enable_backups 
@droplet_id='{{ droplet_id }}' --required 
@@json=
'{
"backup_policy": "{{ backup_policy }}"
}'
;
```
</TabItem>
<TabItem value="disable_backups">

Invokes the `disable_backups` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.

```sql
EXEC digitalocean.compute.droplets.disable_backups 
@droplet_id='{{ droplet_id }}' --required
;
```
</TabItem>
<TabItem value="reboot">

Invokes the `reboot` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.

```sql
EXEC digitalocean.compute.droplets.reboot 
@droplet_id='{{ droplet_id }}' --required
;
```
</TabItem>
<TabItem value="power_cycle">

Invokes the `power_cycle` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.

```sql
EXEC digitalocean.compute.droplets.power_cycle 
@droplet_id='{{ droplet_id }}' --required
;
```
</TabItem>
<TabItem value="shutdown">

Invokes the `shutdown` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.

```sql
EXEC digitalocean.compute.droplets.shutdown 
@droplet_id='{{ droplet_id }}' --required
;
```
</TabItem>
<TabItem value="power_off">

Invokes the `power_off` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.

```sql
EXEC digitalocean.compute.droplets.power_off 
@droplet_id='{{ droplet_id }}' --required
;
```
</TabItem>
<TabItem value="power_on">

Invokes the `power_on` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.

```sql
EXEC digitalocean.compute.droplets.power_on 
@droplet_id='{{ droplet_id }}' --required
;
```
</TabItem>
<TabItem value="password_reset">

Invokes the `password_reset` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.

```sql
EXEC digitalocean.compute.droplets.password_reset 
@droplet_id='{{ droplet_id }}' --required
;
```
</TabItem>
<TabItem value="enable_ipv6">

Invokes the `enable_ipv6` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.

```sql
EXEC digitalocean.compute.droplets.enable_ipv6 
@droplet_id='{{ droplet_id }}' --required
;
```
</TabItem>
<TabItem value="restore">

Invokes the `restore` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.

```sql
EXEC digitalocean.compute.droplets.restore 
@droplet_id='{{ droplet_id }}' --required 
@@json=
'{
"image": "{{ image }}"
}'
;
```
</TabItem>
<TabItem value="resize">

Invokes the `resize` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.

```sql
EXEC digitalocean.compute.droplets.resize 
@droplet_id='{{ droplet_id }}' --required 
@@json=
'{
"disk": {{ disk }}, 
"size": "{{ size }}"
}'
;
```
</TabItem>
<TabItem value="rebuild">

Invokes the `rebuild` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.

```sql
EXEC digitalocean.compute.droplets.rebuild 
@droplet_id='{{ droplet_id }}' --required 
@@json=
'{
"image": "{{ image }}"
}'
;
```
</TabItem>
<TabItem value="rename">

Invokes the `rename` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.

```sql
EXEC digitalocean.compute.droplets.rename 
@droplet_id='{{ droplet_id }}' --required 
@@json=
'{
"name": "{{ name }}"
}'
;
```
</TabItem>
<TabItem value="change_kernel">

Invokes the `change_kernel` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.

```sql
EXEC digitalocean.compute.droplets.change_kernel 
@droplet_id='{{ droplet_id }}' --required 
@@json=
'{
"kernel": {{ kernel }}
}'
;
```
</TabItem>
<TabItem value="snapshot">

Invokes the `snapshot` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.

```sql
EXEC digitalocean.compute.droplets.snapshot 
@droplet_id='{{ droplet_id }}' --required 
@@json=
'{
"name": "{{ name }}"
}'
;
```
</TabItem>
<TabItem value="change_backup_policy">

Invokes the `change_backup_policy` action. Fabricated lifecycle operation over `POST /v2/droplets/&#123;droplet_id&#125;/actions`.

```sql
EXEC digitalocean.compute.droplets.change_backup_policy 
@droplet_id='{{ droplet_id }}' --required 
@@json=
'{
"backup_policy": "{{ backup_policy }}"
}'
;
```
</TabItem>
<TabItem value="power_cycle_by_tag">

Invokes the `power_cycle` action. Fabricated lifecycle operation over `POST /v2/droplets/actions`.

```sql
EXEC digitalocean.compute.droplets.power_cycle_by_tag 
@tag_name='{{ tag_name }}'
;
```
</TabItem>
<TabItem value="power_on_by_tag">

Invokes the `power_on` action. Fabricated lifecycle operation over `POST /v2/droplets/actions`.

```sql
EXEC digitalocean.compute.droplets.power_on_by_tag 
@tag_name='{{ tag_name }}'
;
```
</TabItem>
<TabItem value="power_off_by_tag">

Invokes the `power_off` action. Fabricated lifecycle operation over `POST /v2/droplets/actions`.

```sql
EXEC digitalocean.compute.droplets.power_off_by_tag 
@tag_name='{{ tag_name }}'
;
```
</TabItem>
<TabItem value="shutdown_by_tag">

Invokes the `shutdown` action. Fabricated lifecycle operation over `POST /v2/droplets/actions`.

```sql
EXEC digitalocean.compute.droplets.shutdown_by_tag 
@tag_name='{{ tag_name }}'
;
```
</TabItem>
<TabItem value="enable_ipv6_by_tag">

Invokes the `enable_ipv6` action. Fabricated lifecycle operation over `POST /v2/droplets/actions`.

```sql
EXEC digitalocean.compute.droplets.enable_ipv6_by_tag 
@tag_name='{{ tag_name }}'
;
```
</TabItem>
<TabItem value="enable_backups_by_tag">

Invokes the `enable_backups` action. Fabricated lifecycle operation over `POST /v2/droplets/actions`.

```sql
EXEC digitalocean.compute.droplets.enable_backups_by_tag 
@tag_name='{{ tag_name }}'
;
```
</TabItem>
<TabItem value="disable_backups_by_tag">

Invokes the `disable_backups` action. Fabricated lifecycle operation over `POST /v2/droplets/actions`.

```sql
EXEC digitalocean.compute.droplets.disable_backups_by_tag 
@tag_name='{{ tag_name }}'
;
```
</TabItem>
<TabItem value="snapshot_by_tag">

Invokes the `snapshot` action. Fabricated lifecycle operation over `POST /v2/droplets/actions`.

```sql
EXEC digitalocean.compute.droplets.snapshot_by_tag 
@tag_name='{{ tag_name }}' 
@@json=
'{
"name": "{{ name }}"
}'
;
```
</TabItem>
</Tabs>
