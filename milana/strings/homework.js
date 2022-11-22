const ime = "milana"
const prezime = "dokic"
const imePrezime = ime + " " + prezime

console.log(ime);
console.log(prezime);
console.log(imePrezime);

console.log(imePrezime.toUpperCase());

const lokacijaPrezimena = imePrezime.search("dokic")
console.log(lokacijaPrezimena);
console.log(imePrezime.charAt(0).toUpperCase() + imePrezime.substring(1, 7) + imePrezime.charAt(7).toUpperCase() + imePrezime.substring(8));

const niz = imePrezime.split(" ")
console.log(niz);

console.log(ime.length);
console.log(prezime.length);
console.log(niz.join("").length);
