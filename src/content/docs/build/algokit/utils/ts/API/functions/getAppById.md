---
editUrl: false
next: false
prev: false
title: "getAppById"
---

> **getAppById**(`appId`, `algod`): `Promise`\<`Application`\>

:::caution[Deprecated]
Use `algorand.app.getById` instead.

Gets the current data for the given app from algod.
:::

## Parameters

### appId

The id of the app

`number` | `bigint`

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`Application`\>

The data about the app

## Defined in

[src/app.ts:402](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/app.ts#L402)
