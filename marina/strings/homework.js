// store in variable your first name

var firstName = "marina";

console.log(firstName);

// store in a second variable your last name

var lastName = "jokic";

console.log(lastName);

// store your full name in a variable

var fullName = firstName + " " + lastName;

console.log(fullName);

// capitalize your name

console.log(fullName.toUpperCase());

// split your name into an array of strings

var array = fullName.split(" ");

console.log(array);

// show a lenght of your first name, your last name and full name without the empty space

console.log(firstName.length);

console.log(fullName.substring(0, 6).length); 

console.log(lastName.length);

console.log(fullName.substring(7, 12).length);

console.log(fullName.split(" ").join("").length);