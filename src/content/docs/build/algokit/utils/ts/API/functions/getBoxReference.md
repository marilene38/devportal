---
editUrl: false
next: false
prev: false
title: "getBoxReference"
---

> **getBoxReference**(`box`): `algosdk.BoxReference`

:::caution[Deprecated]
Use `AppManager.getBoxReference()` instead.

Returns a `algosdk.BoxReference` given a `BoxIdentifier` or `BoxReference`.
:::

## Parameters

### box

The box to return a reference for

`BoxReference` | `BoxIdentifier` | `BoxReference`

## Returns

`algosdk.BoxReference`

The box reference ready to pass into a `Transaction`

## Defined in

[src/app.ts:385](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/app.ts#L385)
