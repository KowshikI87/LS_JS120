function Animal() {}
function Cat() {}
Cat.prototype = new Animal();
function makeCat() {
  return {};
}

let fluffy = makeCat();
//I understand why false because makeCat returns an empty object
//and has no relationship with the functin Animal
console.log(fluffy instanceof Animal);