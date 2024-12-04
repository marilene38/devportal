---
title: "algopy.gtxn"
---




## Classes

| [`ApplicationCallTransaction`](#algopy.gtxn.ApplicationCallTransaction)   | Application call group transaction   |
|---------------------------------------------------------------------------|--------------------------------------|
| [`AssetConfigTransaction`](#algopy.gtxn.AssetConfigTransaction)           | Asset config group transaction       |
| [`AssetFreezeTransaction`](#algopy.gtxn.AssetFreezeTransaction)           | Asset freeze group transaction       |
| [`AssetTransferTransaction`](#algopy.gtxn.AssetTransferTransaction)       | Asset transfer group transaction     |
| [`KeyRegistrationTransaction`](#algopy.gtxn.KeyRegistrationTransaction)   | Key registration group transaction   |
| [`PaymentTransaction`](#algopy.gtxn.PaymentTransaction)                   | Payment group transaction            |
| [`Transaction`](#algopy.gtxn.Transaction)                                 | Group Transaction of any type        |
| [`TransactionBase`](#algopy.gtxn.TransactionBase)                         | Shared transaction properties        |

## API

## *class* algopy.gtxn.ApplicationCallTransaction(group\_index: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int))

Application call group transaction

### Initialization

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

## *class* algopy.gtxn.AssetConfigTransaction(group\_index: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int))

Asset config group transaction

### Initialization

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

## *class* algopy.gtxn.AssetFreezeTransaction(group\_index: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int))

Asset freeze group transaction

### Initialization

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

## *class* algopy.gtxn.AssetTransferTransaction(group\_index: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int))

Asset transfer group transaction

### Initialization

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

## *class* algopy.gtxn.KeyRegistrationTransaction(group\_index: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int))

Key registration group transaction

### Initialization

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

## *class* algopy.gtxn.PaymentTransaction(group\_index: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int))

Payment group transaction

### Initialization

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

## *class* algopy.gtxn.Transaction(group\_index: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int))

Group Transaction of any type

### Initialization

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

## *class* algopy.gtxn.TransactionBase

Shared transaction properties

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
