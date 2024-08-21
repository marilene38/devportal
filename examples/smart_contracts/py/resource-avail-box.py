from algopy import ARC4Contract, UInt64, Account, BoxMap, Txn
from algopy.arc4 import abimethod


class BoxCounter(ARC4Contract):

    def __init__(self) -> None:
        self.box_counter = BoxMap(Account, UInt64)

    @abimethod
    def increment_box_counter(self) -> UInt64:
        if Txn.sender in self.box_counter:
            self.box_counter[Txn.sender] += 1
        else:
            self.box_counter[Txn.sender] = UInt64(0)
            self.box_counter[Txn.sender] += 1

        return self.box_counter[Txn.sender]
