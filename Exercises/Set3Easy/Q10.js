class Pet {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.adoptedPetCount = 0;
  }
  changeAdoptedPetCount(number) {
    this.adoptedPetCount += number;
  }

  numberOfPets() {
    return this.adoptedPetCount;
  }
}

class Shelter {
  constructor() {
    this.adoptions = {};
  }

  adopt(owner, pet) {
    if (!Object.keys(this.adoptions).includes(owner.name)) {
      this.adoptions[owner.name] = [`a ${pet.species} named ${pet.name}`];
    } else {
      this.adoptions[owner.name].push(`a ${pet.species} named ${pet.name}`);
    }
    owner.changeAdoptedPetCount(1);
  }

  printAdoptions() {
    Object.keys(this.adoptions).forEach((ownerName) => {
      console.log(`${ownerName} has adopted the following pets:`);
      this.adoptions[ownerName].forEach((petDescription) => {
        console.log(petDescription);
      });
      console.log("\n");
    });
    console.log("\n");
  }
}


let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

//LS had better implementation. Much better in fact. Implement that next
