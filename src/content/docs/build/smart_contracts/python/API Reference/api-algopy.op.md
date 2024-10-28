---
title: "algopy.op"
---


## Module Contents

### Classes

| [`AcctParamsGet`](#algopy.op.AcctParamsGet)     | X is field F from account A. Y is 1 if A owns positive algos, else 0<br/>Native TEAL op: [`acct_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#acct_params_get)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|-------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AppGlobal`](#algopy.op.AppGlobal)             | Get or modify Global app state<br/>Native TEAL ops: [`app_global_del`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_global_del), [`app_global_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_global_get), [`app_global_get_ex`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_global_get_ex), [`app_global_put`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_global_put)                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`AppLocal`](#algopy.op.AppLocal)               | Get or modify Local app state<br/>Native TEAL ops: [`app_local_del`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_local_del), [`app_local_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_local_get), [`app_local_get_ex`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_local_get_ex), [`app_local_put`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_local_put)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`AppParamsGet`](#algopy.op.AppParamsGet)       | X is field F from app A. Y is 1 if A exists, else 0 params: Txn.ForeignApps offset or an *available* app id. Return: did\_exist flag (1 if the application existed and 0 otherwise), value.<br/>Native TEAL op: [`app_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_params_get)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`AssetHoldingGet`](#algopy.op.AssetHoldingGet) | X is field F from account A’s holding of asset B. Y is 1 if A is opted into B, else 0 params: Txn.Accounts offset (or, since v4, an *available* address), asset id (or, since v4, a Txn.ForeignAssets offset). Return: did\_exist flag (1 if the asset existed and 0 otherwise), value.<br/>Native TEAL op: [`asset_holding_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#asset_holding_get)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`AssetParamsGet`](#algopy.op.AssetParamsGet)   | X is field F from asset A. Y is 1 if A exists, else 0 params: Txn.ForeignAssets offset (or, since v4, an *available* asset id. Return: did\_exist flag (1 if the asset existed and 0 otherwise), value.<br/>Native TEAL op: [`asset_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#asset_params_get)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`Base64`](#algopy.op.Base64)                   | Available values for the `base64` enum                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`Block`](#algopy.op.Block)                     | field F of block A. Fail unless A falls between txn.LastValid-1002 and txn.FirstValid (exclusive)<br/>Native TEAL op: [`block`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#block)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`Box`](#algopy.op.Box)                         | Get or modify box state<br/>Native TEAL ops: [`box_create`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_create), [`box_del`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_del), [`box_extract`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_extract), [`box_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_get), [`box_len`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_len), [`box_put`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_put), [`box_replace`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_replace), [`box_resize`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_resize), [`box_splice`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_splice) |
| [`EC`](#algopy.op.EC)                           | Available values for the `EC` enum                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`ECDSA`](#algopy.op.ECDSA)                     | Available values for the `ECDSA` enum                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`EllipticCurve`](#algopy.op.EllipticCurve)     | Elliptic Curve functions<br/>Native TEAL ops: [`ec_add`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ec_add), [`ec_map_to`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ec_map_to), [`ec_multi_scalar_mul`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ec_multi_scalar_mul), [`ec_pairing_check`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ec_pairing_check), [`ec_scalar_mul`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ec_scalar_mul), [`ec_subgroup_check`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ec_subgroup_check)                                                                                                                                                                                                                                                            |
| [`GITxn`](#algopy.op.GITxn)                     | Get values for inner transaction in the last group submitted<br/>Native TEAL ops: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn), [`gitxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxnas)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`GTxn`](#algopy.op.GTxn)                       | Get values for transactions in the current group<br/>Native TEAL ops: [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns), [`gtxnsas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnsas)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`Global`](#algopy.op.Global)                   | Get Global values<br/>Native TEAL op: [`global`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#global)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [`ITxn`](#algopy.op.ITxn)                       | Get values for the last inner transaction<br/>Native TEAL ops: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn), [`itxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxnas)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`ITxnCreate`](#algopy.op.ITxnCreate)           | Create inner transactions<br/>Native TEAL ops: [`itxn_begin`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_begin), [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field), [`itxn_next`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_next), [`itxn_submit`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_submit)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`JsonRef`](#algopy.op.JsonRef)                 | key B’s value, of type R, from a [valid]() utf-8 encoded json object A *Warning*: Usage should be restricted to very rare use cases, as JSON decoding is expensive and quite limited. In addition, JSON objects are large and not optimized for size.  Almost all smart contracts should use simpler and smaller methods (such as the [ABI](https://arc.algorand.foundation/ARCs/arc-0004). This opcode should only be used in cases where JSON is only available option, e.g. when a third-party only signs JSON.<br/>Native TEAL op: [`json_ref`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#json_ref)                                                                                                                                                                                                                                                                                                                                                       |
| [`Scratch`](#algopy.op.Scratch)                 | Load or store scratch values<br/>Native TEAL ops: [`loads`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#loads), [`stores`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#stores)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`Txn`](#algopy.op.Txn)                         | Get values for the current executing transaction<br/>Native TEAL ops: [`txn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#txn), [`txnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#txnas)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`VrfVerify`](#algopy.op.VrfVerify)             | Available values for the `vrf_verify` enum                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### Functions

| [`addw`](#algopy.op.addw)                               | A plus B as a 128-bit result. X is the carry-bit, Y is the low-order 64 bits.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|---------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`app_opted_in`](#algopy.op.app_opted_in)               | 1 if account A is opted in to application B, else 0<br/>params: Txn.Accounts offset (or, since v4, an *available* account address), *available* application id (or, since v4, a Txn.ForeignApps offset). Return: 1 if opted in and 0 otherwise.                                                                                                                                                                                                                                                                                                                                                                                   |
| [`arg`](#algopy.op.arg)                                 | Ath LogicSig argument                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [`balance`](#algopy.op.balance)                         | balance for account A, in microalgos. The balance is observed after the effects of previous transactions in the group, and after the fee for the current transaction is deducted. Changes caused by inner transactions are observable immediately following `itxn_submit`<br/>params: Txn.Accounts offset (or, since v4, an *available* account address), *available* application id (or, since v4, a Txn.ForeignApps offset). Return: value.                                                                                                                                                                                     |
| [`base64_decode`](#algopy.op.base64_decode)             | decode A which was base64-encoded using *encoding* E. Fail if A is not base64 encoded with encoding E<br/>*Warning*: Usage should be restricted to very rare use cases. In almost all cases, smart contracts should directly handle non-encoded byte-strings. This opcode should only be used in cases where base64 is the only available option, e.g. interoperability with a third-party that only signs base64 strings.                                                                                                                                                                                                        |
| [`bitlen`](#algopy.op.bitlen)                           | The highest set bit in A. If A is a byte-array, it is interpreted as a big-endian unsigned integer. bitlen of 0 is 0, bitlen of 8 is 4<br/>bitlen interprets arrays as big-endian integers, unlike setbit/getbit                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`bsqrt`](#algopy.op.bsqrt)                             | The largest integer I such that I^2 <= A. A and I are interpreted as big-endian unsigned integers                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`btoi`](#algopy.op.btoi)                               | converts big-endian byte array A to uint64. Fails if len(A) > 8. Padded by leading 0s if len(A) < 8.<br/>`btoi` fails if the input is longer than 8 bytes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`bzero`](#algopy.op.bzero)                             | zero filled byte-array of length A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`concat`](#algopy.op.concat)                           | join A and B<br/>`concat` fails if the result would be greater than 4096 bytes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`divmodw`](#algopy.op.divmodw)                         | W,X = (A,B / C,D); Y,Z = (A,B modulo C,D)<br/>The notation J,K indicates that two uint64 values J and K are interpreted as a uint128 value, with J as the high uint64 and K the low.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`divw`](#algopy.op.divw)                               | A,B / C. Fail if C == 0 or if result overflows.<br/>The notation A,B indicates that A and B are interpreted as a uint128 value, with A as the high uint64 and B the low.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`ecdsa_pk_decompress`](#algopy.op.ecdsa_pk_decompress) | decompress pubkey A into components X, Y<br/>The 33 byte public key in a compressed form to be decompressed into X and Y (top) components. All values are big-endian encoded.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`ecdsa_pk_recover`](#algopy.op.ecdsa_pk_recover)       | for (data A, recovery id B, signature C, D) recover a public key<br/>S (top) and R elements of a signature, recovery id and data (bottom) are expected on the stack and used to deriver a public key. All values are big-endian encoded. The signed data must be 32 bytes long.                                                                                                                                                                                                                                                                                                                                                   |
| [`ecdsa_verify`](#algopy.op.ecdsa_verify)               | for (data A, signature B, C and pubkey D, E) verify the signature of the data against the pubkey => {0 or 1}<br/>The 32 byte Y-component of a public key is the last element on the stack, preceded by X-component of a pubkey, preceded by S and R components of a signature, preceded by the data that is fifth element on the stack. All values are big-endian encoded. The signed data must be 32 bytes long, and signatures in lower-S form are only accepted.                                                                                                                                                               |
| [`ed25519verify`](#algopy.op.ed25519verify)             | for (data A, signature B, pubkey C) verify the signature of (“ProgData” || program\_hash || data) against the pubkey => {0 or 1}<br/>The 32 byte public key is the last element on the stack, preceded by the 64 byte signature at the second-to-last element on the stack, preceded by the data which was signed at the third-to-last element on the stack.                                                                                                                                                                                                                                                                       |
| [`ed25519verify_bare`](#algopy.op.ed25519verify_bare)   | for (data A, signature B, pubkey C) verify the signature of the data against the pubkey => {0 or 1}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`err`](#algopy.op.err)                                 | Fail immediately.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`exit`](#algopy.op.exit)                               | use A as success value; end                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`exp`](#algopy.op.exp)                                 | A raised to the Bth power. Fail if A == B == 0 and on overflow                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`expw`](#algopy.op.expw)                               | A raised to the Bth power as a 128-bit result in two uint64s. X is the high 64 bits, Y is the low. Fail if A == B == 0 or if the results exceeds 2^128-1                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`extract`](#algopy.op.extract)                         | A range of bytes from A starting at B up to but not including B+C. If B+C is larger than the array length, the program fails<br/>`extract3` can be called using `extract` with no immediates.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [`extract_uint16`](#algopy.op.extract_uint16)           | A uint16 formed from a range of big-endian bytes from A starting at B up to but not including B+2. If B+2 is larger than the array length, the program fails                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`extract_uint32`](#algopy.op.extract_uint32)           | A uint32 formed from a range of big-endian bytes from A starting at B up to but not including B+4. If B+4 is larger than the array length, the program fails                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`extract_uint64`](#algopy.op.extract_uint64)           | A uint64 formed from a range of big-endian bytes from A starting at B up to but not including B+8. If B+8 is larger than the array length, the program fails                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`gaid`](#algopy.op.gaid)                               | ID of the asset or application created in the Ath transaction of the current group<br/>`gaids` fails unless the requested transaction created an asset or application and A < GroupIndex.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`getbit`](#algopy.op.getbit)                           | Bth bit of (byte-array or integer) A. If B is greater than or equal to the bit length of the value (8\*byte length), the program fails<br/>see explanation of bit ordering in setbit                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`getbyte`](#algopy.op.getbyte)                         | Bth byte of A, as an integer. If B is greater than or equal to the array length, the program fails                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`gload_bytes`](#algopy.op.gload_bytes)                 | Bth scratch space value of the Ath transaction in the current group                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`gload_uint64`](#algopy.op.gload_uint64)               | Bth scratch space value of the Ath transaction in the current group                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`itob`](#algopy.op.itob)                               | converts uint64 A to big-endian byte array, always of length 8                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [`keccak256`](#algopy.op.keccak256)                     | Keccak256 hash of value A, yields \[32]byte                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`min_balance`](#algopy.op.min_balance)                 | minimum required balance for account A, in microalgos. Required balance is affected by ASA, App, and Box usage. When creating or opting into an app, the minimum balance grows before the app code runs, therefore the increase is visible there. When deleting or closing out, the minimum balance decreases after the app executes. Changes caused by inner transactions or box usage are observable immediately following the opcode effecting the change.<br/>params: Txn.Accounts offset (or, since v4, an *available* account address), *available* application id (or, since v4, a Txn.ForeignApps offset). Return: value. |
| [`mulw`](#algopy.op.mulw)                               | A times B as a 128-bit result in two uint64s. X is the high 64 bits, Y is the low                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [`replace`](#algopy.op.replace)                         | Copy of A with the bytes starting at B replaced by the bytes of C. Fails if B+len(C) exceeds len(A)<br/>`replace3` can be called using `replace` with no immediates.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`select_bytes`](#algopy.op.select_bytes)               | selects one of two values based on top-of-stack: B if C != 0, else A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`select_uint64`](#algopy.op.select_uint64)             | selects one of two values based on top-of-stack: B if C != 0, else A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [`setbit_bytes`](#algopy.op.setbit_bytes)               | Copy of (byte-array or integer) A, with the Bth bit set to (0 or 1) C. If B is greater than or equal to the bit length of the value (8\*byte length), the program fails<br/>When A is a uint64, index 0 is the least significant bit. Setting bit 3 to 1 on the integer 0 yields 8, or 2^3. When A is a byte array, index 0 is the leftmost bit of the leftmost byte. Setting bits 0 through 11 to 1 in a 4-byte-array of 0s yields the byte array 0xfff00000. Setting bit 3 to 1 on the 1-byte-array 0x00 yields the byte array 0x10.                                                                                            |
| [`setbit_uint64`](#algopy.op.setbit_uint64)             | Copy of (byte-array or integer) A, with the Bth bit set to (0 or 1) C. If B is greater than or equal to the bit length of the value (8\*byte length), the program fails<br/>When A is a uint64, index 0 is the least significant bit. Setting bit 3 to 1 on the integer 0 yields 8, or 2^3. When A is a byte array, index 0 is the leftmost bit of the leftmost byte. Setting bits 0 through 11 to 1 in a 4-byte-array of 0s yields the byte array 0xfff00000. Setting bit 3 to 1 on the 1-byte-array 0x00 yields the byte array 0x10.                                                                                            |
| [`setbyte`](#algopy.op.setbyte)                         | Copy of A with the Bth byte set to small integer (between 0..255) C. If B is greater than or equal to the array length, the program fails                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`sha256`](#algopy.op.sha256)                           | SHA256 hash of value A, yields \[32]byte                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`sha3_256`](#algopy.op.sha3_256)                       | SHA3\_256 hash of value A, yields \[32]byte                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`sha512_256`](#algopy.op.sha512_256)                   | SHA512\_256 hash of value A, yields \[32]byte                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`shl`](#algopy.op.shl)                                 | A times 2^B, modulo 2^64                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`shr`](#algopy.op.shr)                                 | A divided by 2^B                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [`sqrt`](#algopy.op.sqrt)                               | The largest integer I such that I^2 <= A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [`substring`](#algopy.op.substring)                     | A range of bytes from A starting at B up to but not including C. If C < B, or either is larger than the array length, the program fails                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [`vrf_verify`](#algopy.op.vrf_verify)                   | Verify the proof B of message A against pubkey C. Returns vrf output and verification flag.<br/>`VrfAlgorand` is the VRF used in Algorand. It is ECVRF-ED25519-SHA512-Elligator2, specified in the IETF internet draft [draft-irtf-cfrg-vrf-03](https://datatracker.ietf.org/doc/draft-irtf-cfrg-vrf/03/).                                                                                                                                                                                                                                                                                                                        |

### API

### *class* algopy.op.AcctParamsGet

X is field F from account A. Y is 1 if A owns positive algos, else 0
Native TEAL op: [`acct_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#acct_params_get)

#### *static* acct\_auth\_addr(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account), [bool](https://docs.python.org/3/library/functions.html#bool)]

Address the account is rekeyed to.

Native TEAL opcode: [`acct_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#acct_params_get)

#### *static* acct\_balance(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]

Account balance in microalgos

Native TEAL opcode: [`acct_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#acct_params_get)

#### *static* acct\_min\_balance(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]

Minimum required balance for account, in microalgos

Native TEAL opcode: [`acct_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#acct_params_get)

#### *static* acct\_total\_apps\_created(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]

The number of existing apps created by this account.

Native TEAL opcode: [`acct_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#acct_params_get)

#### *static* acct\_total\_apps\_opted\_in(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]

The number of apps this account is opted into.

Native TEAL opcode: [`acct_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#acct_params_get)

#### *static* acct\_total\_assets(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]

The numbers of ASAs held by this account (including ASAs this account created).

Native TEAL opcode: [`acct_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#acct_params_get)

#### *static* acct\_total\_assets\_created(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]

The number of existing ASAs created by this account.

Native TEAL opcode: [`acct_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#acct_params_get)

#### *static* acct\_total\_box\_bytes(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]

The total number of bytes used by this account’s app’s box keys and values.

Native TEAL opcode: [`acct_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#acct_params_get)

#### *static* acct\_total\_boxes(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]

The number of existing boxes created by this account’s app.

Native TEAL opcode: [`acct_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#acct_params_get)

#### *static* acct\_total\_extra\_app\_pages(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]

The number of extra app code pages used by this account.

Native TEAL opcode: [`acct_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#acct_params_get)

#### *static* acct\_total\_num\_byte\_slice(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]

The total number of byte array values allocated by this account in Global and Local States.

Native TEAL opcode: [`acct_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#acct_params_get)

#### *static* acct\_total\_num\_uint(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]

The total number of uint64 values allocated by this account in Global and Local States.

Native TEAL opcode: [`acct_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#acct_params_get)

### *class* algopy.op.AppGlobal

Get or modify Global app state
Native TEAL ops: [`app_global_del`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_global_del), [`app_global_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_global_get), [`app_global_get_ex`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_global_get_ex), [`app_global_put`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_global_put)

#### *static* delete(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)

delete key A from the global state of the current application
params: state key.

Deleting a key which is already absent has no effect on the application global state. (In particular, it does *not* cause the program to fail.)

Native TEAL opcode: [`app_global_del`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_global_del)

#### *static* get\_bytes(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

global state of the key A in the current application
params: state key. Return: value. The value is zero (of type uint64) if the key does not exist.

Native TEAL opcode: [`app_global_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_global_get)

#### *static* get\_ex\_bytes(a: [algopy.Application](../../api-reference/api-algopy#algopy.Application) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes), [bool](https://docs.python.org/3/library/functions.html#bool)]

X is the global state of application A, key B. Y is 1 if key existed, else 0
params: Txn.ForeignApps offset (or, since v4, an *available* application id), state key. Return: did\_exist flag (top of the stack, 1 if the application and key existed and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.

Native TEAL opcode: [`app_global_get_ex`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_global_get_ex)

#### *static* get\_ex\_uint64(a: [algopy.Application](../../api-reference/api-algopy#algopy.Application) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]

X is the global state of application A, key B. Y is 1 if key existed, else 0
params: Txn.ForeignApps offset (or, since v4, an *available* application id), state key. Return: did\_exist flag (top of the stack, 1 if the application and key existed and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.

Native TEAL opcode: [`app_global_get_ex`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_global_get_ex)

#### *static* get\_uint64(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

global state of the key A in the current application
params: state key. Return: value. The value is zero (of type uint64) if the key does not exist.

Native TEAL opcode: [`app_global_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_global_get)

#### *static* put(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

write B to key A in the global state of the current application

Native TEAL opcode: [`app_global_put`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_global_put)

### *class* algopy.op.AppLocal

Get or modify Local app state
Native TEAL ops: [`app_local_del`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_local_del), [`app_local_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_local_get), [`app_local_get_ex`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_local_get_ex), [`app_local_put`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_local_put)

#### *static* delete(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)

delete key B from account A’s local state of the current application
params: Txn.Accounts offset (or, since v4, an *available* account address), state key.

Deleting a key which is already absent has no effect on the application local state. (In particular, it does *not* cause the program to fail.)

Native TEAL opcode: [`app_local_del`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_local_del)

#### *static* get\_bytes(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

local state of the key B in the current application in account A
params: Txn.Accounts offset (or, since v4, an *available* account address), state key. Return: value. The value is zero (of type uint64) if the key does not exist.

Native TEAL opcode: [`app_local_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_local_get)

#### *static* get\_ex\_bytes(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Application](../../api-reference/api-algopy#algopy.Application) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes), [bool](https://docs.python.org/3/library/functions.html#bool)]

X is the local state of application B, key C in account A. Y is 1 if key existed, else 0
params: Txn.Accounts offset (or, since v4, an *available* account address), *available* application id (or, since v4, a Txn.ForeignApps offset), state key. Return: did\_exist flag (top of the stack, 1 if the application and key existed and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.

Native TEAL opcode: [`app_local_get_ex`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_local_get_ex)

#### *static* get\_ex\_uint64(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Application](../../api-reference/api-algopy#algopy.Application) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]

X is the local state of application B, key C in account A. Y is 1 if key existed, else 0
params: Txn.Accounts offset (or, since v4, an *available* account address), *available* application id (or, since v4, a Txn.ForeignApps offset), state key. Return: did\_exist flag (top of the stack, 1 if the application and key existed and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.

Native TEAL opcode: [`app_local_get_ex`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_local_get_ex)

#### *static* get\_uint64(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

local state of the key B in the current application in account A
params: Txn.Accounts offset (or, since v4, an *available* account address), state key. Return: value. The value is zero (of type uint64) if the key does not exist.

Native TEAL opcode: [`app_local_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_local_get)

#### *static* put(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), c: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

write C to key B in account A’s local state of the current application
params: Txn.Accounts offset (or, since v4, an *available* account address), state key, value.

Native TEAL opcode: [`app_local_put`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_local_put)

### *class* algopy.op.AppParamsGet

X is field F from app A. Y is 1 if A exists, else 0 params: Txn.ForeignApps offset or an *available* app id. Return: did\_exist flag (1 if the application existed and 0 otherwise), value.
Native TEAL op: [`app_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_params_get)

#### *static* app\_address(a: [algopy.Application](../../api-reference/api-algopy#algopy.Application) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account), [bool](https://docs.python.org/3/library/functions.html#bool)]

Address for which this application has authority

Native TEAL opcode: [`app_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_params_get)

#### *static* app\_approval\_program(a: [algopy.Application](../../api-reference/api-algopy#algopy.Application) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes), [bool](https://docs.python.org/3/library/functions.html#bool)]

Bytecode of Approval Program

Native TEAL opcode: [`app_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_params_get)

#### *static* app\_clear\_state\_program(a: [algopy.Application](../../api-reference/api-algopy#algopy.Application) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes), [bool](https://docs.python.org/3/library/functions.html#bool)]

Bytecode of Clear State Program

Native TEAL opcode: [`app_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_params_get)

#### *static* app\_creator(a: [algopy.Application](../../api-reference/api-algopy#algopy.Application) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account), [bool](https://docs.python.org/3/library/functions.html#bool)]

Creator address

Native TEAL opcode: [`app_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_params_get)

#### *static* app\_extra\_program\_pages(a: [algopy.Application](../../api-reference/api-algopy#algopy.Application) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]

Number of Extra Program Pages of code space

Native TEAL opcode: [`app_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_params_get)

#### *static* app\_global\_num\_byte\_slice(a: [algopy.Application](../../api-reference/api-algopy#algopy.Application) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]

Number of byte array values allowed in Global State

Native TEAL opcode: [`app_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_params_get)

#### *static* app\_global\_num\_uint(a: [algopy.Application](../../api-reference/api-algopy#algopy.Application) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]

Number of uint64 values allowed in Global State

Native TEAL opcode: [`app_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_params_get)

#### *static* app\_local\_num\_byte\_slice(a: [algopy.Application](../../api-reference/api-algopy#algopy.Application) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]

Number of byte array values allowed in Local State

Native TEAL opcode: [`app_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_params_get)

#### *static* app\_local\_num\_uint(a: [algopy.Application](../../api-reference/api-algopy#algopy.Application) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]

Number of uint64 values allowed in Local State

Native TEAL opcode: [`app_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_params_get)

### *class* algopy.op.AssetHoldingGet

X is field F from account A’s holding of asset B. Y is 1 if A is opted into B, else 0 params: Txn.Accounts offset (or, since v4, an *available* address), asset id (or, since v4, a Txn.ForeignAssets offset). Return: did\_exist flag (1 if the asset existed and 0 otherwise), value.
Native TEAL op: [`asset_holding_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#asset_holding_get)

#### *static* asset\_balance(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]

Amount of the asset unit held by this account

Native TEAL opcode: [`asset_holding_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#asset_holding_get)

#### *static* asset\_frozen(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[bool](https://docs.python.org/3/library/functions.html#bool), [bool](https://docs.python.org/3/library/functions.html#bool)]

Is the asset frozen or not

Native TEAL opcode: [`asset_holding_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#asset_holding_get)

### *class* algopy.op.AssetParamsGet

X is field F from asset A. Y is 1 if A exists, else 0 params: Txn.ForeignAssets offset (or, since v4, an *available* asset id. Return: did\_exist flag (1 if the asset existed and 0 otherwise), value.
Native TEAL op: [`asset_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#asset_params_get)

#### *static* asset\_clawback(a: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account), [bool](https://docs.python.org/3/library/functions.html#bool)]

Clawback address

Native TEAL opcode: [`asset_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#asset_params_get)

#### *static* asset\_creator(a: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account), [bool](https://docs.python.org/3/library/functions.html#bool)]

Creator address

Native TEAL opcode: [`asset_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#asset_params_get)

#### *static* asset\_decimals(a: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]

See AssetParams.Decimals

Native TEAL opcode: [`asset_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#asset_params_get)

#### *static* asset\_default\_frozen(a: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[bool](https://docs.python.org/3/library/functions.html#bool), [bool](https://docs.python.org/3/library/functions.html#bool)]

Frozen by default or not

Native TEAL opcode: [`asset_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#asset_params_get)

#### *static* asset\_freeze(a: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account), [bool](https://docs.python.org/3/library/functions.html#bool)]

Freeze address

Native TEAL opcode: [`asset_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#asset_params_get)

#### *static* asset\_manager(a: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account), [bool](https://docs.python.org/3/library/functions.html#bool)]

Manager address

Native TEAL opcode: [`asset_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#asset_params_get)

#### *static* asset\_metadata\_hash(a: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes), [bool](https://docs.python.org/3/library/functions.html#bool)]

Arbitrary commitment

Native TEAL opcode: [`asset_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#asset_params_get)

#### *static* asset\_name(a: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes), [bool](https://docs.python.org/3/library/functions.html#bool)]

Asset name

Native TEAL opcode: [`asset_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#asset_params_get)

#### *static* asset\_reserve(a: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account), [bool](https://docs.python.org/3/library/functions.html#bool)]

Reserve address

Native TEAL opcode: [`asset_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#asset_params_get)

#### *static* asset\_total(a: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]

Total number of units of this asset

Native TEAL opcode: [`asset_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#asset_params_get)

#### *static* asset\_unit\_name(a: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes), [bool](https://docs.python.org/3/library/functions.html#bool)]

Asset unit name

Native TEAL opcode: [`asset_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#asset_params_get)

#### *static* asset\_url(a: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes), [bool](https://docs.python.org/3/library/functions.html#bool)]

URL with additional info about the asset

Native TEAL opcode: [`asset_params_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#asset_params_get)

### *class* algopy.op.Base64

Available values for the `base64` enum

### Initialization

Initialize self.  See help(type(self)) for accurate signature.

#### \_\_add\_\_()

Return self+value.

#### \_\_contains\_\_()

Return bool(key in self).

#### \_\_delattr\_\_()

Implement delattr(self, name).

#### \_\_dir\_\_()

Default dir() implementation.

#### \_\_eq\_\_()

Return self==value.

#### \_\_format\_\_()

Return a formatted version of the string as described by format\_spec.

#### \_\_ge\_\_()

Return self>=value.

#### \_\_getattribute\_\_()

Return getattr(self, name).

#### \_\_getitem\_\_()

Return self\[key].

#### \_\_getstate\_\_()

Helper for pickle.

#### \_\_gt\_\_()

Return self>value.

#### \_\_hash\_\_()

Return hash(self).

#### \_\_iter\_\_()

Implement iter(self).

#### \_\_le\_\_()

Return self<=value.

#### \_\_len\_\_()

Return len(self).

#### \_\_lt\_\_()

Return self\<value.

#### \_\_mod\_\_()

Return self%value.

#### \_\_mul\_\_()

Return self\*value.

#### \_\_ne\_\_()

Return self!=value.

#### \_\_new\_\_()

Create and return a new object.  See help(type) for accurate signature.

#### \_\_reduce\_\_()

Helper for pickle.

#### \_\_reduce\_ex\_\_()

Helper for pickle.

#### \_\_repr\_\_()

Return repr(self).

#### \_\_rmod\_\_()

Return value%self.

#### \_\_rmul\_\_()

Return value\*self.

#### \_\_setattr\_\_()

Implement setattr(self, name, value).

#### \_\_sizeof\_\_()

Return the size of the string in memory, in bytes.

#### \_\_str\_\_()

Return str(self).

#### capitalize()

Return a capitalized version of the string.

More specifically, make the first character have upper case and the rest lower
case.

#### casefold()

Return a version of the string suitable for caseless comparisons.

#### center()

Return a centered string of length width.

Padding is done using the specified fill character (default is a space).

#### count()

S.count(sub\[, start\[, end]]) -> int

Return the number of non-overlapping occurrences of substring sub in
string S\[start:end].  Optional arguments start and end are
interpreted as in slice notation.

#### encode()

Encode the string using the codec registered for encoding.

encoding
The encoding in which to encode the string.
errors
The error handling scheme to use for encoding errors.
The default is ‘strict’ meaning that encoding errors raise a
UnicodeEncodeError.  Other possible values are ‘ignore’, ‘replace’ and
‘xmlcharrefreplace’ as well as any other name registered with
codecs.register\_error that can handle UnicodeEncodeErrors.

#### endswith()

S.endswith(suffix\[, start\[, end]]) -> bool

Return True if S ends with the specified suffix, False otherwise.
With optional start, test S beginning at that position.
With optional end, stop comparing S at that position.
suffix can also be a tuple of strings to try.

#### expandtabs()

Return a copy where all tab characters are expanded using spaces.

If tabsize is not given, a tab size of 8 characters is assumed.

#### find()

S.find(sub\[, start\[, end]]) -> int

Return the lowest index in S where substring sub is found,
such that sub is contained within S\[start:end].  Optional
arguments start and end are interpreted as in slice notation.

Return -1 on failure.

#### format()

S.format(\*args, \*\*kwargs) -> str

Return a formatted version of S, using substitutions from args and kwargs.
The substitutions are identified by braces (‘{’ and ‘}’).

#### format\_map()

S.format\_map(mapping) -> str

Return a formatted version of S, using substitutions from mapping.
The substitutions are identified by braces (‘{’ and ‘}’).

#### index()

S.index(sub\[, start\[, end]]) -> int

Return the lowest index in S where substring sub is found,
such that sub is contained within S\[start:end].  Optional
arguments start and end are interpreted as in slice notation.

Raises ValueError when the substring is not found.

#### isalnum()

Return True if the string is an alpha-numeric string, False otherwise.

A string is alpha-numeric if all characters in the string are alpha-numeric and
there is at least one character in the string.

#### isalpha()

Return True if the string is an alphabetic string, False otherwise.

A string is alphabetic if all characters in the string are alphabetic and there
is at least one character in the string.

#### isascii()

Return True if all characters in the string are ASCII, False otherwise.

ASCII characters have code points in the range U+0000-U+007F.
Empty string is ASCII too.

#### isdecimal()

Return True if the string is a decimal string, False otherwise.

A string is a decimal string if all characters in the string are decimal and
there is at least one character in the string.

#### isdigit()

Return True if the string is a digit string, False otherwise.

A string is a digit string if all characters in the string are digits and there
is at least one character in the string.

#### isidentifier()

Return True if the string is a valid Python identifier, False otherwise.

Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
such as “def” or “class”.

#### islower()

Return True if the string is a lowercase string, False otherwise.

A string is lowercase if all cased characters in the string are lowercase and
there is at least one cased character in the string.

#### isnumeric()

Return True if the string is a numeric string, False otherwise.

A string is numeric if all characters in the string are numeric and there is at
least one character in the string.

#### isprintable()

Return True if the string is printable, False otherwise.

A string is printable if all of its characters are considered printable in
repr() or if it is empty.

#### isspace()

Return True if the string is a whitespace string, False otherwise.

A string is whitespace if all characters in the string are whitespace and there
is at least one character in the string.

#### istitle()

Return True if the string is a title-cased string, False otherwise.

In a title-cased string, upper- and title-case characters may only
follow uncased characters and lowercase characters only cased ones.

#### isupper()

Return True if the string is an uppercase string, False otherwise.

A string is uppercase if all cased characters in the string are uppercase and
there is at least one cased character in the string.

#### join()

Concatenate any number of strings.

The string whose method is called is inserted in between each given string.
The result is returned as a new string.

Example: ‘.’.join(\[‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’

#### ljust()

Return a left-justified string of length width.

Padding is done using the specified fill character (default is a space).

#### lower()

Return a copy of the string converted to lowercase.

#### lstrip()

Return a copy of the string with leading whitespace removed.

If chars is given and not None, remove characters in chars instead.

#### partition()

Partition the string into three parts using the given separator.

This will search for the separator in the string.  If the separator is found,
returns a 3-tuple containing the part before the separator, the separator
itself, and the part after it.

If the separator is not found, returns a 3-tuple containing the original string
and two empty strings.

#### removeprefix()

Return a str with the given prefix string removed if present.

If the string starts with the prefix string, return string\[len(prefix):].
Otherwise, return a copy of the original string.

#### removesuffix()

Return a str with the given suffix string removed if present.

If the string ends with the suffix string and that suffix is not empty,
return string\[:-len(suffix)]. Otherwise, return a copy of the original
string.

#### replace()

Return a copy with all occurrences of substring old replaced by new.

count
Maximum number of occurrences to replace.
-1 (the default value) means replace all occurrences.

If the optional argument count is given, only the first count occurrences are
replaced.

#### rfind()

S.rfind(sub\[, start\[, end]]) -> int

Return the highest index in S where substring sub is found,
such that sub is contained within S\[start:end].  Optional
arguments start and end are interpreted as in slice notation.

Return -1 on failure.

#### rindex()

S.rindex(sub\[, start\[, end]]) -> int

Return the highest index in S where substring sub is found,
such that sub is contained within S\[start:end].  Optional
arguments start and end are interpreted as in slice notation.

Raises ValueError when the substring is not found.

#### rjust()

Return a right-justified string of length width.

Padding is done using the specified fill character (default is a space).

#### rpartition()

Partition the string into three parts using the given separator.

This will search for the separator in the string, starting at the end. If
the separator is found, returns a 3-tuple containing the part before the
separator, the separator itself, and the part after it.

If the separator is not found, returns a 3-tuple containing two empty strings
and the original string.

#### rsplit()

Return a list of the substrings in the string, using sep as the separator string.

sep
The separator used to split the string.

```none
When set to None (the default value), will split on any whitespace
character (including \n \r \t \f and spaces) and will discard
empty strings from the result.
```

maxsplit
Maximum number of splits.
-1 (the default value) means no limit.

Splitting starts at the end of the string and works to the front.

#### rstrip()

Return a copy of the string with trailing whitespace removed.

If chars is given and not None, remove characters in chars instead.

#### split()

Return a list of the substrings in the string, using sep as the separator string.

sep
The separator used to split the string.

```none
When set to None (the default value), will split on any whitespace
character (including \n \r \t \f and spaces) and will discard
empty strings from the result.
```

maxsplit
Maximum number of splits.
-1 (the default value) means no limit.

Splitting starts at the front of the string and works to the end.

Note, str.split() is mainly useful for data that has been intentionally
delimited.  With natural text that includes punctuation, consider using
the regular expression module.

#### splitlines()

Return a list of the lines in the string, breaking at line boundaries.

Line breaks are not included in the resulting list unless keepends is given and
true.

#### startswith()

S.startswith(prefix\[, start\[, end]]) -> bool

Return True if S starts with the specified prefix, False otherwise.
With optional start, test S beginning at that position.
With optional end, stop comparing S at that position.
prefix can also be a tuple of strings to try.

#### strip()

Return a copy of the string with leading and trailing whitespace removed.

If chars is given and not None, remove characters in chars instead.

#### swapcase()

Convert uppercase characters to lowercase and lowercase characters to uppercase.

#### title()

Return a version of the string where each word is titlecased.

More specifically, words start with uppercased characters and all remaining
cased characters have lower case.

#### translate()

Replace each character in the string using the given translation table.

table
Translation table, which must be a mapping of Unicode ordinals to
Unicode ordinals, strings, or None.

The table must implement lookup/indexing via **getitem**, for instance a
dictionary or list.  If this operation raises LookupError, the character is
left untouched.  Characters mapped to None are deleted.

#### upper()

Return a copy of the string converted to uppercase.

#### zfill()

Pad a numeric string with zeros on the left, to fill a field of the given width.

The string is never truncated.

### *class* algopy.op.Block

field F of block A. Fail unless A falls between txn.LastValid-1002 and txn.FirstValid (exclusive)
Native TEAL op: [`block`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#block)

#### *static* blk\_seed(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Native TEAL opcode: [`block`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#block)

#### *static* blk\_timestamp(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Native TEAL opcode: [`block`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#block)

### *class* algopy.op.Box

Get or modify box state
Native TEAL ops: [`box_create`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_create), [`box_del`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_del), [`box_extract`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_extract), [`box_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_get), [`box_len`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_len), [`box_put`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_put), [`box_replace`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_replace), [`box_resize`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_resize), [`box_splice`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_splice)

#### *static* create(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [bool](https://docs.python.org/3/library/functions.html#bool)

create a box named A, of length B. Fail if the name A is empty or B exceeds 32,768. Returns 0 if A already existed, else 1
Newly created boxes are filled with 0 bytes. `box_create` will fail if the referenced box already exists with a different size. Otherwise, existing boxes are unchanged by `box_create`.

Native TEAL opcode: [`box_create`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_create)

#### *static* delete(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [bool](https://docs.python.org/3/library/functions.html#bool)

delete box named A if it exists. Return 1 if A existed, 0 otherwise

Native TEAL opcode: [`box_del`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_del)

#### *static* extract(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

read C bytes from box A, starting at offset B. Fail if A does not exist, or the byte range is outside A’s size.

Native TEAL opcode: [`box_extract`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_extract)

#### *static* get(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes), [bool](https://docs.python.org/3/library/functions.html#bool)]

X is the contents of box A if A exists, else ‘’. Y is 1 if A exists, else 0.
For boxes that exceed 4,096 bytes, consider `box_create`, `box_extract`, and `box_replace`

Native TEAL opcode: [`box_get`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_get)

#### *static* length(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [bool](https://docs.python.org/3/library/functions.html#bool)]

X is the length of box A if A exists, else 0. Y is 1 if A exists, else 0.

Native TEAL opcode: [`box_len`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_len)

#### *static* put(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)

replaces the contents of box A with byte-array B. Fails if A exists and len(B) != len(box A). Creates A if it does not exist
For boxes that exceed 4,096 bytes, consider `box_create`, `box_extract`, and `box_replace`

Native TEAL opcode: [`box_put`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_put)

#### *static* replace(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)

write byte-array C into box A, starting at offset B. Fail if A does not exist, or the byte range is outside A’s size.

Native TEAL opcode: [`box_replace`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_replace)

#### *static* resize(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

change the size of box named A to be of length B, adding zero bytes to end or removing bytes from the end, as needed. Fail if the name A is empty, A is not an existing box, or B exceeds 32,768.

Native TEAL opcode: [`box_resize`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_resize)

#### *static* splice(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), d: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)

set box A to contain its previous bytes up to index B, followed by D, followed by the original bytes of A that began at index B+C.
Boxes are of constant length. If C < len(D), then len(D)-C bytes will be removed from the end. If C > len(D), zero bytes will be appended to the end to reach the box length.

Native TEAL opcode: [`box_splice`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#box_splice)

### *class* algopy.op.EC

Available values for the `EC` enum

### Initialization

Initialize self.  See help(type(self)) for accurate signature.

#### \_\_add\_\_()

Return self+value.

#### \_\_contains\_\_()

Return bool(key in self).

#### \_\_delattr\_\_()

Implement delattr(self, name).

#### \_\_dir\_\_()

Default dir() implementation.

#### \_\_eq\_\_()

Return self==value.

#### \_\_format\_\_()

Return a formatted version of the string as described by format\_spec.

#### \_\_ge\_\_()

Return self>=value.

#### \_\_getattribute\_\_()

Return getattr(self, name).

#### \_\_getitem\_\_()

Return self\[key].

#### \_\_getstate\_\_()

Helper for pickle.

#### \_\_gt\_\_()

Return self>value.

#### \_\_hash\_\_()

Return hash(self).

#### \_\_iter\_\_()

Implement iter(self).

#### \_\_le\_\_()

Return self<=value.

#### \_\_len\_\_()

Return len(self).

#### \_\_lt\_\_()

Return self\<value.

#### \_\_mod\_\_()

Return self%value.

#### \_\_mul\_\_()

Return self\*value.

#### \_\_ne\_\_()

Return self!=value.

#### \_\_new\_\_()

Create and return a new object.  See help(type) for accurate signature.

#### \_\_reduce\_\_()

Helper for pickle.

#### \_\_reduce\_ex\_\_()

Helper for pickle.

#### \_\_repr\_\_()

Return repr(self).

#### \_\_rmod\_\_()

Return value%self.

#### \_\_rmul\_\_()

Return value\*self.

#### \_\_setattr\_\_()

Implement setattr(self, name, value).

#### \_\_sizeof\_\_()

Return the size of the string in memory, in bytes.

#### \_\_str\_\_()

Return str(self).

#### capitalize()

Return a capitalized version of the string.

More specifically, make the first character have upper case and the rest lower
case.

#### casefold()

Return a version of the string suitable for caseless comparisons.

#### center()

Return a centered string of length width.

Padding is done using the specified fill character (default is a space).

#### count()

S.count(sub\[, start\[, end]]) -> int

Return the number of non-overlapping occurrences of substring sub in
string S\[start:end].  Optional arguments start and end are
interpreted as in slice notation.

#### encode()

Encode the string using the codec registered for encoding.

encoding
The encoding in which to encode the string.
errors
The error handling scheme to use for encoding errors.
The default is ‘strict’ meaning that encoding errors raise a
UnicodeEncodeError.  Other possible values are ‘ignore’, ‘replace’ and
‘xmlcharrefreplace’ as well as any other name registered with
codecs.register\_error that can handle UnicodeEncodeErrors.

#### endswith()

S.endswith(suffix\[, start\[, end]]) -> bool

Return True if S ends with the specified suffix, False otherwise.
With optional start, test S beginning at that position.
With optional end, stop comparing S at that position.
suffix can also be a tuple of strings to try.

#### expandtabs()

Return a copy where all tab characters are expanded using spaces.

If tabsize is not given, a tab size of 8 characters is assumed.

#### find()

S.find(sub\[, start\[, end]]) -> int

Return the lowest index in S where substring sub is found,
such that sub is contained within S\[start:end].  Optional
arguments start and end are interpreted as in slice notation.

Return -1 on failure.

#### format()

S.format(\*args, \*\*kwargs) -> str

Return a formatted version of S, using substitutions from args and kwargs.
The substitutions are identified by braces (‘{’ and ‘}’).

#### format\_map()

S.format\_map(mapping) -> str

Return a formatted version of S, using substitutions from mapping.
The substitutions are identified by braces (‘{’ and ‘}’).

#### index()

S.index(sub\[, start\[, end]]) -> int

Return the lowest index in S where substring sub is found,
such that sub is contained within S\[start:end].  Optional
arguments start and end are interpreted as in slice notation.

Raises ValueError when the substring is not found.

#### isalnum()

Return True if the string is an alpha-numeric string, False otherwise.

A string is alpha-numeric if all characters in the string are alpha-numeric and
there is at least one character in the string.

#### isalpha()

Return True if the string is an alphabetic string, False otherwise.

A string is alphabetic if all characters in the string are alphabetic and there
is at least one character in the string.

#### isascii()

Return True if all characters in the string are ASCII, False otherwise.

ASCII characters have code points in the range U+0000-U+007F.
Empty string is ASCII too.

#### isdecimal()

Return True if the string is a decimal string, False otherwise.

A string is a decimal string if all characters in the string are decimal and
there is at least one character in the string.

#### isdigit()

Return True if the string is a digit string, False otherwise.

A string is a digit string if all characters in the string are digits and there
is at least one character in the string.

#### isidentifier()

Return True if the string is a valid Python identifier, False otherwise.

Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
such as “def” or “class”.

#### islower()

Return True if the string is a lowercase string, False otherwise.

A string is lowercase if all cased characters in the string are lowercase and
there is at least one cased character in the string.

#### isnumeric()

Return True if the string is a numeric string, False otherwise.

A string is numeric if all characters in the string are numeric and there is at
least one character in the string.

#### isprintable()

Return True if the string is printable, False otherwise.

A string is printable if all of its characters are considered printable in
repr() or if it is empty.

#### isspace()

Return True if the string is a whitespace string, False otherwise.

A string is whitespace if all characters in the string are whitespace and there
is at least one character in the string.

#### istitle()

Return True if the string is a title-cased string, False otherwise.

In a title-cased string, upper- and title-case characters may only
follow uncased characters and lowercase characters only cased ones.

#### isupper()

Return True if the string is an uppercase string, False otherwise.

A string is uppercase if all cased characters in the string are uppercase and
there is at least one cased character in the string.

#### join()

Concatenate any number of strings.

The string whose method is called is inserted in between each given string.
The result is returned as a new string.

Example: ‘.’.join(\[‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’

#### ljust()

Return a left-justified string of length width.

Padding is done using the specified fill character (default is a space).

#### lower()

Return a copy of the string converted to lowercase.

#### lstrip()

Return a copy of the string with leading whitespace removed.

If chars is given and not None, remove characters in chars instead.

#### partition()

Partition the string into three parts using the given separator.

This will search for the separator in the string.  If the separator is found,
returns a 3-tuple containing the part before the separator, the separator
itself, and the part after it.

If the separator is not found, returns a 3-tuple containing the original string
and two empty strings.

#### removeprefix()

Return a str with the given prefix string removed if present.

If the string starts with the prefix string, return string\[len(prefix):].
Otherwise, return a copy of the original string.

#### removesuffix()

Return a str with the given suffix string removed if present.

If the string ends with the suffix string and that suffix is not empty,
return string\[:-len(suffix)]. Otherwise, return a copy of the original
string.

#### replace()

Return a copy with all occurrences of substring old replaced by new.

count
Maximum number of occurrences to replace.
-1 (the default value) means replace all occurrences.

If the optional argument count is given, only the first count occurrences are
replaced.

#### rfind()

S.rfind(sub\[, start\[, end]]) -> int

Return the highest index in S where substring sub is found,
such that sub is contained within S\[start:end].  Optional
arguments start and end are interpreted as in slice notation.

Return -1 on failure.

#### rindex()

S.rindex(sub\[, start\[, end]]) -> int

Return the highest index in S where substring sub is found,
such that sub is contained within S\[start:end].  Optional
arguments start and end are interpreted as in slice notation.

Raises ValueError when the substring is not found.

#### rjust()

Return a right-justified string of length width.

Padding is done using the specified fill character (default is a space).

#### rpartition()

Partition the string into three parts using the given separator.

This will search for the separator in the string, starting at the end. If
the separator is found, returns a 3-tuple containing the part before the
separator, the separator itself, and the part after it.

If the separator is not found, returns a 3-tuple containing two empty strings
and the original string.

#### rsplit()

Return a list of the substrings in the string, using sep as the separator string.

sep
The separator used to split the string.

```none
When set to None (the default value), will split on any whitespace
character (including \n \r \t \f and spaces) and will discard
empty strings from the result.
```

maxsplit
Maximum number of splits.
-1 (the default value) means no limit.

Splitting starts at the end of the string and works to the front.

#### rstrip()

Return a copy of the string with trailing whitespace removed.

If chars is given and not None, remove characters in chars instead.

#### split()

Return a list of the substrings in the string, using sep as the separator string.

sep
The separator used to split the string.

```none
When set to None (the default value), will split on any whitespace
character (including \n \r \t \f and spaces) and will discard
empty strings from the result.
```

maxsplit
Maximum number of splits.
-1 (the default value) means no limit.

Splitting starts at the front of the string and works to the end.

Note, str.split() is mainly useful for data that has been intentionally
delimited.  With natural text that includes punctuation, consider using
the regular expression module.

#### splitlines()

Return a list of the lines in the string, breaking at line boundaries.

Line breaks are not included in the resulting list unless keepends is given and
true.

#### startswith()

S.startswith(prefix\[, start\[, end]]) -> bool

Return True if S starts with the specified prefix, False otherwise.
With optional start, test S beginning at that position.
With optional end, stop comparing S at that position.
prefix can also be a tuple of strings to try.

#### strip()

Return a copy of the string with leading and trailing whitespace removed.

If chars is given and not None, remove characters in chars instead.

#### swapcase()

Convert uppercase characters to lowercase and lowercase characters to uppercase.

#### title()

Return a version of the string where each word is titlecased.

More specifically, words start with uppercased characters and all remaining
cased characters have lower case.

#### translate()

Replace each character in the string using the given translation table.

table
Translation table, which must be a mapping of Unicode ordinals to
Unicode ordinals, strings, or None.

The table must implement lookup/indexing via **getitem**, for instance a
dictionary or list.  If this operation raises LookupError, the character is
left untouched.  Characters mapped to None are deleted.

#### upper()

Return a copy of the string converted to uppercase.

#### zfill()

Pad a numeric string with zeros on the left, to fill a field of the given width.

The string is never truncated.

### *class* algopy.op.ECDSA

Available values for the `ECDSA` enum

### Initialization

Initialize self.  See help(type(self)) for accurate signature.

#### \_\_add\_\_()

Return self+value.

#### \_\_contains\_\_()

Return bool(key in self).

#### \_\_delattr\_\_()

Implement delattr(self, name).

#### \_\_dir\_\_()

Default dir() implementation.

#### \_\_eq\_\_()

Return self==value.

#### \_\_format\_\_()

Return a formatted version of the string as described by format\_spec.

#### \_\_ge\_\_()

Return self>=value.

#### \_\_getattribute\_\_()

Return getattr(self, name).

#### \_\_getitem\_\_()

Return self\[key].

#### \_\_getstate\_\_()

Helper for pickle.

#### \_\_gt\_\_()

Return self>value.

#### \_\_hash\_\_()

Return hash(self).

#### \_\_iter\_\_()

Implement iter(self).

#### \_\_le\_\_()

Return self<=value.

#### \_\_len\_\_()

Return len(self).

#### \_\_lt\_\_()

Return self\<value.

#### \_\_mod\_\_()

Return self%value.

#### \_\_mul\_\_()

Return self\*value.

#### \_\_ne\_\_()

Return self!=value.

#### \_\_new\_\_()

Create and return a new object.  See help(type) for accurate signature.

#### \_\_reduce\_\_()

Helper for pickle.

#### \_\_reduce\_ex\_\_()

Helper for pickle.

#### \_\_repr\_\_()

Return repr(self).

#### \_\_rmod\_\_()

Return value%self.

#### \_\_rmul\_\_()

Return value\*self.

#### \_\_setattr\_\_()

Implement setattr(self, name, value).

#### \_\_sizeof\_\_()

Return the size of the string in memory, in bytes.

#### \_\_str\_\_()

Return str(self).

#### capitalize()

Return a capitalized version of the string.

More specifically, make the first character have upper case and the rest lower
case.

#### casefold()

Return a version of the string suitable for caseless comparisons.

#### center()

Return a centered string of length width.

Padding is done using the specified fill character (default is a space).

#### count()

S.count(sub\[, start\[, end]]) -> int

Return the number of non-overlapping occurrences of substring sub in
string S\[start:end].  Optional arguments start and end are
interpreted as in slice notation.

#### encode()

Encode the string using the codec registered for encoding.

encoding
The encoding in which to encode the string.
errors
The error handling scheme to use for encoding errors.
The default is ‘strict’ meaning that encoding errors raise a
UnicodeEncodeError.  Other possible values are ‘ignore’, ‘replace’ and
‘xmlcharrefreplace’ as well as any other name registered with
codecs.register\_error that can handle UnicodeEncodeErrors.

#### endswith()

S.endswith(suffix\[, start\[, end]]) -> bool

Return True if S ends with the specified suffix, False otherwise.
With optional start, test S beginning at that position.
With optional end, stop comparing S at that position.
suffix can also be a tuple of strings to try.

#### expandtabs()

Return a copy where all tab characters are expanded using spaces.

If tabsize is not given, a tab size of 8 characters is assumed.

#### find()

S.find(sub\[, start\[, end]]) -> int

Return the lowest index in S where substring sub is found,
such that sub is contained within S\[start:end].  Optional
arguments start and end are interpreted as in slice notation.

Return -1 on failure.

#### format()

S.format(\*args, \*\*kwargs) -> str

Return a formatted version of S, using substitutions from args and kwargs.
The substitutions are identified by braces (‘{’ and ‘}’).

#### format\_map()

S.format\_map(mapping) -> str

Return a formatted version of S, using substitutions from mapping.
The substitutions are identified by braces (‘{’ and ‘}’).

#### index()

S.index(sub\[, start\[, end]]) -> int

Return the lowest index in S where substring sub is found,
such that sub is contained within S\[start:end].  Optional
arguments start and end are interpreted as in slice notation.

Raises ValueError when the substring is not found.

#### isalnum()

Return True if the string is an alpha-numeric string, False otherwise.

A string is alpha-numeric if all characters in the string are alpha-numeric and
there is at least one character in the string.

#### isalpha()

Return True if the string is an alphabetic string, False otherwise.

A string is alphabetic if all characters in the string are alphabetic and there
is at least one character in the string.

#### isascii()

Return True if all characters in the string are ASCII, False otherwise.

ASCII characters have code points in the range U+0000-U+007F.
Empty string is ASCII too.

#### isdecimal()

Return True if the string is a decimal string, False otherwise.

A string is a decimal string if all characters in the string are decimal and
there is at least one character in the string.

#### isdigit()

Return True if the string is a digit string, False otherwise.

A string is a digit string if all characters in the string are digits and there
is at least one character in the string.

#### isidentifier()

Return True if the string is a valid Python identifier, False otherwise.

Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
such as “def” or “class”.

#### islower()

Return True if the string is a lowercase string, False otherwise.

A string is lowercase if all cased characters in the string are lowercase and
there is at least one cased character in the string.

#### isnumeric()

Return True if the string is a numeric string, False otherwise.

A string is numeric if all characters in the string are numeric and there is at
least one character in the string.

#### isprintable()

Return True if the string is printable, False otherwise.

A string is printable if all of its characters are considered printable in
repr() or if it is empty.

#### isspace()

Return True if the string is a whitespace string, False otherwise.

A string is whitespace if all characters in the string are whitespace and there
is at least one character in the string.

#### istitle()

Return True if the string is a title-cased string, False otherwise.

In a title-cased string, upper- and title-case characters may only
follow uncased characters and lowercase characters only cased ones.

#### isupper()

Return True if the string is an uppercase string, False otherwise.

A string is uppercase if all cased characters in the string are uppercase and
there is at least one cased character in the string.

#### join()

Concatenate any number of strings.

The string whose method is called is inserted in between each given string.
The result is returned as a new string.

Example: ‘.’.join(\[‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’

#### ljust()

Return a left-justified string of length width.

Padding is done using the specified fill character (default is a space).

#### lower()

Return a copy of the string converted to lowercase.

#### lstrip()

Return a copy of the string with leading whitespace removed.

If chars is given and not None, remove characters in chars instead.

#### partition()

Partition the string into three parts using the given separator.

This will search for the separator in the string.  If the separator is found,
returns a 3-tuple containing the part before the separator, the separator
itself, and the part after it.

If the separator is not found, returns a 3-tuple containing the original string
and two empty strings.

#### removeprefix()

Return a str with the given prefix string removed if present.

If the string starts with the prefix string, return string\[len(prefix):].
Otherwise, return a copy of the original string.

#### removesuffix()

Return a str with the given suffix string removed if present.

If the string ends with the suffix string and that suffix is not empty,
return string\[:-len(suffix)]. Otherwise, return a copy of the original
string.

#### replace()

Return a copy with all occurrences of substring old replaced by new.

count
Maximum number of occurrences to replace.
-1 (the default value) means replace all occurrences.

If the optional argument count is given, only the first count occurrences are
replaced.

#### rfind()

S.rfind(sub\[, start\[, end]]) -> int

Return the highest index in S where substring sub is found,
such that sub is contained within S\[start:end].  Optional
arguments start and end are interpreted as in slice notation.

Return -1 on failure.

#### rindex()

S.rindex(sub\[, start\[, end]]) -> int

Return the highest index in S where substring sub is found,
such that sub is contained within S\[start:end].  Optional
arguments start and end are interpreted as in slice notation.

Raises ValueError when the substring is not found.

#### rjust()

Return a right-justified string of length width.

Padding is done using the specified fill character (default is a space).

#### rpartition()

Partition the string into three parts using the given separator.

This will search for the separator in the string, starting at the end. If
the separator is found, returns a 3-tuple containing the part before the
separator, the separator itself, and the part after it.

If the separator is not found, returns a 3-tuple containing two empty strings
and the original string.

#### rsplit()

Return a list of the substrings in the string, using sep as the separator string.

sep
The separator used to split the string.

```none
When set to None (the default value), will split on any whitespace
character (including \n \r \t \f and spaces) and will discard
empty strings from the result.
```

maxsplit
Maximum number of splits.
-1 (the default value) means no limit.

Splitting starts at the end of the string and works to the front.

#### rstrip()

Return a copy of the string with trailing whitespace removed.

If chars is given and not None, remove characters in chars instead.

#### split()

Return a list of the substrings in the string, using sep as the separator string.

sep
The separator used to split the string.

```none
When set to None (the default value), will split on any whitespace
character (including \n \r \t \f and spaces) and will discard
empty strings from the result.
```

maxsplit
Maximum number of splits.
-1 (the default value) means no limit.

Splitting starts at the front of the string and works to the end.

Note, str.split() is mainly useful for data that has been intentionally
delimited.  With natural text that includes punctuation, consider using
the regular expression module.

#### splitlines()

Return a list of the lines in the string, breaking at line boundaries.

Line breaks are not included in the resulting list unless keepends is given and
true.

#### startswith()

S.startswith(prefix\[, start\[, end]]) -> bool

Return True if S starts with the specified prefix, False otherwise.
With optional start, test S beginning at that position.
With optional end, stop comparing S at that position.
prefix can also be a tuple of strings to try.

#### strip()

Return a copy of the string with leading and trailing whitespace removed.

If chars is given and not None, remove characters in chars instead.

#### swapcase()

Convert uppercase characters to lowercase and lowercase characters to uppercase.

#### title()

Return a version of the string where each word is titlecased.

More specifically, words start with uppercased characters and all remaining
cased characters have lower case.

#### translate()

Replace each character in the string using the given translation table.

table
Translation table, which must be a mapping of Unicode ordinals to
Unicode ordinals, strings, or None.

The table must implement lookup/indexing via **getitem**, for instance a
dictionary or list.  If this operation raises LookupError, the character is
left untouched.  Characters mapped to None are deleted.

#### upper()

Return a copy of the string converted to uppercase.

#### zfill()

Pad a numeric string with zeros on the left, to fill a field of the given width.

The string is never truncated.

### *class* algopy.op.EllipticCurve

Elliptic Curve functions
Native TEAL ops: [`ec_add`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ec_add), [`ec_map_to`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ec_map_to), [`ec_multi_scalar_mul`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ec_multi_scalar_mul), [`ec_pairing_check`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ec_pairing_check), [`ec_scalar_mul`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ec_scalar_mul), [`ec_subgroup_check`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ec_subgroup_check)

#### *static* add(g: [algopy.op.EC](#algopy.op.EC), a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

for curve points A and B, return the curve point A + B
A and B are curve points in affine representation: field element X concatenated with field element Y. Field element `Z` is encoded as follows.
For the base field elements (Fp), `Z` is encoded as a big-endian number and must be lower than the field modulus.
For the quadratic field extension (Fp2), `Z` is encoded as the concatenation of the individual encoding of the coefficients. For an Fp2 element of the form `Z = Z0 + Z1 i`, where `i` is a formal quadratic non-residue, the encoding of Z is the concatenation of the encoding of `Z0` and `Z1` in this order. (`Z0` and `Z1` must be less than the field modulus).

The point at infinity is encoded as `(X,Y) = (0,0)`.
Groups G1 and G2 are denoted additively.

Fails if A or B is not in G.
A and/or B are allowed to be the point at infinity.
Does *not* check if A and B are in the main prime-order subgroup.

* **Parameters:**
  **g** ([*EC*](#algopy.op.EC)) – curve index

Native TEAL opcode: [`ec_add`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ec_add)

#### *static* map\_to(g: [algopy.op.EC](#algopy.op.EC), a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

maps field element A to group G
BN254 points are mapped by the SVDW map. BLS12-381 points are mapped by the SSWU map.
G1 element inputs are base field elements and G2 element inputs are quadratic field elements, with nearly the same encoding rules (for field elements) as defined in `ec_add`. There is one difference of encoding rule: G1 element inputs do not need to be 0-padded if they fit in less than 32 bytes for BN254 and less than 48 bytes for BLS12-381. (As usual, the empty byte array represents 0.) G2 elements inputs need to be always have the required size.

* **Parameters:**
  **g** ([*EC*](#algopy.op.EC)) – curve index

Native TEAL opcode: [`ec_map_to`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ec_map_to)

#### *static* pairing\_check(g: [algopy.op.EC](#algopy.op.EC), a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [bool](https://docs.python.org/3/library/functions.html#bool)

1 if the product of the pairing of each point in A with its respective point in B is equal to the identity element of the target group Gt, else 0
A and B are concatenated points, encoded and checked as described in `ec_add`. A contains points of the group G, B contains points of the associated group (G2 if G is G1, and vice versa). Fails if A and B have a different number of points, or if any point is not in its described group or outside the main prime-order subgroup - a stronger condition than other opcodes. AVM values are limited to 4096 bytes, so `ec_pairing_check` is limited by the size of the points in the groups being operated upon.

* **Parameters:**
  **g** ([*EC*](#algopy.op.EC)) – curve index

Native TEAL opcode: [`ec_pairing_check`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ec_pairing_check)

#### *static* scalar\_mul(g: [algopy.op.EC](#algopy.op.EC), a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

for curve point A and scalar B, return the curve point BA, the point A multiplied by the scalar B.
A is a curve point encoded and checked as described in `ec_add`. Scalar B is interpreted as a big-endian unsigned integer. Fails if B exceeds 32 bytes.

* **Parameters:**
  **g** ([*EC*](#algopy.op.EC)) – curve index

Native TEAL opcode: [`ec_scalar_mul`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ec_scalar_mul)

#### *static* scalar\_mul\_multi(g: [algopy.op.EC](#algopy.op.EC), a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

for curve points A and scalars B, return curve point B0A0 + B1A1 + B2A2 + … + BnAn
A is a list of concatenated points, encoded and checked as described in `ec_add`. B is a list of concatenated scalars which, unlike ec\_scalar\_mul, must all be exactly 32 bytes long.
The name `ec_multi_scalar_mul` was chosen to reflect common usage, but a more consistent name would be `ec_multi_scalar_mul`. AVM values are limited to 4096 bytes, so `ec_multi_scalar_mul` is limited by the size of the points in the group being operated upon.

* **Parameters:**
  **g** ([*EC*](#algopy.op.EC)) – curve index

Native TEAL opcode: [`ec_multi_scalar_mul`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ec_multi_scalar_mul)

#### *static* subgroup\_check(g: [algopy.op.EC](#algopy.op.EC), a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [bool](https://docs.python.org/3/library/functions.html#bool)

1 if A is in the main prime-order subgroup of G (including the point at infinity) else 0. Program fails if A is not in G at all.

* **Parameters:**
  **g** ([*EC*](#algopy.op.EC)) – curve index

Native TEAL opcode: [`ec_subgroup_check`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ec_subgroup_check)

### *class* algopy.op.GITxn

Get values for inner transaction in the last group submitted
Native TEAL ops: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn), [`gitxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxnas)

#### *static* accounts(t: [int](https://docs.python.org/3/library/functions.html#int), a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Account:**
  Accounts listed in the ApplicationCall transaction

Native TEAL opcode: [`gitxna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxna), [`gitxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxnas)

#### *static* amount(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  microalgos

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* application\_args(t: [int](https://docs.python.org/3/library/functions.html#int), a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Bytes:**
  Arguments passed to the application in the ApplicationCall transaction

Native TEAL opcode: [`gitxna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxna), [`gitxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxnas)

#### *static* application\_id(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Application](../../api-reference/api-algopy#algopy.Application)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Application:**
  ApplicationID from ApplicationCall transaction

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* applications(t: [int](https://docs.python.org/3/library/functions.html#int), a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Application](../../api-reference/api-algopy#algopy.Application)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Application:**
  Foreign Apps listed in the ApplicationCall transaction

Native TEAL opcode: [`gitxna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxna), [`gitxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxnas)

#### *static* approval\_program(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Bytes:**
  Approval program

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* approval\_program\_pages(t: [int](https://docs.python.org/3/library/functions.html#int), a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Bytes:**
  Approval Program as an array of pages

Native TEAL opcode: [`gitxna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxna), [`gitxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxnas)

#### *static* asset\_amount(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  value in Asset’s units

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* asset\_close\_to(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Account:**
  32 byte address

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* asset\_receiver(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Account:**
  32 byte address

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* asset\_sender(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Account:**
  32 byte address. Source of assets if Sender is the Asset’s Clawback address.

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* assets(t: [int](https://docs.python.org/3/library/functions.html#int), a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Asset:**
  Foreign Assets listed in the ApplicationCall transaction

Native TEAL opcode: [`gitxna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxna), [`gitxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxnas)

#### *static* clear\_state\_program(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Bytes:**
  Clear state program

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* clear\_state\_program\_pages(t: [int](https://docs.python.org/3/library/functions.html#int), a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Bytes:**
  ClearState Program as an array of pages

Native TEAL opcode: [`gitxna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxna), [`gitxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxnas)

#### *static* close\_remainder\_to(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Account:**
  32 byte address

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* config\_asset(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Asset:**
  Asset ID in asset config transaction

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* config\_asset\_clawback(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Account:**
  32 byte address

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* config\_asset\_decimals(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  Number of digits to display after the decimal place when displaying the asset

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* config\_asset\_default\_frozen(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [bool](https://docs.python.org/3/library/functions.html#bool)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns bool:**
  Whether the asset’s slots are frozen by default or not, 0 or 1

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* config\_asset\_freeze(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Account:**
  32 byte address

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* config\_asset\_manager(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Account:**
  32 byte address

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* config\_asset\_metadata\_hash(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Bytes:**
  32 byte commitment to unspecified asset metadata

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* config\_asset\_name(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Bytes:**
  The asset name

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* config\_asset\_reserve(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Account:**
  32 byte address

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* config\_asset\_total(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  Total number of units of this asset created

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* config\_asset\_unit\_name(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Bytes:**
  Unit name of the asset

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* config\_asset\_url(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Bytes:**
  URL

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* created\_application\_id(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Application](../../api-reference/api-algopy#algopy.Application)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Application:**
  ApplicationID allocated by the creation of an application (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* created\_asset\_id(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Asset:**
  Asset ID allocated by the creation of an ASA (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* extra\_program\_pages(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  Number of additional pages for each of the application’s approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* fee(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  microalgos

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* first\_valid(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  round number

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* first\_valid\_time(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  UNIX timestamp of block before txn.FirstValid. Fails if negative

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* freeze\_asset(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Asset:**
  Asset ID being frozen or un-frozen

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* freeze\_asset\_account(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Account:**
  32 byte address of the account whose asset slot is being frozen or un-frozen

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* freeze\_asset\_frozen(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [bool](https://docs.python.org/3/library/functions.html#bool)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns bool:**
  The new frozen value, 0 or 1

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* global\_num\_byte\_slice(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  Number of global state byteslices in ApplicationCall

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* global\_num\_uint(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  Number of global state integers in ApplicationCall

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* group\_index(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  Position of this transaction within an atomic transaction group. A stand-alone transaction is implicitly element 0 in a group of 1

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* last\_log(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Bytes:**
  The last message emitted. Empty bytes if none were emitted. Application mode only

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* last\_valid(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  round number

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* lease(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Bytes:**
  32 byte lease value

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* local\_num\_byte\_slice(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  Number of local state byteslices in ApplicationCall

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* local\_num\_uint(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  Number of local state integers in ApplicationCall

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* logs(t: [int](https://docs.python.org/3/library/functions.html#int), a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Bytes:**
  Log messages emitted by an application call (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`gitxna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxna), [`gitxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxnas)

#### *static* nonparticipation(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [bool](https://docs.python.org/3/library/functions.html#bool)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns bool:**
  Marks an account nonparticipating for rewards

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* note(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Bytes:**
  Any data up to 1024 bytes

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* num\_accounts(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  Number of Accounts

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* num\_app\_args(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  Number of ApplicationArgs

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* num\_applications(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  Number of Applications

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* num\_approval\_program\_pages(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  Number of Approval Program pages

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* num\_assets(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  Number of Assets

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* num\_clear\_state\_program\_pages(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  Number of ClearState Program pages

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* num\_logs(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  Number of Logs (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* on\_completion(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.OnCompleteAction](../../api-reference/api-algopy#algopy.OnCompleteAction)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns OnCompleteAction:**
  ApplicationCall transaction on completion action

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* receiver(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Account:**
  32 byte address

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* rekey\_to(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Account:**
  32 byte Sender’s new AuthAddr

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* selection\_pk(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Bytes:**
  32 byte address

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* sender(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Account:**
  32 byte address

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* state\_proof\_pk(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Bytes:**
  64 byte state proof public key

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* tx\_id(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Bytes:**
  The computed ID for this transaction. 32 bytes.

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* type(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Bytes:**
  Transaction type as bytes

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* type\_enum(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.TransactionType](../../api-reference/api-algopy#algopy.TransactionType)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns TransactionType:**
  Transaction type as integer

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* vote\_first(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  The first round that the participation key is valid.

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* vote\_key\_dilution(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  Dilution for the 2-level participation key

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* vote\_last(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns UInt64:**
  The last round that the participation key is valid.

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* vote\_pk(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Bytes:**
  32 byte address

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

#### *static* xfer\_asset(t: [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)

* **Parameters:**
  **t** ([*int*](https://docs.python.org/3/library/functions.html#int)) – transaction group index
* **Returns Asset:**
  Asset ID

Native TEAL opcode: [`gitxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gitxn)

### *class* algopy.op.GTxn

Get values for transactions in the current group
Native TEAL ops: [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns), [`gtxnsas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnsas)

#### *static* accounts(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

Accounts listed in the ApplicationCall transaction

Native TEAL opcode: [`gtxna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxna), [`gtxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnas), [`gtxnsa`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnsa), [`gtxnsas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnsas)

#### *static* amount(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

microalgos

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* application\_args(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Arguments passed to the application in the ApplicationCall transaction

Native TEAL opcode: [`gtxna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxna), [`gtxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnas), [`gtxnsa`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnsa), [`gtxnsas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnsas)

#### *static* application\_id(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Application](../../api-reference/api-algopy#algopy.Application)

ApplicationID from ApplicationCall transaction

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* applications(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Application](../../api-reference/api-algopy#algopy.Application)

Foreign Apps listed in the ApplicationCall transaction

Native TEAL opcode: [`gtxna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxna), [`gtxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnas), [`gtxnsa`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnsa), [`gtxnsas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnsas)

#### *static* approval\_program(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Approval program

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* approval\_program\_pages(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Approval Program as an array of pages

Native TEAL opcode: [`gtxna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxna), [`gtxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnas), [`gtxnsa`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnsa), [`gtxnsas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnsas)

#### *static* asset\_amount(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

value in Asset’s units

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* asset\_close\_to(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte address

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* asset\_receiver(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte address

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* asset\_sender(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte address. Source of assets if Sender is the Asset’s Clawback address.

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* assets(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)

Foreign Assets listed in the ApplicationCall transaction

Native TEAL opcode: [`gtxna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxna), [`gtxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnas), [`gtxnsa`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnsa), [`gtxnsas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnsas)

#### *static* clear\_state\_program(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Clear state program

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* clear\_state\_program\_pages(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

ClearState Program as an array of pages

Native TEAL opcode: [`gtxna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxna), [`gtxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnas), [`gtxnsa`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnsa), [`gtxnsas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnsas)

#### *static* close\_remainder\_to(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte address

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* config\_asset(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)

Asset ID in asset config transaction

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* config\_asset\_clawback(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte address

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* config\_asset\_decimals(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of digits to display after the decimal place when displaying the asset

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* config\_asset\_default\_frozen(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [bool](https://docs.python.org/3/library/functions.html#bool)

Whether the asset’s slots are frozen by default or not, 0 or 1

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* config\_asset\_freeze(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte address

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* config\_asset\_manager(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte address

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* config\_asset\_metadata\_hash(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

32 byte commitment to unspecified asset metadata

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* config\_asset\_name(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

The asset name

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* config\_asset\_reserve(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte address

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* config\_asset\_total(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Total number of units of this asset created

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* config\_asset\_unit\_name(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Unit name of the asset

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* config\_asset\_url(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

URL

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* created\_application\_id(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Application](../../api-reference/api-algopy#algopy.Application)

ApplicationID allocated by the creation of an application (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* created\_asset\_id(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)

Asset ID allocated by the creation of an ASA (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* extra\_program\_pages(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of additional pages for each of the application’s approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* fee(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

microalgos

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* first\_valid(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

round number

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* first\_valid\_time(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

UNIX timestamp of block before txn.FirstValid. Fails if negative

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* freeze\_asset(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)

Asset ID being frozen or un-frozen

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* freeze\_asset\_account(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte address of the account whose asset slot is being frozen or un-frozen

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* freeze\_asset\_frozen(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [bool](https://docs.python.org/3/library/functions.html#bool)

The new frozen value, 0 or 1

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* global\_num\_byte\_slice(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of global state byteslices in ApplicationCall

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* global\_num\_uint(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of global state integers in ApplicationCall

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* group\_index(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Position of this transaction within an atomic transaction group. A stand-alone transaction is implicitly element 0 in a group of 1

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* last\_log(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

The last message emitted. Empty bytes if none were emitted. Application mode only

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* last\_valid(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

round number

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* lease(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

32 byte lease value

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* local\_num\_byte\_slice(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of local state byteslices in ApplicationCall

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* local\_num\_uint(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of local state integers in ApplicationCall

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* logs(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Log messages emitted by an application call (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`gtxna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxna), [`gtxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnas), [`gtxnsa`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnsa), [`gtxnsas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxnsas)

#### *static* nonparticipation(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [bool](https://docs.python.org/3/library/functions.html#bool)

Marks an account nonparticipating for rewards

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* note(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Any data up to 1024 bytes

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* num\_accounts(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of Accounts

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* num\_app\_args(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of ApplicationArgs

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* num\_applications(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of Applications

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* num\_approval\_program\_pages(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of Approval Program pages

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* num\_assets(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of Assets

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* num\_clear\_state\_program\_pages(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of ClearState Program pages

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* num\_logs(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of Logs (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* on\_completion(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.OnCompleteAction](../../api-reference/api-algopy#algopy.OnCompleteAction)

ApplicationCall transaction on completion action

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* receiver(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte address

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* rekey\_to(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte Sender’s new AuthAddr

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* selection\_pk(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

32 byte address

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* sender(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte address

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* state\_proof\_pk(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

64 byte state proof public key

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* tx\_id(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

The computed ID for this transaction. 32 bytes.

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* type(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Transaction type as bytes

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* type\_enum(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.TransactionType](../../api-reference/api-algopy#algopy.TransactionType)

Transaction type as integer

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* vote\_first(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

The first round that the participation key is valid.

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* vote\_key\_dilution(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Dilution for the 2-level participation key

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* vote\_last(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

The last round that the participation key is valid.

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* vote\_pk(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

32 byte address

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

#### *static* xfer\_asset(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)

Asset ID

Native TEAL opcode: [`gtxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxn), [`gtxns`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gtxns)

### *class* algopy.op.Global

Get Global values
Native TEAL op: [`global`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#global)

#### asset\_create\_min\_balance *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

The additional minimum balance required to create (and opt-in to) an asset.

#### asset\_opt\_in\_min\_balance *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

The additional minimum balance required to opt-in to an asset.

#### caller\_application\_address *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account)]*

Ellipsis

The application address of the application that called this application. ZeroAddress if this application is at the top-level. Application mode only.

#### caller\_application\_id *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

The application ID of the application that called this application. 0 if this application is at the top-level. Application mode only.

#### creator\_address *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account)]*

Ellipsis

Address of the creator of the current application. Application mode only.

#### current\_application\_address *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account)]*

Ellipsis

Address that the current application controls. Application mode only.

#### current\_application\_id *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Application](../../api-reference/api-algopy#algopy.Application)]*

Ellipsis

ID of current application executing. Application mode only.

#### genesis\_hash *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)]*

Ellipsis

The Genesis Hash for the network.

#### group\_id *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)]*

Ellipsis

ID of the transaction group. 32 zero bytes if the transaction is not part of a group.

#### group\_size *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

Number of transactions in this atomic transaction group. At least 1

#### latest\_timestamp *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

Last confirmed block UNIX timestamp. Fails if negative. Application mode only.

#### logic\_sig\_version *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

Maximum supported version

#### max\_txn\_life *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

rounds

#### min\_balance *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

microalgos

#### min\_txn\_fee *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

microalgos

#### *static* opcode\_budget() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

The remaining cost that can be spent by opcodes in this program.

Native TEAL opcode: [`global`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#global)

#### round *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

Current round number. Application mode only.

#### zero\_address *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account)]*

Ellipsis

32 byte address of all zero bytes

### *class* algopy.op.ITxn

Get values for the last inner transaction
Native TEAL ops: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn), [`itxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxnas)

#### *static* accounts(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

Accounts listed in the ApplicationCall transaction

Native TEAL opcode: [`itxna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxna), [`itxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxnas)

#### *static* amount() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

microalgos

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* application\_args(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Arguments passed to the application in the ApplicationCall transaction

Native TEAL opcode: [`itxna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxna), [`itxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxnas)

#### *static* application\_id() → [algopy.Application](../../api-reference/api-algopy#algopy.Application)

ApplicationID from ApplicationCall transaction

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* applications(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Application](../../api-reference/api-algopy#algopy.Application)

Foreign Apps listed in the ApplicationCall transaction

Native TEAL opcode: [`itxna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxna), [`itxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxnas)

#### *static* approval\_program() → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Approval program

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* approval\_program\_pages(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Approval Program as an array of pages

Native TEAL opcode: [`itxna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxna), [`itxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxnas)

#### *static* asset\_amount() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

value in Asset’s units

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* asset\_close\_to() → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte address

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* asset\_receiver() → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte address

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* asset\_sender() → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte address. Source of assets if Sender is the Asset’s Clawback address.

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* assets(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)

Foreign Assets listed in the ApplicationCall transaction

Native TEAL opcode: [`itxna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxna), [`itxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxnas)

#### *static* clear\_state\_program() → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Clear state program

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* clear\_state\_program\_pages(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

ClearState Program as an array of pages

Native TEAL opcode: [`itxna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxna), [`itxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxnas)

#### *static* close\_remainder\_to() → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte address

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* config\_asset() → [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)

Asset ID in asset config transaction

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* config\_asset\_clawback() → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte address

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* config\_asset\_decimals() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of digits to display after the decimal place when displaying the asset

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* config\_asset\_default\_frozen() → [bool](https://docs.python.org/3/library/functions.html#bool)

Whether the asset’s slots are frozen by default or not, 0 or 1

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* config\_asset\_freeze() → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte address

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* config\_asset\_manager() → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte address

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* config\_asset\_metadata\_hash() → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

32 byte commitment to unspecified asset metadata

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* config\_asset\_name() → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

The asset name

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* config\_asset\_reserve() → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte address

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* config\_asset\_total() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Total number of units of this asset created

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* config\_asset\_unit\_name() → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Unit name of the asset

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* config\_asset\_url() → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

URL

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* created\_application\_id() → [algopy.Application](../../api-reference/api-algopy#algopy.Application)

ApplicationID allocated by the creation of an application (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* created\_asset\_id() → [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)

Asset ID allocated by the creation of an ASA (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* extra\_program\_pages() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of additional pages for each of the application’s approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* fee() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

microalgos

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* first\_valid() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

round number

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* first\_valid\_time() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

UNIX timestamp of block before txn.FirstValid. Fails if negative

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* freeze\_asset() → [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)

Asset ID being frozen or un-frozen

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* freeze\_asset\_account() → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte address of the account whose asset slot is being frozen or un-frozen

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* freeze\_asset\_frozen() → [bool](https://docs.python.org/3/library/functions.html#bool)

The new frozen value, 0 or 1

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* global\_num\_byte\_slice() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of global state byteslices in ApplicationCall

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* global\_num\_uint() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of global state integers in ApplicationCall

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* group\_index() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Position of this transaction within an atomic transaction group. A stand-alone transaction is implicitly element 0 in a group of 1

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* last\_log() → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

The last message emitted. Empty bytes if none were emitted. Application mode only

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* last\_valid() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

round number

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* lease() → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

32 byte lease value

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* local\_num\_byte\_slice() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of local state byteslices in ApplicationCall

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* local\_num\_uint() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of local state integers in ApplicationCall

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* logs(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Log messages emitted by an application call (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`itxna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxna), [`itxnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxnas)

#### *static* nonparticipation() → [bool](https://docs.python.org/3/library/functions.html#bool)

Marks an account nonparticipating for rewards

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* note() → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Any data up to 1024 bytes

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* num\_accounts() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of Accounts

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* num\_app\_args() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of ApplicationArgs

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* num\_applications() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of Applications

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* num\_approval\_program\_pages() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of Approval Program pages

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* num\_assets() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of Assets

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* num\_clear\_state\_program\_pages() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of ClearState Program pages

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* num\_logs() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Number of Logs (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* on\_completion() → [algopy.OnCompleteAction](../../api-reference/api-algopy#algopy.OnCompleteAction)

ApplicationCall transaction on completion action

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* receiver() → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte address

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* rekey\_to() → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte Sender’s new AuthAddr

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* selection\_pk() → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

32 byte address

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* sender() → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

32 byte address

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* state\_proof\_pk() → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

64 byte state proof public key

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* tx\_id() → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

The computed ID for this transaction. 32 bytes.

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* type() → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Transaction type as bytes

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* type\_enum() → [algopy.TransactionType](../../api-reference/api-algopy#algopy.TransactionType)

Transaction type as integer

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* vote\_first() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

The first round that the participation key is valid.

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* vote\_key\_dilution() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Dilution for the 2-level participation key

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* vote\_last() → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

The last round that the participation key is valid.

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* vote\_pk() → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

32 byte address

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

#### *static* xfer\_asset() → [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)

Asset ID

Native TEAL opcode: [`itxn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn)

### *class* algopy.op.ITxnCreate

Create inner transactions
Native TEAL ops: [`itxn_begin`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_begin), [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field), [`itxn_next`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_next), [`itxn_submit`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_submit)

#### *static* begin() → [None](https://docs.python.org/3/library/constants.html#None)

begin preparation of a new inner transaction in a new transaction group
`itxn_begin` initializes Sender to the application address; Fee to the minimum allowable, taking into account MinTxnFee and credit from overpaying in earlier transactions; FirstValid/LastValid to the values in the invoking transaction, and all other fields to zero or empty values.

Native TEAL opcode: [`itxn_begin`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_begin)

#### *static* next() → [None](https://docs.python.org/3/library/constants.html#None)

begin preparation of a new inner transaction in the same transaction group
`itxn_next` initializes the transaction exactly as `itxn_begin` does

Native TEAL opcode: [`itxn_next`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_next)

#### *static* set\_accounts(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Account*](../../api-reference/api-algopy#algopy.Account)) – Accounts listed in the ApplicationCall transaction

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_amount(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – microalgos

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_application\_args(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Bytes*](../../api-reference/api-algopy#algopy.Bytes) *|* [*bytes*](https://docs.python.org/3/library/stdtypes.html#bytes)) – Arguments passed to the application in the ApplicationCall transaction

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_application\_id(a: [algopy.Application](../../api-reference/api-algopy#algopy.Application) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Application*](../../api-reference/api-algopy#algopy.Application) *|* [*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – ApplicationID from ApplicationCall transaction

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_applications(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – Foreign Apps listed in the ApplicationCall transaction

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_approval\_program(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Bytes*](../../api-reference/api-algopy#algopy.Bytes) *|* [*bytes*](https://docs.python.org/3/library/stdtypes.html#bytes)) – Approval program

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_approval\_program\_pages(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Bytes*](../../api-reference/api-algopy#algopy.Bytes) *|* [*bytes*](https://docs.python.org/3/library/stdtypes.html#bytes)) – Approval Program as an array of pages

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_asset\_amount(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – value in Asset’s units

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_asset\_close\_to(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Account*](../../api-reference/api-algopy#algopy.Account)) – 32 byte address

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_asset\_receiver(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Account*](../../api-reference/api-algopy#algopy.Account)) – 32 byte address

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_asset\_sender(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Account*](../../api-reference/api-algopy#algopy.Account)) – 32 byte address. Source of assets if Sender is the Asset’s Clawback address.

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_assets(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – Foreign Assets listed in the ApplicationCall transaction

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_clear\_state\_program(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Bytes*](../../api-reference/api-algopy#algopy.Bytes) *|* [*bytes*](https://docs.python.org/3/library/stdtypes.html#bytes)) – Clear state program

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_clear\_state\_program\_pages(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Bytes*](../../api-reference/api-algopy#algopy.Bytes) *|* [*bytes*](https://docs.python.org/3/library/stdtypes.html#bytes)) – ClearState Program as an array of pages

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_close\_remainder\_to(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Account*](../../api-reference/api-algopy#algopy.Account)) – 32 byte address

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_config\_asset(a: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Asset*](../../api-reference/api-algopy#algopy.Asset) *|* [*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – Asset ID in asset config transaction

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_config\_asset\_clawback(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Account*](../../api-reference/api-algopy#algopy.Account)) – 32 byte address

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_config\_asset\_decimals(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – Number of digits to display after the decimal place when displaying the asset

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_config\_asset\_default\_frozen(a: [bool](https://docs.python.org/3/library/functions.html#bool) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *|* [*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – Whether the asset’s slots are frozen by default or not, 0 or 1

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_config\_asset\_freeze(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Account*](../../api-reference/api-algopy#algopy.Account)) – 32 byte address

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_config\_asset\_manager(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Account*](../../api-reference/api-algopy#algopy.Account)) – 32 byte address

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_config\_asset\_metadata\_hash(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Bytes*](../../api-reference/api-algopy#algopy.Bytes) *|* [*bytes*](https://docs.python.org/3/library/stdtypes.html#bytes)) – 32 byte commitment to unspecified asset metadata

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_config\_asset\_name(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Bytes*](../../api-reference/api-algopy#algopy.Bytes) *|* [*bytes*](https://docs.python.org/3/library/stdtypes.html#bytes)) – The asset name

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_config\_asset\_reserve(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Account*](../../api-reference/api-algopy#algopy.Account)) – 32 byte address

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_config\_asset\_total(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – Total number of units of this asset created

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_config\_asset\_unit\_name(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Bytes*](../../api-reference/api-algopy#algopy.Bytes) *|* [*bytes*](https://docs.python.org/3/library/stdtypes.html#bytes)) – Unit name of the asset

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_config\_asset\_url(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Bytes*](../../api-reference/api-algopy#algopy.Bytes) *|* [*bytes*](https://docs.python.org/3/library/stdtypes.html#bytes)) – URL

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_extra\_program\_pages(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – Number of additional pages for each of the application’s approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_fee(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – microalgos

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_freeze\_asset(a: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Asset*](../../api-reference/api-algopy#algopy.Asset) *|* [*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – Asset ID being frozen or un-frozen

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_freeze\_asset\_account(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Account*](../../api-reference/api-algopy#algopy.Account)) – 32 byte address of the account whose asset slot is being frozen or un-frozen

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_freeze\_asset\_frozen(a: [bool](https://docs.python.org/3/library/functions.html#bool) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *|* [*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – The new frozen value, 0 or 1

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_global\_num\_byte\_slice(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – Number of global state byteslices in ApplicationCall

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_global\_num\_uint(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – Number of global state integers in ApplicationCall

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_local\_num\_byte\_slice(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – Number of local state byteslices in ApplicationCall

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_local\_num\_uint(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – Number of local state integers in ApplicationCall

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_nonparticipation(a: [bool](https://docs.python.org/3/library/functions.html#bool) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*bool*](https://docs.python.org/3/library/functions.html#bool) *|* [*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – Marks an account nonparticipating for rewards

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_note(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Bytes*](../../api-reference/api-algopy#algopy.Bytes) *|* [*bytes*](https://docs.python.org/3/library/stdtypes.html#bytes)) – Any data up to 1024 bytes

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_on\_completion(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – ApplicationCall transaction on completion action

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_receiver(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Account*](../../api-reference/api-algopy#algopy.Account)) – 32 byte address

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_rekey\_to(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Account*](../../api-reference/api-algopy#algopy.Account)) – 32 byte Sender’s new AuthAddr

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_selection\_pk(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Bytes*](../../api-reference/api-algopy#algopy.Bytes) *|* [*bytes*](https://docs.python.org/3/library/stdtypes.html#bytes)) – 32 byte address

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_sender(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Account*](../../api-reference/api-algopy#algopy.Account)) – 32 byte address

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_state\_proof\_pk(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Bytes*](../../api-reference/api-algopy#algopy.Bytes) *|* [*bytes*](https://docs.python.org/3/library/stdtypes.html#bytes)) – 64 byte state proof public key

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_type(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Bytes*](../../api-reference/api-algopy#algopy.Bytes) *|* [*bytes*](https://docs.python.org/3/library/stdtypes.html#bytes)) – Transaction type as bytes

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_type\_enum(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – Transaction type as integer

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_vote\_first(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – The first round that the participation key is valid.

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_vote\_key\_dilution(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – Dilution for the 2-level participation key

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_vote\_last(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – The last round that the participation key is valid.

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_vote\_pk(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Bytes*](../../api-reference/api-algopy#algopy.Bytes) *|* [*bytes*](https://docs.python.org/3/library/stdtypes.html#bytes)) – 32 byte address

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* set\_xfer\_asset(a: [algopy.Asset](../../api-reference/api-algopy#algopy.Asset) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

* **Parameters:**
  **a** ([*Asset*](../../api-reference/api-algopy#algopy.Asset) *|* [*UInt64*](../../api-reference/api-algopy#algopy.UInt64) *|* [*int*](https://docs.python.org/3/library/functions.html#int)) – Asset ID

Native TEAL opcode: [`itxn_field`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_field)

#### *static* submit() → [None](https://docs.python.org/3/library/constants.html#None)

execute the current inner transaction group. Fail if executing this group would exceed the inner transaction limit, or if any transaction in the group fails.
`itxn_submit` resets the current transaction so that it can not be resubmitted. A new `itxn_begin` is required to prepare another inner transaction.

Native TEAL opcode: [`itxn_submit`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itxn_submit)

### *class* algopy.op.JsonRef

key B’s value, of type R, from a [valid]() utf-8 encoded json object A *Warning*: Usage should be restricted to very rare use cases, as JSON decoding is expensive and quite limited. In addition, JSON objects are large and not optimized for size.  Almost all smart contracts should use simpler and smaller methods (such as the [ABI](https://arc.algorand.foundation/ARCs/arc-0004). This opcode should only be used in cases where JSON is only available option, e.g. when a third-party only signs JSON.
Native TEAL op: [`json_ref`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#json_ref)

#### *static* json\_object(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Native TEAL opcode: [`json_ref`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#json_ref)

#### *static* json\_string(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Native TEAL opcode: [`json_ref`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#json_ref)

#### *static* json\_uint64(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Native TEAL opcode: [`json_ref`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#json_ref)

### *class* algopy.op.Scratch

Load or store scratch values
Native TEAL ops: [`loads`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#loads), [`stores`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#stores)

#### *static* load\_bytes(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Ath scratch space value.  All scratch spaces are 0 at program start.

Native TEAL opcode: [`loads`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#loads)

#### *static* load\_uint64(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Ath scratch space value.  All scratch spaces are 0 at program start.

Native TEAL opcode: [`loads`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#loads)

#### *static* store(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [int](https://docs.python.org/3/library/functions.html#int), /) → [None](https://docs.python.org/3/library/constants.html#None)

store B to the Ath scratch space

Native TEAL opcode: [`stores`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#stores)

### *class* algopy.op.Txn

Get values for the current executing transaction
Native TEAL ops: [`txn`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#txn), [`txnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#txnas)

#### *static* accounts(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Account](../../api-reference/api-algopy#algopy.Account)

Accounts listed in the ApplicationCall transaction

Native TEAL opcode: [`txna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#txna), [`txnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#txnas)

#### amount *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

microalgos

#### *static* application\_args(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Arguments passed to the application in the ApplicationCall transaction

Native TEAL opcode: [`txna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#txna), [`txnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#txnas)

#### application\_id *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Application](../../api-reference/api-algopy#algopy.Application)]*

Ellipsis

ApplicationID from ApplicationCall transaction

#### *static* applications(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Application](../../api-reference/api-algopy#algopy.Application)

Foreign Apps listed in the ApplicationCall transaction

Native TEAL opcode: [`txna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#txna), [`txnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#txnas)

#### approval\_program *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)]*

Ellipsis

Approval program

#### *static* approval\_program\_pages(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Approval Program as an array of pages

Native TEAL opcode: [`txna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#txna), [`txnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#txnas)

#### asset\_amount *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

value in Asset’s units

#### asset\_close\_to *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account)]*

Ellipsis

32 byte address

#### asset\_receiver *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account)]*

Ellipsis

32 byte address

#### asset\_sender *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account)]*

Ellipsis

32 byte address. Source of assets if Sender is the Asset’s Clawback address.

#### *static* assets(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Asset](../../api-reference/api-algopy#algopy.Asset)

Foreign Assets listed in the ApplicationCall transaction

Native TEAL opcode: [`txna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#txna), [`txnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#txnas)

#### clear\_state\_program *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)]*

Ellipsis

Clear state program

#### *static* clear\_state\_program\_pages(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

ClearState Program as an array of pages

Native TEAL opcode: [`txna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#txna), [`txnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#txnas)

#### close\_remainder\_to *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account)]*

Ellipsis

32 byte address

#### config\_asset *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Asset](../../api-reference/api-algopy#algopy.Asset)]*

Ellipsis

Asset ID in asset config transaction

#### config\_asset\_clawback *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account)]*

Ellipsis

32 byte address

#### config\_asset\_decimals *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

Number of digits to display after the decimal place when displaying the asset

#### config\_asset\_default\_frozen *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[bool](https://docs.python.org/3/library/functions.html#bool)]*

Ellipsis

Whether the asset’s slots are frozen by default or not, 0 or 1

#### config\_asset\_freeze *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account)]*

Ellipsis

32 byte address

#### config\_asset\_manager *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account)]*

Ellipsis

32 byte address

#### config\_asset\_metadata\_hash *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)]*

Ellipsis

32 byte commitment to unspecified asset metadata

#### config\_asset\_name *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)]*

Ellipsis

The asset name

#### config\_asset\_reserve *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account)]*

Ellipsis

32 byte address

#### config\_asset\_total *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

Total number of units of this asset created

#### config\_asset\_unit\_name *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)]*

Ellipsis

Unit name of the asset

#### config\_asset\_url *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)]*

Ellipsis

URL

#### created\_application\_id *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Application](../../api-reference/api-algopy#algopy.Application)]*

Ellipsis

ApplicationID allocated by the creation of an application (only with `itxn` in v5). Application mode only

#### created\_asset\_id *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Asset](../../api-reference/api-algopy#algopy.Asset)]*

Ellipsis

Asset ID allocated by the creation of an ASA (only with `itxn` in v5). Application mode only

#### extra\_program\_pages *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

Number of additional pages for each of the application’s approval and clear state programs. An ExtraProgramPages of 1 means 2048 more total bytes, or 1024 for each program.

#### fee *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

microalgos

#### first\_valid *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

round number

#### first\_valid\_time *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

UNIX timestamp of block before txn.FirstValid. Fails if negative

#### freeze\_asset *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Asset](../../api-reference/api-algopy#algopy.Asset)]*

Ellipsis

Asset ID being frozen or un-frozen

#### freeze\_asset\_account *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account)]*

Ellipsis

32 byte address of the account whose asset slot is being frozen or un-frozen

#### freeze\_asset\_frozen *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[bool](https://docs.python.org/3/library/functions.html#bool)]*

Ellipsis

The new frozen value, 0 or 1

#### global\_num\_byte\_slice *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

Number of global state byteslices in ApplicationCall

#### global\_num\_uint *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

Number of global state integers in ApplicationCall

#### group\_index *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

Position of this transaction within an atomic transaction group. A stand-alone transaction is implicitly element 0 in a group of 1

#### last\_log *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)]*

Ellipsis

The last message emitted. Empty bytes if none were emitted. Application mode only

#### last\_valid *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

round number

#### lease *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)]*

Ellipsis

32 byte lease value

#### local\_num\_byte\_slice *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

Number of local state byteslices in ApplicationCall

#### local\_num\_uint *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

Number of local state integers in ApplicationCall

#### *static* logs(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Log messages emitted by an application call (only with `itxn` in v5). Application mode only

Native TEAL opcode: [`txna`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#txna), [`txnas`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#txnas)

#### nonparticipation *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[bool](https://docs.python.org/3/library/functions.html#bool)]*

Ellipsis

Marks an account nonparticipating for rewards

#### note *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)]*

Ellipsis

Any data up to 1024 bytes

#### num\_accounts *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

Number of Accounts

#### num\_app\_args *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

Number of ApplicationArgs

#### num\_applications *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

Number of Applications

#### num\_approval\_program\_pages *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

Number of Approval Program pages

#### num\_assets *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

Number of Assets

#### num\_clear\_state\_program\_pages *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

Number of ClearState Program pages

#### num\_logs *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

Number of Logs (only with `itxn` in v5). Application mode only

#### on\_completion *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.OnCompleteAction](../../api-reference/api-algopy#algopy.OnCompleteAction)]*

Ellipsis

ApplicationCall transaction on completion action

#### receiver *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account)]*

Ellipsis

32 byte address

#### rekey\_to *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account)]*

Ellipsis

32 byte Sender’s new AuthAddr

#### selection\_pk *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)]*

Ellipsis

32 byte address

#### sender *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Account](../../api-reference/api-algopy#algopy.Account)]*

Ellipsis

32 byte address

#### state\_proof\_pk *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)]*

Ellipsis

64 byte state proof public key

#### tx\_id *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)]*

Ellipsis

The computed ID for this transaction. 32 bytes.

#### type *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)]*

Ellipsis

Transaction type as bytes

#### type\_enum *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.TransactionType](../../api-reference/api-algopy#algopy.TransactionType)]*

Ellipsis

Transaction type as integer

#### vote\_first *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

The first round that the participation key is valid.

#### vote\_key\_dilution *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

Dilution for the 2-level participation key

#### vote\_last *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]*

Ellipsis

The last round that the participation key is valid.

#### vote\_pk *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)]*

Ellipsis

32 byte address

#### xfer\_asset *: [Final](https://docs.python.org/3/library/typing.html#typing.Final)\[[algopy.Asset](../../api-reference/api-algopy#algopy.Asset)]*

Ellipsis

Asset ID

### *class* algopy.op.VrfVerify

Available values for the `vrf_verify` enum

### Initialization

Initialize self.  See help(type(self)) for accurate signature.

#### \_\_add\_\_()

Return self+value.

#### \_\_contains\_\_()

Return bool(key in self).

#### \_\_delattr\_\_()

Implement delattr(self, name).

#### \_\_dir\_\_()

Default dir() implementation.

#### \_\_eq\_\_()

Return self==value.

#### \_\_format\_\_()

Return a formatted version of the string as described by format\_spec.

#### \_\_ge\_\_()

Return self>=value.

#### \_\_getattribute\_\_()

Return getattr(self, name).

#### \_\_getitem\_\_()

Return self\[key].

#### \_\_getstate\_\_()

Helper for pickle.

#### \_\_gt\_\_()

Return self>value.

#### \_\_hash\_\_()

Return hash(self).

#### \_\_iter\_\_()

Implement iter(self).

#### \_\_le\_\_()

Return self<=value.

#### \_\_len\_\_()

Return len(self).

#### \_\_lt\_\_()

Return self\<value.

#### \_\_mod\_\_()

Return self%value.

#### \_\_mul\_\_()

Return self\*value.

#### \_\_ne\_\_()

Return self!=value.

#### \_\_new\_\_()

Create and return a new object.  See help(type) for accurate signature.

#### \_\_reduce\_\_()

Helper for pickle.

#### \_\_reduce\_ex\_\_()

Helper for pickle.

#### \_\_repr\_\_()

Return repr(self).

#### \_\_rmod\_\_()

Return value%self.

#### \_\_rmul\_\_()

Return value\*self.

#### \_\_setattr\_\_()

Implement setattr(self, name, value).

#### \_\_sizeof\_\_()

Return the size of the string in memory, in bytes.

#### \_\_str\_\_()

Return str(self).

#### capitalize()

Return a capitalized version of the string.

More specifically, make the first character have upper case and the rest lower
case.

#### casefold()

Return a version of the string suitable for caseless comparisons.

#### center()

Return a centered string of length width.

Padding is done using the specified fill character (default is a space).

#### count()

S.count(sub\[, start\[, end]]) -> int

Return the number of non-overlapping occurrences of substring sub in
string S\[start:end].  Optional arguments start and end are
interpreted as in slice notation.

#### encode()

Encode the string using the codec registered for encoding.

encoding
The encoding in which to encode the string.
errors
The error handling scheme to use for encoding errors.
The default is ‘strict’ meaning that encoding errors raise a
UnicodeEncodeError.  Other possible values are ‘ignore’, ‘replace’ and
‘xmlcharrefreplace’ as well as any other name registered with
codecs.register\_error that can handle UnicodeEncodeErrors.

#### endswith()

S.endswith(suffix\[, start\[, end]]) -> bool

Return True if S ends with the specified suffix, False otherwise.
With optional start, test S beginning at that position.
With optional end, stop comparing S at that position.
suffix can also be a tuple of strings to try.

#### expandtabs()

Return a copy where all tab characters are expanded using spaces.

If tabsize is not given, a tab size of 8 characters is assumed.

#### find()

S.find(sub\[, start\[, end]]) -> int

Return the lowest index in S where substring sub is found,
such that sub is contained within S\[start:end].  Optional
arguments start and end are interpreted as in slice notation.

Return -1 on failure.

#### format()

S.format(\*args, \*\*kwargs) -> str

Return a formatted version of S, using substitutions from args and kwargs.
The substitutions are identified by braces (‘{’ and ‘}’).

#### format\_map()

S.format\_map(mapping) -> str

Return a formatted version of S, using substitutions from mapping.
The substitutions are identified by braces (‘{’ and ‘}’).

#### index()

S.index(sub\[, start\[, end]]) -> int

Return the lowest index in S where substring sub is found,
such that sub is contained within S\[start:end].  Optional
arguments start and end are interpreted as in slice notation.

Raises ValueError when the substring is not found.

#### isalnum()

Return True if the string is an alpha-numeric string, False otherwise.

A string is alpha-numeric if all characters in the string are alpha-numeric and
there is at least one character in the string.

#### isalpha()

Return True if the string is an alphabetic string, False otherwise.

A string is alphabetic if all characters in the string are alphabetic and there
is at least one character in the string.

#### isascii()

Return True if all characters in the string are ASCII, False otherwise.

ASCII characters have code points in the range U+0000-U+007F.
Empty string is ASCII too.

#### isdecimal()

Return True if the string is a decimal string, False otherwise.

A string is a decimal string if all characters in the string are decimal and
there is at least one character in the string.

#### isdigit()

Return True if the string is a digit string, False otherwise.

A string is a digit string if all characters in the string are digits and there
is at least one character in the string.

#### isidentifier()

Return True if the string is a valid Python identifier, False otherwise.

Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
such as “def” or “class”.

#### islower()

Return True if the string is a lowercase string, False otherwise.

A string is lowercase if all cased characters in the string are lowercase and
there is at least one cased character in the string.

#### isnumeric()

Return True if the string is a numeric string, False otherwise.

A string is numeric if all characters in the string are numeric and there is at
least one character in the string.

#### isprintable()

Return True if the string is printable, False otherwise.

A string is printable if all of its characters are considered printable in
repr() or if it is empty.

#### isspace()

Return True if the string is a whitespace string, False otherwise.

A string is whitespace if all characters in the string are whitespace and there
is at least one character in the string.

#### istitle()

Return True if the string is a title-cased string, False otherwise.

In a title-cased string, upper- and title-case characters may only
follow uncased characters and lowercase characters only cased ones.

#### isupper()

Return True if the string is an uppercase string, False otherwise.

A string is uppercase if all cased characters in the string are uppercase and
there is at least one cased character in the string.

#### join()

Concatenate any number of strings.

The string whose method is called is inserted in between each given string.
The result is returned as a new string.

Example: ‘.’.join(\[‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’

#### ljust()

Return a left-justified string of length width.

Padding is done using the specified fill character (default is a space).

#### lower()

Return a copy of the string converted to lowercase.

#### lstrip()

Return a copy of the string with leading whitespace removed.

If chars is given and not None, remove characters in chars instead.

#### partition()

Partition the string into three parts using the given separator.

This will search for the separator in the string.  If the separator is found,
returns a 3-tuple containing the part before the separator, the separator
itself, and the part after it.

If the separator is not found, returns a 3-tuple containing the original string
and two empty strings.

#### removeprefix()

Return a str with the given prefix string removed if present.

If the string starts with the prefix string, return string\[len(prefix):].
Otherwise, return a copy of the original string.

#### removesuffix()

Return a str with the given suffix string removed if present.

If the string ends with the suffix string and that suffix is not empty,
return string\[:-len(suffix)]. Otherwise, return a copy of the original
string.

#### replace()

Return a copy with all occurrences of substring old replaced by new.

count
Maximum number of occurrences to replace.
-1 (the default value) means replace all occurrences.

If the optional argument count is given, only the first count occurrences are
replaced.

#### rfind()

S.rfind(sub\[, start\[, end]]) -> int

Return the highest index in S where substring sub is found,
such that sub is contained within S\[start:end].  Optional
arguments start and end are interpreted as in slice notation.

Return -1 on failure.

#### rindex()

S.rindex(sub\[, start\[, end]]) -> int

Return the highest index in S where substring sub is found,
such that sub is contained within S\[start:end].  Optional
arguments start and end are interpreted as in slice notation.

Raises ValueError when the substring is not found.

#### rjust()

Return a right-justified string of length width.

Padding is done using the specified fill character (default is a space).

#### rpartition()

Partition the string into three parts using the given separator.

This will search for the separator in the string, starting at the end. If
the separator is found, returns a 3-tuple containing the part before the
separator, the separator itself, and the part after it.

If the separator is not found, returns a 3-tuple containing two empty strings
and the original string.

#### rsplit()

Return a list of the substrings in the string, using sep as the separator string.

sep
The separator used to split the string.

```none
When set to None (the default value), will split on any whitespace
character (including \n \r \t \f and spaces) and will discard
empty strings from the result.
```

maxsplit
Maximum number of splits.
-1 (the default value) means no limit.

Splitting starts at the end of the string and works to the front.

#### rstrip()

Return a copy of the string with trailing whitespace removed.

If chars is given and not None, remove characters in chars instead.

#### split()

Return a list of the substrings in the string, using sep as the separator string.

sep
The separator used to split the string.

```none
When set to None (the default value), will split on any whitespace
character (including \n \r \t \f and spaces) and will discard
empty strings from the result.
```

maxsplit
Maximum number of splits.
-1 (the default value) means no limit.

Splitting starts at the front of the string and works to the end.

Note, str.split() is mainly useful for data that has been intentionally
delimited.  With natural text that includes punctuation, consider using
the regular expression module.

#### splitlines()

Return a list of the lines in the string, breaking at line boundaries.

Line breaks are not included in the resulting list unless keepends is given and
true.

#### startswith()

S.startswith(prefix\[, start\[, end]]) -> bool

Return True if S starts with the specified prefix, False otherwise.
With optional start, test S beginning at that position.
With optional end, stop comparing S at that position.
prefix can also be a tuple of strings to try.

#### strip()

Return a copy of the string with leading and trailing whitespace removed.

If chars is given and not None, remove characters in chars instead.

#### swapcase()

Convert uppercase characters to lowercase and lowercase characters to uppercase.

#### title()

Return a version of the string where each word is titlecased.

More specifically, words start with uppercased characters and all remaining
cased characters have lower case.

#### translate()

Replace each character in the string using the given translation table.

table
Translation table, which must be a mapping of Unicode ordinals to
Unicode ordinals, strings, or None.

The table must implement lookup/indexing via **getitem**, for instance a
dictionary or list.  If this operation raises LookupError, the character is
left untouched.  Characters mapped to None are deleted.

#### upper()

Return a copy of the string converted to uppercase.

#### zfill()

Pad a numeric string with zeros on the left, to fill a field of the given width.

The string is never truncated.

### algopy.op.addw(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]

A plus B as a 128-bit result. X is the carry-bit, Y is the low-order 64 bits.

Native TEAL opcode: [`addw`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#addw)

### algopy.op.app\_opted\_in(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.Application](../../api-reference/api-algopy#algopy.Application) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [bool](https://docs.python.org/3/library/functions.html#bool)

1 if account A is opted in to application B, else 0
params: Txn.Accounts offset (or, since v4, an *available* account address), *available* application id (or, since v4, a Txn.ForeignApps offset). Return: 1 if opted in and 0 otherwise.

Native TEAL opcode: [`app_opted_in`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#app_opted_in)

### algopy.op.arg(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Ath LogicSig argument

Native TEAL opcode: [`arg`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#arg), [`args`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#args)

### algopy.op.balance(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

balance for account A, in microalgos. The balance is observed after the effects of previous transactions in the group, and after the fee for the current transaction is deducted. Changes caused by inner transactions are observable immediately following `itxn_submit`
params: Txn.Accounts offset (or, since v4, an *available* account address), *available* application id (or, since v4, a Txn.ForeignApps offset). Return: value.

Native TEAL opcode: [`balance`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#balance)

### algopy.op.base64\_decode(e: [algopy.op.Base64](#algopy.op.Base64), a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

decode A which was base64-encoded using *encoding* E. Fail if A is not base64 encoded with encoding E
*Warning*: Usage should be restricted to very rare use cases. In almost all cases, smart contracts should directly handle non-encoded byte-strings. This opcode should only be used in cases where base64 is the only available option, e.g. interoperability with a third-party that only signs base64 strings.

Decodes A using the base64 encoding E. Specify the encoding with an immediate arg either as URL and Filename Safe (`URLEncoding`) or Standard (`StdEncoding`). See [RFC 4648 sections 4 and 5](https://rfc-editor.org/rfc/rfc4648.html#section-4). It is assumed that the encoding ends with the exact number of `=` padding characters as required by the RFC. When padding occurs, any unused pad bits in the encoding must be set to zero or the decoding will fail. The special cases of `\n` and `\r` are allowed but completely ignored. An error will result when attempting to decode a string with a character that is not in the encoding alphabet or not one of `=`, `\r`, or `\n`.

* **Parameters:**
  **e** ([*Base64*](#algopy.op.Base64)) – encoding index

Native TEAL opcode: [`base64_decode`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#base64_decode)

### algopy.op.bitlen(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

The highest set bit in A. If A is a byte-array, it is interpreted as a big-endian unsigned integer. bitlen of 0 is 0, bitlen of 8 is 4
bitlen interprets arrays as big-endian integers, unlike setbit/getbit

Native TEAL opcode: [`bitlen`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#bitlen)

### algopy.op.bsqrt(a: [algopy.BigUInt](../../api-reference/api-algopy#algopy.BigUInt) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.BigUInt](../../api-reference/api-algopy#algopy.BigUInt)

The largest integer I such that I^2 <= A. A and I are interpreted as big-endian unsigned integers

Native TEAL opcode: [`bsqrt`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#bsqrt)

### algopy.op.btoi(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

converts big-endian byte array A to uint64. Fails if len(A) > 8. Padded by leading 0s if len(A) < 8.
`btoi` fails if the input is longer than 8 bytes.

Native TEAL opcode: [`btoi`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#btoi)

### algopy.op.bzero(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

zero filled byte-array of length A

Native TEAL opcode: [`bzero`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#bzero)

### algopy.op.concat(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

join A and B
`concat` fails if the result would be greater than 4096 bytes.

Native TEAL opcode: [`concat`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#concat)

### algopy.op.divmodw(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), d: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]

W,X = (A,B / C,D); Y,Z = (A,B modulo C,D)
The notation J,K indicates that two uint64 values J and K are interpreted as a uint128 value, with J as the high uint64 and K the low.

Native TEAL opcode: [`divmodw`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#divmodw)

### algopy.op.divw(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

A,B / C. Fail if C == 0 or if result overflows.
The notation A,B indicates that A and B are interpreted as a uint128 value, with A as the high uint64 and B the low.

Native TEAL opcode: [`divw`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#divw)

### algopy.op.ecdsa\_pk\_decompress(v: [algopy.op.ECDSA](#algopy.op.ECDSA), a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes), [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)]

decompress pubkey A into components X, Y
The 33 byte public key in a compressed form to be decompressed into X and Y (top) components. All values are big-endian encoded.

* **Parameters:**
  **v** ([*ECDSA*](#algopy.op.ECDSA)) – curve index

Native TEAL opcode: [`ecdsa_pk_decompress`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ecdsa_pk_decompress)

### algopy.op.ecdsa\_pk\_recover(v: [algopy.op.ECDSA](#algopy.op.ECDSA), a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), d: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes), [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)]

for (data A, recovery id B, signature C, D) recover a public key
S (top) and R elements of a signature, recovery id and data (bottom) are expected on the stack and used to deriver a public key. All values are big-endian encoded. The signed data must be 32 bytes long.

* **Parameters:**
  **v** ([*ECDSA*](#algopy.op.ECDSA)) – curve index

Native TEAL opcode: [`ecdsa_pk_recover`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ecdsa_pk_recover)

### algopy.op.ecdsa\_verify(v: [algopy.op.ECDSA](#algopy.op.ECDSA), a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), c: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), d: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), e: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [bool](https://docs.python.org/3/library/functions.html#bool)

for (data A, signature B, C and pubkey D, E) verify the signature of the data against the pubkey => {0 or 1}
The 32 byte Y-component of a public key is the last element on the stack, preceded by X-component of a pubkey, preceded by S and R components of a signature, preceded by the data that is fifth element on the stack. All values are big-endian encoded. The signed data must be 32 bytes long, and signatures in lower-S form are only accepted.

* **Parameters:**
  **v** ([*ECDSA*](#algopy.op.ECDSA)) – curve index

Native TEAL opcode: [`ecdsa_verify`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ecdsa_verify)

### algopy.op.ed25519verify(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), c: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [bool](https://docs.python.org/3/library/functions.html#bool)

for (data A, signature B, pubkey C) verify the signature of (“ProgData” || program\_hash || data) against the pubkey => {0 or 1}
The 32 byte public key is the last element on the stack, preceded by the 64 byte signature at the second-to-last element on the stack, preceded by the data which was signed at the third-to-last element on the stack.

Native TEAL opcode: [`ed25519verify`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ed25519verify)

### algopy.op.ed25519verify\_bare(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), c: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [bool](https://docs.python.org/3/library/functions.html#bool)

for (data A, signature B, pubkey C) verify the signature of the data against the pubkey => {0 or 1}

Native TEAL opcode: [`ed25519verify_bare`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#ed25519verify_bare)

### algopy.op.err() → [Never](https://docs.python.org/3/library/typing.html#typing.Never)

Fail immediately.

* **Returns typing.Never:**
  Halts program

Native TEAL opcode: [`err`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#err)

### algopy.op.exit(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [Never](https://docs.python.org/3/library/typing.html#typing.Never)

use A as success value; end

* **Returns typing.Never:**
  Halts program

Native TEAL opcode: [`return`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#return)

### algopy.op.exp(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

A raised to the Bth power. Fail if A == B == 0 and on overflow

Native TEAL opcode: [`exp`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#exp)

### algopy.op.expw(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]

A raised to the Bth power as a 128-bit result in two uint64s. X is the high 64 bits, Y is the low. Fail if A == B == 0 or if the results exceeds 2^128-1

Native TEAL opcode: [`expw`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#expw)

### algopy.op.extract(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

A range of bytes from A starting at B up to but not including B+C. If B+C is larger than the array length, the program fails
`extract3` can be called using `extract` with no immediates.

Native TEAL opcode: [`extract`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#extract), [`extract3`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#extract3)

### algopy.op.extract\_uint16(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

A uint16 formed from a range of big-endian bytes from A starting at B up to but not including B+2. If B+2 is larger than the array length, the program fails

Native TEAL opcode: [`extract_uint16`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#extract_uint16)

### algopy.op.extract\_uint32(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

A uint32 formed from a range of big-endian bytes from A starting at B up to but not including B+4. If B+4 is larger than the array length, the program fails

Native TEAL opcode: [`extract_uint32`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#extract_uint32)

### algopy.op.extract\_uint64(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

A uint64 formed from a range of big-endian bytes from A starting at B up to but not including B+8. If B+8 is larger than the array length, the program fails

Native TEAL opcode: [`extract_uint64`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#extract_uint64)

### algopy.op.gaid(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

ID of the asset or application created in the Ath transaction of the current group
`gaids` fails unless the requested transaction created an asset or application and A < GroupIndex.

Native TEAL opcode: [`gaid`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gaid), [`gaids`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gaids)

### algopy.op.getbit(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Bth bit of (byte-array or integer) A. If B is greater than or equal to the bit length of the value (8\*byte length), the program fails
see explanation of bit ordering in setbit

Native TEAL opcode: [`getbit`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#getbit)

### algopy.op.getbyte(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Bth byte of A, as an integer. If B is greater than or equal to the array length, the program fails

Native TEAL opcode: [`getbyte`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#getbyte)

### algopy.op.gload\_bytes(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Bth scratch space value of the Ath transaction in the current group

Native TEAL opcode: [`gload`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gload), [`gloads`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gloads), [`gloadss`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gloadss)

### algopy.op.gload\_uint64(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Bth scratch space value of the Ath transaction in the current group

Native TEAL opcode: [`gload`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gload), [`gloads`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gloads), [`gloadss`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#gloadss)

### algopy.op.itob(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

converts uint64 A to big-endian byte array, always of length 8

Native TEAL opcode: [`itob`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#itob)

### algopy.op.keccak256(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Keccak256 hash of value A, yields \[32]byte

Native TEAL opcode: [`keccak256`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#keccak256)

### algopy.op.min\_balance(a: [algopy.Account](../../api-reference/api-algopy#algopy.Account) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

minimum required balance for account A, in microalgos. Required balance is affected by ASA, App, and Box usage. When creating or opting into an app, the minimum balance grows before the app code runs, therefore the increase is visible there. When deleting or closing out, the minimum balance decreases after the app executes. Changes caused by inner transactions or box usage are observable immediately following the opcode effecting the change.
params: Txn.Accounts offset (or, since v4, an *available* account address), *available* application id (or, since v4, a Txn.ForeignApps offset). Return: value.

Native TEAL opcode: [`min_balance`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#min_balance)

### algopy.op.mulw(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64), [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)]

A times B as a 128-bit result in two uint64s. X is the high 64 bits, Y is the low

Native TEAL opcode: [`mulw`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#mulw)

### algopy.op.replace(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Copy of A with the bytes starting at B replaced by the bytes of C. Fails if B+len(C) exceeds len(A)
`replace3` can be called using `replace` with no immediates.

Native TEAL opcode: [`replace2`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#replace2), [`replace3`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#replace3)

### algopy.op.select\_bytes(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), c: [bool](https://docs.python.org/3/library/functions.html#bool) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

selects one of two values based on top-of-stack: B if C != 0, else A

Native TEAL opcode: [`select`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#select)

### algopy.op.select\_uint64(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [bool](https://docs.python.org/3/library/functions.html#bool) | [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

selects one of two values based on top-of-stack: B if C != 0, else A

Native TEAL opcode: [`select`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#select)

### algopy.op.setbit\_bytes(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Copy of (byte-array or integer) A, with the Bth bit set to (0 or 1) C. If B is greater than or equal to the bit length of the value (8\*byte length), the program fails
When A is a uint64, index 0 is the least significant bit. Setting bit 3 to 1 on the integer 0 yields 8, or 2^3. When A is a byte array, index 0 is the leftmost bit of the leftmost byte. Setting bits 0 through 11 to 1 in a 4-byte-array of 0s yields the byte array 0xfff00000. Setting bit 3 to 1 on the 1-byte-array 0x00 yields the byte array 0x10.

Native TEAL opcode: [`setbit`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#setbit)

### algopy.op.setbit\_uint64(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

Copy of (byte-array or integer) A, with the Bth bit set to (0 or 1) C. If B is greater than or equal to the bit length of the value (8\*byte length), the program fails
When A is a uint64, index 0 is the least significant bit. Setting bit 3 to 1 on the integer 0 yields 8, or 2^3. When A is a byte array, index 0 is the leftmost bit of the leftmost byte. Setting bits 0 through 11 to 1 in a 4-byte-array of 0s yields the byte array 0xfff00000. Setting bit 3 to 1 on the 1-byte-array 0x00 yields the byte array 0x10.

Native TEAL opcode: [`setbit`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#setbit)

### algopy.op.setbyte(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

Copy of A with the Bth byte set to small integer (between 0..255) C. If B is greater than or equal to the array length, the program fails

Native TEAL opcode: [`setbyte`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#setbyte)

### algopy.op.sha256(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

SHA256 hash of value A, yields \[32]byte

Native TEAL opcode: [`sha256`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#sha256)

### algopy.op.sha3\_256(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

SHA3\_256 hash of value A, yields \[32]byte

Native TEAL opcode: [`sha3_256`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#sha3_256)

### algopy.op.sha512\_256(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

SHA512\_256 hash of value A, yields \[32]byte

Native TEAL opcode: [`sha512_256`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#sha512_256)

### algopy.op.shl(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

A times 2^B, modulo 2^64

Native TEAL opcode: [`shl`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#shl)

### algopy.op.shr(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

A divided by 2^B

Native TEAL opcode: [`shr`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#shr)

### algopy.op.sqrt(a: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64)

The largest integer I such that I^2 <= A

Native TEAL opcode: [`sqrt`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#sqrt)

### algopy.op.substring(a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), c: [algopy.UInt64](../../api-reference/api-algopy#algopy.UInt64) | [int](https://docs.python.org/3/library/functions.html#int), /) → [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes)

A range of bytes from A starting at B up to but not including C. If C < B, or either is larger than the array length, the program fails

Native TEAL opcode: [`substring`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#substring), [`substring3`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#substring3)

### algopy.op.vrf\_verify(s: [algopy.op.VrfVerify](#algopy.op.VrfVerify), a: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), b: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), c: [algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes) | [bytes](https://docs.python.org/3/library/stdtypes.html#bytes), /) → [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)\[[algopy.Bytes](../../api-reference/api-algopy#algopy.Bytes), [bool](https://docs.python.org/3/library/functions.html#bool)]

Verify the proof B of message A against pubkey C. Returns vrf output and verification flag.
`VrfAlgorand` is the VRF used in Algorand. It is ECVRF-ED25519-SHA512-Elligator2, specified in the IETF internet draft [draft-irtf-cfrg-vrf-03](https://datatracker.ietf.org/doc/draft-irtf-cfrg-vrf/03/).

* **Parameters:**
  **s** ([*VrfVerify*](#algopy.op.VrfVerify)) – parameters index

Native TEAL opcode: [`vrf_verify`](https://developer.algorand.org/docs/get-details/dapps/avm/teal/opcodes/v10/#vrf_verify)
