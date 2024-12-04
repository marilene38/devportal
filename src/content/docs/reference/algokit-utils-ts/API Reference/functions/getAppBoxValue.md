---
editUrl: false
next: false
prev: false
title: "getAppBoxValue"
---

> **getAppBoxValue**(`appId`, `boxName`, `algod`): `Promise`\<`Uint8Array`\>

:::caution[Deprecated]
Use `algorand.app.getBoxValue` instead.
Returns the value of the given box name for the given app.
:::

## Parameters

### appId

The ID of the app return box names for

`number` | `bigint`

### boxName

The name of the box to return either as a string, binary array or `BoxName`

`string` | `Uint8Array` | `BoxName`

### algod

`AlgodClient`

An algod client instance

## Returns

`Promise`\<`Uint8Array`\>

The current box value as a byte array

## Defined in

[src/app.ts:284](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/app.ts#L284)
