// const, let, var
const jelena= {
    ime: "Jelena",
    godine: 7,
    gde_sam_rodjen: {
      mesto: "Novi Sad",
    },
    da_li_predajemo_JS: true,
  };
  
  const broj = 123;
  

  let hello_world = "Hello World";
  hello_world = "Hello again";
  
  console.log(hello_world);
  
  var hello_world_again = "Hello World Again";
  hello_world_again = "Changed!";
  
  console.log(hello_world_again);
  
  console.log(typeof broj);
  console.log(typeof hello_world_again);
  
  const object = {
    number: 1231,
    novi_objekat: {},
  };
  
  console.log(typeof object);
  console.log(typeof object.number);
  console.log(typeof object.novi_objekat);
  
  const niz = [1, 2, 3, 4];
  console.log(typeof niz);
  console.log(Array.isArray(niz));
  console.log(Array.isArray(object));

