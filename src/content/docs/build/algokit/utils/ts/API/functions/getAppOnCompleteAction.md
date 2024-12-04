---
editUrl: false
next: false
prev: false
title: "getAppOnCompleteAction"
---

> **getAppOnCompleteAction**(`onCompletionAction`?): `OnApplicationComplete`

:::caution[Deprecated]
Use `algosdk.OnApplicationComplete` directly instead.

Returns a `algosdk.OnApplicationComplete` for the given onCompleteAction.

If given `undefined` will return `OnApplicationComplete.NoOpOC`.

If given an `AppCallType` will convert the string enum to the correct underlying `algosdk.OnApplicationComplete`.
:::

## Parameters

### onCompletionAction?

The on completion action

`AppCallType` | `OnApplicationComplete`

## Returns

`OnApplicationComplete`

The `algosdk.OnApplicationComplete`

## Defined in

[src/app.ts:150](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/app.ts#L150)
