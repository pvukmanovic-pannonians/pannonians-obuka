/* Fro homework we have to create functions for all the learned 
   arithmetic operations, and use them in the file, 
   console.log results. Every function needs to accept 2 params.*/

// I'll make 3 const strings, witch i'll use leater to make homework look nice//

let num1 = 'first number is:'
let num2 = 'second number is:'
let res = 'result is:'

// First we will do addition //

console.log("");
console.log("Let's add two numbers");
console.log("");

/* Next job is to make function for addition,
   I'll make console.log together with 3 strings i made before,
   and i'll returne directly in that console log */ 

const addition = (number1,number2) => {
    let result = number1 + number2;
    console.log(num1 , number1, num2 , number2, res , result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
}

// Now i'll try to enter deferent numbers for my addition function //

(addition(1,5));
(addition(14,26));
(addition(15,80));
(addition(121,268));
(addition(1411,26528));

// Second we will do subtraction //

console.log("");
console.log("Let's subtract two numbers");
console.log("");

/* Next job is to make function for subtraction,
   I'll make console.log together with 3 strings i made before,
   and i'll returne directly in that console log */ 

const subtraction = (number1,number2) => {
    let result = number1 - number2;
    console.log(num1 , number1, num2 , number2, res , result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
}

// Now i'll try to enter deferent numbers for my subtraction function //

(subtraction(6,1));
(subtraction(14,26));
(subtraction(150,80));
(subtraction(1210,268));
(subtraction(141100,26528));

// third we will do multiplication //

console.log("");
console.log("Let's multiply two numbers");
console.log("");

/* Next job is to make function for multiplication,
   I'll make console.log together with 3 strings i made before,
   and i'll returne directly in that console log */ 

const multiplication = (number1,number2) => {
    let result = number1 * number2;
    console.log(num1 , number1, num2 , number2, res , result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
}

// Now i'll try to enter deferent numbers for my multiplication function //

(multiplication(4,8));
(multiplication(5,19));
(multiplication(423,8));
(multiplication(64,80));
(multiplication(400,856));

// Fourth we will do divide //

console.log("");
console.log("Let's divide two numbers");
console.log("");

/* Next job is to make function for divide,
   I'll make console.log together with 3 strings i made before,
   and i'll returne directly in that console log */ 

const divide = (number1,number2) => {
    let result = number1 / number2;

// In this case i wanted to have only 2 decimals in result, so i find solution on google//    

    console.log(num1 , number1, num2 , number2, res , result.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","))
}

// Now i'll try to enter deferent numbers for my divide function //

(divide(5,3));
(divide(525,5));
(divide(18,4));
(divide(12354,262));
(divide(145,1456));

// Fifth we will do exponentiation //

console.log("");
console.log("Let's exponentiate a number by a number");
console.log("");

/* Next job is to make function for exponentiate,
   I'll make console.log together with 3 strings i made before,
   and i'll returne directly in that console log */ 

const exponentiate = (number1,number2) => {
    let result = number1 ** number2;
    console.log(num1 , number1, num2 , number2, res , result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
}

// Now i'll try to enter deferent numbers for my exponentiate function //

(exponentiate(5,2));
(exponentiate(12,8));
(exponentiate(510,2));
(exponentiate(50,4));
(exponentiate(123,6));

// Sixth we will do something with modulus or remainder //

console.log("");
console.log("First of all modulus % if accept two parameters will divide those 2 numbers and give us remainder");
console.log("");

/* Next job is to make function witch will give us remainder when divide 2 numbers,
   I'll make console.log together with 3 strings i made before,
   and i'll returne directly in that console log */ 

const remainder = (number1,number2) => {
    let result = number1 % number2;
    console.log(num1 , number1, num2 , number2, res , result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
}

// Now i'll try to enter deferent numbers to see remainder's//

remainder(5,2);
remainder(20,4);
remainder(12456,56);
remainder(5254587,2564);
remainder(789456321,123456);

console.log("");
console.log("Hint: If second number is bigger then first number, remainder will always be a first number");

/* For every console.log in every function i use toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") , 
   so my numbers have "," after every thousend. I found this on google ofc*/