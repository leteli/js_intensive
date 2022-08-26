class Queue {
  constructor() {
    this.queue = [];
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.queue.shift();
    }
  }

  front() {
    if (!this.isEmpty()) {
      return this.queue[0];
    }
  }
}
