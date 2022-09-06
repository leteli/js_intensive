const makeObjectDeepCopy = (inputValue) => {
  if (typeof inputValue !== 'object' || inputValue === null) {
    return inputValue;
  }
  const acc = Array.isArray(inputValue) ? [] : {};
  for (key in inputValue) {
    const value = inputValue[key];
    if (typeof value === 'function') {
      acc[key] = value.bind(acc);
    }
    if (value instanceof Map) {
      acc[key] = new Map(makeObjectDeepCopy(Array.from(value)));
    }
    if (value instanceof Set) {
      acc[key] = new Set(makeObjectDeepCopy(Array.from(value)));
    } else {
      acc[key] = makeObjectDeepCopy(value);
    }
  }
  return acc;
};

// Cложность O(n ^ 2)
// цикл (for in для массивов и объектов одновременно) + рекурсия. 