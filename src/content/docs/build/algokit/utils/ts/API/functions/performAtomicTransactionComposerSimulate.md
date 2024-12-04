---
editUrl: false
next: false
prev: false
title: "performAtomicTransactionComposerSimulate"
---

> **performAtomicTransactionComposerSimulate**(`atc`, `algod`): `Promise`\<`SimulateResponse`\>

Performs a simulation of the transactions loaded into the given AtomicTransactionComposer.

## Parameters

### atc

`AtomicTransactionComposer`

The AtomicTransactionComposer with transaction(s) loaded.

### algod

`AlgodClient`

An Algod client to perform the simulation.

## Returns

`Promise`\<`SimulateResponse`\>

The simulation result, which includes various details about how the transactions would be processed.

## Defined in

[src/transaction/perform-atomic-transaction-composer-simulate.ts:13](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/transaction/perform-atomic-transaction-composer-simulate.ts#L13)
