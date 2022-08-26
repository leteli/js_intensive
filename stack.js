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
    return this.stack.pop();
  }

  peekBack() {
    return this.stack[this.length() - 1];
  }
}
