from algopy import ARC4Contract, BoxRef, String, UInt64, arc4, BoxMap, Box

class KitchenSink(ARC4Contract):
    def __init__(self) -> None:
        self.box_string = Box(arc4.String, key=b"BOX_C")
        self.box_map = BoxMap(UInt64, String, key_prefix="")

    @arc4.abimethod
    def box_map_test(self) -> None:
        key_0 = UInt64(0)
        key_1 = UInt64(1)
        value = String("Hmmmmm")
        self.box_map[key_0] = value
        assert self.box_map[key_0].bytes.length == value.bytes.length
        assert self.box_map.length(key_0) == value.bytes.length

        assert self.box_map.get(key_1, default=String("default")) == String("default")
    
    @arc4.abimethod
    def get_box_ref_length(self, ref: BoxRef) -> UInt64:
        return ref.length