---
editUrl: false
next: false
prev: false
title: "transferAsset"
---

> **transferAsset**(`transfer`, `algod`): `Promise`\<`SendTransactionResult`\>

:::caution[Deprecated]
Use `algorand.send.assetTransfer()` / `algorand.createTransaction.assetTransfer()` instead

Transfer asset between two accounts.
:::

## Parameters

### transfer

`TransferAssetParams`

The transfer definition

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`SendTransactionResult`\>

The transaction object and optionally the confirmation if it was sent to the chain (`skipSending` is `false` or unset)

## Example

```typescript
await algokit.transferAsset({ from, to, assetId, amount }, algod)
```

## Defined in

[src/transfer/transfer.ts:88](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/transfer/transfer.ts#L88)
