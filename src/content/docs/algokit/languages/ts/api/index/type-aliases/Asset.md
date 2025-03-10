---
title: Type Alias: Asset
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [index](../README) / Asset



> **Asset**: `object`

Defined in: [packages/algo-ts/src/reference.ts:128](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/reference.ts#L128)

An Asset on the Algorand network.

## Type declaration

### clawback

> `readonly` **clawback**: [`Account`](Account)

Clawback address

### creator

> `readonly` **creator**: [`Account`](Account)

Creator address

### decimals

> `readonly` **decimals**: [`uint64`](uint64)

#### See

AssetParams.decimals

### defaultFrozen

> `readonly` **defaultFrozen**: `boolean`

Frozen by default or not

### freeze

> `readonly` **freeze**: [`Account`](Account)

Freeze address

### id

> `readonly` **id**: [`uint64`](uint64)

Returns the id of the Asset

### manager

> `readonly` **manager**: [`Account`](Account)

Manager address

### metadataHash

> `readonly` **metadataHash**: [`bytes`](bytes)

Arbitrary commitment

### name

> `readonly` **name**: [`bytes`](bytes)

Asset name

### reserve

> `readonly` **reserve**: [`Account`](Account)

Reserve address

### total

> `readonly` **total**: [`uint64`](uint64)

Total number of units of this asset

### unitName

> `readonly` **unitName**: [`bytes`](bytes)

Asset unit name

### url

> `readonly` **url**: [`bytes`](bytes)

URL with additional info about the asset

### balance()

Amount of the asset unit held by this account. Fails if the account has not
opted in to the asset.
Asset and supplied Account must be an available resource

#### Parameters

##### account

[`Account`](Account)

Account

#### Returns

[`uint64`](uint64)

balance: uint64

### frozen()

Is the asset frozen or not. Fails if the account has not
opted in to the asset.
Asset and supplied Account must be an available resource

#### Parameters

##### account

[`Account`](Account)

Account

#### Returns

`boolean`

isFrozen: boolean