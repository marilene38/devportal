---
editUrl: false
next: false
prev: false
title: "createAsset"
---

> **createAsset**(`create`, `algod`): `Promise`\<`SendTransactionResult` & `object`\>

:::caution[Deprecated]
use `algorand.send.assetCreate()` / `algorand.createTransaction.assetCreate()` instead

Create an Algorand Standard Asset (ASA).
:::

## Parameters

### create

`CreateAssetParams`

The asset creation definition

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`SendTransactionResult` & `object`\>

The transaction object and optionally the confirmation if it was sent to the chain (`skipSending` is `false` or unset)

## Example

```typescript
await algokit.createAsset({ creator: account, total: 1, decimals: 0, name: 'My asset' }, algod)
```

## Defined in

[src/asset.ts:23](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/asset.ts#L23)
