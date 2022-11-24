// Homework-arrays //

//Create an empty array in a variable called “team”//

let team = [];

console.log("empty array", team);

//Add emails from Attendees list//

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

console.log("array with emails", team);

//Sort them alphabetically//

team.sort();

console.log("sorted array", team);

//Show a number of attendees//

console.log("Number of attendees is :", team.length);

//Find out if petar.vukmanovic@pannonians.com is included in list//

console.log(
  "petar.vukmanovic@pannonians.com is in list :",
  team.includes("petar.vukmanovic@pannonians.com")
);

//Find milana.dokic.021@gmail.com, remove her and place her at the end of the list*//

team.push(team.splice(team.indexOf("milana.dokic.021@gmail.com"), 1)[0]);

console.log("Now Milana is at the end", team);
