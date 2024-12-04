---
editUrl: false
next: false
prev: false
title: "getSenderTransactionSigner"
---

> **getSenderTransactionSigner**(`val`): `TransactionSigner`

:::caution[Deprecated]
Use `TransactionSignerAccount` instead of `SendTransactionFrom` or use
`algosdk.makeBasicAccountTransactionSigner` / `algosdk.makeLogicSigAccountTransactionSigner`.

Returns a `TransactionSigner` for the given transaction sender.
This function has memoization, so will return the same transaction signer for a given sender.
:::

## Parameters

### val

`SendTransactionFrom`

## Returns

`TransactionSigner`

A transaction signer

## Defined in

[src/transaction/transaction.ts:166](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/transaction/transaction.ts#L166)
