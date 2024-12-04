---
editUrl: false
next: false
prev: false
title: "getAlgoClient"
---

> **getAlgoClient**(`config`?): `Algodv2`

:::caution[Deprecated]
Use `ClientManager.getAlgodClient(config)` or `ClientManager.getAlgodClientFromEnvironment()` instead.

Returns an algod SDK client that automatically retries transient failures on idempotent calls
:::

## Parameters

### config?

`AlgoClientConfig`

The config if you want to override the default (getting config from process.env)

## Returns

`Algodv2`

## Examples

```typescript
 // Uses process.env.ALGOD_SERVER, process.env.ALGOD_PORT and process.env.ALGOD_TOKEN
 // Automatically detects if you are using PureStake to switch in the right header name for ALGOD_TOKEN
 const algod = getAlgoClient()
 await algod.healthCheck().do()
 ```

```typescript
 const algod = getAlgoClient(getAlgoNodeConfig('testnet', 'algod'))
 await algod.healthCheck().do()
```

```typescript
 const algod = getAlgoClient(getAlgoNodeConfig('mainnet', 'algod'))
 await algod.healthCheck().do()
```

```typescript
 const algod = getAlgoClient({server: 'http://localhost', port: '4001', token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'})
 await algod.healthCheck().do()
```

## Defined in

[src/network-client.ts:89](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/network-client.ts#L89)
