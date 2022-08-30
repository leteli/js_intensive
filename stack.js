class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }

  length() {
    return this.size; // Сложность O(1)
  }

  isEmpty() {
    return this.size === 0; // Сложность O(1) 
  }

  push(value) {
    const currentIndex = this.size;
    this.stack[currentIndex] = value;
    this.size += 1;
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }
    const lastItem = this.stack[this.size - 1];
    delete this.stack[this.size - 1];
    this.size -= 1;
    this.stack.length -= 1;
    return lastItem; // Сложность O(1)
  }

  peek() {
    if (this.isEmpty()) {
      return;
    }
    return this.stack[this.size - 1]; // Сложность O(1)
  }
}
