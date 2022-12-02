/**SECTION: Email list compiler per plan tier */
// Get me a list of user emails that have premium subscription programatically
//
// Exam passing when:
//    1. An array of user emails is properly generated
//
/**!SECTION */

/**SECTION: Task data */
const SUBSCRIPTION_TIERS = {
  FREE: "free",
  ADVANCED: "advanced",
  PREMIUM: "premium",
};

const PACKAGES = {
  SEE_ALL: "see_all",
  READ_ALL: "read_all",
  WRITE_SOME: "write_some",
};

const users = [
  {
    email: "Petar",
    name: "petar@example.com",
    plan: {
      inactiveSubscriptions: ["premium"],
      activeSubscriptions: ["free", "advanced"],
    },
    enabledPackages: ["see_all", "write_some"],
  },
  {
    email: "Nikolina",
    name: "nikolina@example.com",
    plan: {
      inactiveSubscriptions: ["free", "advanced"],
      activeSubscriptions: ["premium"],
    },
    enabledPackages: ["write_some"],
  },
  {
    email: "David",
    name: "david@example.com",
    plan: {
      inactiveSubscriptions: ["free", "premium"],
    },
    enabledPackages: ["see_all"],
  },
  {
    email: "Tijana",
    name: "tijana@example.com",
    plan: {
      inactiveSubscriptions: ["free", "premium"],
      activeSubscriptions: ["advanced"],
    },
    enabledPackages: ["see_all", "read_all", "write_some"],
  },
  {
    email: "Igor",
    name: "igor@example.com",
    plan: {
      activeSubscriptions: ["advanced", "premium", "free"],
    },
    enabledPackages: ["see_all", "read_all", "write_some"],
  },
];
/**!SECTION */

/** SECTION:  Work area */

function getPremiumUsers() {
  let premiumUsers = [];

  for (let index = 0; index < users.length; index++) {
    const user = users[index];

    if (
      user.plan.activeSubscriptions &&
      user.plan.activeSubscriptions.length > 0 &&
      user.plan.activeSubscriptions.indexOf(SUBSCRIPTION_TIERS.PREMIUM) != -1
    )
      premiumUsers.push(user.name);
  }
  return premiumUsers;
}

console.log(getPremiumUsers());

/* I will use a function getPremiumUsers.
First i added an empty array in which only premium users will be added.
After that i made for loop.
let index = 0  - go through loop, index of user/position
index < users.length - if we want to loop through an array, we can use the length property 
to specify that the loop should cotinue until we reach the last user.
index++ - index inreased by one after every iteration.
in loop i have set const user = [index] wich is set every time by index.
We need to consider that there is nothing in object user and that activeSubscription is empty or it does not exist.
,so i have checked if it exist and if it is not empty and that there is premium user.
If all conditions are fulfilled email goes in the PremiumUses.
And since we have this : email: "Petar" and name: "petar@example.com", and we need emails of premium users  i did
premiumUsers.push(user.name) not premiumUsers.push(user.email).
***comparson operator != -not equal to
***logical operator && - logical AND
*/
