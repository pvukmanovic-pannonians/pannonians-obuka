// Homework from Nov 17 2022

/*

Create functions for all the learned arithmetic operations, and use them in the file, console.log results. Every function needs to accept 2 params.
+
-
/
*
**
%

*/

// The following function sums 2 numbers

const sum = (a, b) => {
    return  a + b;
}

console.log("Sum result: " + sum(8, 2));

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// The following function substracts 2 numbers

const sub = (a, b) => {
    return a - b;
}

console.log("Substract result: " + sub(8, 2));

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// The following function divides 2 numbers

const div = (a, b) => {
    return a / b;
}

console.log("Division result: " + div(8, 2));

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// The following function multiplies 2 numbers

const mul = (a, b) => {
    return a * b;
}

console.log("Multiplitication result: " + mul(8, 2));

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// The following function is exponentiation operation
const exp = (a, b) => {
    return a ** b;
}

console.log("Exponentiation result: " + exp(8, 2));

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// The following function calculates the remainder of 2 numbers division
const mod = (a, b) => {
    return a % b;
}

console.log("Remainder: " + mod(3, 2));

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// The following function combines all functions from the above

const comb = (a, b) => {
     return sum(a, b) + sub(a, b) / div(a, b) * mul(a, b) ** exp(a, b) % mod(a, b)
}
console.log("Combination result: " + comb(3,2));