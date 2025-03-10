---
title: Class: StructBase\<T\>
---

[**@algorandfoundation/algorand-typescript**](../../../README)

***

[@algorandfoundation/algorand-typescript](../../../README) / [arc4](../../README) / [\<internal\>](../README) / StructBase



Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:461](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L461)

The base type for arc4 structs

## Extends

- [`ARC4Encoded`](../../classes/ARC4Encoded)

## Type Parameters

• **T**

## Constructors

### new StructBase()

> **new StructBase**\<`T`\>(): [`StructBase`](StructBase)\<`T`\>

#### Returns

[`StructBase`](StructBase)\<`T`\>

#### Inherited from

[`ARC4Encoded`](../../classes/ARC4Encoded).[`constructor`](../../classes/ARC4Encoded#constructors)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](../../../index/type-aliases/bytes)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:97](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L97)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](../../../index/type-aliases/bytes)

#### Inherited from

[`ARC4Encoded`](../../classes/ARC4Encoded).[`bytes`](../../classes/ARC4Encoded#bytes)

***

### native

#### Get Signature

> **get** **native**(): `T`

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:465](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L465)

##### Returns

`T`

## Methods

### copy()

> **copy**(): `this`

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:472](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L472)

Returns a deep copy of this struct

#### Returns

`this`