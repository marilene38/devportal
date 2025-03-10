---
title: Function: abimethod()
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [arc4](../README) / abimethod



> **abimethod**\<`TContract`\>(`config`?): \<`TArgs`, `TReturn`\>(`target`, `ctx`) => (`this`, ...`args`) => `TReturn`

Defined in: [packages/algo-ts/src/arc4/index.ts:123](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L123)

Declares the decorated method as an abimethod that is called when the first transaction arg matches the method selector

## Type Parameters

• **TContract** *extends* [`Contract`](../classes/Contract)

the type of the contract this method is a part of

## Parameters

### config?

[`AbiMethodConfig`](../type-aliases/AbiMethodConfig)\<`TContract`\>

The config for this abi method

## Returns

`Function`

### Type Parameters

• **TArgs** *extends* `any`[]

• **TReturn**

### Parameters

#### target

(`this`, ...`args`) => `TReturn`

#### ctx

[`ClassMethodDecoratorContext`](../-internal-/interfaces/ClassMethodDecoratorContext)\<`TContract`\>

### Returns

`Function`

#### Parameters

##### this

`TContract`

##### args

...`TArgs`

#### Returns

`TReturn`