from algopy import ARC4Contract, String, arc4


class HelloWorld(ARC4Contract):

    @arc4.abimethod()
    def hello(self, name: String) -> String:
        return "Hello, " + name + "!"
