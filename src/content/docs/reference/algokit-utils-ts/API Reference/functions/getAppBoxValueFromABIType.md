---
editUrl: false
next: false
prev: false
title: "getAppBoxValueFromABIType"
---

> **getAppBoxValueFromABIType**(`request`, `algod`): `Promise`\<`ABIValue`\>

:::caution[Deprecated]
Use `algorand.app.getBoxValueFromABIType` instead.
Returns the value of the given box name for the given app decoded based on the given ABI type.
:::

## Parameters

### request

`BoxValueRequestParams`

The parameters for the box value request

### algod

`AlgodClient`

An algod client instance

## Returns

`Promise`\<`ABIValue`\>

The current box value as an ABI value

## Defined in

[src/app.ts:310](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/app.ts#L310)
