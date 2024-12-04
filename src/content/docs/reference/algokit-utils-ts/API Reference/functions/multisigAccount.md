---
editUrl: false
next: false
prev: false
title: "multisigAccount"
---

> **multisigAccount**(`multisigParams`, `signingAccounts`): `MultisigAccount`

:::caution[Deprecated]
Use `algorand.account.multisig(multisigParams, signingAccounts)` or `new MultisigAccount(multisigParams, signingAccounts)` instead.

Returns an account wrapper that supports partial or full multisig signing.
:::

## Parameters

### multisigParams

`MultisigMetadata`

The parameters that define the multisig account

### signingAccounts

(`Account` \| `SigningAccount`)[]

The signers that are currently present

## Returns

`MultisigAccount`

A multisig account wrapper

## Defined in

[src/account/account.ts:24](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/account/account.ts#L24)
