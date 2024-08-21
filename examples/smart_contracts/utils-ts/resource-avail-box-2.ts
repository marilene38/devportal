//Calculate box MBR of box_counter (key: address, value: UInt64)
const BoxKeyLength = 32
const boxValueLength = 8
const boxSize = BoxKeyLength + boxValueLength
const boxMBR = 2_500 + boxSize * 400

// Configurate automatic resource population per app call
const response = await appClient.incrementBoxCounter(
  {},
  { sendParams: { populateAppCallResources: true, fee: algokit.microAlgos(boxMBR) } }
)
console.log('Method #2 Box Counter', response.return)

//or

// Set the default value for populateAppCallResources to true once and apply to all contract invocations
algokit.Config.configure({ populateAppCallResources: true })

const response = await appClient.incrementBoxCounter(
  {},
  { sendParams: { fee: algokit.microAlgos(boxMBR) } }
)
console.log('Method #2 Box Counter', response.return)