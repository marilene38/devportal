const response = await AccountReferenceAppClient.getAccountBalance({}, { accounts: [dispenser.addr] })
console.log('Method #1 Account Balance', response.return)
