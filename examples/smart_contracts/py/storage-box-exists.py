from algopy import Box, BoxMap, String, UInt64, arc4, BoxRef

class BoxContract(arc4.ARC4Contract):
    def __init__(self) -> None:
        self.box_string = Box(arc4.String, key=b"BOX_C")
        self.box_map = BoxMap(UInt64, String, key_prefix="")
        self.box_ref = BoxRef()

    @arc4.abimethod
    def boxes_exist(self) -> bool:
        return bool(self.box_string)

    @arc4.abimethod
    def box_map_exists(self, key: UInt64) -> bool:
        return key in self.box_map
    
    @arc4.abimethod
    def box_ref_exists(self, ) -> bool:
        return self.box_ref