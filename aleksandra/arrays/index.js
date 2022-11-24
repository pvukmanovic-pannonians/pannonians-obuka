console.log("arrays! :)"); 

let nizBrRastuci = [1, 2, 3, 4, 5];
let nizBrOpadajuci = [5, 4, 3, 2, 1];

console.log("Duzina niza (niz.length) je", nizBrRastuci.length, ".");

console.log("nizBrOpadajuci pre sort-a", nizBrOpadajuci);
console.log("nizBrojevaOpadajuci.sort()", nizBrOpadajuci.sort());
console.log("nizBrOpadajuci posle sort-a", nizBrOpadajuci);

nizBrOpadajuci.push(10);
console.log("nizBrOpadajuci posle push-a", nizBrOpadajuci);

nizBrOpadajuci.pop();
console.log("nizBrOpadajuci posle pop-a", nizBrOpadajuci);
// nizBrOpadajuci.pop();
// console.log("nizBrOpadajuci posle pop-a", nizBrOpadajuci);

nizBrOpadajuci.shift();
console.log("nizBrOpadajuci posle shift-a", nizBrOpadajuci);

nizBrOpadajuci.splice(1, 3);
console.log("nizBrOpadajuci posle splice-a", nizBrOpadajuci);

console.log("===================================================");

niz = [1, 2, 300, 4, 5, 1000];

console.log("niz nakon slice-a", niz.slice(2, 4));
console.log("niz ostaje nepromenjen nakon slice-a", niz);

niz.sort();
console.log("niz posle sort-a", niz);
//sort sortira abecednim redom, i zato nam 1000 dodje odma' posle 1. 
//da bismo valjano sortirali, moramo koristiti common pravilo i primeniti i 
//.sort((a, b) => a -b)  ---> za rastuci niz, odnosno
//.sort((a, b) => b -a)  ---> za opadajuci niz

niz.sort((a, b) => a - b);
console.log("niz sortiran sa komp. funkcijom - rastuce", niz);

niz.sort((a, b) => b - a);
console.log("niz sortiran sa komp. funkcijom - opadajuce", niz);

console.log("da li niz u sebi sadrzi broj 300:", niz.includes(300));

//na dalje smo imali primere za pomesani niz, odnosno niz u kome bi elementi bili razlicitog tipa.
//sa takvim nizom nema prostora za mnogo manipulacije i uobicajeno je da su nizovi istog tipa
