---
editUrl: false
next: false
prev: false
title: "getAppDeploymentTransactionNote"
---

> **getAppDeploymentTransactionNote**(`metadata`): `Arc2TransactionNote`

:::caution[Deprecated]
Use `{ dAppName: APP_DEPLOY_NOTE_DAPP, data: metadata, format: 'j' }` instead.

Return the transaction note for an app deployment.
:::

## Parameters

### metadata

`AppDeployMetadata`

The metadata of the deployment

## Returns

`Arc2TransactionNote`

The transaction note as a utf-8 string

## Defined in

[src/app-deploy.ts:252](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/app-deploy.ts#L252)
