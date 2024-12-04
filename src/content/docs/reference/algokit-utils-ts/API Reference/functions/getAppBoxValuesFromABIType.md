---
editUrl: false
next: false
prev: false
title: "getAppBoxValuesFromABIType"
---

> **getAppBoxValuesFromABIType**(`request`, `algod`): `Promise`\<`ABIValue`[]\>

:::caution[Deprecated]
Use `algorand.app.getBoxValuesFromABIType` instead.
Returns the value of the given box names for the given app decoded based on the given ABI type.
:::

## Parameters

### request

`BoxValuesRequestParams`

The parameters for the box value request

### algod

`AlgodClient`

An algod client instance

## Returns

`Promise`\<`ABIValue`[]\>

The current box values as an ABI value in the same order as the passed in box names

## Defined in

[src/app.ts:325](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/app.ts#L325)
