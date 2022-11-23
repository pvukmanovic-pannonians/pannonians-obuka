
// Homework was to calculate results in an async function for addition and substraction after waiting a given duration.//

/* I'll write async functions for both of operations next,
    than ill try to log results in same time */

function addition(duration,num1,num2) {
    return new Promise((resolve , reject) => {
        setTimeout(() => { 
          const answer = (num1 + num2);       
            resolve(answer);
        } , duration);
    });
}

function substraction(duration,num1,num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           const answer = (num1 - num2) ;
            resolve(answer);
        }, duration)
    })
}

//After make both functions ill make 2 new const's for add and sub//

async function main(){
try {
    const answerAddition = await addition(1000,5,7);
    const answerSubstraction = await substraction(1000,14,4);
    console.log('answer addition is:' , answerAddition);
    console.log('answer substraction is:' , answerSubstraction)
    }    
catch (error) {
    console.log('error catch' , error);
    }
}

main();

//I'll make one more string to show that both functions wait for some time and than give results//

console.log ('Lets get answer for 5+7 and 14-4');