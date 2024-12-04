---
editUrl: false
next: false
prev: false
title: "lookupAssetHoldings"
---

> **lookupAssetHoldings**(`indexer`, `assetId`, `options`?, `paginationLimit`?): `Promise`\<`MiniAssetHolding`[]\>

Looks up asset holdings for the given asset; will automatically paginate through all data.

## Parameters

### indexer

`IndexerClient`

An indexer instance

### assetId

The ID of the asset to look up holdings for

`number` | `bigint`

### options?

`LookupAssetHoldingsOptions`

Optional options to control the lookup

### paginationLimit?

`number`

The number of records to return per paginated request, default 1000

## Returns

`Promise`\<`MiniAssetHolding`[]\>

The list of application results

## Defined in

[src/indexer-lookup.ts:79](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/indexer-lookup.ts#L79)
