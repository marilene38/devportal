---
title: Class: Contract
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [arc4](../README) / Contract



Defined in: [packages/algo-ts/src/arc4/index.ts:11](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L11)

The base type for all ARC4 contracts in Algorand TypeScript

## Extends

- [`BaseContract`](../../index/classes/BaseContract)

## Constructors

### new Contract()

> **new Contract**(): [`Contract`](Contract)

#### Returns

[`Contract`](Contract)

#### Inherited from

[`BaseContract`](../../index/classes/BaseContract).[`constructor`](../../index/classes/BaseContract#constructors)

## Methods

### approvalProgram()

> **approvalProgram**(): `boolean`

Defined in: [packages/algo-ts/src/arc4/index.ts:16](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L16)

Default implementation of an ARC4 approval program, routes transactions to ABI or bare methods based on application
args and on completion actions

#### Returns

`boolean`

#### Overrides

[`BaseContract`](../../index/classes/BaseContract).[`approvalProgram`](../../index/classes/BaseContract#approvalprogram)

***

### clearStateProgram()

> **clearStateProgram**(): `boolean` \| [`uint64`](../../index/type-aliases/uint64)

Defined in: [packages/algo-ts/src/base-contract.ts:18](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/base-contract.ts#L18)

The program to be run when the On Completion Action is == ClearState (3)

#### Returns

`boolean` \| [`uint64`](../../index/type-aliases/uint64)

#### Inherited from

[`BaseContract`](../../index/classes/BaseContract).[`clearStateProgram`](../../index/classes/BaseContract#clearstateprogram)