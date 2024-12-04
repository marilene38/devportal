---
editUrl: false
next: false
prev: false
title: "isSchemaIsBroken"
---

> **isSchemaIsBroken**(`before`, `after`): `boolean`

:::caution[Deprecated]
Use `before.numByteSlice < after.numByteSlice || before.numUint < after.numUint` instead.

Returns true is there is a breaking change in the application state schema from before to after.
 i.e. if the schema becomes larger, since applications can't ask for more schema after creation.
 Otherwise, there is no error, the app just doesn't store data in the extra schema :(
:::

## Parameters

### before

`ApplicationStateSchema`

The existing schema

### after

`ApplicationStateSchema`

The new schema

## Returns

`boolean`

Whether or not there is a breaking change

## Defined in

[src/app-deploy.ts:216](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/app-deploy.ts#L216)
