---
editUrl: false
next: false
prev: false
title: "isLocalNet"
---

> **isLocalNet**(`algod`): `Promise`\<`boolean`\>

:::caution[Deprecated]
Use `await algorand.client.isLocalNet()` or `await new ClientManager({ algod }).isLocalNet()` instead.

Returns true if the algod client is pointing to a LocalNet Algorand network
:::

## Parameters

### algod

`AlgodClient`

## Returns

`Promise`\<`boolean`\>

## Defined in

[src/localnet/is-localnet.ts:9](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/localnet/is-localnet.ts#L9)
