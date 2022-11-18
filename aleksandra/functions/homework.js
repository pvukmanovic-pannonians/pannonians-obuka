// This is homework from 17-11-2022 JS class. We learned about functions. 

/*
The task was to: 
Create functions for all the learned arithmetic operations, 
and use them in the file, console.log results. 
Every function needs to accept 2 params.
+    
-    
/    
*    
**    
%
*/

//The basic step is to define the two numbers that we will use in the functions. 
//We will do this by assigning them to variables. 
//I used 'let' because the numbers can be different. Also I could use 'var'. 
//*The difference between 'let' and 'var' we will learn during this course. 

let a;
let b; 

//First operation is the addition. A simple mathematical operation of adding one number to another. 

const add = (a, b) => {
    return a + b;
  };

//Second operation is substraction. Also a simple mathematical operation where we substract one number from another. 

const substraction = (a, b) => {
    return a - b;
};

//Third operation is multiplication. Still a simple mathematical operation in which we multiply one number by another. 

const multiplication = (a, b) => {
    return a * b;
};

//Fourth operation is division. One more simple mathematical operation that divides two numbers. 

const division = (a, b) => {
    return a / b;
};

//Fifth operation is exponential. 
//A mathematical operation that multiplies the first number by itself as many times as the value of the second number. 
//*e. g. 2 ** 3 = 2 * 2 * 2

const exponential = (a, b) => {
    return a ** b;
}; 

//Sixth operation is modulus. 
//A mathematical operation that shows us the remainder when dividing two numbers. 
//A common use is to determine whether a number is even or not. 

const modulus = (a, b) => {
    return a % b;
};

//This is a function to determine whether a number is even or not. 
//The function receives number as its parametar and returns a boolean value (true or false).

/*
const evenOrOdd = (number) => {
  return number % 2 === 0;
};
*/

console.log("The sum of two numbers 'a' and 'b' is: " + add(4,5) + ".");
console.log("The difference of two numbers 'a' and 'b' is: " + substraction(10, 8) + ".");
console.log("The product of two numbers 'a' and 'b' is: " + multiplication(11, 4) + ".");
console.log("The quotient of two numbers 'a' and 'b' is: " + division(2, 8) + ".");
console.log("The exponential of two numbers 'a' and 'b' is: " + exponential(2, 3) + ".");
console.log("The modulus of two numbers 'a' and 'b' is: " + modulus(16, 5) + ".");
//console.log(evenOrOdd(9)); //print for function which determine number is even or not 
