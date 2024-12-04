---
editUrl: false
next: false
prev: false
title: "getTransactionParams"
---

> **getTransactionParams**(`params`, `algod`): `Promise`\<`SuggestedParamsWithMinFee` \| \{`fee`: `number`;`firstRound`: `number`;`flatFee`: `boolean`;`genesisHash`: `string`;`genesisID`: `string`;`lastRound`: `number`; \}\>

:::caution[Deprecated]
Use `suggestedParams ? { ...suggestedParams } : await algod.getTransactionParams().do()` instead

Returns suggested transaction parameters from algod unless some are already provided.
:::

## Parameters

### params

Optionally provide parameters to use

`undefined` | `SuggestedParams`

### algod

`AlgodClient`

Algod algod

## Returns

`Promise`\<`SuggestedParamsWithMinFee` \| \{`fee`: `number`;`firstRound`: `number`;`flatFee`: `boolean`;`genesisHash`: `string`;`genesisID`: `string`;`lastRound`: `number`; \}\>

The suggested transaction parameters

## Defined in

[src/transaction/transaction.ts:912](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/transaction/transaction.ts#L912)
