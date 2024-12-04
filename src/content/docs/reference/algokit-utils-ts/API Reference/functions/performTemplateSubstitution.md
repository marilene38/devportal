---
editUrl: false
next: false
prev: false
title: "performTemplateSubstitution"
---

> **performTemplateSubstitution**(`tealCode`, `templateParams`?): `string`

:::caution[Deprecated]
Use `AppManager.replaceTealTemplateParams` instead

Performs template substitution of a teal file.

Looks for `TMPL_{parameter}` for template replacements.
:::

## Parameters

### tealCode

`string`

The TEAL logic to compile

### templateParams?

`TealTemplateParams`

Any parameters to replace in the .teal file before compiling

## Returns

`string`

The TEAL code with replacements

## Defined in

[src/app-deploy.ts:290](https://github.com/algorandfoundation/algokit-utils-ts/blob/87156fe9637eca52c0bc9e840c5804088cb40974/src/app-deploy.ts#L290)
