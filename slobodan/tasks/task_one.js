/**SECTION: Multiplication table */
// Integrate a multiplication table for numbers from
// 1 to 10, from lowest to highest. The goal is to write as little
// code as possible.
//
// Exam passing when:
//    1. Each multiplication table is created and logged.
//    2. The function that multiplies numbers should take an argument, and that argument
//       will state for how much a table should run. For example, that argument can be
//       number 12, and then all the numbers in the array below in task data should be multiplied
//       up to 12 times, for each number, starting from 1.
// example: https://i.pinimg.com/originals/e0/ca/5f/e0ca5f21a16a02edbba8b758e7aa4af5.jpg
//
/**!SECTION */

/**SECTION: Task data */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**!SECTION */

/** SECTION:  Work area */

const numbers1 = (total) => Array.from({ length: total }, (_, i) => ++i),
  multX = (f) =>
    numbers.reduce((t, x) => {
      t[x.toString()] = x * f;
      return t;
    }, {});
console.table(
  numbers1(12).reduce((e, n) => {
    e[n.toString()] = multX(n);
    return e;
  }, {})
);

/** !SECTION */
