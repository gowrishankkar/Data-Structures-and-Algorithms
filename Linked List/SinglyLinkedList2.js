class Node {
    constructor(value) {
      (this.value = value), (this.next = null);
    }
  }
  
  class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
      };
      this.tail = this.head;
      this.length = 1;
    }
  
    append(value) {
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
  
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
  
    insert(index, value) {
      if (index >= this.length) {
        return this.appened(value);
      }
      const newNode = new Node(value);
      const nodeBeforeIndexPointer = this.traversedIndex(index - 1);
      const nodeAtIndexPointer = this.traversedIndex(index);
  
      nodeBeforeIndexPointer.next = newNode;
      newNode.next = nodeAtIndexPointer;
      this.length++;
    }
  
    remove(index){
      if (index >= this.length) {
          return console.log('Nothing found at the given index')
        } 
  
      const nodeBeforeIndexPointer = this.traversedIndex(index - 1);
      const nodeToRemoved = nodeBeforeIndexPointer.next;
      nodeBeforeIndexPointer.next = nodeToRemoved.next;
      this.length--;
      return this.printLinkedList();
    }
  
    traversedIndex(index) {
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
  
    printLinkedList() {
      let list = [];
      let currentNode = this.head;
      while (currentNode != null) {
        list.push(currentNode.value);
        currentNode = currentNode.next;
      }
  
      return list;
    }
  }
  
  const myLinkedList = new LinkedList(11);
  myLinkedList.append(12);
  myLinkedList.append(13);
  myLinkedList.prepend(10);
  myLinkedList.insert(2, 14);
  myLinkedList.remove(2);
  console.log(myLinkedList);
  console.log(myLinkedList.printLinkedList());
  