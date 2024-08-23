from algopy import ARC4Contract, UInt64, Account, BoxMap, Txn, Global
from algopy.arc4 import abimethod

COUNTER_BOX_KEY_LENGTH = 32
COUNTER_BOX_VALUE_LENGTH = 8
COUNTER_BOX_SIZE = COUNTER_BOX_KEY_LENGTH + COUNTER_BOX_VALUE_LENGTH
COUNTER_BOX_MBR = 2_500 + COUNTER_BOX_SIZE * 400


class BoxCounter(ARC4Contract):

    def __init__(self) -> None:
        self.box_counter = BoxMap(Account, UInt64)

    @abimethod
    def increment_box_counter(self, payMbr: gtxn.PaymentTransaction) -> UInt64:
        assert payMbr.amount == COUNTER_BOX_MBR
        assert payMbr.receiver == Global.current_application_address

        if Txn.sender in self.box_counter:
            self.box_counter[Txn.sender] += 1
        else:
            self.box_counter[Txn.sender] = UInt64(0)
            self.box_counter[Txn.sender] += 1

        return self.box_counter[Txn.sender]
