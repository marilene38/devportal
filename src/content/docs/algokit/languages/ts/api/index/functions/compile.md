---
title: Function: compile()
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [index](../README) / compile



## Call Signature

> **compile**(`contract`, `options`?): [`CompiledContract`](../type-aliases/CompiledContract)

Defined in: [packages/algo-ts/src/compiled.ts:107](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L107)

Compile a contract and return the resulting byte code for approval and clear state programs.

### Parameters

#### contract

[`ConstructorFor`](../-internal-/type-aliases/ConstructorFor)\<[`BaseContract`](../classes/BaseContract)\>

The contract class to compile

#### options?

[`CompileContractOptions`](../type-aliases/CompileContractOptions)

Options for compiling the contract

### Returns

[`CompiledContract`](../type-aliases/CompiledContract)

## Call Signature

> **compile**(`logicSig`, `options`?): [`CompiledLogicSig`](../type-aliases/CompiledLogicSig)

Defined in: [packages/algo-ts/src/compiled.ts:113](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/compiled.ts#L113)

Compile a logic signature and return an account ready for signing transactions.

### Parameters

#### logicSig

[`ConstructorFor`](../-internal-/type-aliases/ConstructorFor)\<[`LogicSig`](../classes/LogicSig)\>

The logic sig class to compile

#### options?

[`CompileLogicSigOptions`](../type-aliases/CompileLogicSigOptions)

Options for compiling the logic sig

### Returns

[`CompiledLogicSig`](../type-aliases/CompiledLogicSig)