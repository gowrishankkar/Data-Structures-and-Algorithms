class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    console.log(this, "first", this.first);
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }

    this.first.next = newNode;
    this.last = newNode;
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }

    const pointer = this.first;
    this.first = this.first.next;
    this.length--;
    return pointer;
  }
}

let newQueue = new Queue();
newQueue.enqueue(10);
newQueue.enqueue(11);
newQueue.enqueue(12);
newQueue.dequeue();
newQueue.peek();
