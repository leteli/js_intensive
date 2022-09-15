// в реализации не допускается неявное приведение типов
class Calculator {
  constructor(...args) {
    if (args.length !== 2) { // не более и не менее двух
      throw new Error('Конструктор должен принимать два аргумента');
    }
    const [num1, num2] = args;
    if (typeof num1 !== 'number' || isNaN(num1) || typeof num2 !== 'number' || isNaN(num2)) {
      throw new Error('Аргументы должны быть числами');
    }
    this._x = num1;
    this._y = num2;
  }

  getX() {
    return this._x;
  }

  getY() {
    return this._y;
  }

  setX(num) {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error('Аргумент должен быть числом');
    }
    this._x = num;
  }

  setY(num) {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error('Аргумент должен быть числом');
    }
    this._y = num;
  }

  logSum() {
    console.log(this._x + this._y);
  }

  logMul() {
    console.log(this._x * this._y);
  }

  logSub() {
    console.log(this._x - this._y);
  }

  logDiv() {
    if(this._y === 0) {
      throw new Error('Делитель не может быть нулем');
    }
    console.log(this._x / this._y);
  }

  logDivRest() {
    console.log(this._x % this._y);
  }

  logExp() {
    console.log(this._x ** this._y);
  }
}

/*
1. Реализация конструктора, для которой "если параметра не два" = "если кол-во параметров меньше 2"
  constructor(num1, num2) {
    if (num2 === undefined) {
      throw new Error('Конструктор должен принимать два аргумента');
    }
    if (typeof num1 !== 'number' || isNaN(num1) || typeof num2 !== 'number' || isNaN(num2)) {
      throw new Error('Аргументы должны быть числами');
    }
    this._x = num1;
    this._y = num2;
  }
*/
