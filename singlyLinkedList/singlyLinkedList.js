import Node from './Node.js';

class SinglyLinkedList {
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
    this.tail = newNode;
  }

  remove(value) {
    if (!this.head) {
      return;
    }
   
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currentNode = this.head;

    while (currentNode && currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;  // O(n)
      } else {
        currentNode = currentNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = currentNode;
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
    let currentNode = this.head;
    if (index >= this.size()) {
      return;
    }
    for (let i = 0; i < this.size(); i += 1) {    // O(n)
      if (i === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  addAt(value, index) {
    if (index > this.size() || index < 0) {
      return;
    }
    const nextNode = this.elementAt(index);
    if (index === 0) {
      this.head = new Node(value, nextNode);
      return;
    }
    const prevNode = this.elementAt(index - 1);   // O(n), тк используем elementAt, где есть цикл
    if (index === this.size()) {
      const lastNode = new Node(value, null);
      this.tail = lastNode;
      prevNode.next = lastNode;
      return;
    }
    const newNode = new Node(value, nextNode);
    prevNode.next = newNode;
  }

  removeAt(index) {
    if (index >= this.size() || index < 0) {
      return;
    }
    const nextNode = this.elementAt(index + 1);   // O(n), тк используем elementAt, где есть цикл
    if (index === 0) {
      this.head = nextNode;
      return;
    }
    const prevNode = this.elementAt(index - 1);
    if (index === (this.size() - 1)) {
      this.tail = prevNode;
      this.tail.next = null;
      return;
    }
    prevNode.next = nextNode;
  }
}
