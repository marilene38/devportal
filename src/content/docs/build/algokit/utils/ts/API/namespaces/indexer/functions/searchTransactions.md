---
editUrl: false
next: false
prev: false
title: "searchTransactions"
---

> **searchTransactions**(`indexer`, `searchCriteria`, `paginationLimit`?): `Promise`\<`TransactionSearchResults`\>

Allows transactions to be searched for the given criteria.

## Parameters

### indexer

`IndexerClient`

An indexer client

### searchCriteria

(`s`) => `SearchForTransactions`

The criteria to search for

### paginationLimit?

`number`

The number of records to return per paginated request, default 1000

## Returns

`Promise`\<`TransactionSearchResults`\>

The search results

## Defined in

[src/indexer-lookup.ts:118](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/indexer-lookup.ts#L118)
