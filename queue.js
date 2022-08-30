class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  length() {
    return this.size; // O(1)
  }

  isEmpty() {
    return this.size === 0; // O(1)
  }

  enqueue(value) {
    const currentIndex = this.size;
    this.queue[currentIndex] = value;
    this.size += 1; // O(1)
  }

  dequeue() {
    if (!this.isEmpty()) {
      const firstItem = this.queue[0];
      this.size -= 1;
      for (let i = 0; i < this.size; i += 1) { // Cложность O(n) 
        this.queue[i] = this.queue[i + 1];
      }
      this.queue.length -= 1;
      return firstItem;
    }
  }

  front() {
    if (!this.isEmpty()) {
      return this.queue[0]; // O(1)
    }
  }
}