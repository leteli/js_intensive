const isObject = (value) => (typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Map) && !(value instanceof Set));

const cloneArray = (arr) => arr.map((el) => {
  if (Array.isArray(el)) {
    return cloneArray(el);
  }
  if (isObject(el)) {
    return makeObjectDeepCopy(el);
  }
  return el;
});


const makeObjectDeepCopy = (obj) => {
  const acc = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (isObject(value)) {
      acc[key] = makeObjectDeepCopy(value);
    }
    else if (Array.isArray(value)) {
      acc[key] = cloneArray(value);
    }
    else if (typeof value === 'function') {
      acc[key] = value.bind(acc);
    }
    else if (value instanceof Map) {
      acc[key] = new Map(cloneArray(Array.from(value)));
    }
    else if (value instanceof Set) {
      acc[key] = new Set(cloneArray(Array.from(value)));
    }
    else {
      acc[key] = value;
    }
  });
  return acc;
};

// Сложность алгоритма - O(n)
// т.к. кол-во операций копирования зависит от кол-ва пар ключ-значение
// кажется, рекурсия не влияет на соотношение размера данных и кол-ва операций (т.е. рекурсия сама по себе не усложняет алгоритм)