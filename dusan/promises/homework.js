// This file is related to homework from 21-11-2022
/*
The following needs to be done:
Calculator results in an async function after waiting a given duration. Use only functions for:
Addition
Subtraction
All promises must be resolved before console.log-ing all results. 
*/

const plus = (a, b) => {
    return a + b;
};

const minus = (a, b) => {
    return a - b;
};

const delay = (timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Go!");
        }, timeout);
    })
}
delay(2000).then((response) => {
    const resultPlus = plus(10, 2);
    const resultMinus = minus (22, 12);
    console.log("Sum = " + resultPlus + " ||||||| " + "Result substract = " + resultMinus);
});