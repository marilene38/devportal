---
editUrl: false
next: false
prev: false
title: "rekeyAccount"
---

> **rekeyAccount**(`rekey`, `algod`): `Promise`\<`SendTransactionResult`\>

:::caution[Deprecated]
Use `algorand.account.rekeyAccount()` instead

Rekey an account to a new address.

**Note:** Please be careful with this function and be sure to read the [official rekey guidance](https://developer.algorand.org/docs/get-details/accounts/rekey/).
:::

## Parameters

### rekey

`AlgoRekeyParams`

The rekey definition

### algod

`AlgodClient`

An algod client

## Returns

`Promise`\<`SendTransactionResult`\>

The transaction object and optionally the confirmation if it was sent to the chain (`skipSending` is `false` or unset)

## Example

```typescript
await algokit.rekeyAccount({ from, rekeyTo }, algod)
```

## Defined in

[src/transfer/transfer.ts:123](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/transfer/transfer.ts#L123)
