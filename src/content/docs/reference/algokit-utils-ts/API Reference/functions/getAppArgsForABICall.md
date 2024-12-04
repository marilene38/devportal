---
editUrl: false
next: false
prev: false
title: "getAppArgsForABICall"
---

> **getAppArgsForABICall**(`args`, `from`): `Promise`\<`object`\>

:::caution[Deprecated]
Use `TransactionComposer` methods to construct transactions instead.

Returns the app args ready to load onto an ABI method call in `AtomicTransactionComposer`
:::

## Parameters

### args

`ABIAppCallArgs`

The ABI app call args

### from

`SendTransactionFrom`

The transaction signer

## Returns

`Promise`\<`object`\>

The parameters ready to pass into `addMethodCall` within AtomicTransactionComposer

### ~~appAccounts~~

> **appAccounts**: `undefined` \| `string`[]

### ~~appForeignApps~~

> **appForeignApps**: `undefined` \| `number`[] = `args.apps`

### ~~appForeignAssets~~

> **appForeignAssets**: `undefined` \| `number`[] = `args.assets`

### ~~boxes~~

> **boxes**: `undefined` \| `BoxReference`[]

### ~~lease~~

> **lease**: `undefined` \| `Uint8Array`

### ~~method~~

> **method**: `ABIMethod`

### ~~methodArgs~~

> **methodArgs**: (`string` \| `number` \| `bigint` \| `boolean` \| `Uint8Array` \| `ABIValue`[] \| `TransactionWithSigner`)[]

### ~~rekeyTo~~

> **rekeyTo**: `undefined` \| `string`

### ~~sender~~

> **sender**: `string`

### ~~signer~~

> **signer**: `TransactionSigner`

## Defined in

[src/app.ts:374](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/app.ts#L374)
