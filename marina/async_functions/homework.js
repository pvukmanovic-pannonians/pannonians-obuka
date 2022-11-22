/* Calculate results in an async function after waiting a given duration.
We will use functions for addition and subtraction.
All promises must be resolved before console.log-ing results. */

function wait(duration, answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(answer);
    }, duration);
  });
}

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;

async function main() {
  const answeradd = await wait(3000, addition(2, 2));
  const answersub = await (wait, subtraction(10, 3));

  console.log("Answers are simultaneously shown after 3 seconds wait");
  console.log("Answer for addition is: ", answeradd);
  console.log("Answer for substraction is: ", answersub);
}

main();
