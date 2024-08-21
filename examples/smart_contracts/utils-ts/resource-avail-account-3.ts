const response = await AccountReferenceAppClient.getAccountBalanceWithArg({ acct: dispenser.addr })
console.log('Method #3 Account Balance', response.return)
