response = await AccountAndAppRefAppClient.getMyCounterWithArg({ acct: dispenser.addr, app: counterAppId })
console.log('Method #3 My Counter', response.return)