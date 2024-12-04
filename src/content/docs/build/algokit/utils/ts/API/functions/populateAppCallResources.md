---
editUrl: false
next: false
prev: false
title: "populateAppCallResources"
---

> **populateAppCallResources**(`atc`, `algod`): `Promise`\<`AtomicTransactionComposer`\>

Take an existing Atomic Transaction Composer and return a new one with the required
 app call resources packed into it

## Parameters

### atc

`AtomicTransactionComposer`

The ATC containing the txn group

### algod

`AlgodClient`

The algod client to use for the simulation

## Returns

`Promise`\<`AtomicTransactionComposer`\>

A new ATC with the resources packed into the transactions

## Defined in

[src/transaction/transaction.ts:312](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/transaction/transaction.ts#L312)
