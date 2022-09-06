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
    this.x = num1;
    this.y = num2;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  setX(num) {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error('Аргумент должен быть числом');
    }
    this.x = num;
  }

  setY(num) {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error('Аргумент должен быть числом');
    }
    this.y = num;
  }

  logSum() {
    console.log(this.x + this.y);
  }

  logMul() {
    console.log(this.x * this.y);
  }

  logSub() {
    console.log(this.x - this.y);
  }

  logDiv() {
    if(this.y === 0) {
      throw new Error('Делитель не может быть нулем');
    }
    console.log(this.x / this.y);
  }

  logDivRest() {
    console.log(this.x % this.y);
  }

  logExp() {
    console.log(this.x ** this.y);
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
    this.x = num1;
    this.y = num2;
  }
*/
