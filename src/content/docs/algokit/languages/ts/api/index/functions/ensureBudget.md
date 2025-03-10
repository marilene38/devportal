---
title: Function: ensureBudget()
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [index](../README) / ensureBudget



> **ensureBudget**(`requiredBudget`, `feeSource`): `void`

Defined in: [packages/algo-ts/src/util.ts:130](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/util.ts#L130)

Ensure the available op code budget is greater than or equal to requiredBudget.

This is done by adding AppCall itxns to the group to increase the available budget. These itxns must be paid for
by the caller or the application.

## Parameters

### requiredBudget

[`uint64`](../type-aliases/uint64)

The total required budget

### feeSource

[`OpUpFeeSource`](../enumerations/OpUpFeeSource) = `OpUpFeeSource.GroupCredit`

Which source to withdraw txn fees from.

## Returns

`void`