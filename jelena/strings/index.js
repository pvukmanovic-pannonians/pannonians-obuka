 const string = "the quick brown fox jumps over the lazy dog";

 console.log(string.length);

 const ime = "Jelena";
 console.log(ime.length);

 console.log(string.repeat(5));
 console.log("x".repeat(5) + "n");

 console.log(string + "_____ " + ime);

 console.log(string.includes(ime));
 console.log(string.includes("brown"));
 console.log(string.endsWith("fox"));
 console.log(string.startsWith("the"));

 console.log(string.toLocaleLowerCase().startsWith("the"));

 console.log(ime.padEnd(20, '.')); 
 console.log(ime.padStart(10, '.'));

 console.log("   bla    ".trim().length);

console.log(string[2]);
//console.log(string.search('fox')); 

const foxLocation =string.search('fox');
console.log(string[foxLocation]);

const noviString = string.substring(0, foxLocation);
console.log(noviString);

const nizOdStringa = string.split(" ");
console.log(nizOdStringa);
console.log(nizOdStringa.join('-'));

console.log(string.substring(0, string.search(" over")));

console.log(string.split(' ').join('_')) 

