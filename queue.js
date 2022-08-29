class Queue {
  constructor() {
    this.queue = [];
  }

  size() {
    return this.queue.length; // O(1)
  }

  isEmpty() {
    return this.size() === 0; // O(1)
  }

  enqueue(value) {
    this.queue.push(value); // O(1)
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.queue.shift(); // Cложность O(n) - требует новой нумерации индексов с нуля!
    }
  }

  front() {
    if (!this.isEmpty()) {
      return this.queue[0]; // O(1)
    }
  }
}
