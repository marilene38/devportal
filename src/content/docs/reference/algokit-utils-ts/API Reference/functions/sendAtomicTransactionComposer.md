---
editUrl: false
next: false
prev: false
title: "sendAtomicTransactionComposer"
---

> **sendAtomicTransactionComposer**(`atcSend`, `algod`): `Promise`\<`SendAtomicTransactionComposerResults`\>

Signs and sends transactions that have been collected by an `AtomicTransactionComposer`.

## Parameters

### atcSend

`AtomicTransactionComposerToSend`

The parameters controlling the send, including `atc` The `AtomicTransactionComposer` and params to control send behaviour

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`SendAtomicTransactionComposerResults`\>

An object with transaction IDs, transactions, group transaction ID (`groupTransactionId`) if more than 1 transaction sent, and (if `skipWaiting` is `false` or unset) confirmation (`confirmation`)

## Defined in

[src/transaction/transaction.ts:563](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/transaction/transaction.ts#L563)
