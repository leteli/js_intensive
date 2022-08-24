const getNumberInNotation = () => {
  const firstValue = prompt('Введите значение:', '');
  const secondValue = prompt('Введите основание системы счисления:', '');
  if (isNaN(firstValue) || isNaN(secondValue) || firstValue.length === 0 || secondValue.length === 0) {
    console.log('Некорректный ввод!');
    return;
  }
  console.log(`Результат: ${Number(firstValue).toString(secondValue)}`);
  return;
};
  