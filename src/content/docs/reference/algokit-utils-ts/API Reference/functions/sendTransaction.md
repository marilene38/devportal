---
editUrl: false
next: false
prev: false
title: "sendTransaction"
---

> **sendTransaction**(`send`, `algod`): `Promise`\<`SendTransactionResult`\>

:::caution[Deprecated]
Use `AlgorandClient` / `TransactionComposer` to send transactions.

Prepares a transaction for sending and then (if instructed) signs and sends the given transaction to the chain.
:::

## Parameters

### send

The details for the transaction to prepare/send, including:
  * `transaction`: The unsigned transaction
  * `from`: The account to sign the transaction with: either an account with private key loaded or a logic signature account
  * `config`: The sending configuration for this transaction

#### from

`SendTransactionFrom`

#### sendParams

`SendTransactionParams`

#### transaction

`Transaction`

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`SendTransactionResult`\>

An object with transaction (`transaction`) and (if `skipWaiting` is `false` or `undefined`) confirmation (`confirmation`)

## Defined in

[src/transaction/transaction.ts:207](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/transaction/transaction.ts#L207)
