---
editUrl: false
next: false
prev: false
title: "getAccountConfigFromEnvironment"
---

> **getAccountConfigFromEnvironment**(`accountName`): `AccountConfig`

:::caution[Deprecated]
Use algokit.mnemonicAccountFromEnvironment, which doesn't need this function
Returns the Account configuration from environment variables
:::

## Parameters

### accountName

`string`

account name

## Returns

`AccountConfig`

## Example

```ts
environment variables
{accountName}_MNEMONIC
{accountName}_SENDER
```

## Defined in

[src/account/get-account-config-from-environment.ts:13](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/account/get-account-config-from-environment.ts#L13)
