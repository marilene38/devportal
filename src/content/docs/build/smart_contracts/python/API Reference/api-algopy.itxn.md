---
title: "algopy.itxn"
---




## Classes

| [`ApplicationCall`](#algopy.itxn.ApplicationCall)                                 | Creates a set of fields used to submit an Application Call inner transaction   |
|-----------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| [`ApplicationCallInnerTransaction`](#algopy.itxn.ApplicationCallInnerTransaction) | Application Call inner transaction                                             |
| [`AssetConfig`](#algopy.itxn.AssetConfig)                                         | Creates a set of fields used to submit an Asset Config inner transaction       |
| [`AssetConfigInnerTransaction`](#algopy.itxn.AssetConfigInnerTransaction)         | Asset Config inner transaction                                                 |
| [`AssetFreeze`](#algopy.itxn.AssetFreeze)                                         | Creates a set of fields used to submit a Asset Freeze inner transaction        |
| [`AssetFreezeInnerTransaction`](#algopy.itxn.AssetFreezeInnerTransaction)         | Asset Freeze inner transaction                                                 |
| [`AssetTransfer`](#algopy.itxn.AssetTransfer)                                     | Creates a set of fields used to submit an Asset Transfer inner transaction     |
| [`AssetTransferInnerTransaction`](#algopy.itxn.AssetTransferInnerTransaction)     | Asset Transfer inner transaction                                               |
| [`InnerTransaction`](#algopy.itxn.InnerTransaction)                               | Creates a set of fields used to submit an inner transaction of any type        |
| [`InnerTransactionResult`](#algopy.itxn.InnerTransactionResult)                   | An inner transaction of any type                                               |
| [`KeyRegistration`](#algopy.itxn.KeyRegistration)                                 | Creates a set of fields used to submit a Key Registration inner transaction    |
| [`KeyRegistrationInnerTransaction`](#algopy.itxn.KeyRegistrationInnerTransaction) | Key Registration inner transaction                                             |
| [`Payment`](#algopy.itxn.Payment)                                                 | Creates a set of fields used to submit a Payment inner transaction             |
| [`PaymentInnerTransaction`](#algopy.itxn.PaymentInnerTransaction)                 | Payment inner transaction                                                      |

## Functions

| [`submit_txns`](#algopy.itxn.submit_txns)   | Submits a group of up to 16 inner transactions parameters   |
|---------------------------------------------|-------------------------------------------------------------|

## API

## *class* algopy.itxn.ApplicationCall(\*, app\_id: [algopy.Application](../../api-reference/api-algopy#algopy.Application) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., approval\_program: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes), ...] = ..., clear\_state\_program: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes), ...] = ..., on\_completion: [algopy.OnCompleteAction](../../api-reference/api-algopy#algopy.OnCompleteAction) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., global\_num\_uint: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., global\_num\_bytes: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., local\_num\_uint: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., local\_num\_bytes: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., extra\_program\_pages: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., app\_args: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[object](https://docs.python.org/3/library/functions.html#object), ...] = ..., accounts: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account), ...] = ..., assets: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Asset](../../api-reference/api-algopy#algopy.Asset), ...] = ..., apps: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Application](../../api-reference/api-algopy#algopy.Application), ...] = ..., sender: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey\_to: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...)

Creates a set of fields used to submit an Application Call inner transaction

### Initialization

### copy() → [Self](https://docs.python.org/3/library/typing.html#typing.Self)

Copies a set of inner transaction parameters

### set(\*, app\_id: [algopy.Application](../../api-reference/api-algopy#algopy.Application) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., approval\_program: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes), ...] = ..., clear\_state\_program: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes), ...] = ..., on\_completion: [algopy.OnCompleteAction](../../api-reference/api-algopy#algopy.OnCompleteAction) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., global\_num\_uint: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., global\_num\_bytes: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., local\_num\_uint: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., local\_num\_bytes: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., extra\_program\_pages: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., app\_args: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[object](https://docs.python.org/3/library/functions.html#object), ...] = ..., accounts: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account), ...] = ..., assets: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Asset](../../api-reference/api-algopy#algopy.Asset), ...] = ..., apps: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Application](../../api-reference/api-algopy#algopy.Application), ...] = ..., sender: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey\_to: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...) → [None](https://docs.python.org/3/library/constants.html#None)

Updates inner transaction parameter values

### submit() → algopy.itxn.\_TResult\_co

Submits inner transaction parameters and returns the resulting inner transaction

## *class* algopy.itxn.ApplicationCallInnerTransaction

Application Call inner transaction

### accounts(index: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

Accounts listed in the ApplicationCall transaction

### app\_args(index: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Arguments passed to the application in the ApplicationCall transaction

### *property* app\_id *: [algopy.Application](../../api-reference/api-algopy#algopy.Application)*

ApplicationID from ApplicationCall transaction

### *property* approval\_program *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

Approval program

### approval\_program\_pages(index: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Approval Program as an array of pages

### apps(index: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Application](../../api-reference/api-algopy#algopy.Application)

Foreign Apps listed in the ApplicationCall transaction

### assets(index: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)

Foreign Assets listed in the ApplicationCall transaction

### *property* clear\_state\_program *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

Clear State program

### clear\_state\_program\_pages(index: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Clear State Program as an array of pages

### *property* created\_app *: [algopy.Application](../../api-reference/api-algopy#algopy.Application)*

ApplicationID allocated by the creation of an application

### *property* extra\_program\_pages *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of additional pages for each of the application’s approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.

### *property* fee *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

microalgos

### *property* first\_valid *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

round number

### *property* first\_valid\_time *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

UNIX timestamp of block before txn.FirstValid. Fails if negative

### *property* global\_num\_bytes *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of global state byteslices in ApplicationCall

### *property* global\_num\_uint *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of global state integers in ApplicationCall

### *property* group\_index *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Position of this transaction within an atomic transaction group.
A stand-alone transaction is implicitly element 0 in a group of 1

### *property* last\_log *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

The last message emitted. Empty bytes if none were emitted. Application mode only

### *property* last\_valid *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

round number

### *property* lease *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

32 byte lease value

### *property* local\_num\_bytes *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of local state byteslices in ApplicationCall

### *property* local\_num\_uint *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of local state integers in ApplicationCall

### logs(index: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Log messages emitted by an application call

### *property* note *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

Any data up to 1024 bytes

### *property* num\_accounts *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of ApplicationArgs

### *property* num\_app\_args *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of ApplicationArgs

### *property* num\_approval\_program\_pages *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of Approval Program pages

### *property* num\_apps *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of Applications

### *property* num\_assets *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of Assets

### *property* num\_clear\_state\_program\_pages *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of Clear State Program pages

### *property* num\_logs *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of logs

### *property* on\_completion *: [algopy.OnCompleteAction](../../api-reference/api-algopy#algopy.OnCompleteAction)*

ApplicationCall transaction on completion action

### *property* rekey\_to *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte Sender’s new AuthAddr

### *property* sender *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* txn\_id *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

The computed ID for this transaction. 32 bytes.

### *property* type *: [algopy.TransactionType](../../api-reference/api-algopy#algopy.TransactionType)*

Transaction type as integer

### *property* type\_bytes *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

Transaction type as bytes

## *class* algopy.itxn.AssetConfig(\*, config\_asset: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., total: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., unit\_name: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., asset\_name: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., decimals: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., default\_frozen: [bool](https://docs.python.org/3/library/functions.html#bool) = ..., url: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., metadata\_hash: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., manager: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., reserve: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., freeze: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., clawback: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., sender: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey\_to: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...)

Creates a set of fields used to submit an Asset Config inner transaction

### Initialization

### copy() → [Self](https://docs.python.org/3/library/typing.html#typing.Self)

Copies a set of inner transaction parameters

### set(\*, config\_asset: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., total: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., unit\_name: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., asset\_name: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., decimals: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., default\_frozen: [bool](https://docs.python.org/3/library/functions.html#bool) = ..., url: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., metadata\_hash: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., manager: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., reserve: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., freeze: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., clawback: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., sender: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey\_to: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...) → [None](https://docs.python.org/3/library/constants.html#None)

Updates inner transaction parameter values

### submit() → algopy.itxn.\_TResult\_co

Submits inner transaction parameters and returns the resulting inner transaction

## *class* algopy.itxn.AssetConfigInnerTransaction

Asset Config inner transaction

### *property* asset\_name *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

The asset name

### *property* clawback *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* config\_asset *: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)*

Asset ID in asset config transaction

### *property* created\_asset *: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)*

Asset ID allocated by the creation of an ASA

### *property* decimals *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of digits to display after the decimal place when displaying the asset

### *property* default\_frozen *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the asset’s slots are frozen by default or not, 0 or 1

### *property* fee *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

microalgos

### *property* first\_valid *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

round number

### *property* first\_valid\_time *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

UNIX timestamp of block before txn.FirstValid. Fails if negative

### *property* freeze *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* group\_index *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Position of this transaction within an atomic transaction group.
A stand-alone transaction is implicitly element 0 in a group of 1

### *property* last\_valid *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

round number

### *property* lease *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

32 byte lease value

### *property* manager *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* metadata\_hash *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

32 byte commitment to unspecified asset metadata

### *property* note *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

Any data up to 1024 bytes

### *property* rekey\_to *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte Sender’s new AuthAddr

### *property* reserve *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* sender *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* total *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Total number of units of this asset created

### *property* txn\_id *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

The computed ID for this transaction. 32 bytes.

### *property* type *: [algopy.TransactionType](../../api-reference/api-algopy#algopy.TransactionType)*

Transaction type as integer

### *property* type\_bytes *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

Transaction type as bytes

### *property* unit\_name *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

Unit name of the asset

### *property* url *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

URL

## *class* algopy.itxn.AssetFreeze(\*, freeze\_asset: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), freeze\_account: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str), frozen: [bool](https://docs.python.org/3/library/functions.html#bool), sender: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey\_to: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...)

Creates a set of fields used to submit a Asset Freeze inner transaction

### Initialization

### copy() → [Self](https://docs.python.org/3/library/typing.html#typing.Self)

Copies a set of inner transaction parameters

### set(\*, freeze\_asset: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., freeze\_account: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., frozen: [bool](https://docs.python.org/3/library/functions.html#bool) = ..., sender: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey\_to: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...) → [None](https://docs.python.org/3/library/constants.html#None)

Updates inner transaction parameter values

### submit() → algopy.itxn.\_TResult\_co

Submits inner transaction parameters and returns the resulting inner transaction

## *class* algopy.itxn.AssetFreezeInnerTransaction

Asset Freeze inner transaction

### *property* fee *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

microalgos

### *property* first\_valid *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

round number

### *property* first\_valid\_time *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

UNIX timestamp of block before txn.FirstValid. Fails if negative

### *property* freeze\_account *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address of the account whose asset slot is being frozen or un-frozen

### *property* freeze\_asset *: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)*

Asset ID being frozen or un-frozen

### *property* frozen *: [bool](https://docs.python.org/3/library/functions.html#bool)*

The new frozen value, 0 or 1

### *property* group\_index *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Position of this transaction within an atomic transaction group.
A stand-alone transaction is implicitly element 0 in a group of 1

### *property* last\_valid *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

round number

### *property* lease *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

32 byte lease value

### *property* note *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

Any data up to 1024 bytes

### *property* rekey\_to *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte Sender’s new AuthAddr

### *property* sender *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* txn\_id *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

The computed ID for this transaction. 32 bytes.

### *property* type *: [algopy.TransactionType](../../api-reference/api-algopy#algopy.TransactionType)*

Transaction type as integer

### *property* type\_bytes *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

Transaction type as bytes

## *class* algopy.itxn.AssetTransfer(\*, xfer\_asset: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), asset\_receiver: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str), asset\_amount: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., asset\_sender: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., asset\_close\_to: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., sender: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey\_to: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...)

Creates a set of fields used to submit an Asset Transfer inner transaction

### Initialization

### copy() → [Self](https://docs.python.org/3/library/typing.html#typing.Self)

Copies a set of inner transaction parameters

### set(\*, xfer\_asset: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., asset\_amount: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., asset\_sender: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., asset\_receiver: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., asset\_close\_to: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., sender: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey\_to: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...) → [None](https://docs.python.org/3/library/constants.html#None)

Updates transaction parameter values

### submit() → algopy.itxn.\_TResult\_co

Submits inner transaction parameters and returns the resulting inner transaction

## *class* algopy.itxn.AssetTransferInnerTransaction

Asset Transfer inner transaction

### *property* asset\_amount *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

value in Asset’s units

### *property* asset\_close\_to *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* asset\_receiver *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* asset\_sender *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address. Source of assets if Sender is the Asset’s Clawback address.

### *property* fee *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

microalgos

### *property* first\_valid *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

round number

### *property* first\_valid\_time *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

UNIX timestamp of block before txn.FirstValid. Fails if negative

### *property* group\_index *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Position of this transaction within an atomic transaction group.
A stand-alone transaction is implicitly element 0 in a group of 1

### *property* last\_valid *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

round number

### *property* lease *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

32 byte lease value

### *property* note *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

Any data up to 1024 bytes

### *property* rekey\_to *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte Sender’s new AuthAddr

### *property* sender *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* txn\_id *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

The computed ID for this transaction. 32 bytes.

### *property* type *: [algopy.TransactionType](../../api-reference/api-algopy#algopy.TransactionType)*

Transaction type as integer

### *property* type\_bytes *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

Transaction type as bytes

### *property* xfer\_asset *: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)*

Asset ID

## *class* algopy.itxn.InnerTransaction(\*, type: [algopy.TransactionType](../../api-reference/api-algopy#algopy.TransactionType), receiver: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., amount: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., close\_remainder\_to: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., vote\_key: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., selection\_key: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., vote\_first: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., vote\_last: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., vote\_key\_dilution: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., non\_participation: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) | [bool](https://docs.python.org/3/library/functions.html#bool) = ..., state\_proof\_key: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., config\_asset: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., total: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., unit\_name: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., asset\_name: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., decimals: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., default\_frozen: [bool](https://docs.python.org/3/library/functions.html#bool) = ..., url: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., metadata\_hash: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., manager: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., reserve: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., freeze: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., clawback: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., xfer\_asset: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., asset\_amount: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., asset\_sender: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., asset\_receiver: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., asset\_close\_to: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., freeze\_asset: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., freeze\_account: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., frozen: [bool](https://docs.python.org/3/library/functions.html#bool) = ..., app\_id: [algopy.Application](../../api-reference/api-algopy#algopy.Application) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., approval\_program: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes), ...] = ..., clear\_state\_program: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes), ...] = ..., on\_completion: [algopy.OnCompleteAction](../../api-reference/api-algopy#algopy.OnCompleteAction) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., global\_num\_uint: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., global\_num\_bytes: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., local\_num\_uint: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., local\_num\_bytes: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., extra\_program\_pages: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., app\_args: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[object](https://docs.python.org/3/library/functions.html#object), ...] = ..., accounts: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account), ...] = ..., assets: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Asset](../../api-reference/api-algopy#algopy.Asset), ...] = ..., apps: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Application](../../api-reference/api-algopy#algopy.Application), ...] = ..., sender: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey\_to: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...)

Creates a set of fields used to submit an inner transaction of any type

### Initialization

### copy() → [Self](https://docs.python.org/3/library/typing.html#typing.Self)

Copies a set of inner transaction parameters

### set(\*, type: [algopy.TransactionType](../../api-reference/api-algopy#algopy.TransactionType) = ..., receiver: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., amount: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., close\_remainder\_to: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., vote\_key: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., selection\_key: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., vote\_first: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., vote\_last: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., vote\_key\_dilution: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., non\_participation: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) | [bool](https://docs.python.org/3/library/functions.html#bool) = ..., state\_proof\_key: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., config\_asset: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., total: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., unit\_name: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., asset\_name: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., decimals: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., default\_frozen: [bool](https://docs.python.org/3/library/functions.html#bool) = ..., url: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., metadata\_hash: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., manager: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., reserve: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., freeze: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., clawback: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., xfer\_asset: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., asset\_amount: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., asset\_sender: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., asset\_receiver: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., asset\_close\_to: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., freeze\_asset: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., freeze\_account: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., frozen: [bool](https://docs.python.org/3/library/functions.html#bool) = ..., app\_id: [algopy.Application](../../api-reference/api-algopy#algopy.Application) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., approval\_program: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes), ...] = ..., clear\_state\_program: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes), ...] = ..., on\_completion: [algopy.OnCompleteAction](../../api-reference/api-algopy#algopy.OnCompleteAction) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., global\_num\_uint: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., global\_num\_bytes: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., local\_num\_uint: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., local\_num\_bytes: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., extra\_program\_pages: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., app\_args: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[object](https://docs.python.org/3/library/functions.html#object), ...] = ..., accounts: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account), ...] = ..., assets: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Asset](../../api-reference/api-algopy#algopy.Asset), ...] = ..., apps: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Application](../../api-reference/api-algopy#algopy.Application), ...] = ..., sender: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey\_to: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...) → [None](https://docs.python.org/3/library/constants.html#None)

Updates inner transaction parameter values

### submit() → algopy.itxn.\_TResult\_co

Submits inner transaction parameters and returns the resulting inner transaction

## *class* algopy.itxn.InnerTransactionResult

An inner transaction of any type

### accounts(index: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

Accounts listed in the ApplicationCall transaction

### *property* amount *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

microalgos

### app\_args(index: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Arguments passed to the application in the ApplicationCall transaction

### *property* app\_id *: [algopy.Application](../../api-reference/api-algopy#algopy.Application)*

ApplicationID from ApplicationCall transaction

### *property* approval\_program *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

Approval program

### approval\_program\_pages(index: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Approval Program as an array of pages

### apps(index: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Application](../../api-reference/api-algopy#algopy.Application)

Foreign Apps listed in the ApplicationCall transaction

### *property* asset\_amount *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

value in Asset’s units

### *property* asset\_close\_to *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* asset\_name *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

The asset name

### *property* asset\_receiver *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* asset\_sender *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address. Source of assets if Sender is the Asset’s Clawback address.

### assets(index: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)

Foreign Assets listed in the ApplicationCall transaction

### *property* clawback *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* clear\_state\_program *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

Clear State program

### clear\_state\_program\_pages(index: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Clear State Program as an array of pages

### *property* close\_remainder\_to *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* config\_asset *: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)*

Asset ID in asset config transaction

### *property* created\_app *: [algopy.Application](../../api-reference/api-algopy#algopy.Application)*

ApplicationID allocated by the creation of an application

### *property* created\_asset *: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)*

Asset ID allocated by the creation of an ASA

### *property* decimals *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of digits to display after the decimal place when displaying the asset

### *property* default\_frozen *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Whether the asset’s slots are frozen by default or not, 0 or 1

### *property* extra\_program\_pages *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of additional pages for each of the application’s approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.

### *property* fee *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

microalgos

### *property* first\_valid *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

round number

### *property* first\_valid\_time *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

UNIX timestamp of block before txn.FirstValid. Fails if negative

### *property* freeze *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* freeze\_account *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address of the account whose asset slot is being frozen or un-frozen

### *property* freeze\_asset *: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)*

Asset ID being frozen or un-frozen

### *property* frozen *: [bool](https://docs.python.org/3/library/functions.html#bool)*

The new frozen value, 0 or 1

### *property* global\_num\_bytes *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of global state byteslices in ApplicationCall

### *property* global\_num\_uint *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of global state integers in ApplicationCall

### *property* group\_index *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Position of this transaction within an atomic transaction group.
A stand-alone transaction is implicitly element 0 in a group of 1

### *property* last\_log *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

The last message emitted. Empty bytes if none were emitted. Application mode only

### *property* last\_valid *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

round number

### *property* lease *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

32 byte lease value

### *property* local\_num\_bytes *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of local state byteslices in ApplicationCall

### *property* local\_num\_uint *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of local state integers in ApplicationCall

### logs(index: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int)) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Log messages emitted by an application call

### *property* manager *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* metadata\_hash *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

32 byte commitment to unspecified asset metadata

### *property* non\_participation *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Marks an account nonparticipating for rewards

### *property* note *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

Any data up to 1024 bytes

### *property* num\_accounts *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of ApplicationArgs

### *property* num\_app\_args *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of ApplicationArgs

### *property* num\_approval\_program\_pages *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of Approval Program pages

### *property* num\_apps *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of Applications

### *property* num\_assets *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of Assets

### *property* num\_clear\_state\_program\_pages *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of Clear State Program pages

### *property* num\_logs *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Number of logs

### *property* on\_completion *: [algopy.OnCompleteAction](../../api-reference/api-algopy#algopy.OnCompleteAction)*

ApplicationCall transaction on completion action

### *property* receiver *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* rekey\_to *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte Sender’s new AuthAddr

### *property* reserve *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* selection\_key *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

32 byte address

### *property* sender *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* state\_proof\_key *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

64 byte state proof public key

### *property* total *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Total number of units of this asset created

### *property* txn\_id *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

The computed ID for this transaction. 32 bytes.

### *property* type *: [algopy.TransactionType](../../api-reference/api-algopy#algopy.TransactionType)*

Transaction type as integer

### *property* type\_bytes *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

Transaction type as bytes

### *property* unit\_name *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

Unit name of the asset

### *property* url *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

URL

### *property* vote\_first *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

The first round that the participation key is valid.

### *property* vote\_key *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

32 byte address

### *property* vote\_key\_dilution *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Dilution for the 2-level participation key

### *property* vote\_last *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

The last round that the participation key is valid.

### *property* xfer\_asset *: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)*

Asset ID

## *class* algopy.itxn.KeyRegistration(\*, vote\_key: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), selection\_key: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), vote\_first: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), vote\_last: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), vote\_key\_dilution: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), non\_participation: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) | [bool](https://docs.python.org/3/library/functions.html#bool) = ..., state\_proof\_key: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., sender: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey\_to: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...)

Creates a set of fields used to submit a Key Registration inner transaction

### Initialization

### copy() → [Self](https://docs.python.org/3/library/typing.html#typing.Self)

Copies a set of inner transaction parameters

### set(\*, vote\_key: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., selection\_key: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., vote\_first: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., vote\_last: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., vote\_key\_dilution: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., non\_participation: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) | [bool](https://docs.python.org/3/library/functions.html#bool) = ..., state\_proof\_key: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., sender: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey\_to: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...) → [None](https://docs.python.org/3/library/constants.html#None)

Updates inner transaction parameter values

### submit() → algopy.itxn.\_TResult\_co

Submits inner transaction parameters and returns the resulting inner transaction

## *class* algopy.itxn.KeyRegistrationInnerTransaction

Key Registration inner transaction

### *property* fee *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

microalgos

### *property* first\_valid *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

round number

### *property* first\_valid\_time *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

UNIX timestamp of block before txn.FirstValid. Fails if negative

### *property* group\_index *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Position of this transaction within an atomic transaction group.
A stand-alone transaction is implicitly element 0 in a group of 1

### *property* last\_valid *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

round number

### *property* lease *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

32 byte lease value

### *property* non\_participation *: [bool](https://docs.python.org/3/library/functions.html#bool)*

Marks an account nonparticipating for rewards

### *property* note *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

Any data up to 1024 bytes

### *property* rekey\_to *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte Sender’s new AuthAddr

### *property* selection\_key *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

32 byte address

### *property* sender *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* state\_proof\_key *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

64 byte state proof public key

### *property* txn\_id *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

The computed ID for this transaction. 32 bytes.

### *property* type *: [algopy.TransactionType](../../api-reference/api-algopy#algopy.TransactionType)*

Transaction type as integer

### *property* type\_bytes *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

Transaction type as bytes

### *property* vote\_first *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

The first round that the participation key is valid.

### *property* vote\_key *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

32 byte address

### *property* vote\_key\_dilution *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Dilution for the 2-level participation key

### *property* vote\_last *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

The last round that the participation key is valid.

## *class* algopy.itxn.Payment(\*, receiver: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str), amount: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., close\_remainder\_to: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., sender: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey\_to: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...)

Creates a set of fields used to submit a Payment inner transaction

### Initialization

### copy() → [Self](https://docs.python.org/3/library/typing.html#typing.Self)

Copies a set of inner transaction parameters

### set(\*, receiver: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., amount: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = ..., close\_remainder\_to: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., sender: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ..., fee: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int) = 0, note: [algopy.String](../../api-reference/api-algopy#algopy.String) | [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [str](https://docs.python.org/3/library/stdtypes.html#str) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) = ..., rekey\_to: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [str](https://docs.python.org/3/library/stdtypes.html#str) = ...) → [None](https://docs.python.org/3/library/constants.html#None)

Updates inner transaction parameter values

### submit() → algopy.itxn.\_TResult\_co

Submits inner transaction parameters and returns the resulting inner transaction

## *class* algopy.itxn.PaymentInnerTransaction

Payment inner transaction

### *property* amount *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

microalgos

### *property* close\_remainder\_to *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* fee *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

microalgos

### *property* first\_valid *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

round number

### *property* first\_valid\_time *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

UNIX timestamp of block before txn.FirstValid. Fails if negative

### *property* group\_index *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

Position of this transaction within an atomic transaction group.
A stand-alone transaction is implicitly element 0 in a group of 1

### *property* last\_valid *: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)*

round number

### *property* lease *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

32 byte lease value

### *property* note *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

Any data up to 1024 bytes

### *property* receiver *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* rekey\_to *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte Sender’s new AuthAddr

### *property* sender *: [algopy.Account](../../api-reference/api-algopy#algopy.Account)*

32 byte address

### *property* txn\_id *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

The computed ID for this transaction. 32 bytes.

### *property* type *: [algopy.TransactionType](../../api-reference/api-algopy#algopy.TransactionType)*

Transaction type as integer

### *property* type\_bytes *: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)*

Transaction type as bytes

## algopy.itxn.submit\_txns(\_t1: algopy.itxn.\_InnerTransaction\[algopy.itxn.\_T1], \_t2: algopy.itxn.\_InnerTransaction\[algopy.itxn.\_T2], \_t3: algopy.itxn.\_InnerTransaction\[algopy.itxn.\_T3], \_t4: algopy.itxn.\_InnerTransaction\[algopy.itxn.\_T4], \_t5: algopy.itxn.\_InnerTransaction\[algopy.itxn.\_T5], \_t6: algopy.itxn.\_InnerTransaction\[algopy.itxn.\_T6], \_t7: algopy.itxn.\_InnerTransaction\[algopy.itxn.\_T7], \_t8: algopy.itxn.\_InnerTransaction\[algopy.itxn.\_T8], \_t9: algopy.itxn.\_InnerTransaction\[algopy.itxn.\_T9], \_t10: algopy.itxn.\_InnerTransaction\[algopy.itxn.\_T10], \_t11: algopy.itxn.\_InnerTransaction\[algopy.itxn.\_T11], \_t12: algopy.itxn.\_InnerTransaction\[algopy.itxn.\_T12], \_t13: algopy.itxn.\_InnerTransaction\[algopy.itxn.\_T13], \_t14: algopy.itxn.\_InnerTransaction\[algopy.itxn.\_T14], \_t15: algopy.itxn.\_InnerTransaction\[algopy.itxn.\_T15], \_t16: algopy.itxn.\_InnerTransaction\[algopy.itxn.\_T16], /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[algopy.itxn.\_T1, algopy.itxn.\_T2, algopy.itxn.\_T3, algopy.itxn.\_T4, algopy.itxn.\_T5, algopy.itxn.\_T6, algopy.itxn.\_T7, algopy.itxn.\_T8, algopy.itxn.\_T9, algopy.itxn.\_T10, algopy.itxn.\_T11, algopy.itxn.\_T12, algopy.itxn.\_T13, algopy.itxn.\_T14, algopy.itxn.\_T15, algopy.itxn.\_T16]

Submits a group of up to 16 inner transactions parameters

* **Returns:**
  A tuple of the resulting inner transactions
