const isValidNumber = (value) => typeof value === 'number' && !isNaN(value);

const selectFromInterval = (arr, limit1, limit2) => {
  if (!isValidNumber(limit1) || !isValidNumber(limit2)) {
    throw new Error('Границы интервала должны быть числом!');
  }
  if (!Array.isArray(arr) ||
      arr.some((el) => !isValidNumber(el)) ||
      arr.length === 0) {
    throw new Error('Первый параметр должен быть массивом чисел!');
  }
  return arr.filter((el) => {
    if (limit1 < limit2) {
      return el >= limit1 && el <= limit2;
    } else {
      return el >= limit2 && el <= limit1;
    }
  });
};

// Сложность O(n) 
// - кол-во элементов массива = кол-во вызовов колбэк-функций