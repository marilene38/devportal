---
title: Type Alias: NativeForArc4Int\<N\>
---

[**@algorandfoundation/algorand-typescript**](../../../README)

***

[@algorandfoundation/algorand-typescript](../../../README) / [arc4](../../README) / [\<internal\>](../README) / NativeForArc4Int



> **NativeForArc4Int**\<`N`\>: `N` *extends* [`UintBitSize`](UintBitSize) ? [`uint64`](../../../index/type-aliases/uint64) : [`biguint`](../../../index/type-aliases/biguint)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:76](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L76)

Conditional type which returns the native equivalent type for a given UintN bit size

## Type Parameters

• **N** *extends* [`BitSize`](../../type-aliases/BitSize)