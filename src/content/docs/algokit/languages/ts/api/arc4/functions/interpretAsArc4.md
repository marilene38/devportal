---
title: Function: interpretAsArc4()
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [arc4](../README) / interpretAsArc4



> **interpretAsArc4**\<`T`\>(`bytes`, `prefix`): `T`

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:562](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L562)

Interpret the provided bytes as an ARC4 encoded type with no validation

## Type Parameters

• **T** *extends* [`ARC4Encoded`](../classes/ARC4Encoded)

## Parameters

### bytes

[`BytesCompat`](../../index/type-aliases/BytesCompat)

An arc4 encoded bytes value

### prefix

The prefix (if any), present in the bytes value. This prefix will be validated and removed

`"log"` | `"none"`

## Returns

`T`