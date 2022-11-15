/*
We have three types of variables. They are const, let and var. 
Const is for the variable whose value cannot be changed. 
Value of let and var can be changed. 
Difference between this two we are going to discover during the course.
*/

const petar = {
    ime: "Petar",
    godine: 19,
    gde_sam_rodjen: {
      mesto: "Novi Sad",
    },
    da_li_predajemo_JS: true,
  };
  
  const broj = 123;

// console.log("broj", broj);
// console.log("broj", broj);

// broj = 456;

let hello_world = "Hello World";
hello_world = "Hello again";

console.log(hello_world);

var hello_world_again = "Hello World Again";
hello_world_again = "Changed!:)";

console.log(hello_world_again);

// This is how we determine what type the variable is

console.log(typeof broj);
console.log(typeof hello_world_again);

const object = {
  number: 1231,
  novi_objekat: {},
};

console.log(typeof object);
console.log(typeof object.number);
console.log(typeof object.novi_objekat);

//for both non primitive types, 
//the result will be an object if we use typeof, 
//so to determine whether a variable is array, we use isArry. 

const niz = [1, 2, 3, 4];
console.log(typeof niz);
console.log(Array.isArray(niz));
console.log(Array.isArray(object));
