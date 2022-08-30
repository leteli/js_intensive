import Node from './Node.js';

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  head() {
    return this.head; // O(1)
  }

  tail() {
    return this.tail; // O(1)
  }

  size() {            
    let size = 0;
    let currentNode = this.head;
    while (currentNode) {
      size += 1;
      currentNode = currentNode.next;   // O(n)
    }
    return size;
  }

  add(value) {
    const newNode = new Node(value); // O(1)
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  remove(value) {
    if (!this.head) {
      return;
    }
   
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
      this.head.prev = null;
    }

    let currentNode = this.head;

    while (currentNode && currentNode.next && currentNode.next !== this.tail) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;   // O(n)
        currentNode.next.prev = currentNode;
      } else {
        currentNode = currentNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = currentNode;
      currentNode.next = null;
    }
  }
  
  indexOf(value) {
    if (!this.head) {
      return;
    }
    let currentNode = this.head;
    let index;
    for (let i = 0; i < this.size(); i += 1) {    // O(n)
      if (currentNode.value === value) {
        index = i;
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
    return index;
  }

  elementAt(index) {
    if (index >= this.size()) {
      return;
    }
    const middle = Math.floor(this.size() / 2);

    if (index < middle) {
      let currentNode = this.head;
      for (let i = 0; i < middle; i += 1) {    // O(log n), т.к. сокращаем вдвое 
        if (i === index) {
          return currentNode;
        }
        currentNode = currentNode.next;
      }
    } else {
      let currentNode = this.tail;
      for (let i = this.size() - 1; i >= middle; i -= 1) {
        if (i === index) {
          return currentNode;
        }
        currentNode = currentNode.prev;
      }
    }
  }

  addAt(value, index) {
    if (index > this.size() || index < 0) {
      return;
    }
    if (!this.head) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    const nextNode = this.elementAt(index);

    if (index === 0) {
      const newNode = new Node(value, null, nextNode);
      nextNode.prev = newNode;
      this.head = newNode;
      return;
    }
    const prevNode = this.elementAt(index - 1);   // O(log n), тк используем elementAt, где есть цикл, перебирающий половину значений
    if (index === this.size()) {
      const lastNode = new Node(value, prevNode, null);
      prevNode.next = lastNode;
      this.tail = lastNode;
      return;
    }
    const newNode = new Node(value, prevNode, nextNode);
    prevNode.next = newNode;
    nextNode.prev = newNode;
  }

  removeAt(index) {
    if (index >= this.size() || index < 0) {
      return;
    }
    const nextNode = this.elementAt(index + 1);   // O(log n), тк используем elementAt, где есть цикл, перебирающий половину значений
    if (index === 0) {
      nextNode.prev = null;
      this.head = nextNode;
      return;
    }
    const prevNode = this.elementAt(index - 1);
    if (index === (this.size() - 1)) {
      prevNode.next = null;
      this.tail = prevNode;
      return;
    }
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }
}
