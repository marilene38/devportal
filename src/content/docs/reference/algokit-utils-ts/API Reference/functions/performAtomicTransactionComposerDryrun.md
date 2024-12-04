---
editUrl: false
next: false
prev: false
title: "performAtomicTransactionComposerDryrun"
---

> **performAtomicTransactionComposerDryrun**(`atc`, `algod`): `Promise`\<`DryrunResult`\>

:::caution[Deprecated]
Use `performAtomicTransactionComposerSimulate`, dry-run is a deprecated Algorand feature.

Performs a dry run of the transactions loaded into the given AtomicTransactionComposer`
@param atc The AtomicTransactionComposer` with transaction(s) loaded
:::

## Parameters

### atc

`AtomicTransactionComposer`

### algod

`AlgodClient`

An Algod client

## Returns

`Promise`\<`DryrunResult`\>

The dryrun result

## Defined in

[src/transaction/transaction.ts:738](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/transaction/transaction.ts#L738)
