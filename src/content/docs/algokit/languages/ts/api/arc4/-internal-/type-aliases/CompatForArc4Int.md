---
title: Type Alias: CompatForArc4Int\<N\>
---

[**@algorandfoundation/algorand-typescript**](../../../README)

***

[@algorandfoundation/algorand-typescript](../../../README) / [arc4](../../README) / [\<internal\>](../README) / CompatForArc4Int



> **CompatForArc4Int**\<`N`\>: `N` *extends* [`UintBitSize`](UintBitSize) ? [`Uint64Compat`](../../../index/type-aliases/Uint64Compat) : [`BigUintCompat`](../../../index/type-aliases/BigUintCompat)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:80](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L80)

Conditional type which returns the compat type relevant to a given UintN bit size

## Type Parameters

• **N** *extends* [`BitSize`](../../type-aliases/BitSize)