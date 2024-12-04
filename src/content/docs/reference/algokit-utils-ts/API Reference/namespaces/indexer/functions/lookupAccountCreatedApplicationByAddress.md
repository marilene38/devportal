---
editUrl: false
next: false
prev: false
title: "lookupAccountCreatedApplicationByAddress"
---

> **lookupAccountCreatedApplicationByAddress**(`indexer`, `address`, `getAll`, `paginationLimit`?): `Promise`\<`ApplicationResult`[]\>

Looks up applications that were created by the given address; will automatically paginate through all data.

## Parameters

### indexer

`IndexerClient`

An indexer instance

### address

`string`

The address of the creator to look up

### getAll

Whether or not to include deleted applications

`undefined` | `boolean`

### paginationLimit?

`number`

The number of records to return per paginated request, default 1000

## Returns

`Promise`\<`ApplicationResult`[]\>

The list of application results

## Defined in

[src/indexer-lookup.ts:45](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/indexer-lookup.ts#L45)
