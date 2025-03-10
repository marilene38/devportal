---
title: Function: Box()
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [index](../README) / Box



> **Box**\<`TValue`\>(`options`): [`Box`](../type-aliases/Box)\<`TValue`\>

Defined in: [packages/algo-ts/src/box.ts:175](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/box.ts#L175)

Creates a Box proxy object offering methods of getting and setting the value stored in a single box.

## Type Parameters

• **TValue**

The type of the data stored in the box. This value will be encoded to bytes when stored and decoded on retrieval.

## Parameters

### options

[`CreateBoxOptions`](../-internal-/interfaces/CreateBoxOptions)

Options for creating the Box proxy

## Returns

[`Box`](../type-aliases/Box)\<`TValue`\>