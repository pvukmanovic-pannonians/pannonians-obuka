let str = ''

for (let i = 0; i < 9; i++) {
    str = str + i
}

console.log('str: ', str);

const objekat = {
    a: 1,
    b: 2,
    c: 3
}

const niz = [1, 2, 3, 4, 5]
// for in nad objektima
for (let qwe in objekat) {
    console.log("key is: ", qwe + " ", 'and value is ', objekat[qwe]);
}

// for of mozemo nad nizovima
for (let qwe of niz) {
    console.log(qwe);
}

niz.forEach((element, index) => {
    console.log('element niza: ', element + " " + 'index pozicija ' + index);
})
