---
editUrl: false
next: false
prev: false
title: "getAppClientById"
---

> **getAppClientById**(`appDetails`, `algod`): `ApplicationClient`

:::caution[Deprecated]
Use `AppClient` instead e.g. via `algorand.client.getAppClientById`.
If you want to `create` or `deploy` then use `AppFactory` e.g. via `algorand.client.getAppFactory`,
which will in turn give you an `AppClient` instance against the created/deployed app to make other calls.

Create a new ApplicationClient instance by id
:::

## Parameters

### appDetails

`AppSpecAppDetailsById`

The details of the app

### algod

`AlgodClient`

An algod instance

## Returns

`ApplicationClient`

The application client

## Example

```ts
const client = algokit.getAppClientById(
    {
      app: {appSpec},
      sender: {account},
      id: {id},
    },
    algodClient,
  )
```

## Defined in

[src/app-client.ts:66](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/app-client.ts#L66)
