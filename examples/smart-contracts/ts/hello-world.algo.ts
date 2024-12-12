import { Contract } from '@algorandfoundation/tealscript';

export class HelloWorld extends Contract {

    hello(name: string): string {
        return 'Hello, ' + name + '!';
    }
}