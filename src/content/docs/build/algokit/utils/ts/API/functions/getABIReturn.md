---
editUrl: false
next: false
prev: false
title: "getABIReturn"
---

> **getABIReturn**(`args`?, `confirmation`?): `ABIReturn` \| `undefined`

:::caution[Deprecated]
Use `AppManager.getABIReturn` instead.

Returns any ABI return values for the given app call arguments and transaction confirmation.
:::

## Parameters

### args?

`AppCallArgs`

The arguments that were used for the call

### confirmation?

`PendingTransactionResponse`

The transaction confirmation from algod

## Returns

`ABIReturn` \| `undefined`

The return value for the method call

## Defined in

[src/app.ts:231](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/app.ts#L231)
