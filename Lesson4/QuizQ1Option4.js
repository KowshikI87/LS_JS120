class Animal {}
class Cat extends Animal {}
class Cat2 {}
let fluffy = new Cat();
let fluffy2 = new Cat2();
console.log(fluffy instanceof Animal);

console.log(fluffy.__proto__ === Cat.prototype); //true as expected
console.log(Cat.prototype === Animal.prototype); //false as expected
console.log(fluffy.constructor === Cat); //true as expected
console.log(Cat.__proto__ === Animal); //true


// console.log(fluffy2 instanceof Animal);
// console.log(fluffy2 instanceof Cat2);