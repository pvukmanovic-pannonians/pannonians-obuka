console.log("arrays!");

let niz = [1, 2, 3, 4, 5];

console.log("niz.length", niz.length);

const nizBrojeva = [5, 4, 3, 2, 1];

console.log("nizBrojeva pre sorta", nizBrojeva);
console.log("nizBrojeva.sort()", nizBrojeva.sort());
console.log("nizBrojeva posle sorta", nizBrojeva);

niz.push(10);

console.log("niz posle pusha", niz);

niz.push(11);

console.log("niz posle pusha broja 11", niz);

niz.pop();
niz.pop();

console.log("niz nakon pop", niz);

niz.shift();

console.log("niz nakon shifta", niz);

niz.splice(0, 0, 1);

console.log("niz nakon splice-a", niz);

niz.splice(1, 3);

console.log("niz nakon splice-a i brisanja", niz);

niz.splice(1, 1);

console.log("niz nakon splice-a i brisanja jos jednom", niz);

niz = [1, 2, 3, 4, 5];

niz.splice(niz.length - 1, 1);

console.log("niz nakon splice-a i simulacije pop-a", niz);

console.log("niz nakon slice", niz.slice(2, 4));
console.log("niz ostaje nepromenjen nakon slice", niz);

const nizImena = ["Petar", "Aleksandra", "Marina", "Jelena", "Aca"];

nizImena.sort();

console.log("nizImena nakon sort-a", nizImena);

const noviNizBrojeva = [1, 2, 3, 100, 500, 19999];

noviNizBrojeva.sort();

console.log("noviNizBrojeva sortiran", noviNizBrojeva);

noviNizBrojeva.sort((a, b) => a - b);

console.log("noviNizBrojeva sortiran sa komp. funkcijom", noviNizBrojeva);

noviNizBrojeva.sort((a, b) => b - a);

console.log(
  "noviNizBrojeva sortiran sa komp. funkcijom obrnuto",
  noviNizBrojeva
);

console.log("noviNizBrojeva.includes(19999)", noviNizBrojeva.includes(19999));
console.log("noviNizBrojeva.includes(999)", noviNizBrojeva.includes(999));

const pomesanNiz = [1, 2, 3];
pomesanNiz.push("qweqwe");

console.log("pomesanNiz", pomesanNiz);
console.log(
  "pomesanNiz.sort()",
  pomesanNiz.sort((a, b) => b - a)
);
