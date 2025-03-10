---
title: Type Alias: BoxMap()\<TKey, TValue\>
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [index](../README) / BoxMap



> **BoxMap**\<`TKey`, `TValue`\>: (`key`) => [`Box`](Box)\<`TValue`\>

Defined in: [packages/algo-ts/src/box.ts:195](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L195)

A BoxMap proxy

## Type Parameters

• **TKey**

The type of the value used to key each box.

• **TValue**

The type of the data stored in the box.

## Type declaration

Get a Box proxy for a single item in the BoxMap

## Parameters

### key

`TKey`

The key of the box to retrieve a proxy for

## Returns

[`Box`](Box)\<`TValue`\>

### keyPrefix

> `readonly` **keyPrefix**: [`bytes`](bytes)

Get the bytes used to prefix each key