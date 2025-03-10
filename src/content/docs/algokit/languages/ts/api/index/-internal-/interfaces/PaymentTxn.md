---
title: Interface: PaymentTxn
---

[**@algorandfoundation/algorand-typescript**](../../../README)

***

[@algorandfoundation/algorand-typescript](../../../README) / [index](../../README) / [\<internal\>](../README) / PaymentTxn



Defined in: [packages/algo-ts/src/transactions.ts:96](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L96)

A payment transaction

## Extends

- [`TransactionBase`](TransactionBase)

## Extended by

- [`PaymentInnerTxn`](../../namespaces/itxn/interfaces/PaymentInnerTxn)
- [`PaymentTxn`](../../namespaces/gtxn/interfaces/PaymentTxn)

## Properties

### amount

> `readonly` **amount**: [`uint64`](../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:105](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L105)

microalgos

***

### closeRemainderTo

> `readonly` **closeRemainderTo**: [`Account`](../../type-aliases/Account)

Defined in: [packages/algo-ts/src/transactions.ts:110](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L110)

32 byte address

***

### fee

> `readonly` **fee**: [`uint64`](../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:44](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L44)

microalgos

#### Inherited from

[`TransactionBase`](TransactionBase).[`fee`](TransactionBase#fee)

***

### firstValid

> `readonly` **firstValid**: [`uint64`](../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:49](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L49)

round number

#### Inherited from

[`TransactionBase`](TransactionBase).[`firstValid`](TransactionBase#firstvalid)

***

### firstValidTime

> `readonly` **firstValidTime**: [`uint64`](../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:54](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L54)

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### Inherited from

[`TransactionBase`](TransactionBase).[`firstValidTime`](TransactionBase#firstvalidtime)

***

### groupIndex

> `readonly` **groupIndex**: [`uint64`](../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:80](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L80)

Position of this transaction within an atomic group
A stand-alone transaction is implicitly element 0 in a group of 1

#### Inherited from

[`TransactionBase`](TransactionBase).[`groupIndex`](TransactionBase#groupindex)

***

### lastValid

> `readonly` **lastValid**: [`uint64`](../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/transactions.ts:59](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L59)

round number

#### Inherited from

[`TransactionBase`](TransactionBase).[`lastValid`](TransactionBase#lastvalid)

***

### lease

> `readonly` **lease**: [`bytes`](../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:69](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L69)

32 byte lease value

#### Inherited from

[`TransactionBase`](TransactionBase).[`lease`](TransactionBase#lease)

***

### note

> `readonly` **note**: [`bytes`](../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:64](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L64)

Any data up to 1024 bytes

#### Inherited from

[`TransactionBase`](TransactionBase).[`note`](TransactionBase#note)

***

### receiver

> `readonly` **receiver**: [`Account`](../../type-aliases/Account)

Defined in: [packages/algo-ts/src/transactions.ts:100](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L100)

32 byte address

***

### rekeyTo

> `readonly` **rekeyTo**: [`Account`](../../type-aliases/Account)

Defined in: [packages/algo-ts/src/transactions.ts:90](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L90)

32 byte Sender's new AuthAddr

#### Inherited from

[`TransactionBase`](TransactionBase).[`rekeyTo`](TransactionBase#rekeyto)

***

### sender

> `readonly` **sender**: [`Account`](../../type-aliases/Account)

Defined in: [packages/algo-ts/src/transactions.ts:39](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L39)

32 byte address

#### Inherited from

[`TransactionBase`](TransactionBase).[`sender`](TransactionBase#sender)

***

### txnId

> `readonly` **txnId**: [`bytes`](../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:85](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L85)

The computed ID for this transaction. 32 bytes.

#### Inherited from

[`TransactionBase`](TransactionBase).[`txnId`](TransactionBase#txnid)

***

### type

> `readonly` **type**: [`Payment`](../../enumerations/TransactionType#payment)

Defined in: [packages/algo-ts/src/transactions.ts:115](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L115)

Transaction type as integer

***

### typeBytes

> `readonly` **typeBytes**: [`bytes`](../../type-aliases/bytes)

Defined in: [packages/algo-ts/src/transactions.ts:74](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/transactions.ts#L74)

Transaction type as bytes

#### Inherited from

[`TransactionBase`](TransactionBase).[`typeBytes`](TransactionBase#typebytes)