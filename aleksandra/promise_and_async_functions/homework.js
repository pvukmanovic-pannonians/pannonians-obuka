// This is homework from 21-11-2022 JS class. We learned about promises and async functions. 

/* 
The task was to: 
Calculate results in an async function after waiting a given duration. 
Use only functions for addition and substraction. 
All promises must be resolved before consol.log-ing all results. 
*/

const wait = (duration, odgovor) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(odgovor);
          //reject("GreSkA!");
        }, duration);
    });
};

const addition = (a, b) => {
    return a + b;
};

const substraction = (a, b) => {
    return a - b;
};

async function main() {
    const add = await wait(2000, addition(3, 5));
    const sub = await wait(1000, substraction(3, 5));

    console.log("Results are displayed at the same time: addition:",add,", substraction:",sub,".");
    //Results are shown after all promises were made, which means after the bigger duration pass.
};

main();
