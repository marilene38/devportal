---
editUrl: false
next: false
prev: false
title: "getAppBoxNames"
---

> **getAppBoxNames**(`appId`, `algod`): `Promise`\<`BoxName`[]\>

:::caution[Deprecated]
Use `algorand.app.getBoxNames` instead.
Returns the names of the boxes for the given app.
:::

## Parameters

### appId

The ID of the app return box names for

`number` | `bigint`

### algod

`AlgodClient`

An algod client instance

## Returns

`Promise`\<`BoxName`[]\>

The current box names

## Defined in

[src/app.ts:272](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/app.ts#L272)
