//Calculate box MBR of box_counter (key: address, value: UInt64)
const BoxKeyLength = 32
const boxValueLength = 8
const boxSize = BoxKeyLength + boxValueLength
const boxMBR = 2_500 + boxSize * 400

const boxPrefix = 'box_counter' // box identifier prefix
const encoder = new TextEncoder()
const boxPrefixBytes = encoder.encode(boxPrefix) //UInt8Array of boxPrefix
const publicKey = decodeAddress(deployer.addr).publicKey

const response = await appClient.incrementBoxCounter(
  {},
  { boxes: [new Uint8Array([...boxPrefixBytes, ...publicKey])], sendParams: { fee: algokit.microAlgos(boxMBR) } },
)
console.log('Method #1 Box Counter', response.return)