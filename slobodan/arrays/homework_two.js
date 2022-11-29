/* Homework (call the file homework_two.js) in your folder
Perform first two steps from previous homework
Map over email list to create an object that consist of properties:
email
key: email
value: actual email address
handle
key: handle
value: everything in your email up until the monkey (@) symbol/character
password
key: password
value: middle three characters of your handle + first 3 characters that come after the monkey (@) symbol
Filter and find only characters that use @gmail.com address */

//First two steps are from previous homework//

let team = [];

console.log("This is empty array", team);

team.push(
  "aleksandra.vukasinovic@pannonians.com",
  "jolovicjelena885@gmail.com",
  "marina.jokic@pannonians.com",
  "markogolovic78@gmail.com",
  "milana.dokic.021@gmail.com",
  "ognjen.dokic@noubis.com",
  "petar.vukmanovic@pannonians.com",
  "slobodan.ucenje@gmail.com",
  "stevanovic.jelena55@gmail.com",
  "timotijevic@outlook.com",
  "jovanovska.s.sonja@gmail.com"
);

console.log("This is team again: ", team);

/* Next job is to map our team and make new array of objests. Those objects have 3 properties,
email, handle and password*/

const team2 = team.map((object) => {
  // handle is extracted from the array using split. With [0] i managed to extract part of the string until split('@').
  const handle = object.split("@")[0];

  // to extract first 3 char after '@' i used index of +1 to find the part of the string that i substringed to the required length.

  const first3 = object.substring(object.indexOf("@") + 1).substring(0, 3);

  // to find the middle 3 characters i needed two constants in case if number of characters is odd or even.
  //After that i used modulus as the condition if the number of characters is odd or even.
  //after that i used slice to extract the required number of characters to form password as per request.

  const partString1 = (handle.length + 1) / 2;
  const partString2 = handle.length / 2;
  const middle3 =
    handle.length % 2 != 0
      ? handle.slice(partString1 - 2, partString1 + 1)
      : handle.slice(partString2 - 2, partString2 + 1);
  return {
    email: object,
    handle: handle,
    password: middle3 + first3,
  };
});

console.log("Array of objects with properties we want", team2);

//filtered newly created array using includes to form a new array that consists of only gmail emails.
1
console.log(
  "filtered team 2",
  team2.filter((filteredObject) => filteredObject.email.includes("@gmail.com"))
);
