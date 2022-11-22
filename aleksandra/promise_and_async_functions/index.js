/*const wait = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("jupiiii!!");
          //reject("GreSkA!");
        }, duration);
    });
};*/

//naredne linije koda nam simuliraju samostalno opredeljivanje za 'resolve' ili 'reject'
//*do sada samo sami to radili ;) 

const wait = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const broj = Math.random() * 100;
            console.log("broj: ", broj);
            if (broj < 50) {
               resolve("jupiiii!!");            
            } else {
                reject ("a ne ne ne");
            }
        }, duration);
    });
};

/*wait(1000)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
        console.log("doslo je do greske: ", error);
    });
*/

//const cekamoObecanje = wait(2000);
//console.log(cekamoObecanje);

/*cekamoObecanje
    .then((rezulat) => {
      console.log(cekamoObecanje);
      console.log(rezulat);
    })
    .catch((error) => {
      console.log(cekamoObecanje);
      console.log(error);
    })
    .finally(() => {
        console.log("sve je gotovo!")
    });
*/

//console.log("Neki tekst da nam pokaze redosled izvrsavanja f-ja. ;)");

//const main = async () => {};
async function main() {
    try {
        const odgovor = await wait(1000);
        console.log("odgovor je:", odgovor)
        console.log("idemo daljeee, drugi nacin ;)");
    } catch (error) {
        console.log("Uhvacena greska", error)
    }
};

main();

