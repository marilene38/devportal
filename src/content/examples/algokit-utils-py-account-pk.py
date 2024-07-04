from algokit_utils import Account, AlgodClient
from algosdk.transaction import PaymentTxn
from algosdk.future.transaction import wait_for_confirmation

# Load the account using the private key
private_key = "your-private-key-here"  # Replace with your private key
account = Account(private_key)