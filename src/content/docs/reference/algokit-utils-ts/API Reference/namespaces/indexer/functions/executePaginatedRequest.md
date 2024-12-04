---
editUrl: false
next: false
prev: false
title: "executePaginatedRequest"
---

> **executePaginatedRequest**\<`TResult`, `TRequest`\>(`extractItems`, `buildRequest`): `Promise`\<`TResult`[]\>

## Type Parameters

• **TResult**

• **TRequest** *extends* `object`

## Parameters

### extractItems

(`response`) => `TResult`[]

### buildRequest

(`nextToken`?) => `TRequest`

## Returns

`Promise`\<`TResult`[]\>

## Defined in

[src/indexer-lookup.ts:152](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/indexer-lookup.ts#L152)
