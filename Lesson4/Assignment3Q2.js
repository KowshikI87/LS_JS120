let PetPrototype = {
  sleep() {
    console.log('I am sleeping');
  },

  wake() {
    console.log('I am awake');
  },
  //they are putting this method as the first method
  //does not really matter but kind of makes it look like
  //Python where constructor is always the first method
  init(animalType, name) {
    this.animalType = animalType;
    this.name = name;
    return this;
  }
};

let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake