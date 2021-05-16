class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class QueueStack {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const myQueue = new QueueStack();

myQueue.peek();
myQueue.enqueue("test1");
myQueue.enqueue("test12");
myQueue.enqueue("test13");
myQueue.peek();
myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
myQueue.peek();
