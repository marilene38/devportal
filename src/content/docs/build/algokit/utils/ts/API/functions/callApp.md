---
editUrl: false
next: false
prev: false
title: "callApp"
---

> **callApp**(`call`, `algod`): `Promise`\<`AppCallTransactionResult`\>

:::caution[Deprecated]
Use `algorand.send.appUpdate()` / `algorand.createTransaction.appUpdate()` / `algorand.send.appUpdateMethodCall()`
/ `algorand.createTransaction.appUpdateMethodCall()` instead

Issues a call to a given app.
:::

## Parameters

### call

`AppCallParams`

The call details.

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`AppCallTransactionResult`\>

The result of the call

## Defined in

[src/app.ts:183](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/app.ts#L183)
