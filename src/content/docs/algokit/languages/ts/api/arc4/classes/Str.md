---
title: Class: Str
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [arc4](../README) / Str



Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:105](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L105)

A utf8 encoded string prefixed with its length expressed as a 2 byte uint

## Extends

- [`ARC4Encoded`](ARC4Encoded)

## Constructors

### new Str()

> **new Str**(`s`?): [`Str`](Str)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:113](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L113)

Create a new Str instance

#### Parameters

##### s?

`string`

The native string to initialize this Str from

#### Returns

[`Str`](Str)

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

> **get** **native**(): `string`

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:120](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L120)

Retrieve the decoded native string

##### Returns

`string`