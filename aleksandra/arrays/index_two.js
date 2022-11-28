let team = [];
//console.log("Created empty arrey 'team':", team, ".");

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

//console.log("Our array 'team' now is:", team);

// const marina = team.find((jedan_u_nizu) => {
//     if (jedan_u_nizu === "marina.jokic@pannonians.com") {
//         return true;
//     }
//     return false;
// });

const marina = team.find(
    (jedan_u_nizu) => jedan_u_nizu === "marina.jokic@pannonians.com"
);

console.log("marina", marina);

const manjeOd24 = team.find((jedan_clan_niza_redom) => {
    if(jedan_clan_niza_redom.length < 24) return true;
    return false;
});

console.log("manjeOd24",manjeOd24);

const jesteOutlook = team.find((clan_niza) => {
    return clan_niza.includes("outlook.com") ? true : false;
});

console.log("jesteOutlook", jesteOutlook);

const gmails = team.filter((jedan_od_clanova_niza) => {
    return jedan_od_clanova_niza.includes("@gmail.com");
});

console.log("gmails",gmails);

const bigEmails = team.filter((qweqwe) => {
    return qweqwe.length > 26;
});

console.log("bigEmails", bigEmails);

const mapaaa = team.map((team_member) => {
    return {
        name: team_member, 
        email_length: team_member.length
    }
});

console.log("mapaaa", mapaaa);

const duzinaMailova = team.map((clan) => clan.length);

console.log("duzinaMailova", duzinaMailova);

const brojevi = (clanNiza) => {
    return clanNiza.length;
};

const duzinaMailovaOpet = team.map(brojevi); 

console.log("duzinaMailovaOpet",duzinaMailova);

const reduced = duzinaMailovaOpet.reduce((acc, jedan_u_nizu) => {
    acc = acc + jedan_u_nizu;
    return acc;
}, 0);

console.log("reduced", reduced);

const gmailsAgain = team.reduce(
  (acc, team_member) => {
    if (team_member.includes("@gmail.com")) {
       acc.gmail.push(team_member);
       return acc;
    }
    acc.others.push(team_member);
    return acc;
 }, 
 {gmail: [], others: []} 
);

console.log("gmailsAgain", gmailsAgain);
