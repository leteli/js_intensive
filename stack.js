class Stack {
  constructor() {
    this.stack = [];
  }

  length() {
    return this.stack.length; // Сложность O(1) - одна операция независимо от размера массива
  }

  isEmpty() {
    return this.length() === 0; // Сложность O(1) 
  }

  push(value) {
    this.stack.push(value); // Сложность O(1)
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }
    return this.stack.pop(); // Сложность O(1)
  }

  peek() {
    if (this.isEmpty()) {
      return;
    }
    return this.stack[this.length() - 1]; // Сложность O(1)
  }
}
