function myFilter (cb, context = null) {
  const result = [];
  for (let i = 0; i < this.length; i += 1) {
    if (cb.call(context, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.myFilter = myFilter;
