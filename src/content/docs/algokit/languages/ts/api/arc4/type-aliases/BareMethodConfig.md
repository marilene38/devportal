---
title: Type Alias: BareMethodConfig
---

[**@algorandfoundation/algorand-typescript**](../../README)

***

[@algorandfoundation/algorand-typescript](../../README) / [arc4](../README) / BareMethodConfig



> **BareMethodConfig**: `object`

Defined in: [packages/algo-ts/src/arc4/index.ts:135](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/arc4/index.ts#L135)

Configuration options for a bare method

## Type declaration

### allowActions?

> `optional` **allowActions**: [`OnCompleteActionStr`](OnCompleteActionStr) \| [`OnCompleteActionStr`](OnCompleteActionStr)[]

Which on complete action(s) are allowed when invoking this method.

#### Default

```ts
'NoOp'
```

### onCreate?

> `optional` **onCreate**: [`CreateOptions`](CreateOptions)

Whether this method should be callable when creating the application.

#### Default

```ts
'disallow'
```