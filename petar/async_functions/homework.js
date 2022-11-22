// EXAMPLE 1

function wait(duration, operation, number1, number2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(operation(number1, number2));
    }, duration);
  });
}

const add = (one, two) => one + two;
const subtract = (first, second) => first - second;

async function main() {
  const addingNumbers = await wait(1000, add, 5, 6);
  const subtractingNumbers = await (wait, subtract, 10, 3);

  console.log(addingNumbers, subtractingNumbers);
}

main();

// EXAMPLE 2

function waitAgain(duration, result) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result);
    }, duration);
  });
}

waitAgain(1000, add(3, 4)).then((resultsFromAddingNumbers) => {
  waitAgain(2000, subtract(199, 12)).then((resultsFromSubtractingNumbers) => {
    console.log(resultsFromAddingNumbers, resultsFromSubtractingNumbers);
  });
});
