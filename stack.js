class Stack {
  constructor() {
    this.stack = [];
  }

  length() {
    return this.stack.length;
  }

  isEmpty() {
    return this.length() === 0;
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return;
    }
    return this.stack[this.length() - 1];
  }
}
