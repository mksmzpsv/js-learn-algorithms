import LinkedListNode from './linkedListNode.js';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new LinkedListNode(value);
    if (this.head === null) this.head = newNode;
    else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length += 1;
    return this;
  }

  unshift(value) {
    const newNode = new LinkedListNode(value);
    if (this.head === null) this.head = newNode;
    else {
      const previousHead = this.head;
      this.head = newNode;
      this.head.next = previousHead;
    }
    this.length += 1;
    return this;
  }
}
