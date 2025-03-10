---
title: Interface: KeyRegistrationFields
---

[**@algorandfoundation/algorand-typescript**](../../../../README)

***

[@algorandfoundation/algorand-typescript](../../../../README) / [index](../../../README) / [itxn](../README) / KeyRegistrationFields



Defined in: [packages/algo-ts/src/itxn.ts:90](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L90)

## Extends

- [`CommonTransactionFields`](CommonTransactionFields)

## Properties

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

### nonparticipation?

> `optional` **nonparticipation**: `boolean`

Defined in: [packages/algo-ts/src/itxn.ts:119](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L119)

Marks an account nonparticipating for rewards

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

### selectionKey?

> `optional` **selectionKey**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/itxn.ts:99](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L99)

32 byte address

***

### sender?

> `optional` **sender**: [`AccountInput`](../../../-internal-/type-aliases/AccountInput)

Defined in: [packages/algo-ts/src/itxn.ts:42](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L42)

32 byte address

#### Inherited from

[`CommonTransactionFields`](CommonTransactionFields).[`sender`](CommonTransactionFields#sender)

***

### stateProofKey?

> `optional` **stateProofKey**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/itxn.ts:124](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L124)

64 byte state proof public key

***

### voteFirst?

> `optional` **voteFirst**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/itxn.ts:104](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L104)

The first round that the participation key is valid.

***

### voteKey?

> `optional` **voteKey**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/itxn.ts:94](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L94)

32 byte address

***

### voteKeyDilution?

> `optional` **voteKeyDilution**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/itxn.ts:114](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L114)

Dilution for the 2-level participation key

***

### voteLast?

> `optional` **voteLast**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/itxn.ts:109](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L109)

The last round that the participation key is valid.