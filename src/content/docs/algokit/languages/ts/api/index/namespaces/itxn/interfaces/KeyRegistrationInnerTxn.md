---
title: Interface: KeyRegistrationInnerTxn
---

[**@algorandfoundation/algorand-typescript**](../../../../README)

***

[@algorandfoundation/algorand-typescript](../../../../README) / [index](../../../README) / [itxn](../README) / KeyRegistrationInnerTxn



Defined in: [packages/algo-ts/src/itxn.ts:13](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L13)

## Extends

- [`KeyRegistrationTxn`](../../../-internal-/interfaces/KeyRegistrationTxn)

## Properties

### fee

> `readonly` **fee**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:44](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L44)

microalgos

#### Inherited from

[`KeyRegistrationTxn`](../../../-internal-/interfaces/KeyRegistrationTxn).[`fee`](../../../-internal-/interfaces/KeyRegistrationTxn#fee)

***

### firstValid

> `readonly` **firstValid**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:49](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L49)

round number

#### Inherited from

[`KeyRegistrationTxn`](../../../-internal-/interfaces/KeyRegistrationTxn).[`firstValid`](../../../-internal-/interfaces/KeyRegistrationTxn#firstvalid)

***

### firstValidTime

> `readonly` **firstValidTime**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:54](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L54)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`KeyRegistrationTxn`](../../../-internal-/interfaces/KeyRegistrationTxn).[`firstValidTime`](../../../-internal-/interfaces/KeyRegistrationTxn#firstvalidtime)

***

### groupIndex

> `readonly` **groupIndex**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:80](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L80)

Position of this transaction within an atomic group
A stand-alone transaction is implicitly element 0 in a group of 1

#### Inherited from

[`KeyRegistrationTxn`](../../../-internal-/interfaces/KeyRegistrationTxn).[`groupIndex`](../../../-internal-/interfaces/KeyRegistrationTxn#groupindex)

***

### lastValid

> `readonly` **lastValid**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:59](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L59)

round number

#### Inherited from

[`KeyRegistrationTxn`](../../../-internal-/interfaces/KeyRegistrationTxn).[`lastValid`](../../../-internal-/interfaces/KeyRegistrationTxn#lastvalid)

***

### lease

> `readonly` **lease**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:69](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L69)

32 byte lease value

#### Inherited from

[`KeyRegistrationTxn`](../../../-internal-/interfaces/KeyRegistrationTxn).[`lease`](../../../-internal-/interfaces/KeyRegistrationTxn#lease)

***

### nonparticipation

> `readonly` **nonparticipation**: `boolean`

Defined in: [packages/algo-ts/src/transactions.ts:147](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L147)

Marks an account nonparticipating for rewards

#### Inherited from

[`KeyRegistrationTxn`](../../../-internal-/interfaces/KeyRegistrationTxn).[`nonparticipation`](../../../-internal-/interfaces/KeyRegistrationTxn#nonparticipation)

***

### note

> `readonly` **note**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:64](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L64)

Any data up to 1024 bytes

#### Inherited from

[`KeyRegistrationTxn`](../../../-internal-/interfaces/KeyRegistrationTxn).[`note`](../../../-internal-/interfaces/KeyRegistrationTxn#note)

***

### rekeyTo

> `readonly` **rekeyTo**: [`Account`](../../../type-aliases/Account)

Defined in: [packages/algo-ts/src/transactions.ts:90](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L90)

32 byte Sender's new AuthAddr

#### Inherited from

[`KeyRegistrationTxn`](../../../-internal-/interfaces/KeyRegistrationTxn).[`rekeyTo`](../../../-internal-/interfaces/KeyRegistrationTxn#rekeyto)

***

### selectionKey

> `readonly` **selectionKey**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:127](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L127)

32 byte address

#### Inherited from

[`KeyRegistrationTxn`](../../../-internal-/interfaces/KeyRegistrationTxn).[`selectionKey`](../../../-internal-/interfaces/KeyRegistrationTxn#selectionkey)

***

### sender

> `readonly` **sender**: [`Account`](../../../type-aliases/Account)

Defined in: [packages/algo-ts/src/transactions.ts:39](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L39)

32 byte address

#### Inherited from

[`KeyRegistrationTxn`](../../../-internal-/interfaces/KeyRegistrationTxn).[`sender`](../../../-internal-/interfaces/KeyRegistrationTxn#sender)

***

### stateProofKey

> `readonly` **stateProofKey**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:152](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L152)

64 byte state proof public key

#### Inherited from

[`KeyRegistrationTxn`](../../../-internal-/interfaces/KeyRegistrationTxn).[`stateProofKey`](../../../-internal-/interfaces/KeyRegistrationTxn#stateproofkey)

***

### txnId

> `readonly` **txnId**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:85](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L85)

The computed ID for this transaction. 32 bytes.

#### Inherited from

[`KeyRegistrationTxn`](../../../-internal-/interfaces/KeyRegistrationTxn).[`txnId`](../../../-internal-/interfaces/KeyRegistrationTxn#txnid)

***

### type

> `readonly` **type**: [`KeyRegistration`](../../../enumerations/TransactionType#keyregistration)

Defined in: [packages/algo-ts/src/transactions.ts:156](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L156)

Transaction type as integer

#### Inherited from

[`KeyRegistrationTxn`](../../../-internal-/interfaces/KeyRegistrationTxn).[`type`](../../../-internal-/interfaces/KeyRegistrationTxn#type)

***

### typeBytes

> `readonly` **typeBytes**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:74](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L74)

Transaction type as bytes

#### Inherited from

[`KeyRegistrationTxn`](../../../-internal-/interfaces/KeyRegistrationTxn).[`typeBytes`](../../../-internal-/interfaces/KeyRegistrationTxn#typebytes)

***

### voteFirst

> `readonly` **voteFirst**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:132](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L132)

The first round that the participation key is valid.

#### Inherited from

[`KeyRegistrationTxn`](../../../-internal-/interfaces/KeyRegistrationTxn).[`voteFirst`](../../../-internal-/interfaces/KeyRegistrationTxn#votefirst)

***

### voteKey

> `readonly` **voteKey**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:122](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L122)

32 byte address

#### Inherited from

[`KeyRegistrationTxn`](../../../-internal-/interfaces/KeyRegistrationTxn).[`voteKey`](../../../-internal-/interfaces/KeyRegistrationTxn#votekey)

***

### voteKeyDilution

> `readonly` **voteKeyDilution**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:142](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L142)

Dilution for the 2-level participation key

#### Inherited from

[`KeyRegistrationTxn`](../../../-internal-/interfaces/KeyRegistrationTxn).[`voteKeyDilution`](../../../-internal-/interfaces/KeyRegistrationTxn#votekeydilution)

***

### voteLast

> `readonly` **voteLast**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:137](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L137)

The last round that the participation key is valid.

#### Inherited from

[`KeyRegistrationTxn`](../../../-internal-/interfaces/KeyRegistrationTxn).[`voteLast`](../../../-internal-/interfaces/KeyRegistrationTxn#votelast)