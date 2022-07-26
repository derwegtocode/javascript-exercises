const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(sumArray) {
  let result = 0;
  for (let i = 0; i < sumArray.length; i++) {
    result += sumArray[i];
  }
  return result;
};

const multiply = function(multiplyArray) {
 let result = 1;
 for (let i = 0; i < multiplyArray.length; i++) {
  result *= multiplyArray[i];
 };
 return result;
};

const power = function(a, b) {
let result = 1;
for (let i = 0; i < b; i++) {
  result *= a;
};
return result;
};

//factorial is the multiplication of all integers up to a number
const factorial = function(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  };
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
