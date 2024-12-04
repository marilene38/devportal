---
editUrl: false
next: false
prev: false
title: "getDispenserAccount"
---

> **getDispenserAccount**(`algod`, `kmd`?): `Promise`\<`string`\>

:::caution[Deprecated]
Use `algorand.account.dispenserFromEnvironment()` or `new AccountManager(clientManager).dispenserFromEnvironment()` instead

Returns an account (with private key loaded) that can act as a dispenser

If running on LocalNet then it will return the default dispenser account automatically,
 otherwise it will load the account mnemonic stored in process.env.DISPENSER_MNEMONIC
:::

## Parameters

### algod

`AlgodClient`

An algod client

### kmd?

`Kmd`

A KMD client, if not specified then a default KMD client will be loaded from environment variables

## Returns

`Promise`\<`string`\>

## Defined in

[src/account/get-dispenser-account.ts:19](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/account/get-dispenser-account.ts#L19)
