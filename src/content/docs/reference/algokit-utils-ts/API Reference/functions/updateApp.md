---
editUrl: false
next: false
prev: false
title: "updateApp"
---

> **updateApp**(`update`, `algod`): `Promise`\<`Partial`\<`AppCompilationResult`\> & `AppCallTransactionResult`\>

:::caution[Deprecated]
Use `algorand.send.appUpdate()` / `algorand.createTransaction.appUpdate()` / `algorand.send.appUpdateMethodCall()`
/ `algorand.createTransaction.appUpdateMethodCall()` instead

Updates a smart contract app.
:::

## Parameters

### update

`UpdateAppParams`

The parameters to update the app with

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`Partial`\<`AppCompilationResult`\> & `AppCallTransactionResult`\>

The transaction send result and the compilation result

## Defined in

[src/app.ts:100](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/app.ts#L100)
