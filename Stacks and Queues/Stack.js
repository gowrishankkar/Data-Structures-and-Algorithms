class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        console.log('ths', this)
        return this
    }

    push(value){
        const newNode = new Node(value);
        if(this.length ===0 ){
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const pointer = this.top;
            this.top = newNode;
            this.top.next = pointer

        }
        this.length++;
        return this;

    }

    pop(){
        if(!this.top){
            return null;
        }
        if(this.top === this.bottom){
            this.bottom = null;
        }
        const pointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    } 
}

const myStack = new Stack
myStack.push('test1')
myStack.push('test2')
myStack.pop()
myStack.pop()
myStack.peek()
