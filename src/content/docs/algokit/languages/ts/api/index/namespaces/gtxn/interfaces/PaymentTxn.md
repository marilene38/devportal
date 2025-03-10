---
title: Interface: PaymentTxn
---

[**@algorandfoundation/algorand-typescript**](../../../../README)

***

[@algorandfoundation/algorand-typescript](../../../../README) / [index](../../../README) / [gtxn](../README) / PaymentTxn



Defined in: [packages/algo-ts/src/gtxn.ts:36](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/gtxn.ts#L36)

A payment transaction

## Extends

- [`PaymentTxn`](../../../-internal-/interfaces/PaymentTxn)

## Constructors

## Properties

### amount

> `readonly` **amount**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:105](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L105)

microalgos

#### Inherited from

[`PaymentTxn`](../../../-internal-/interfaces/PaymentTxn).[`amount`](../../../-internal-/interfaces/PaymentTxn#amount)

***

### closeRemainderTo

> `readonly` **closeRemainderTo**: [`Account`](../../../type-aliases/Account)

Defined in: [packages/algo-ts/src/transactions.ts:110](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L110)

32 byte address

#### Inherited from

[`PaymentTxn`](../../../-internal-/interfaces/PaymentTxn).[`closeRemainderTo`](../../../-internal-/interfaces/PaymentTxn#closeremainderto)

***

### fee

> `readonly` **fee**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:44](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L44)

microalgos

#### Inherited from

[`PaymentTxn`](../../../-internal-/interfaces/PaymentTxn).[`fee`](../../../-internal-/interfaces/PaymentTxn#fee)

***

### firstValid

> `readonly` **firstValid**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:49](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L49)

round number

#### Inherited from

[`PaymentTxn`](../../../-internal-/interfaces/PaymentTxn).[`firstValid`](../../../-internal-/interfaces/PaymentTxn#firstvalid)

***

### firstValidTime

> `readonly` **firstValidTime**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:54](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L54)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`PaymentTxn`](../../../-internal-/interfaces/PaymentTxn).[`firstValidTime`](../../../-internal-/interfaces/PaymentTxn#firstvalidtime)

***

### groupIndex

> `readonly` **groupIndex**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:80](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L80)

Position of this transaction within an atomic group
A stand-alone transaction is implicitly element 0 in a group of 1

#### Inherited from

[`PaymentTxn`](../../../-internal-/interfaces/PaymentTxn).[`groupIndex`](../../../-internal-/interfaces/PaymentTxn#groupindex)

***

### lastValid

> `readonly` **lastValid**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:59](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L59)

round number

#### Inherited from

[`PaymentTxn`](../../../-internal-/interfaces/PaymentTxn).[`lastValid`](../../../-internal-/interfaces/PaymentTxn#lastvalid)

***

### lease

> `readonly` **lease**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:69](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L69)

32 byte lease value

#### Inherited from

[`PaymentTxn`](../../../-internal-/interfaces/PaymentTxn).[`lease`](../../../-internal-/interfaces/PaymentTxn#lease)

***

### note

> `readonly` **note**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:64](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L64)

Any data up to 1024 bytes

#### Inherited from

[`PaymentTxn`](../../../-internal-/interfaces/PaymentTxn).[`note`](../../../-internal-/interfaces/PaymentTxn#note)

***

### receiver

> `readonly` **receiver**: [`Account`](../../../type-aliases/Account)

Defined in: [packages/algo-ts/src/transactions.ts:100](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L100)

32 byte address

#### Inherited from

[`PaymentTxn`](../../../-internal-/interfaces/PaymentTxn).[`receiver`](../../../-internal-/interfaces/PaymentTxn#receiver)

***

### rekeyTo

> `readonly` **rekeyTo**: [`Account`](../../../type-aliases/Account)

Defined in: [packages/algo-ts/src/transactions.ts:90](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L90)

32 byte Sender's new AuthAddr

#### Inherited from

[`PaymentTxn`](../../../-internal-/interfaces/PaymentTxn).[`rekeyTo`](../../../-internal-/interfaces/PaymentTxn#rekeyto)

***

### sender

> `readonly` **sender**: [`Account`](../../../type-aliases/Account)

Defined in: [packages/algo-ts/src/transactions.ts:39](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L39)

32 byte address

#### Inherited from

[`PaymentTxn`](../../../-internal-/interfaces/PaymentTxn).[`sender`](../../../-internal-/interfaces/PaymentTxn#sender)

***

### txnId

> `readonly` **txnId**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:85](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L85)

The computed ID for this transaction. 32 bytes.

#### Inherited from

[`PaymentTxn`](../../../-internal-/interfaces/PaymentTxn).[`txnId`](../../../-internal-/interfaces/PaymentTxn#txnid)

***

### type

> `readonly` **type**: [`Payment`](../../../enumerations/TransactionType#payment)

Defined in: [packages/algo-ts/src/transactions.ts:115](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L115)

Transaction type as integer

#### Inherited from

[`PaymentTxn`](../../../-internal-/interfaces/PaymentTxn).[`type`](../../../-internal-/interfaces/PaymentTxn#type)

***

### typeBytes

> `readonly` **typeBytes**: [`bytes`](../../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:74](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L74)

Transaction type as bytes

#### Inherited from

[`PaymentTxn`](../../../-internal-/interfaces/PaymentTxn).[`typeBytes`](../../../-internal-/interfaces/PaymentTxn#typebytes)