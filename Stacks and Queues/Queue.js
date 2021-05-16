class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        console.log('ths.first', this.first)
        return this.first
    }

    enqueue(value){
        const newNode = new Node(value);
        if(this.length ===0){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this

    }

    dequeue(){
        if(!this.first){
            return null;
        }
        if(this.first === this.length){
            this.last = null;
        }
        const pointer = this.first
        this.first = this.first.next;
        this.length--;
        return pointer;

    } 
}

const myQueue = new Queue
myQueue.enqueue('test1')
myQueue.enqueue('test2')
myQueue.dequeue()
myQueue.dequeue()
myQueue.peek()
