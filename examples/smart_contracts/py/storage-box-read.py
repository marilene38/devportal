from algopy import Box, BoxMap, String, UInt64, arc4, box_ref

class BoxContract(arc4.ARC4Contract):
    def __init__(self) -> None:
        self.box_string = Box(arc4.String, key=b"BOX_C")
        self.box_map = BoxMap(UInt64, String, key_prefix="")

    @arc4.abimethod
    def get_box(self) -> arc4.String:
        return self.box_string.value
    
    @arc4.abimethod
    def get_box_map(self, key: UInt64) -> String:
        return self.box_map[key]

    @arc4.abimethod
    def get_func_box_map(self) -> String:
        key = UInt64(1)
        return self.box_map.get(key, default=String("default"))

    @arc4.abimethod
    def get_func_box_ref(self) -> None:
        assert box_ref.get(default=sender_bytes)

    @arc4.abimethod
    def maybe_box_map(self) -> None:
        value, exists = self.box_map.maybe(key_1)
        assert not exists
        assert key_0 in self.box_map

    @arc4.abimethod
    def maybe_box_ref(self) -> None:
        value, exists = box_ref.maybe()
        assert not exists
        assert value == b""