---
editUrl: false
next: false
prev: false
title: "getABIMethodSignature"
---

> **getABIMethodSignature**(`method`): `string`

:::caution[Deprecated]
Use `abiMethod.getSignature()` or `new ABIMethod(abiMethodParams).getSignature()` instead.

Returns the encoded ABI spec for a given ABI Method
:::

## Parameters

### method

The method to return a signature for

`ABIMethodParams` | `ABIMethod`

## Returns

`string`

The encoded ABI method spec e.g. `method_name(uint64,string)string`

## Defined in

[src/app.ts:426](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/app.ts#L426)
