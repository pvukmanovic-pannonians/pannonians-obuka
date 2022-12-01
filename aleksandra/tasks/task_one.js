/**SECTION: Count a char */
// From a given sentence, give me a number of how many times a character
// repeats in that sentence.
//
// Exam passing when:
//    1. An object with character as a key and number as a value is logged,
//       and each character frequency is correct
//
/**!SECTION */

/**SECTION: Task data */

const testCharacterFrequency = `
Wayfarers locavore raclette,
la croix trust fund bicycle rights copper mug sartorial PBR&B etsy.
Tattooed austin readymade mixtape.
Church-key messenger bag kombucha cray hot chicken meh.
Literally kogi palo santo, same green juice normcore edison bulb la croix ascot schlitz ramps paleo tousled dreamcatcher shaman.
Forage sriracha fixie poke, keffiyeh yes plz paleo kombucha.
Activated charcoal prism brunch chicharrones vaporware pabst drinking vinegar.
Everyday carry bitters normcore farm-to-table 90's hammock literally church-key.
Raw denim kinfolk cray ascot keytar coloring book post-ironic tumeric trust fund schlitz hammock.
`;

/**!SECTION */

/** SECTION:  Work area */

const countChars = testCharacterFrequency => {
    const rs = {}
    for (let ch of testCharacterFrequency) {
        if (ch) rs[ch] = rs[ch] + 1|| 1;
    }
    return rs;
};

// We have created a function that is actually a solution to the task. 
// After that, we'll just call her to 'console.log' for writing. 
// The function takes as a parameter the string we are testing. 
// In the code block we first instantiated the variable 'rs' which is an empty object. 
// We passed each character in the string through the for loop, 
// and through the if loop we return it - if there is a character, 
// we return that character as a key, and its number of repetitions as a value (each time increased by one).

console.log("Our object of frequency is:",countChars(testCharacterFrequency));

const obj = countChars(testCharacterFrequency);

const ordered1 = Object.keys(obj)
    .sort()
    .reduce(
        (acc, key) => {
            acc[key] = obj[key];
            return acc;
        }, {}
    );

//console.log(ordered1);

// Extra task for the task_one was to sort our result. 
// We done that in the lines below. 
// First we used method Object.keys() to returns an array of keys from our object. 
// Than we used method sort() which we be abled to used because we had a array. 
// This method sorted array for us. 
// And finally at the end we used method forEach() to show our result. 
// This method passed trough all elements and added to them their values. 

const ordered = Object.keys(obj)
      .sort()
      .forEach((char, i) => {
          console.log(char, obj[char]);
       });

/** !SECTION */
