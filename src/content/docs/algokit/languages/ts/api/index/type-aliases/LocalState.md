---
title: Type Alias: LocalState()\<ValueType\>
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [index](../README) / LocalState



> **LocalState**\<`ValueType`\>: (`account`) => [`LocalStateForAccount`](LocalStateForAccount)\<`ValueType`\>

Defined in: [packages/algo-ts/src/state.ts:92](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/state.ts#L92)

A proxy for manipulating a local state field for any account

## Type Parameters

• **ValueType**

Gets the LocalState proxy for a specific account

## Parameters

### account

[`Account`](Account)

The account to read or write state for. This account must be opted into the contract

## Returns

[`LocalStateForAccount`](LocalStateForAccount)\<`ValueType`\>