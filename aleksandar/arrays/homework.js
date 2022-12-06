// This file is related to homework from 23-11-2022
/*
The assigment was to:
Create an empty array in a variable called “team”
Add all the email from this document from Attendees list
Sort them alphabetically
Show us a number of attendees
Find out if petar.vukmanovic@pannonians.com is included in that list
In this sorted list, find milana.dokic.021@gmail.com, remove her and place her at the end of the list

List for you to quickly use for team:
aleksandra.vukasinovic@pannonians.com
jolovicjelena885@gmail.com
marina.jokic@pannonians.com
markogolovic78@gmail.com
milana.dokic.021@gmail.com
ognjen.dokic@noubis.com
petar.vukmanovic@pannonians.com
slobodan.ucenje@gmail.com
stevanovic.jelena55@gmail.com
timotijevic@outlook.com
jovanovska.s.sonja@gmail.com
*/

let team = []

// Add all the email from this document from Attendees list

team.push("aleksandra.vukasinovic@pannonians.com", 
"jolovicjelena885@gmail.com", 
"marina.jokic@pannonians.com", 
"markogolovic78@gmail.com", 
"milana.dokic.021@gmail.com", 
"ognjen.dokic@noubis.com", 
"petar.vukmanovic@pannonians.com", 
"slobodan.ucenje@gmail.com", 
"stevanovic.jelena55@gmail.com", 
"timotijevic@outlook.com", 
"jovanovska.s.sonja@gmail.com")

// The following will sort the team alphabetically

console.log("Team before sort: " + team)
console.log("") // to make the result more readable

team.sort()

console.log("Team after sort: " + team)
console.log("") // to make the result more readable

// The following with display the number of team members

console.log("Team has " + team.length + " members.")
console.log("") // to make the result more readable

// The folloing cheks whether petar.vukmanovic@pannonians.com is included in the list

const petarIncluded = team.includes("petar.vukmanovic@pannonians.com")
console.log("Is Petar in the list: " + petarIncluded)
console.log("") // to make the result more readable

// In this sorted list, find milana.dokic.021@gmail.com, remove her and place her at the end of the list

const milana = "milana.dokic.021@gmail.com"
const milanaLocation = team.indexOf(milana)
console.log("Milana's location in the team: " + milanaLocation)
team.splice(milanaLocation, 1)
team.push(milana)
console.log("") // to make the result more readable
console.log("Team after moving Milana at the end: " + team)
console.log("") // to make the result more readable
