---
editUrl: false
next: false
prev: false
title: "transferAlgos"
---

> **transferAlgos**(`transfer`, `algod`): `Promise`\<`SendTransactionResult`\>

:::caution[Deprecated]
Use `algorand.send.payment()` / `algorand.createTransaction.payment()` instead

Transfer Algo between two accounts.
:::

## Parameters

### transfer

`AlgoTransferParams`

The transfer definition

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`SendTransactionResult`\>

The transaction object and optionally the confirmation if it was sent to the chain (`skipSending` is `false` or unset)

## Example

```typescript
await algokit.transferAlgos({ from, to, amount: algokit.algo(1) }, algod)
```

## Defined in

[src/transfer/transfer-algos.ts:22](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/transfer/transfer-algos.ts#L22)
