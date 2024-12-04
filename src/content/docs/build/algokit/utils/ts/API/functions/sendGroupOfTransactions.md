---
editUrl: false
next: false
prev: false
title: "sendGroupOfTransactions"
---

> **sendGroupOfTransactions**(`groupSend`, `algod`): `Promise`\<`Omit`\<`SendAtomicTransactionComposerResults`, `"returns"`\>\>

:::caution[Deprecated]
Use `TransactionComposer` (`algorand.newGroup()`) or `AtomicTransactionComposer` to construct and send group transactions instead.

Signs and sends a group of [up to 16](https://developer.algorand.org/docs/get-details/atomic_transfers/#create-transactions) transactions to the chain
:::

## Parameters

### groupSend

`TransactionGroupToSend`

The group details to send, with:
  * `transactions`: The array of transactions to send along with their signing account
  * `sendParams`: The parameters to dictate how the group is sent

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`Omit`\<`SendAtomicTransactionComposerResults`, `"returns"`\>\>

An object with transaction IDs, transactions, group transaction ID (`groupTransactionId`) if more than 1 transaction sent, and (if `skipWaiting` is `false` or unset) confirmation (`confirmation`)

## Defined in

[src/transaction/transaction.ts:758](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/transaction/transaction.ts#L758)
