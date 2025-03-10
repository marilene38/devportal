---
title: Interface: PaymentFields
---

[**@algorandfoundation/algorand-typescript**](../../../../README)

***

[@algorandfoundation/algorand-typescript](../../../../README) / [index](../../../README) / [itxn](../README) / PaymentFields



Defined in: [packages/algo-ts/src/itxn.ts:75](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L75)

## Extends

- [`CommonTransactionFields`](CommonTransactionFields)

## Properties

### amount?

> `optional` **amount**: [`uint64`](../../../type-aliases/uint64)

Defined in: [packages/algo-ts/src/itxn.ts:80](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L80)

The amount, in microALGO, to transfer

***

### closeRemainderTo?

> `optional` **closeRemainderTo**: [`AccountInput`](../../../-internal-/type-aliases/AccountInput)

Defined in: [packages/algo-ts/src/itxn.ts:88](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L88)

If set, bring the sender balance to 0 and send all remaining balance to this address

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

### receiver?

> `optional` **receiver**: [`AccountInput`](../../../-internal-/type-aliases/AccountInput)

Defined in: [packages/algo-ts/src/itxn.ts:84](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L84)

The address of the receiver

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