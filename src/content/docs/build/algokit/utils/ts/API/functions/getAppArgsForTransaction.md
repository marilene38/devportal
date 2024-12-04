---
editUrl: false
next: false
prev: false
title: "getAppArgsForTransaction"
---

> **getAppArgsForTransaction**(`args`?): `undefined` \| \{`accounts`: `undefined` \| `string`[];`appArgs`: `undefined` \| `Uint8Array`[];`boxes`: `undefined` \| `BoxReference`[];`foreignApps`: `undefined` \| `number`[];`foreignAssets`: `undefined` \| `number`[];`lease`: `undefined` \| `Uint8Array`; \}

:::caution[Deprecated]
Use `TransactionComposer` methods to construct transactions instead.

Returns the app args ready to load onto an app `Transaction` object
:::

## Parameters

### args?

`RawAppCallArgs`

The app call args

## Returns

`undefined` \| \{`accounts`: `undefined` \| `string`[];`appArgs`: `undefined` \| `Uint8Array`[];`boxes`: `undefined` \| `BoxReference`[];`foreignApps`: `undefined` \| `number`[];`foreignAssets`: `undefined` \| `number`[];`lease`: `undefined` \| `Uint8Array`; \}

The args ready to load into a `Transaction`

## Defined in

[src/app.ts:352](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/app.ts#L352)
