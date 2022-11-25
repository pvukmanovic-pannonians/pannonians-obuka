// This is homework from 24-11-2022 JS class. We continued learning about arrays. 

/*
The task was to: 
    Perform first two steps from previous homework.
    Map over email list to create an object that consist of properties:
        email
            key: email
            value: actual email address
        handle
            key: handle
            value: everything in your email up until the monkey (@) symbol/character
        password
            key: password
            value: middle three characters of your handle + 
                   first 3 characters that come after the monkey (@) symbol
Filter and find only characters that use @gmail.com address
*/  

//First step is very simple. Actually just copy/paste from the past homework. 

let team = [];

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

//The next step was the most demanding.
//We have a few jobs to do. 
//We used the function map to transform our array into an array of objects, 
//then we had to recall some methods on strings and applied them to each individual member of the array.

const email = team.map((team_member) => {
    const handle = team_member.substring(0, team_member.indexOf("@"));
//making handle is extracted into a separate variable, because it is used in several times
    return {
        email: team_member, 
        handle: handle,
        password: team_member.slice(Math.ceil(handle.length / 2)-2, Math.ceil(handle.length / 2)+1) 
                  + team_member.slice((team_member.indexOf("@")+1), team_member.indexOf("@")+4)
    }
});

console.log("Our list transformed into arrays of objects according to the given criteria:", email);


//The last step was to filter and find only characters that use @gmail.com address. 
//It was simple considering that it is one of the applications of function filter that we also covered in the lectures.

const gmail = team.filter((team_member) => {
    return team_member.includes("@gmail.com");
});

console.log("List of the e-mails which are g-mails adress:", gmail);
