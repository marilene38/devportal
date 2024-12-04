---
editUrl: false
next: false
prev: false
title: "createApp"
---

> **createApp**(`create`, `algod`): `Promise`\<`Partial`\<`AppCompilationResult`\> & `AppCallTransactionResult` & `AppReference`\>

:::caution[Deprecated]
Use `algorand.send.appCreate()` / `algorand.createTransaction.appCreate()` / `algorand.send.appCreateMethodCall()`
/ `algorand.createTransaction.appCreateMethodCall()` instead

Creates a smart contract app, returns the details of the created app.
:::

## Parameters

### create

`CreateAppParams`

The parameters to create the app with

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`Partial`\<`AppCompilationResult`\> & `AppCallTransactionResult` & `AppReference`\>

The details of the created app, or the transaction to create it if `skipSending` and the compilation result

## Defined in

[src/app.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/app.ts#L44)
