function wait(duration) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("yeee");
      }, duration);
    });
  }
  
  // const cekamoObecanje = wait(2000);
  // console.log(cekamoObecanje);
  
  // cekamoObecanje
  //   .then((rezultat) => {
  //     console.log(cekamoObecanje);
  //     console.log(rezultat);
  //   })
  //   .catch((error) => {
  //     console.log(cekamoObecanje);
  //     console.log(error);
  //   })
  //   .finally(() => {
  //     console.log("sve je gotovo!");
  //   });
  
  // console.log("Ovde sada neki random text");
  
  // const main2 = async () => {}
  
  async function main() {
    // ovde cemo da uradimo sve zadatke
    try {
      const odgovor = await wait(1000);
      console.log("odgovor je: ", odgovor);
      console.log("idemo daljeeeeeeee");
    } catch (error) {
      console.log("error uhvacen: ", error);
    }
  }
  
  main();
  