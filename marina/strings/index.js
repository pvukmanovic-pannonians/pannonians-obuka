const string = "The quick brown fox jumps over the lazy dog";

 console.log(string.length);

const ime = "Petar";

// console.log(ime.length); // 5

// console.log(string.repeat(5));
// console.log("x".repeat(5) + "l");

// console.log(string + " <-> " + ime);

// console.log(string.includes(ime));
// console.log(string.includes("brown"));

// console.log(string.endsWith("fox"))
// console.log(string.endsWith("dog"))

// console.log(string.startsWith("dog"))
// console.log(string.startsWith("The"))
// console.log(string.startsWith("the"))

// console.log(string.toLowerCase())
// console.log(string.toLowerCase().startsWith("the"))

// console.log(ime.padEnd(20, '.'))
// console.log(string.padEnd(10, '.'))
// console.log(ime.padStart(10, '.'))

// console.log("    qwe      ".trim().length)
// console.log("    qwe      ".trimEnd())
// console.log("    qwe      ".trimStart().length)

// console.log(string[0] + string[1] + string[2])
const foxLocation = string.search("jumps");
// console.log(foxLocation);
// console.log(string[foxLocation]);

const noviString = string.substring(0, foxLocation);
// console.log(noviString.length);
// console.log(noviString.trim().length);

const nizOdStringa = string.split(" ");
// console.log(nizOdStringa)

// console.log(nizOdStringa.join('-'))

// console.log(string.substring(0, string.search(" over")));

console.log(string.split(' ').join('_'))