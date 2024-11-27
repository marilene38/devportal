---
title: "Language Guide"
---


Algorand Python is conceptually two things:

1. A partial implementation of the Python programming language that runs on the AVM.
2. A framework for development of Algorand smart contracts and logic signatures, with Pythonic
   interfaces to underlying AVM functionality.

You can install the Algorand Python types from PyPi:

> `pip install algorand-python`

or

> `poetry add algorand-python`

***

As a partial implementation of the Python programming language, it maintains the syntax and
semantics of Python. The subset of the language that is supported will grow over time, but it will
never be a complete implementation due to the restricted nature of the AVM as an execution
environment. As a trivial example, the `async` and `await` keywords, and all associated features,
do not make sense to implement.

Being a partial implementation of Python means that existing developer tooling like IDE syntax
highlighting, static type checkers, linters, and auto-formatters, will work out-of-the-box. This is
as opposed to an approach to smart contract development that adds or alters language elements or
semantics, which then requires custom developer tooling support, and more importantly, requires the
developer to learn and understand the potentially non-obvious differences from regular Python.

The greatest advantage to maintaining semantic and syntactic compatibility, however, is only
realised in combination with the framework approach. Supplying a set of interfaces representing
smart contract development and AVM functionality required allows for the possibility of
implementing those interfaces in pure Python! This will make it possible in the near future for you
to execute tests against your smart contracts without deploying them to Algorand, and even step
into and break-point debug your code from those tests.

The framework provides interfaces to the underlying AVM types and operations. By virtue of the AVM
being statically typed, these interfaces are also statically typed, and require your code to be as
well.

The most basic types on the AVM are `uint64` and `bytes[]`, representing unsigned 64-bit integers
and byte arrays respectively. These are represented by [`UInt64`](../../api-reference/api-algopy#algopy.UInt64) and
[`Bytes`](../../api-reference/api-algopy#algopy.Bytes) in Algorand Python. There are further “bounded” types supported by the AVM
which are backed by these two simple primitives. For example, `bigint` represents a variably sized
(up to 512-bits), unsigned integer, but is actually backed by a `bytes[]`. This is represented by
[`BigUInt`](../../api-reference/api-algopy#algopy.BigUInt) in Algorand Python.

Unfortunately, none of these types map to standard Python primitives. In Python, an `int` is
unsigned, and effectively unbounded. A `bytes` similarly is limited only by the memory available,
whereas an AVM `bytes[]` has a maximum length of 4096. In order to both maintain semantic
compatibility and allow for a framework implementation in plain Python that will fail under the
same conditions as when deployed to the AVM, support for Python primitives is
[limited](../../language-guide/lg-types#python-built-in-types).

For more information on the philosophy and design of Algorand Python, please see
[“Principles”](../principles#principles).

If you aren’t familiar with Python, a good place to start before continuing below is with the
[official tutorial](https://docs.python.org/3/tutorial/index.html). Just beware that as mentioned
above, [not all features are supported](../../language-guide/lg-unsupported-python-features).

## Table of Contents

* [Program structure](../../language-guide/lg-structure)
  * [Modules](../../language-guide/lg-structure#modules)
  * [Typing](../../language-guide/lg-structure#typing)
  * [Subroutines](../../language-guide/lg-structure#subroutines)
  * [Contract classes](../../language-guide/lg-structure#contract-classes)
    * [Contract class configuration](../../language-guide/lg-structure#contract-class-configuration)
    * [Example: Simplest possible `algopy.Contract` implementation](../../language-guide/lg-structure#example-simplest-possible-algopy-contract-implementation)
    * [Example: Simple call counter](../../language-guide/lg-structure#example-simple-call-counter)
    * [Example: Simplest possible `algopy.ARC4Contract` implementation](../../language-guide/lg-structure#example-simplest-possible-algopy-arc4contract-implementation)
    * [Example: An ARC4 call counter](../../language-guide/lg-structure#example-an-arc4-call-counter)
  * [Logic signatures](../../language-guide/lg-structure#logic-signatures)
* [Types](../../language-guide/lg-types)
  * [AVM types](../../language-guide/lg-types#avm-types)
    * [UInt64](../../language-guide/lg-types#uint64)
    * [Bytes](../../language-guide/lg-types#bytes)
    * [String](../../language-guide/lg-types#string)
    * [BigUInt](../../language-guide/lg-types#biguint)
    * [bool](../../language-guide/lg-types#bool)
    * [Account](../../language-guide/lg-types#account)
    * [Asset](../../language-guide/lg-types#asset)
    * [Application](../../language-guide/lg-types#application)
  * [Python built-in types](../../language-guide/lg-types#python-built-in-types)
    * [bool](../../language-guide/lg-types#id2)
    * [tuple](../../language-guide/lg-types#tuple)
    * [None](../../language-guide/lg-types#none)
    * [int, str, bytes, float](../../language-guide/lg-types#int-str-bytes-float)
  * [Template variables](../../language-guide/lg-types#template-variables)
  * [ARC-4 types](../../language-guide/lg-types#arc-4-types)
* [Control flow structures](../../language-guide/lg-control)
  * [If statements](../../language-guide/lg-control#if-statements)
  * [Ternary conditions](../../language-guide/lg-control#ternary-conditions)
  * [While loops](../../language-guide/lg-control#while-loops)
  * [For Loops](../../language-guide/lg-control#for-loops)
  * [Match Statements](../../language-guide/lg-control#match-statements)
* [Module level constructs](../../language-guide/lg-modules)
  * [Module constants](../../language-guide/lg-modules#module-constants)
  * [If statements](../../language-guide/lg-modules#if-statements)
  * [Integer math](../../language-guide/lg-modules#integer-math)
  * [Strings](../../language-guide/lg-modules#strings)
  * [Type aliases](../../language-guide/lg-modules#type-aliases)
* [Python builtins](../../language-guide/lg-builtins)
  * [len](../../language-guide/lg-builtins#len)
  * [range](../../language-guide/lg-builtins#range)
  * [enumerate](../../language-guide/lg-builtins#enumerate)
  * [reversed](../../language-guide/lg-builtins#reversed)
  * [types](../../language-guide/lg-builtins#types)
* [Error handling and assertions](../../language-guide/lg-errors)
  * [Assertions](../../language-guide/lg-errors#assertions)
    * [Assertion error handling](../../language-guide/lg-errors#assertion-error-handling)
  * [Explicit failure](../../language-guide/lg-errors#explicit-failure)
  * [Exception handling](../../language-guide/lg-errors#exception-handling)
* [Storing data on-chain](../../language-guide/lg-storage)
  * [Global storage](../../language-guide/lg-storage#global-storage)
  * [Local storage](../../language-guide/lg-storage#local-storage)
  * [Box storage](../../language-guide/lg-storage#box-storage)
  * [Scratch storage](../../language-guide/lg-storage#scratch-storage)
* [Logging](../../language-guide/lg-logs)
* [Transactions](../../language-guide/lg-transactions)
  * [Group Transactions](../../language-guide/lg-transactions#group-transactions)
    * [ARC4 parameter](../../language-guide/lg-transactions#arc4-parameter)
    * [Group Index](../../language-guide/lg-transactions#group-index)
  * [Inner Transactions](../../language-guide/lg-transactions#inner-transactions)
    * [Examples](../../language-guide/lg-transactions#examples)
    * [ARC4 Application calls](../../language-guide/lg-transactions#arc4-application-calls)
    * [Limitations](../../language-guide/lg-transactions#limitations)
* [AVM operations](../../language-guide/lg-ops)
  * [Txn](../../language-guide/lg-ops#txn)
  * [Global](../../language-guide/lg-ops#global)
* [Opcode budgets](../../language-guide/lg-opcode-budget)
* [ARC-4: Application Binary Interface](../../language-guide/lg-arc4)
  * [ARC-32](../../language-guide/lg-arc4#arc-32)
  * [Methods](../../language-guide/lg-arc4#methods)
  * [Router](../../language-guide/lg-arc4#router)
  * [Types](../../language-guide/lg-arc4#types)
    * [Booleans](../../language-guide/lg-arc4#booleans)
    * [Unsigned ints](../../language-guide/lg-arc4#unsigned-ints)
    * [Unsigned fixed point decimals](../../language-guide/lg-arc4#unsigned-fixed-point-decimals)
    * [Bytes and strings](../../language-guide/lg-arc4#bytes-and-strings)
    * [Static arrays](../../language-guide/lg-arc4#static-arrays)
    * [Dynamic arrays](../../language-guide/lg-arc4#dynamic-arrays)
    * [Tuples](../../language-guide/lg-arc4#tuples)
    * [Structs](../../language-guide/lg-arc4#structs)
    * [ARC4 Container Packing](../../language-guide/lg-arc4#arc4-container-packing)
    * [Reference types](../../language-guide/lg-arc4#reference-types)
  * [Typed clients](../../language-guide/lg-arc4#typed-clients)
    * [ARC4Contract method](../../language-guide/lg-arc4#arc4contract-method)
    * [ARC4Client method](../../language-guide/lg-arc4#arc4client-method)
    * [Method signature or name](../../language-guide/lg-arc4#method-signature-or-name)
* [ARC-28: Structured event logging](../../language-guide/lg-arc28)
  * [Emitting Events](../../language-guide/lg-arc28#emitting-events)
* [Compiling to AVM bytecode](../../language-guide/lg-compile)
  * [Outputting AVM bytecode from CLI](../../language-guide/lg-compile#outputting-avm-bytecode-from-cli)
  * [Obtaining bytecode within other contracts](../../language-guide/lg-compile#obtaining-bytecode-within-other-contracts)
  * [ARC4 contracts](../../language-guide/lg-compile#arc4-contracts)
    * [Create](../../language-guide/lg-compile#create)
    * [Update](../../language-guide/lg-compile#update)
  * [Template variables](../../language-guide/lg-compile#template-variables)
    * [CLI](../../language-guide/lg-compile#cli)
    * [Within other contracts](../../language-guide/lg-compile#within-other-contracts)
* [Unsupported Python features](../../language-guide/lg-unsupported-python-features)
  * [raise, try/except/finally](../../language-guide/lg-unsupported-python-features#raise-try-except-finally)
  * [with](../../language-guide/lg-unsupported-python-features#with)
  * [async](../../language-guide/lg-unsupported-python-features#async)
  * [closures & lambdas](../../language-guide/lg-unsupported-python-features#closures-lambdas)
  * [global keyword](../../language-guide/lg-unsupported-python-features#global-keyword)
  * [Inheritance (outside of contract classes)](../../language-guide/lg-unsupported-python-features#inheritance-outside-of-contract-classes)
