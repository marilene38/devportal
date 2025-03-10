---
title: Interface: AssetTransferFields
---

[**@algorandfoundation/algorand-typescript**](../../../../README)

***

[@algorandfoundation/algorand-typescript](../../../../README) / [index](../../../README) / [itxn](../README) / AssetTransferFields



Defined in: [packages/algo-ts/src/itxn.ts:126](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L126)

## Extends

- [`CommonTransactionFields`](CommonTransactionFields)

## Properties

### assetAmount?

> `optional` **assetAmount**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/itxn.ts:130](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L130)

The amount of the asset being transferred

***

### assetCloseTo?

> `optional` **assetCloseTo**: [`AccountInput`](../../../-internal-/type-aliases/AccountInput)

Defined in: [packages/algo-ts/src/itxn.ts:136](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L136)

The address to close the asset to

***

### assetReceiver?

> `optional` **assetReceiver**: [`AccountInput`](../../../-internal-/type-aliases/AccountInput)

Defined in: [packages/algo-ts/src/itxn.ts:134](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L134)

The receiver of the asset

***

### assetSender?

> `optional` **assetSender**: [`AccountInput`](../../../-internal-/type-aliases/AccountInput)

Defined in: [packages/algo-ts/src/itxn.ts:132](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L132)

The clawback target

***

### fee?

> `optional` **fee**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/itxn.ts:47](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L47)

microalgos

#### Inherited from

[`CommonTransactionFields`](CommonTransactionFields).[`fee`](CommonTransactionFields#fee)

***

### firstValid?

> `optional` **firstValid**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/itxn.ts:52](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L52)

round number

#### Inherited from

[`CommonTransactionFields`](CommonTransactionFields).[`firstValid`](CommonTransactionFields#firstvalid)

***

### firstValidTime?

> `optional` **firstValidTime**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/itxn.ts:57](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L57)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`CommonTransactionFields`](CommonTransactionFields).[`firstValidTime`](CommonTransactionFields#firstvalidtime)

***

### lease?

> `optional` **lease**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/itxn.ts:67](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L67)

32 byte lease value

#### Inherited from

[`CommonTransactionFields`](CommonTransactionFields).[`lease`](CommonTransactionFields#lease)

***

### note?

> `optional` **note**: `string` \| [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/itxn.ts:62](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L62)

Any data up to 1024 bytes

#### Inherited from

[`CommonTransactionFields`](CommonTransactionFields).[`note`](CommonTransactionFields#note)

***

### rekeyTo?

> `optional` **rekeyTo**: [`AccountInput`](../../../-internal-/type-aliases/AccountInput)

Defined in: [packages/algo-ts/src/itxn.ts:72](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L72)

32 byte Sender's new AuthAddr

#### Inherited from

[`CommonTransactionFields`](CommonTransactionFields).[`rekeyTo`](CommonTransactionFields#rekeyto)

***

### sender?

> `optional` **sender**: [`AccountInput`](../../../-internal-/type-aliases/AccountInput)

Defined in: [packages/algo-ts/src/itxn.ts:42](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L42)

32 byte address

#### Inherited from

[`CommonTransactionFields`](CommonTransactionFields).[`sender`](CommonTransactionFields#sender)

***

### xferAsset

> **xferAsset**: [`AssetInput`](../../../-internal-/type-aliases/AssetInput)

Defined in: [packages/algo-ts/src/itxn.ts:128](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L128)

The asset being transferred