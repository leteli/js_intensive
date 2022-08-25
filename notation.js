const getNumberInNotation = () => {
  const firstValue = prompt('Введите значение:', '');
  const secondValue = prompt('Введите основание системы счисления:', '');
  const isValueNaN = isNaN(firstValue) || isNaN(secondValue);
  const isEmpty = firstValue.length === 0 || secondValue.length === 0;
  const isRadixCorrect = Number(secondValue) >= 2 && Number(secondValue) <= 36
  if (isValueNaN || isEmpty || !isRadixCorrect) {
    console.log('Некорректный ввод!');
    return;
  }
  console.log(`Результат: ${Number(firstValue).toString(secondValue)}`);
  return;
};
