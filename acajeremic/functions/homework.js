/*Homework
Create functions for all the learned arithmetic operations, and use them in the file, console.log results. Every function needs to accept 2 params.
+
-
/
*
**
%

*/
let a;
let b;

//addition

const add = (a,b) => {
    return a+b;
}

//substraction

const substraction =(a,b) => {
    return a-b;
}

//multiplication

const multiplication =(a,b) => {
    return a*b;
}

//division

const division = (a,b) => {
    return a/b;
}

//exponential

const exponential = (a,b) =>{
    return a**b;
}

//modulus

const modulus =(a,b) => {
    return a%b;
}

console.log(add(2,3));
console.log(substraction(3,4));
console.log(multiplication(9,8));
console.log(division(6,5));
console.log(exponential(3,4));
console.log(modulus(5,6));