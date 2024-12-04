---
editUrl: false
next: false
prev: false
title: "getSenderAddress"
---

> **getSenderAddress**(`sender`): `string`

:::caution[Deprecated]
Use `algorand.client` to interact with accounts, and use `.addr` to get the address
and/or move from using `SendTransactionFrom` to `TransactionSignerAccount` and use `.addr` instead.

Returns the public address of the given transaction sender.
:::

## Parameters

### sender

A transaction sender

`string` | `SendTransactionFrom`

## Returns

`string`

The public address

## Defined in

[src/transaction/transaction.ts:108](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/transaction/transaction.ts#L108)
