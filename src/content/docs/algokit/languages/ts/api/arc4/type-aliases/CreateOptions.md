---
title: Type Alias: CreateOptions
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [arc4](../README) / CreateOptions



> **CreateOptions**: `"allow"` \| `"disallow"` \| `"require"`

Defined in: [packages/algo-ts/src/arc4/index.ts:28](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L28)

The possible options for a method being available on application create

allow: This method CAN be called when the application is being created, but it is not required
disallow: This method CANNOT be called when the application is being created
require: This method CAN ONLY be called when the application is being created