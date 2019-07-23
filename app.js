// ЗАДАНИЕ №1
// Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.

const minus = (valA = 0) => (valB = 0) => valA - valB;

console.log(minus(10)(6));
console.log(minus(5)(6));
console.log(minus(10)());
console.log(minus()(6));
console.log(minus()());

// ЗАДАНИЕ №2
// Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

function multiplyMaker(valA) {
  let result = valA;
  return valB => (result *= valB);
}

const multiply = multiplyMaker(2);
console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));

// ЗАДАНИЕ №3
// Реализовать модуль, который работает со строкой и имеет методы:
//  a. установить строку
//    i. если передано пустое значение, то установить пустую строку
//    ii. если передано число, число привести к строке
//  b. получить строку
//  c. получить длину строки
//  d. получить строку-перевертыш

const strModule = (() => {
  let result = "";
  return {
    // Зачем тут условие "...если передано пустое значение, то..."?
    // Если имелось ввиду, не переданно значение - я дефолтное значение "".
    setString: (str = "") => (result = String(str)),
    getString: () => result,
    getLength: () => result.length,
    getRevers: () => [...result].reverse().join("")
  };
})();

strModule.setString("abcde");
// strModule.setString(100500);
// strModule.setString("");
// strModule.setString();
console.log(strModule.getString());
console.log(strModule.getLength());
console.log(strModule.getRevers());

// ЗАДАНИЕ №4
// Создайте модуль “калькулятор”, который умеет складывать, умножать,
// вычитать, делить и возводить в степень. Конечное значение округлить
// до двух знаков после точки (значение должно храниться в обычной
// переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

const calc = (() => {
  let result = 0;
  return {
    setValue: val => {
      result = val;
      return calc;
    },
    summ: val => {
      result += val;
      return calc;
    },
    mult: val => {
      result *= val;
      return calc;
    },
    sub: val => {
      result -= val;
      return calc;
    },
    div: val => {
      result /= val;
      return calc;
    },
    pow: val => {
      result = Math.pow(result, val);
      return calc;
    },
    result: () => result.toFixed(2)
  };
})();

calc.setValue(10);
calc.summ(5);
calc.mult(2);
console.log(calc.result());

console.log(
  calc
    .setValue(10)
    .pow(2)
    .result()
);
