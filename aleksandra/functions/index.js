function capitalizeName(firstName, lastName) {
    // Ovde uradimo veliko slovo prvog parametra funkcije
    const capitalizedFirstName =
      firstName[0].toUpperCase() + firstName.substring(1);
  
    // Ovde uradimo veliko slovo drugog parametra funkcije
    const capitalizedLastName = lastName[0].toUpperCase() + lastName.substring(1);
  
    // Vracamo nazad string, gotovo resenje
    return capitalizedFirstName + " " + capitalizedLastName;
  }
  
  const petarFullName = capitalizeName("petar", "vukmanovic");
  const petarFullName2 = capitalizeName("vukmanovic", "petar");
  
  console.log("petarFullName: ", petarFullName);
  console.log("petarFullName: ", petarFullName2);
  
  console.log(
    "nesto velikim slovima: ",
    capitalizeName("nesto", "velikim slovima")
  );
  
  const evenOrOdd = (number) => {
    return number % 2 === 0;
  };
  
  console.log(evenOrOdd(1));
  console.log(evenOrOdd(2));
  console.log(evenOrOdd(1872538127538712));
  
  const hello = (name) => "Hello " + name;
  
  console.log(hello("Ognjen"));
  console.log(hello("Marina"));
  console.log(hello("Aleksandra"));
  console.log(hello("Aleksandar"));
  