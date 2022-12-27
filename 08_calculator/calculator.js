const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;

};

const sum = function (arr) {
  let sum = 0;
  for (const item of arr) {
    sum += item;
  }
  return sum;
};

const multiply = function (arr) {
  let result = 1;
  for (const item of arr) {
    result *= item;
  }
  return result;
};

const power = function (number, power) {
  return number ** power;
};

const factorial = function (num) {
  let result = 1;
  for(let i=2; i<=num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
