// This is homework from 15-11-2022 JS class

/*
The task was to:
    - Store in a variable your first name, all small letters, and in second variable your last name, small letters
    - Store your full name in a variable
    - Capitalize your name
    - Split your name into an array of strings
    - Show a length of your first name, your last name, and then full name but without the empty space.
    - Show all the above-mentioned items in the console log
*/

/*  NOTE:
        The task states only to store first name, surname and full name in variables.
        Hence, I did the changes directly under the scope of console.log method, instead of creating any "helper" variables.
*/

let firstname = "dusan"
let surname = "gajic";
let fullname = firstname + " " + surname // The "pussy mode" would be: let fullname = "dusan gajic" :D

//The following is the most simple and the "ugliest" solution

console.log("The ugly solution:")
console.log(" ") // Just for the output in console log to look more readable

console.log("First name with a capital first letter: " + firstname.replace("d", "D"))
console.log("Surname with a capital first letter: " + surname.replace("g", "G"))
console.log("Fullname split into array: " + fullname.split(" "))
console.log("The length of fullname without whitespaces: " + fullname.replace(" ", "").length)

console.log(" ") // Just for the output in console log to look more readable
console.log("====================================================") // Just for the output in console log to look more readable

//This one that follows should be a bit better :)
console.log(" ") // Just for the output in console log to look more readable

console.log("The following should be a bit better:")
console.log(" ") // Just for the output in console log to look more readable

console.log("First name with a capital first letter: " + (firstname.substring(0, 1)).toUpperCase() + firstname.substring(1, firstname.length))
console.log("Surname with a capital first letter: " + (surname.substring(0, 1)).toUpperCase() + surname.substring(1, surname.length))
console.log("Fullname split into array: " + fullname.split(" "))
console.log("The length of fullname without whitespaces: " + ((fullname.substring(0, fullname.search(" "))) + fullname.slice(fullname.search(" ") + 1)).length)

console.log(" ") // Just for the output in console log to look more readable

//I intentionally used both substring and slice, as well as defining and not defining the "end" parameter (lines 42 and 44)