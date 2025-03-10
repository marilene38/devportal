---
title: Class: Address
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [arc4](../README) / Address



Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:438](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L438)

A 32 byte Algorand Address

## Extends

- [`Arc4ArrayBase`](../-internal-/classes/Arc4ArrayBase)\<[`Byte`](Byte)\>

## Indexable

\[`index`: [`uint64`](../../index/type-aliases/uint64)\]: [`Byte`](Byte)

## Constructors

### new Address()

> **new Address**(`value`?): [`Address`](Address)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:446](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L446)

Create a new Address instance

#### Parameters

##### value?

An Account, base 32 address string, or the address bytes

`string` | [`bytes`](../../index/type-aliases/bytes) | [`Account`](../../index/type-aliases/Account)

#### Returns

[`Address`](Address)

#### Overrides

[`Arc4ArrayBase`](../-internal-/classes/Arc4ArrayBase).[`constructor`](../-internal-/classes/Arc4ArrayBase#constructors)

## Accessors

### bytes

#### Get Signature

> **get** **bytes**(): [`bytes`](../../index/type-aliases/bytes)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:97](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L97)

Retrieve the encoded bytes for this type

##### Returns

[`bytes`](../../index/type-aliases/bytes)

#### Inherited from

[`Arc4ArrayBase`](../-internal-/classes/Arc4ArrayBase).[`bytes`](../-internal-/classes/Arc4ArrayBase#bytes)

***

### length

#### Get Signature

> **get** **length**(): [`uint64`](../../index/type-aliases/uint64)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:240](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L240)

Returns the current length of this array

##### Returns

[`uint64`](../../index/type-aliases/uint64)

#### Inherited from

[`Arc4ArrayBase`](../-internal-/classes/Arc4ArrayBase).[`length`](../-internal-/classes/Arc4ArrayBase#length)

***

### native

#### Get Signature

> **get** **native**(): [`Account`](../../index/type-aliases/Account)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:453](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L453)

Returns an Account instance for this Address

##### Returns

[`Account`](../../index/type-aliases/Account)

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`IterableIterator`](../-internal-/interfaces/IterableIterator)\<[`Byte`](Byte)\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:277](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L277)

Returns an iterator for the items in this array

#### Returns

[`IterableIterator`](../-internal-/interfaces/IterableIterator)\<[`Byte`](Byte)\>

#### Inherited from

[`Arc4ArrayBase`](../-internal-/classes/Arc4ArrayBase).[`[iterator]`](../-internal-/classes/Arc4ArrayBase#iterator)

***

### at()

> **at**(`index`): [`Byte`](Byte)

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:249](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L249)

Returns the item at the given index.
Negative indexes are taken from the end.

#### Parameters

##### index

[`Uint64Compat`](../../index/type-aliases/Uint64Compat)

The index of the item to retrieve

#### Returns

[`Byte`](Byte)

#### Inherited from

[`Arc4ArrayBase`](../-internal-/classes/Arc4ArrayBase).[`at`](../-internal-/classes/Arc4ArrayBase#at)

***

### entries()

> **entries**(): [`IterableIterator`](../-internal-/interfaces/IterableIterator)\<readonly \[[`uint64`](../../index/type-aliases/uint64), [`Byte`](Byte)\]\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:284](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L284)

Returns an iterator for a tuple of the indexes and items in this array

#### Returns

[`IterableIterator`](../-internal-/interfaces/IterableIterator)\<readonly \[[`uint64`](../../index/type-aliases/uint64), [`Byte`](Byte)\]\>

#### Inherited from

[`Arc4ArrayBase`](../-internal-/classes/Arc4ArrayBase).[`entries`](../-internal-/classes/Arc4ArrayBase#entries)

***

### keys()

> **keys**(): [`IterableIterator`](../-internal-/interfaces/IterableIterator)\<[`uint64`](../../index/type-aliases/uint64)\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:291](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L291)

Returns an iterator for the indexes in this array

#### Returns

[`IterableIterator`](../-internal-/interfaces/IterableIterator)\<[`uint64`](../../index/type-aliases/uint64)\>

#### Inherited from

[`Arc4ArrayBase`](../-internal-/classes/Arc4ArrayBase).[`keys`](../-internal-/classes/Arc4ArrayBase#keys)

***

### slice()

#### Call Signature

> **slice**(): [`DynamicArray`](DynamicArray)\<[`Byte`](Byte)\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:256](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L256)

**`Internal`**

Create a new Dynamic array with all items from this array

##### Returns

[`DynamicArray`](DynamicArray)\<[`Byte`](Byte)\>

##### Inherited from

[`Arc4ArrayBase`](../-internal-/classes/Arc4ArrayBase).[`slice`](../-internal-/classes/Arc4ArrayBase#slice)

#### Call Signature

> **slice**(`end`): [`DynamicArray`](DynamicArray)\<[`Byte`](Byte)\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:262](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L262)

**`Internal`**

Create a new DynamicArray with all items up till `end`.
Negative indexes are taken from the end.

##### Parameters

###### end

[`Uint64Compat`](../../index/type-aliases/Uint64Compat)

An index in which to stop copying items.

##### Returns

[`DynamicArray`](DynamicArray)\<[`Byte`](Byte)\>

##### Inherited from

[`Arc4ArrayBase`](../-internal-/classes/Arc4ArrayBase).[`slice`](../-internal-/classes/Arc4ArrayBase#slice)

#### Call Signature

> **slice**(`start`, `end`): [`DynamicArray`](DynamicArray)\<[`Byte`](Byte)\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:269](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L269)

**`Internal`**

Create a new DynamicArray with items from `start`, up until `end`
Negative indexes are taken from the end.

##### Parameters

###### start

[`Uint64Compat`](../../index/type-aliases/Uint64Compat)

An index in which to start copying items.

###### end

[`Uint64Compat`](../../index/type-aliases/Uint64Compat)

An index in which to stop copying items

##### Returns

[`DynamicArray`](DynamicArray)\<[`Byte`](Byte)\>

##### Inherited from

[`Arc4ArrayBase`](../-internal-/classes/Arc4ArrayBase).[`slice`](../-internal-/classes/Arc4ArrayBase#slice)