//Homework_two//

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

/*Map over email list to create an object that consist of properties:
email
  key: email
  value: actual email address
handle
  key: handle
  value: everything in your email up until the monkey (@) symbol/character
password
  key: password
  value: middle three characters of your handle + first 3 characters that come after the monkey (@) symbol*/

/*Math.floor() method rounds a number down to the nearest integer.
  Math.ceil() method rounds a number rounded up to the nearest integer.
  example: Math.floor(2.6) === 2 and Math.ceil(2,6) === 3;
  We will use math.ceil() method to get middle three characters of handle*/

const map = team.map((team_member) => {
  const handle = team_member.substring(0, team_member.indexOf("@"));
  return {
    email: team_member,
    handle: handle,
    password:
      team_member.slice(
        Math.ceil(handle.length / 2) - 2,
        Math.ceil(handle.length / 2) + 1
      ) +
      team_member.slice(
        team_member.indexOf("@") + 1,
        team_member.indexOf("@") + 4
      ),
  };
});

console.log("list after map", map);

//Filter and find only characters that use @gmail.com address//

const gmail = team.filter((team_member) => {
  return team_member.includes("@gmail.com");
});

console.log("gmail addresses list : ", gmail);
