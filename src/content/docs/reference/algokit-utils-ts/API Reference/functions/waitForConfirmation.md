---
editUrl: false
next: false
prev: false
title: "waitForConfirmation"
---

> **waitForConfirmation**(`transactionId`, `maxRoundsToWait`, `algod`): `Promise`\<`PendingTransactionResponse`\>

Wait until the transaction is confirmed or rejected, or until `timeout`
number of rounds have passed.

## Parameters

### transactionId

`string`

The transaction ID to wait for

### maxRoundsToWait

Maximum number of rounds to wait

`number` | `bigint`

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`PendingTransactionResponse`\>

Pending transaction information

## Throws

Throws an error if the transaction is not confirmed or rejected in the next `timeout` rounds

## Defined in

[src/transaction/transaction.ts:803](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/transaction/transaction.ts#L803)
