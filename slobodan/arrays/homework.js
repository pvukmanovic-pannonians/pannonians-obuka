/*Homework: Create an empty array in a variable called “team”
            All all the email from this document from Attendees list
            Sort them alphabetically
            Show us a number of attendees
            Find out if petar.vukmanovic@pannonians.com is included in that list
            In this sorted list, find milana.dokic.021@gmail.com, remove her and place her at the end of the list*/

//i'll create empty array//

let team = [];

console.log('This is empty array called team' , team);

console.log('');

//I'll push all attendees in array//

team.push("aleksandra.vukasinovic@pannonians.com" , "jolovicjelena885@gmail.com" ,
          "marina.jokic@pannonians.com" , "markogolovic78@gmail.com" , 
          "milana.dokic.021@gmail.com" , "ognjen.dokic@noubis.com",
          "petar.vukmanovic@pannonians.com" , "slobodan.ucenje@gmail.com" ,
          "stevanovic.jelena55@gmail.com" , "timotijevic@outlook.com" , 
          "jovanovska.s.sonja@gmail.com");

console.log('This is team array with email adress of all attendees' , team);

console.log('');

//I'll sort alphabetically all attendees//

team.sort();

console.log('This is team array with email adress of all attendess after sort' , team);

console.log('');

//I'll check lenght of this array//

console.log('In the team we have :' , team.length , 'people');

console.log('');

//I'll check is petar.vukmanovic@pannonians.com included in this array//

console.log('Lets check is petar.vukmanovic@pannonians.com in the team' , team.includes('petar.vukmanovic@pannonians.com'));

console.log('');

//I'll check on witch position in this array is milana.dokic.021@gmail.com//

console.log('Lets find on witch position in array is Milana Dokic' , team.indexOf('milana.dokic.021@gmail.com'));

console.log('');

//I'll splice out milana from array//

team.splice(5,1);

console.log('now we will splice out Milana Dokic from team' , team);

console.log('');

//I'll checkout again how many strings are in this arrey, so i can see withc one is last one//

console.log('check now how many peaople we have in team , We have:' , team.length , 'people');

console.log('');

//Use splice again from the last string in arrey with secound param 0 so we will not delete any, and splice in milana again at the and of array//

team.splice(10,0,"milana.dokic.021@gmail.com");

console.log('We will show that splice can put Milana Dokic back at the end of array' , team);





