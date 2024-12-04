---
editUrl: false
next: false
prev: false
title: "getAlgoNodeConfig"
---

> **getAlgoNodeConfig**(`network`, `config`): `AlgoClientConfig`

:::caution[Deprecated]
Use `ClientManager.getAlgoNodeConfig(network, config)` instead.

Returns the Algorand configuration to point to the AlgoNode service
:::

## Parameters

### network

Which network to connect to - TestNet or MainNet

`"testnet"` | `"mainnet"`

### config

Which algod config to return - Algod or Indexer

`"algod"` | `"indexer"`

## Returns

`AlgoClientConfig`

## Defined in

[src/network-client.ts:44](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/network-client.ts#L44)
