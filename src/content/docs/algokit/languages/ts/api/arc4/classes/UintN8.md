---
title: Class: UintN8
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [arc4](../README) / UintN8



Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:156](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L156)

An alias for UintN<8>

## Extends

- [`UintN`](UintN)\<`8`\>

## Constructors

### new UintN8()

> **new UintN8**(`v`?): [`UintN8`](UintN8)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:136](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L136)

Create a new UintN instance

#### Parameters

##### v?

[`Uint64Compat`](../../index/type-aliases/Uint64Compat)

The native uint64 or biguint value to initialize this UintN from

#### Returns

[`UintN8`](UintN8)

#### Inherited from

[`UintN`](UintN).[`constructor`](UintN#constructors)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](../../index/type-aliases/bytes)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:97](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L97)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](../../index/type-aliases/bytes)

#### Inherited from

[`UintN`](UintN).[`bytes`](UintN#bytes)

***

### native

#### Get Signature

> **get** **native**(): [`NativeForArc4Int`](../-internal-/type-aliases/NativeForArc4Int)\<`N`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:143](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L143)

Retrieve the decoded native uint64 or biguint

##### Returns

[`NativeForArc4Int`](../-internal-/type-aliases/NativeForArc4Int)\<`N`\>

#### Inherited from

[`UintN`](UintN).[`native`](UintN#native)