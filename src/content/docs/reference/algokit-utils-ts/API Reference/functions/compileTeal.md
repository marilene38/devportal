---
editUrl: false
next: false
prev: false
title: "compileTeal"
---

> **compileTeal**(`tealCode`, `algod`): `Promise`\<`CompiledTeal`\>

:::caution[Deprecated]
Use `algorand.app.compileTeal` instead.

Compiles the given TEAL using algod and returns the result, including source map.
:::

## Parameters

### tealCode

`string`

The TEAL code

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`CompiledTeal`\>

The information about the compiled file

## Defined in

[src/app.ts:415](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/app.ts#L415)
