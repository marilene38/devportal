---
title: Function: contract()
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [index](../README) / contract



> **contract**(`options`): \<`T`\>(`contract`, `ctx`) => `never`

Defined in: [packages/algo-ts/src/base-contract.ts:86](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/base-contract.ts#L86)

The contract decorator can be used to specify additional configuration options for a smart contract

## Parameters

### options

[`ContractOptions`](../-internal-/type-aliases/ContractOptions)

An object containing the configuration options

## Returns

`Function`

### Type Parameters

• **T** *extends* [`ConstructorFor`](../-internal-/type-aliases/ConstructorFor)\<[`BaseContract`](../classes/BaseContract)\>

### Parameters

#### contract

`T`

#### ctx

[`ClassDecoratorContext`](../-internal-/interfaces/ClassDecoratorContext)

### Returns

`never`