---
title: Function: gaid()
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [op](../README) / gaid



> **gaid**(`a`): [`uint64`](../../index/type-aliases/uint64)

Defined in: [packages/algo-ts/src/op.ts:932](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/op.ts#L932)

ID of the asset or application created in the Ath transaction of the current group
`gaids` fails unless the requested transaction created an asset or application and A < GroupIndex.

## Parameters

### a

[`uint64`](../../index/type-aliases/uint64)

## Returns

[`uint64`](../../index/type-aliases/uint64)

## See

Native TEAL opcode: [`gaids`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gaids)
Min AVM version: 4