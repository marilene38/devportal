---
title: Type Alias: TxnFor\<TFields\>
---

[**@algorandfoundation/algorand-typescript**](../../../../README)

***

[@algorandfoundation/algorand-typescript](../../../../README) / [index](../../../README) / [itxn](../README) / TxnFor



> **TxnFor**\<`TFields`\>: `TFields` *extends* \[\{ `submit`: `TTxn`; \}, `...(infer TRest extends InnerTxnList)`\] ? \[`TTxn`, `...TxnFor<TRest>`\] : \[\]

Defined in: [packages/algo-ts/src/itxn.ts:183](https://github.com/algorandfoundation/puya-ts/blob/main/packages/algo-ts/src/itxn.ts#L183)

## Type Parameters

• **TFields** *extends* [`InnerTxnList`](InnerTxnList)