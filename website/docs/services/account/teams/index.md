--- 
title: teams
hide_title: false
hide_table_of_contents: false
keywords:
  - teams
  - account
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

Creates, updates, deletes, gets or lists a <code>teams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="teams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="digitalocean.account.teams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="organizations_list_teams"
    values={[
        { label: 'organizations_list_teams', value: 'organizations_list_teams' }
    ]}
>
<TabItem value="organizations_list_teams">

The response will be a JSON object with a `teams` key. This will be set to an array of team objects belonging to the organization.<br />

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
    <td><code>integer (uint64)</code></td>
    <td>A unique identifier for the team.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name for the team. (example: production)</td>
</tr>
<tr>
    <td><CopyableCode code="company" /></td>
    <td><code>string</code></td>
    <td>The company name associated with the team, if set. (example: DigitalOcean)</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string (email)</code></td>
    <td>The email address associated with the team. (example: sammy@example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="joined_organization_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time value given in ISO8601 combined date and time format that represents when the team joined the organization.  (example: 2024-06-12T15:04:05Z)</td>
</tr>
<tr>
    <td><CopyableCode code="member_count" /></td>
    <td><code>integer (uint64)</code></td>
    <td>The number of members on the team.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The team's membership status within the organization. (joined, pending) (example: joined)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string (uuid)</code></td>
    <td>A unique universal identifier for the team. (example: 4e1bfbc3-dc3e-41f2-a18f-1b4d7ba71679)</td>
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
    <td><a href="#organizations_list_teams"><CopyableCode code="organizations_list_teams" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>To list all teams in an organization, send a GET request to<br />`/v2/organizations/teams`.<br /><br />This endpoint must be called in an organization context.<br /></td>
</tr>
<tr>
    <td><a href="#organizations_create_team"><CopyableCode code="organizations_create_team" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>To create a new team within an organization, send a POST request to<br />`/v2/organizations/team`.<br /><br />This endpoint must be called in an organization context. Optionally include<br />`invitations` to invite users to the new team. The `owner` role cannot be<br />assigned via invitation.<br /></td>
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

## `SELECT` examples

<Tabs
    defaultValue="organizations_list_teams"
    values={[
        { label: 'organizations_list_teams', value: 'organizations_list_teams' }
    ]}
>
<TabItem value="organizations_list_teams">

To list all teams in an organization, send a GET request to<br />`/v2/organizations/teams`.<br /><br />This endpoint must be called in an organization context.<br />

```sql
SELECT
id,
name,
company,
email,
joined_organization_at,
member_count,
status,
uuid
FROM digitalocean.account.teams
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="organizations_create_team"
    values={[
        { label: 'organizations_create_team', value: 'organizations_create_team' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="organizations_create_team">

To create a new team within an organization, send a POST request to<br />`/v2/organizations/team`.<br /><br />This endpoint must be called in an organization context. Optionally include<br />`invitations` to invite users to the new team. The `owner` role cannot be<br />assigned via invitation.<br />

```sql
INSERT INTO digitalocean.account.teams (
name,
invitations
)
SELECT 
'{{ name }}' /* required */,
'{{ invitations }}'
RETURNING
invitations,
team
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: teams
  props:
    - name: name
      value: "{{ name }}"
      description: |
        The human-readable name for the team to create.
    - name: invitations
      description: |
        Optional invitations to send when creating the team. Each invitation includes an email address and a role. The \`owner\` role cannot be assigned via invitation.
      value:
        - email: "{{ email }}"
          role: "{{ role }}"
`}</CodeBlock>

</TabItem>
</Tabs>
