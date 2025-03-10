---
title: Interface: AssetTransferInnerTxn
---

[**@algorandfoundation/algorand-typescript**](../../../../README)

***

[@algorandfoundation/algorand-typescript](../../../../README) / [index](../../../README) / [itxn](../README) / AssetTransferInnerTxn



Defined in: [packages/algo-ts/src/itxn.ts:21](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L21)

## Extends

- [`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn)

## Properties

### assetAmount

> `readonly` **assetAmount**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:239](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L239)

value in Asset's units

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn).[`assetAmount`](../../../-internal-/interfaces/AssetTransferTxn#assetamount)

***

### assetCloseTo

> `readonly` **assetCloseTo**: [`Account`](../../../type-aliases/Account)

Defined in: [packages/algo-ts/src/transactions.ts:254](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L254)

32 byte address

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn).[`assetCloseTo`](../../../-internal-/interfaces/AssetTransferTxn#assetcloseto)

***

### assetReceiver

> `readonly` **assetReceiver**: [`Account`](../../../type-aliases/Account)

Defined in: [packages/algo-ts/src/transactions.ts:249](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L249)

32 byte address

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn).[`assetReceiver`](../../../-internal-/interfaces/AssetTransferTxn#assetreceiver)

***

### assetSender

> `readonly` **assetSender**: [`Account`](../../../type-aliases/Account)

Defined in: [packages/algo-ts/src/transactions.ts:244](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L244)

32 byte address. Source of assets if Sender is the Asset's Clawback address.

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn).[`assetSender`](../../../-internal-/interfaces/AssetTransferTxn#assetsender)

***

### fee

> `readonly` **fee**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:44](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L44)

microalgos

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn).[`fee`](../../../-internal-/interfaces/AssetTransferTxn#fee)

***

### firstValid

> `readonly` **firstValid**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:49](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L49)

round number

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn).[`firstValid`](../../../-internal-/interfaces/AssetTransferTxn#firstvalid)

***

### firstValidTime

> `readonly` **firstValidTime**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:54](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L54)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn).[`firstValidTime`](../../../-internal-/interfaces/AssetTransferTxn#firstvalidtime)

***

### groupIndex

> `readonly` **groupIndex**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:80](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L80)

Position of this transaction within an atomic group
A stand-alone transaction is implicitly element 0 in a group of 1

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn).[`groupIndex`](../../../-internal-/interfaces/AssetTransferTxn#groupindex)

***

### lastValid

> `readonly` **lastValid**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:59](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L59)

round number

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn).[`lastValid`](../../../-internal-/interfaces/AssetTransferTxn#lastvalid)

***

### lease

> `readonly` **lease**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:69](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L69)

32 byte lease value

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn).[`lease`](../../../-internal-/interfaces/AssetTransferTxn#lease)

***

### note

> `readonly` **note**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:64](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L64)

Any data up to 1024 bytes

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn).[`note`](../../../-internal-/interfaces/AssetTransferTxn#note)

***

### rekeyTo

> `readonly` **rekeyTo**: [`Account`](../../../type-aliases/Account)

Defined in: [packages/algo-ts/src/transactions.ts:90](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L90)

32 byte Sender's new AuthAddr

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn).[`rekeyTo`](../../../-internal-/interfaces/AssetTransferTxn#rekeyto)

***

### sender

> `readonly` **sender**: [`Account`](../../../type-aliases/Account)

Defined in: [packages/algo-ts/src/transactions.ts:39](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L39)

32 byte address

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn).[`sender`](../../../-internal-/interfaces/AssetTransferTxn#sender)

***

### txnId

> `readonly` **txnId**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:85](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L85)

The computed ID for this transaction. 32 bytes.

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn).[`txnId`](../../../-internal-/interfaces/AssetTransferTxn#txnid)

***

### type

> `readonly` **type**: [`AssetTransfer`](../../../enumerations/TransactionType#assettransfer)

Defined in: [packages/algo-ts/src/transactions.ts:258](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L258)

Transaction type as integer

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn).[`type`](../../../-internal-/interfaces/AssetTransferTxn#type)

***

### typeBytes

> `readonly` **typeBytes**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:74](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L74)

Transaction type as bytes

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn).[`typeBytes`](../../../-internal-/interfaces/AssetTransferTxn#typebytes)

***

### xferAsset

> `readonly` **xferAsset**: [`Asset`](../../../type-aliases/Asset)

Defined in: [packages/algo-ts/src/transactions.ts:234](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L234)

Asset ID

#### Inherited from

[`AssetTransferTxn`](../../../-internal-/interfaces/AssetTransferTxn).[`xferAsset`](../../../-internal-/interfaces/AssetTransferTxn#xferasset)