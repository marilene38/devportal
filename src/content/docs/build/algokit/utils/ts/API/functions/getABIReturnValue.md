---
editUrl: false
next: false
prev: false
title: "getABIReturnValue"
---

> **getABIReturnValue**(`result`): `ABIReturn`

Takes an algosdk `ABIResult` and converts it to an `ABIReturn`.
Converts `bigint`'s for Uint's < 64 to `number` for easier use.

## Parameters

### result

`ABIResult`

The `ABIReturn`

## Returns

`ABIReturn`

## Defined in

[src/transaction/transaction.ts:712](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/transaction/transaction.ts#L712)
