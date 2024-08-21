const response = await AccountAndAssetRefAppClient.getAssetBalanceWithArg({ acct: dispenser.addr, asset: assetId })
console.log('Method #3 Asset Balance', response.return)
