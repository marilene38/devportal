response = await AccountAndAppRefAppClient.getMyCounter({}, { accounts: [dispenser.addr], apps: [counterAppId] })
console.log('Method #1 My Counter', response.return)