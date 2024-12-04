---
editUrl: false
next: false
prev: false
title: "capTransactionFee"
---

> **capTransactionFee**(`transaction`, `maxAcceptableFee`): `void`

:::caution[Deprecated]
Use `TransactionComposer` and the `maxFee` field in the transaction params instead.

Limit the acceptable fee to a defined amount of µAlgo.
This also sets the transaction to be flatFee to ensure the transaction only succeeds at
the estimated rate.
:::

## Parameters

### transaction

The transaction to cap or suggested params object about to be used to create a transaction

`Transaction` | `SuggestedParams`

### maxAcceptableFee

`AlgoAmount`

The maximum acceptable fee to pay

## Returns

`void`

## Defined in

[src/transaction/transaction.ts:862](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/transaction/transaction.ts#L862)
