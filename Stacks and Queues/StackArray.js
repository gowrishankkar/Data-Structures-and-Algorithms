class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.array = []
    }

    peek(){
        console.log('ths', this.array[this.array.length - 1])
        console.log('this.array', this.array)
        return this
    }

    push(value){
        this.array.push(value);
        return this;

    }

    pop(){
        this.array.pop()
        return this;
    } 
}

const myStack = new Stack
myStack.push('test1')
myStack.push('test2')
myStack.pop()
// myStack.pop()
myStack.peek()
