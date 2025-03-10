---
title: Class: UintN\<N\>
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [arc4](../README) / UintN



Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:128](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L128)

A fixed bit size unsigned int

## Extends

- [`ARC4Encoded`](ARC4Encoded)

## Extended by

- [`Byte`](Byte)
- [`UintN8`](UintN8)
- [`UintN16`](UintN16)
- [`UintN32`](UintN32)
- [`UintN64`](UintN64)
- [`UintN128`](UintN128)
- [`UintN256`](UintN256)

## Type Parameters

• **N** *extends* [`BitSize`](../type-aliases/BitSize)

## Constructors

### new UintN()

> **new UintN**\<`N`\>(`v`?): [`UintN`](UintN)\<`N`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:136](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L136)

Create a new UintN instance

#### Parameters

##### v?

[`CompatForArc4Int`](../-internal-/type-aliases/CompatForArc4Int)\<`N`\>

The native uint64 or biguint value to initialize this UintN from

#### Returns

[`UintN`](UintN)\<`N`\>

#### Overrides

[`ARC4Encoded`](ARC4Encoded).[`constructor`](ARC4Encoded#constructors)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](../../index/type-aliases/bytes)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:97](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L97)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](../../index/type-aliases/bytes)

#### Inherited from

[`ARC4Encoded`](ARC4Encoded).[`bytes`](ARC4Encoded#bytes)

***

### native

#### Get Signature

> **get** **native**(): [`NativeForArc4Int`](../-internal-/type-aliases/NativeForArc4Int)\<`N`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:143](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L143)

Retrieve the decoded native uint64 or biguint

##### Returns

[`NativeForArc4Int`](../-internal-/type-aliases/NativeForArc4Int)\<`N`\>