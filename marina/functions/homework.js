/* Our homework was to create functions for arithmetic operations, use them in the file and then console.log results.
 Every function needs to accept 2 parameters */

let number1;
let number2;

// addition (+) //

const addition = (number1, number2) => {
  return number1 + number2;
};

// substraction (-) //

const substraction = (number1, number2) => {
  return number1 - number2;
};

// division (/) //

const divide = (number1, number2) => {
  return number1 / number2;
};

// multiplication (*) //

const multiplication = (number1, number2) => {
  return number1 * number2;
};

// exponential (**) //

const exponential = (number1, number2) => {
  return number1 ** number2;
};

// modulus (%) //

const modulus = (number1, number2) => {
  return number1 % number2;
};

console.log(
  "The sum of two numbers 'number1' and 'number2' is: " + addition(2, 2) + "."
);
console.log(
  "The difference of two numbers 'number1' and 'number2' is: " +
    substraction(15, 5) +
    "."
);
console.log(
  "The quotient of two numbers 'number1' and 'number2' is: " +
    divide(9, 3) +
    "."
);
console.log(
  "The product of two numbers 'number1' and 'number2' is: " +
    multiplication(6, 5) +
    "."
);
console.log(
  "The exponential of two numbers 'number1' and 'number2' is: " +
    exponential(10, 10) +
    "."
);
console.log(
  "The modulus of two numbers 'number1' and 'number2' is: " +
    modulus(10, 3) +
    "."
);