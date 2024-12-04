---
editUrl: false
next: false
prev: false
title: "performTemplateSubstitutionAndCompile"
---

> **performTemplateSubstitutionAndCompile**(`tealCode`, `algod`, `templateParams`?, `deploymentMetadata`?): `Promise`\<`CompiledTeal`\>

:::caution[Deprecated]
Use `algorand.appManager.compileTealTemplate` instead.

Performs template substitution of a teal file and compiles it, returning the compiled result.

Looks for `TMPL_{parameter}` for template replacements.
:::

## Parameters

### tealCode

`string`

The TEAL logic to compile

### algod

`AlgodClient`

An algod client

### templateParams?

`TealTemplateParams`

Any parameters to replace in the .teal file before compiling

### deploymentMetadata?

`AppDeployMetadata`

The deployment metadata the app will be deployed with

## Returns

`Promise`\<`CompiledTeal`\>

The information about the compiled code

## Defined in

[src/app-deploy.ts:307](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/app-deploy.ts#L307)
