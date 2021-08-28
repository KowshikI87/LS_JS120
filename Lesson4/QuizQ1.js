class Animal {}
class Cat extends Animal {}
let fluffy = new Cat();
console.log(fluffy instanceof Animal);
console.log(fluffy.__proto__ === Cat.prototype); //true as expected
console.log(fluffy.__proto__ === Animal.prototype); //true as expected
console.log(Cat.prototype instanceof Animal); //true since Cat extends Animal