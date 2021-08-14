function Animal() {}
function Cat() {}
Cat.prototype = new Animal(); //Cat's prototype is an instance of Animal
let fluffy = new Cat();
console.log(fluffy instanceof Animal);