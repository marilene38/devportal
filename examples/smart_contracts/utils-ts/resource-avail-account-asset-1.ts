const response = await AccountAndAssetRefAppClient.getAssetBalance({}, { assets: [Number(assetId)], accounts: [dispenser.addr] })
console.log('Method #1 Asset Balance', response.return)