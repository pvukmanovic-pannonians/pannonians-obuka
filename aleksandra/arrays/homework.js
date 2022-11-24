// This is homework from 23-11-2022 JS class. We learned about arrays. 

/* 

The task was to: 
Create an empty array in a variable called “team”.
Fill the array with the list of emails - all the email from this document from Attendees list. 
Sort them alphabetically.
Show us a number of attendees.
Find out if petar.vukmanovic@pannonians.com is included in that list.
In this sorted list, find milana.dokic.021@gmail.com, remove her and place her at the end of the list. 

*/

/*Attendees list for our task: 

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

//First step is to create an empty array called "team". 

let team = [];
console.log("Created empty arrey 'team':", team, ".");

//Then we have to fill that array with e-mails from the list.
//We will complete this step using the method push.

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
    "jovanovska.s.sonja@gmail.com",
);

console.log("Our array 'team' now is:", team);
 
//Now we have to sort 'team' alphabetically. 
//We will complete this step using the method sort. 

team.sort();
console.log("Our array 'team' sorted is:", team);

//To show the number of attendees we will use the property length. 

console.log("Number of attendees is:", team.length, ".");

//To find if 'petar.vukmanovic@pannonians.com' is included in our list we are going to use the method include. 

console.log("Is 'petar.vukmanovic@pannonians.com' included in our list:", team.includes("petar.vukmanovic@pannonians.com"),".");

//The last step is to, in this sorted list, find 'milana.dokic.021@gmail.com', 
//remove her and place her at the end of the list.
//To complete all of this we will use several methods. 

const subject = 'milana.dokic.021@gmail.com';

const subjectTarget = team.splice(team.indexOf(subject), 1);
const milana = subjectTarget[0];
console.log("Our list without subject:", team);

//We found out what position that is subject by method indexOf.
//To remove subject from our list we use method splice. 

team.splice(team.length, 0, milana);
console.log("Our list with subject at the end:", team);```

//One more application of the splice method is to insert an element into an array. 
//In this case, the first parameter is always the position we insert (in our case .length, because we insert at the end of array), 
//the second parameter is 0, because we are not deleting anything, and the third parameter is elem. which we insert. 
