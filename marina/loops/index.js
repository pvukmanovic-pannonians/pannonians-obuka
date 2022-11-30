let str = "";

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);

const objekat = {
  a: 1,
  b: 2,
  c: 3,
};

const niz = [1, 2, 3, 4, 5];

 for (let qwe in objekat) {
   console.log("key is " + qwe + ", and value is " + objekat[qwe]);
}

console.log(qwe);

// for (let qwe of niz) {
//   console.log(qwe);
// }

// niz.forEach((jedan_u_nizu, index) => {
//   console.log(jedan_u_nizu, index);
// });

// let n = 0;

// while (n < 30) {
//   n++;
//   if (n == 20) {
//     break;
//   }
//   console.log(n);
// }

// console.log(n);
// expected output: 3
