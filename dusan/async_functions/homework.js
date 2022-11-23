// // This file is related to homework from 21-11-2022
// /*
// The following needs to be done:
// Calculator results in an async function after waiting a given duration. Use only functions for:
// Addition
// Subtraction
// All promises must be resolved before console.log-ing all results. 
// */

const plus = (a, b) => a + b;


const minus = (a, b) => a - b;

//The following will be commented in order to keep track of my initial solution
// const delay = (timeout, ) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Go!");
//         }, timeout);
//     })
// }
// delay(2000).then((response) => {
//     const resultPlus = plus(10, 2);
//     const resultMinus = minus (22, 12);
//     console.log("Sum = " + resultPlus + " ||||||| " + "Result substract = " + resultMinus);
// });

// The following has been implemented based on Petar's remarks

const homework = (duration, operation,a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve(operation(a, b));
        }, duration);
    });
}

async function main () {
    const sum = await homework(2000, plus, 44, 13);
    const substract = await homework (1000, minus, 12, 5);
    console.log("result sum: " + sum + " ||||| " + "result substract: " + substract);
};

main();
