---
editUrl: false
next: false
prev: false
title: "getAlgoIndexerClient"
---

> **getAlgoIndexerClient**(`config`?, `overrideIntDecoding`?): `Indexer`

:::caution[Deprecated]
Use `ClientManager.getIndexerClient(config, overrideIntDecoding)` or `ClientManager.getIndexerClientFromEnvironment(overrideIntDecoding)` instead.

Returns an indexer SDK client that automatically retries transient failures on idempotent calls
:::

## Parameters

### config?

`AlgoClientConfig`

The config if you want to override the default (getting config from process.env)

### overrideIntDecoding?

`IntDecoding`

Override the default int decoding for responses, uses MIXED by default to avoid lost precision for big integers

## Returns

`Indexer`

## Examples

```typescript
 // Uses process.env.INDEXER_SERVER, process.env.INDEXER_PORT and process.env.INDEXER_TOKEN
 const indexer = getAlgoIndexerClient()
 await indexer.makeHealthCheck().do()
 ```

```typescript
 const indexer = getAlgoIndexerClient(getAlgoNodeConfig('testnet', 'indexer'))
 await indexer.makeHealthCheck().do()
```

```typescript
 const indexer = getAlgoIndexerClient(getAlgoNodeConfig('mainnet', 'indexer'))
 await indexer.makeHealthCheck().do()
```

```typescript
 const indexer = getAlgoIndexerClient({server: 'http://localhost', port: '8980', token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'})
 await indexer.makeHealthCheck().do()
```

```typescript
 const indexer = getAlgoIndexerClient(config, IntDecoding.BIGINT)
```

## Defined in

[src/network-client.ts:127](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/network-client.ts#L127)
