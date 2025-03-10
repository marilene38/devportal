---
title: Function: baremethod()
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [arc4](../README) / baremethod



> **baremethod**\<`TContract`\>(`config`?): \<`TArgs`, `TReturn`\>(`target`, `ctx`) => (`this`, ...`args`) => `TReturn`

Defined in: [packages/algo-ts/src/arc4/index.ts:153](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L153)

Declares the decorated method as a baremethod that can only be called with no transaction args

## Type Parameters

• **TContract** *extends* [`Contract`](../classes/Contract)

the type of the contract this method is a part of

## Parameters

### config?

[`BareMethodConfig`](../type-aliases/BareMethodConfig)

The config for this bare method

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