---
editUrl: false
next: false
prev: false
title: "getDefaultLocalNetConfig"
---

> **getDefaultLocalNetConfig**(`configOrPort`): `AlgoClientConfig`

:::caution[Deprecated]
Use `ClientManager.getDefaultLocalNetConfig(configOrPort)` instead.

Returns the Algorand configuration to point to the default LocalNet
:::

## Parameters

### configOrPort

Which algod config to return - algod, kmd, or indexer OR a port number

`number` | `"algod"` | `"indexer"` | `"kmd"`

## Returns

`AlgoClientConfig`

## Defined in

[src/network-client.ts:55](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/network-client.ts#L55)
