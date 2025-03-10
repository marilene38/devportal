---
title: Class: StaticArray\<TItem, TLength\>
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [arc4](../README) / StaticArray



Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:307](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L307)

A fixed sized array of arc4 items

## Extends

- [`Arc4ArrayBase`](../-internal-/classes/Arc4ArrayBase)\<`TItem`\>

## Type Parameters

• **TItem** *extends* [`ARC4Encoded`](ARC4Encoded)

The type of a single item in the array

• **TLength** *extends* `number`

The fixed length of the array

## Indexable

\[`index`: [`uint64`](../../index/type-aliases/uint64)\]: `TItem`

## Constructors

### new StaticArray()

> **new StaticArray**\<`TItem`, `TLength`\>(): [`StaticArray`](StaticArray)\<`TItem`, `TLength`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:314](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L314)

Create a new StaticArray instance

#### Returns

[`StaticArray`](StaticArray)\<`TItem`, `TLength`\>

#### Overrides

[`Arc4ArrayBase`](../-internal-/classes/Arc4ArrayBase).[`constructor`](../-internal-/classes/Arc4ArrayBase#constructors)

### new StaticArray()

> **new StaticArray**\<`TItem`, `TLength`\>(...`items`): [`StaticArray`](StaticArray)\<`TItem`, `TLength`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:319](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L319)

Create a new StaticArray instance with the specified items

#### Parameters

##### items

...`TItem`[] & `object`

The initial items for the array

#### Returns

[`StaticArray`](StaticArray)\<`TItem`, `TLength`\>

#### Overrides

`Arc4ArrayBase<TItem>.constructor`

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

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`IterableIterator`](../-internal-/interfaces/IterableIterator)\<`TItem`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:277](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L277)

Returns an iterator for the items in this array

#### Returns

[`IterableIterator`](../-internal-/interfaces/IterableIterator)\<`TItem`\>

#### Inherited from

[`Arc4ArrayBase`](../-internal-/classes/Arc4ArrayBase).[`[iterator]`](../-internal-/classes/Arc4ArrayBase#iterator)

***

### at()

> **at**(`index`): `TItem`

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:249](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L249)

Returns the item at the given index.
Negative indexes are taken from the end.

#### Parameters

##### index

[`Uint64Compat`](../../index/type-aliases/Uint64Compat)

The index of the item to retrieve

#### Returns

`TItem`

#### Inherited from

[`Arc4ArrayBase`](../-internal-/classes/Arc4ArrayBase).[`at`](../-internal-/classes/Arc4ArrayBase#at)

***

### concat()

> **concat**(`other`): [`DynamicArray`](DynamicArray)\<`TItem`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:335](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L335)

Returns a new array containing all items from _this_ array, and _other_ array

#### Parameters

##### other

[`Arc4ArrayBase`](../-internal-/classes/Arc4ArrayBase)\<`TItem`\>

Another array to concat with this one

#### Returns

[`DynamicArray`](DynamicArray)\<`TItem`\>

***

### copy()

> **copy**(): [`StaticArray`](StaticArray)\<`TItem`, `TLength`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:327](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L327)

Returns a copy of this array

#### Returns

[`StaticArray`](StaticArray)\<`TItem`, `TLength`\>

***

### entries()

> **entries**(): [`IterableIterator`](../-internal-/interfaces/IterableIterator)\<readonly \[[`uint64`](../../index/type-aliases/uint64), `TItem`\]\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:284](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L284)

Returns an iterator for a tuple of the indexes and items in this array

#### Returns

[`IterableIterator`](../-internal-/interfaces/IterableIterator)\<readonly \[[`uint64`](../../index/type-aliases/uint64), `TItem`\]\>

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

> **slice**(): [`DynamicArray`](DynamicArray)\<`TItem`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:256](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L256)

**`Internal`**

Create a new Dynamic array with all items from this array

##### Returns

[`DynamicArray`](DynamicArray)\<`TItem`\>

##### Inherited from

[`Arc4ArrayBase`](../-internal-/classes/Arc4ArrayBase).[`slice`](../-internal-/classes/Arc4ArrayBase#slice)

#### Call Signature

> **slice**(`end`): [`DynamicArray`](DynamicArray)\<`TItem`\>

Defined in: [packages/algo-ts/src/arc4/encoded-types.ts:262](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/encoded-types.ts#L262)

**`Internal`**

Create a new DynamicArray with all items up till `end`.
Negative indexes are taken from the end.

##### Parameters

###### end

[`Uint64Compat`](../../index/type-aliases/Uint64Compat)

An index in which to stop copying items.

##### Returns

[`DynamicArray`](DynamicArray)\<`TItem`\>

##### Inherited from

[`Arc4ArrayBase`](../-internal-/classes/Arc4ArrayBase).[`slice`](../-internal-/classes/Arc4ArrayBase#slice)

#### Call Signature

> **slice**(`start`, `end`): [`DynamicArray`](DynamicArray)\<`TItem`\>

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

[`DynamicArray`](DynamicArray)\<`TItem`\>

##### Inherited from

[`Arc4ArrayBase`](../-internal-/classes/Arc4ArrayBase).[`slice`](../-internal-/classes/Arc4ArrayBase#slice)