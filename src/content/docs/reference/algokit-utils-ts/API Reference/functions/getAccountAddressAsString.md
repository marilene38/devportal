---
editUrl: false
next: false
prev: false
title: "getAccountAddressAsString"
---

> **getAccountAddressAsString**(`addressEncodedInB64`): `string`

:::caution[Deprecated]
Use `algosdk.encodeAddress` instead.

Returns the string address of an Algorand account from a base64 encoded version of the underlying byte array of the address public key
:::

## Parameters

### addressEncodedInB64

`string`

The base64 encoded version of the underlying byte array of the address public key

## Returns

`string`

## Defined in

[src/account/account.ts:129](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/account/account.ts#L129)
