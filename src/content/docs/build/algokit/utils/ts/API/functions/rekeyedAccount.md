---
editUrl: false
next: false
prev: false
title: "rekeyedAccount"
---

> **rekeyedAccount**(`signer`, `sender`): `SigningAccount`

:::caution[Deprecated]
Use `algorand.account.rekeyed(sender, account)` or `new SigningAccount(account, sender)` instead.

Returns an account wrapper that supports a rekeyed account.
:::

## Parameters

### signer

`Account`

The account, with private key loaded, that is signing

### sender

`string`

The address of the rekeyed account that will act as a sender

## Returns

`SigningAccount`

The SigningAccount wrapper

## Defined in

[src/account/account.ts:36](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/account/account.ts#L36)
