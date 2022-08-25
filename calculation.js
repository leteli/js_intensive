const calculate = () => {
  const firstValue = prompt('Введите первое значение:', '');
  if (isNaN(firstValue) || firstValue.length === 0) {
    console.log('Некорректный ввод!');
    return;
  }
  const secondValue = prompt('Введите второе значение:', '');
  if (isNaN(secondValue) || secondValue.length === 0) {
    console.log('Некорректный ввод!');
    return;
  }
  const num1 = Number(firstValue);
  const num2 = Number(secondValue);
  console.log(`Ответ: ${num1 + num2}, ${num1 / num2}`);
  return;
};
