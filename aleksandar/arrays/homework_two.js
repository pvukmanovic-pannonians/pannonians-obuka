// Homework from 24-11-2022

/*
The following needs to be done:

Create an empty array in a variable called “team”
Add all the email from this document from Attendees list
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
Filter and find only characters that use @gmail.com address

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

/*
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
*/

const rezultat = (teamMember) => {
    const positionMonkey = teamMember.search("@") // Determines @ position
    const handle = teamMember.substring(0, positionMonkey) // extracts handle from the email address
    const handleLength = handle.length; // checks handle length in order to determine the middle
    const domain = teamMember.substring(positionMonkey + 1) // extracts domain without @ from the email address
    const domainFirst3 = domain.substring(0, 3) // extracts the second part of the password that will be created

    let pass = ""

    if (handleLength > 3) { // if the handle is longer than 3 charachters, it will extract the middle 3, otherwise it makes no sense.
        let positionStart = Math.floor(handleLength / 2) - 1 // In the length of the handle is odd number, the real middle 3 do exist. In the case of even numbers, the real middle does not exist, so we can take the same starting point as for odd number
        let handleMiddle3 = handle.substring(positionStart, positionStart + 3)
        pass = handleMiddle3 + domainFirst3 
    }

    else pass = handle + domainFirst3 // if handle is not longer than 3 charachters, then we will use the entire handle
    return {
        email: teamMember,
        handle: handle,
        password: pass
    }
}

const finalResult = team.map(rezultat)

console.log(finalResult)


// Filter and find only characters that use @gmail.com address. By "characters" I presume it was meant "addresses"

const gmail = team.filter((teamMember) => {
    return teamMember.includes("@gmail.com")
})
console.log("only gmail result: " + gmail)
