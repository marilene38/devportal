---
editUrl: false
next: false
prev: false
title: "assetOptIn"
---

> **assetOptIn**(`optIn`, `algod`): `Promise`\<`SendTransactionResult`\>

:::caution[Deprecated]
use `algorand.send.assetOptIn()` / `algorand.createTransaction.assetOptIn()` instead

Opt-in an account to an asset.
:::

## Parameters

### optIn

`AssetOptInParams`

The opt-in definition

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`SendTransactionResult`\>

The transaction object and optionally the confirmation if it was sent to the chain (`skipSending` is `false` or unset)

## Example

```typescript
await algokit.assetOptIn({ account, assetId }, algod)
```

## Defined in

[src/asset.ts:67](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/asset.ts#L67)
