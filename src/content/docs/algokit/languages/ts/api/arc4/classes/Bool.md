---
title: Class: Bool
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [arc4](../README) / Bool



Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:209](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L209)

A boolean value

## Extends

- [`ARC4Encoded`](ARC4Encoded)

## Constructors

### new Bool()

> **new Bool**(`v`?): [`Bool`](Bool)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:217](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L217)

Create a new Bool value

#### Parameters

##### v?

`boolean`

The native boolean to initialize this value from

#### Returns

[`Bool`](Bool)

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

> **get** **native**(): `boolean`

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:224](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L224)

Get the decoded native boolean for this value

##### Returns

`boolean`