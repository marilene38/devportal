import { TestNetDispenserApiClient } from '@algorandfoundation/algokit-utils/types/dispenser-client'

// Using constructor argument
const client = new TestNetDispenserApiClient({ authToken: 'your_auth_token' })
const clientFromAlgorandClient = algorand.client.getTestNetDispenser({ authToken: 'your_auth_token' })

// Using environment variable
process.env['ALGOKIT_DISPENSER_ACCESS_TOKEN'] = 'your_auth_token'
const client = new TestNetDispenserApiClient()
const clientFromAlgorandClient = algorand.client.getTestNetDispenserApiClient()