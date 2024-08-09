from algopy import ARC4Contract, BoxRef, String, UInt64, arc4, BoxMap, Box

class KitchenSink(ARC4Contract):
    def __init__(self) -> None:
        self.box_string = Box(arc4.String, key=b"BOX_C")
        self.box_map = BoxMap(UInt64, String, key_prefix="")

##################################################
    # Key- box
    @arc4.abimethod
    def key_box(self) -> Bytes:
        return self.box_int.key
    
    # key prefix - Box Map  
    @arc4.abimethod
    def key_prefix_box_map(self) -> Bytes:
        return self.box_map.key_prefix
    
##################################################
    # Get- box
    @arc4.abimethod
    def get_box(self) -> UInt64:
        return self.box_int.value
    
    # get item - Box Map  
    @arc4.abimethod
    def box_map_get_item(self, key: UInt64) -> String:
        return self.box_map[key]

    # get function - Box Map  
    @arc4.abimethod
    def box_map_get(self) -> String:
        key_1 = UInt64(1)
        return self.box_map.get(key_1, default=String("default"))

##################################################
    # Maybe - box
    @arc4.abimethod
    def maybe_box(self) -> tuple[UInt64, bool]:
        box_int_value, box_int_exists = self.box_int.maybe()
        return box_int_value, box_int_exists
    
    # maybe- Box Map  
    @arc4.abimethod
    def maybe_box_map(self) -> tuple[String, bool]:
        key_1 = UInt64(1)
        value, exists = self.box_map.maybe(key_1)
        if not exists:
            value = String('')
        return value, exists

##################################################
    # Set- box
    @arc4.abimethod
    def set_box(self, value_int: UInt64) -> None:
        self.box_int.value = value_int

    # set item- Box Map  
    @arc4.abimethod
    def box_map_set(self, key: UInt64, value: String) -> None:
        self.box_map[key] = value

##################################################
    # Property value- box
    @arc4.abimethod
    def value_box(self) -> None:
        assert self.box_int.value == UInt64(10)
        # test .value.bytes
        assert self.box_c.value.bytes[0] == c.bytes[0]

##################################################
    # Delete - box
    @arc4.abimethod
    def delete_boxes(self) -> None:
        del self.box_str.value
        assert self.box_str.get(default=arc4.String("42")) == "42"
        a, a_exists = self.box_str.maybe()
        assert not a_exists
        assert a == arc4.String("0")

    # Delete - box map
    @arc4.abimethod
    def box_map_del(self, key: UInt64) -> None:
        del self.box_map[key]

    # Delete - box ref
    @arc4.abimethod
    def test_box_ref(self) -> None:
        # init ref, with valid key types
        box_ref = BoxRef(key=String("blob"))
        assert not box_ref, "no data"

        # instance box ref
        self.box_ref.create(size=UInt64(32))
        assert self.box_ref, "has data"
        self.box_ref.delete()
        assert box_ref.key == b"blob"

        # query
        value, exists = box_ref.maybe()
        assert not exists
        assert value == b""

##################################################
    # Length- box
    @arc4.abimethod
    def length_boxes(self, c: arc4.String) -> UInt64:
        self.box_string.value = c.copy()
        assert self.box_string.length == c.bytes.length
        return self.box_string.length
    
    # length - box map
    @arc4.abimethod
    def box_map_length(self) -> UInt64:
        # fails if doesnt exist
        key_0 = UInt64(0)
        if not self.box_map:
            return UInt64(0)
        return self.box_map.length(key_0)

##################################################
    # contains - map
    @arc4.abimethod
    def boxes_exist(self) -> bool:
        return bool(self.box_string)
    
    # contains- Box Map  
    @arc4.abimethod
    def box_map_exists(self, key: UInt64) -> bool:
        return key in self.box_map
    
 ##################################################   

    
 


    ### Box Reference: create
    @arc4.abimethod
    def create_box_ref(self) -> None:
        box_ref = BoxRef(key=String("blob"))
        assert box_ref.create(size=32)
        assert box_ref, "has data"

    

    ### Box Reference: extract
    @arc4.abimethod
    def extract_box_ref(self) -> None:
        box_ref = BoxRef(key=String("blob"))
        assert box_ref.create(size=32)

        sender_bytes = Txn.sender.bytes
        app_address = Global.current_application_address.bytes
        value_3 = Bytes(b"hello")
        box_ref.replace(0, sender_bytes)
        # box_ref.resize(8000) - not implemented
        box_ref.splice(0, 0, app_address)
        box_ref.replace(64, value_3)
        prefix = box_ref.extract(0, 32 * 2 + value_3.length)
        assert prefix == app_address + sender_bytes + value_3

    ### Box Reference: resize - not implemented
    @arc4.abimethod
    def key_box_ref(self) -> None:
        # init ref, with valid key types
        box_ref = BoxRef(key="blob")
        assert not box_ref, "no data"
        box_ref = BoxRef(key=b"blob")
        assert not box_ref, "no data"
        box_ref = BoxRef(key=Bytes(b"blob"))
        assert not box_ref, "no data"
        box_ref = BoxRef(key=String("blob"))
        assert not box_ref, "no data"

        # create
        assert box_ref.create(size=32)
        assert box_ref, "has data"

        # manipulate data
        sender_bytes = Txn.sender.bytes
        app_address = Global.current_application_address.bytes
        value_3 = Bytes(b"hello")
        box_ref.replace(0, sender_bytes)
        # box_ref.resize(8000) - not implemented
        box_ref.splice(0, 0, app_address)
        box_ref.replace(64, value_3)
        prefix = box_ref.extract(0, 32 * 2 + value_3.length)
        assert prefix == app_address + sender_bytes + value_3

        # delete
        assert box_ref.delete()
        assert box_ref.key == b"blob"

    ### Box Reference: replace
    @arc4.abimethod
    def replace_box_ref(self) -> None:
        # init ref, with valid key types
        box_ref = BoxRef(key="blob")
        assert not box_ref, "no data"
        box_ref = BoxRef(key=b"blob")
        assert not box_ref, "no data"
        box_ref = BoxRef(key=Bytes(b"blob"))
        assert not box_ref, "no data"
        box_ref = BoxRef(key=String("blob"))
        assert not box_ref, "no data"

        # create
        assert box_ref.create(size=32)
        assert box_ref, "has data"

        # manipulate data
        sender_bytes = Txn.sender.bytes
        app_address = Global.current_application_address.bytes
        value_3 = Bytes(b"hello")
        box_ref.replace(0, sender_bytes)

    ### Box Reference: splice
    @arc4.abimethod
    def splice_box_ref(self) -> None:
        # init ref, with valid key types
        box_ref = BoxRef(key="blob")
        assert not box_ref, "no data"
        box_ref = BoxRef(key=b"blob")
        assert not box_ref, "no data"
        box_ref = BoxRef(key=Bytes(b"blob"))
        assert not box_ref, "no data"
        box_ref = BoxRef(key=String("blob"))
        assert not box_ref, "no data"

        # create
        assert box_ref.create(size=32)
        assert box_ref, "has data"

        # manipulate data
        sender_bytes = Txn.sender.bytes
        app_address = Global.current_application_address.bytes
        value_3 = Bytes(b"hello")
        box_ref.replace(0, sender_bytes)
        # box_ref.resize(8000) - not implemented
        box_ref.splice(0, 0, app_address)

    ### Box Reference: get
    @arc4.abimethod
    def get_box_ref(self) -> None:
        # init ref, with valid key types
        box_ref = BoxRef(key="blob")
        assert not box_ref, "no data"
        box_ref = BoxRef(key=b"blob")
        assert not box_ref, "no data"
        box_ref = BoxRef(key=Bytes(b"blob"))
        assert not box_ref, "no data"
        box_ref = BoxRef(key=String("blob"))
        assert not box_ref, "no data"

        # create
        assert box_ref.create(size=32)
        assert box_ref, "has data"

        # manipulate data
        sender_bytes = Txn.sender.bytes
        app_address = Global.current_application_address.bytes
        value_3 = Bytes(b"hello")
        box_ref.replace(0, sender_bytes)
        # box_ref.resize(8000) - not implemented
        box_ref.splice(0, 0, app_address)
        box_ref.replace(64, value_3)
        prefix = box_ref.extract(0, 32 * 2 + value_3.length)
        assert prefix == app_address + sender_bytes + value_3

        # delete
        assert box_ref.delete()
        assert box_ref.key == b"blob"

        # query
        value, exists = box_ref.maybe()
        assert not exists
        assert value == b""
        assert box_ref.get(default=sender_bytes) == sender_bytes

    ### Box Reference: put
    @arc4.abimethod
    def put_box_ref(self) -> None:
        box_ref = BoxRef(key=String("blob"))
        assert box_ref.create(size=32)
        
        sender_bytes = Txn.sender.bytes
        app_address = Global.current_application_address.bytes

        assert box_ref.delete()
        assert box_ref.key == b"blob"

        box_ref.put(sender_bytes + app_address)
        assert box_ref, "Blob exists"
        assert box_ref.length == 64

    ### Box Reference: maybe
    @arc4.abimethod
    def maybe_box_ref(self) -> tuple[Bytes, bool]:
        box_ref = BoxRef(key=String("blob"))
        assert box_ref.create(size=32)

        value, exists = box_ref.maybe()
        if not exists:
            value = Bytes(b"")
        return value, exists

    ### Box Reference: Property - length 
    @arc4.abimethod
    def length_box_ref(self) -> UInt64:
        box_ref = BoxRef(key=String("blob"))
        assert box_ref.create(size=32)
        return box_ref.length
    
    def test_box_ref(self) -> None:
        # init ref, with valid key types
        box_ref = BoxRef(key="blob")
        assert not box_ref, "no data"
        box_ref = BoxRef(key=b"blob")
        assert not box_ref, "no data"
        box_ref = BoxRef(key=Bytes(b"blob"))
        assert not box_ref, "no data"
        box_ref = BoxRef(key=String("blob"))
        assert not box_ref, "no data"

        # create
        assert box_ref.create(size=32)
        assert box_ref, "has data"

        # manipulate data
        sender_bytes = Txn.sender.bytes
        app_address = Global.current_application_address.bytes
        value_3 = Bytes(b"hello")
        box_ref.replace(0, sender_bytes)
        box_ref.resize(8000)
        box_ref.splice(0, 0, app_address)
        box_ref.replace(64, value_3)
        prefix = box_ref.extract(0, 32 * 2 + value_3.length)
        assert prefix == app_address + sender_bytes + value_3

        # delete
        assert box_ref.delete()
        assert box_ref.key == b"blob"

        # query
        value, exists = box_ref.maybe()
        assert not exists
        assert value == b""
        assert box_ref.get(default=sender_bytes) == sender_bytes

        # update
        box_ref.put(sender_bytes + app_address)
        assert box_ref, "Blob exists"
        assert box_ref.length == 64
        assert get_box_ref_length(box_ref) == 64

        # instance box ref
        self.box_ref.create(size=UInt64(32))
        assert self.box_ref, "has data"
        self.box_ref.delete()
        
@subroutine
def get_box_ref_length(ref: BoxRef) -> UInt64:
    return ref.length

    