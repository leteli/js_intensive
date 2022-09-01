const isNumber = (value) => !isNaN(value) && typeof value === 'number';

const myIterable = {}; // Свойства from и to должны быть заданы перед итерацией
myIterable[Symbol.iterator] = function () {
  if (this.from > this.to) {
    throw new Error('Значение from не может быть больше значения to');
  }
  if (!this.hasOwnProperty('from') || !this.hasOwnProperty('to') || !isNumber(this.from) || !isNumber(this.to)) {
    throw new Error('Свойства from и to должны быть заданы. Их значения должны быть числами');
  }
  return {
    from: this.from,
    to: this.to,
    next() {
      if (this.from <= this.to) {
        return {value: this.from++, done: false}
      }
      return { done: true };
    }
  }
}

// myIterable.from = 1;
// myIterable.to = 4;

// for (const el of myIterable) {
//   console.log(el); // 1, 2, 3, 4
// }
