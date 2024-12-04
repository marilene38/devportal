---
editUrl: false
next: false
prev: false
title: "getLocalNetDispenserAccount"
---

> **getLocalNetDispenserAccount**(`algod`, `kmd`?): `Promise`\<`Account`\>

:::caution[Deprecated]
Use `algorand.account.kmd.getLocalNetDispenserAccount()` instead.

Returns an Algorand account with private key loaded for the default LocalNet dispenser account (that can be used to fund other accounts)
:::

## Parameters

### algod

`AlgodClient`

An algod client

### kmd?

`Kmd`

A KMD client, if not specified then a default KMD client will be loaded from environment variables

## Returns

`Promise`\<`Account`\>

## Defined in

[src/localnet/get-localnet-dispenser-account.ts:15](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/localnet/get-localnet-dispenser-account.ts#L15)
