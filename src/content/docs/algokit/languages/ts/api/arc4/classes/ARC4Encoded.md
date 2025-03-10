---
title: Class: `abstract` ARC4Encoded
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [arc4](../README) / ARC4Encoded



Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:90](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L90)

A base type for ARC4 encoded values

## Extended by

- [`Str`](Str)
- [`UintN`](UintN)
- [`UFixedNxM`](UFixedNxM)
- [`Bool`](Bool)
- [`Tuple`](Tuple)
- [`Arc4ArrayBase`](../-internal-/classes/Arc4ArrayBase)
- [`StructBase`](../-internal-/classes/StructBase)

## Implements

- [`BytesBacked`](../../index/interfaces/BytesBacked)

## Constructors

### new ARC4Encoded()

> **new ARC4Encoded**(): [`ARC4Encoded`](ARC4Encoded)

#### Returns

[`ARC4Encoded`](ARC4Encoded)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](../../index/type-aliases/bytes)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:97](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L97)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](../../index/type-aliases/bytes)

#### Implementation of

[`BytesBacked`](../../index/interfaces/BytesBacked).[`bytes`](../../index/interfaces/BytesBacked#bytes)