---
editUrl: false
next: false
prev: false
title: "getKmdWalletAccount"
---

> **getKmdWalletAccount**(`walletAccount`, `algod`, `kmdClient`?): `Promise`\<`Account` \| `undefined`\>

:::caution[Deprecated]
use `algorand.account.kmd.getWalletAccount(name, predicate)` or `new KMDAccountManager(clientManager).getWalletAccount(name, predicate)` instead.

Returns an Algorand account with private key loaded from the given KMD wallet (identified by name).
:::

## Parameters

### walletAccount

The details of the wallet, with:
  * `name`: The name of the wallet to retrieve an account from
  * `predicate`: An optional filter to use to find the account (otherwise it will return a random account from the wallet)

#### name

`string`

#### predicate

(`account`) => `boolean`

### algod

`AlgodClient`

An algod client

### kmdClient?

`Kmd`

A KMD client, if not specified then a default KMD client will be loaded from environment variables

## Returns

`Promise`\<`Account` \| `undefined`\>

## Example

```typescript
const defaultDispenserAccount = await getKmdWalletAccount(algod,
  'unencrypted-default-wallet',
  a => a.status !== 'Offline' && a.amount > 1_000_000_000
)
```

## Defined in

[src/localnet/get-kmd-wallet-account.ts:27](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/localnet/get-kmd-wallet-account.ts#L27)
