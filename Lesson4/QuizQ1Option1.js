let Animal = {};
let Cat = Object.create(Animal);
let fluffy = Object.create(Cat);
console.log(fluffy instanceof Animal); //we can't use instanceof where right side is an Object