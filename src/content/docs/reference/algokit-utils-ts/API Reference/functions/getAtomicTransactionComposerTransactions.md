---
editUrl: false
next: false
prev: false
title: "getAtomicTransactionComposerTransactions"
---

> **getAtomicTransactionComposerTransactions**(`atc`): `TransactionWithSigner`[]

:::caution[Deprecated]
Use `atc.clone().buildGroup()` instead.

Returns the array of transactions currently present in the given `AtomicTransactionComposer`
:::

## Parameters

### atc

`AtomicTransactionComposer`

The atomic transaction composer

## Returns

`TransactionWithSigner`[]

The array of transactions with signers

## Defined in

[src/transaction/transaction.ts:923](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/transaction/transaction.ts#L923)
