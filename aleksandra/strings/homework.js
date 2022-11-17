/*Store in a variable your first name, all small letters, and in second variable your last name, small letters
Store your full name in a variable
Capitalize your name
Split your name into an array of strings
Show a length of your first name, your last name, and then full name but without the empty space*/

const firtsName = "aleksandra";
const lastName = "vukasinovic";

const fullName = firtsName + " " + lastName;
//console.log(fullName);

console.log("My full name is:" + " " + fullName.replace("a", "A").replace("v", "V") + ".");
console.log("My full name is an array of strings:" + " " + fullName.split(" ") + ".");
console.log("Length of my first name is" + " " + firtsName.length + ".");
console.log("Length of my last name is" + " " + lastName.length + ".");
console.log("Length of my full name without the empty space is" + " " + fullName.split(" ").join('').length + ".");
