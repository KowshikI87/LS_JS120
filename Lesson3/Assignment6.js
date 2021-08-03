// function test() {
//   console.log('hi');
// }

// console.log(test.prototype);
// console.log('hi');

function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.myPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  }
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);
maxi.bark(); // 'Woof!'

maxi.hasOwnProperty('bark'); // false
dexter.hasOwnProperty('bark'); // false
biggie.hasOwnProperty('bark'); // false
console.log(Object.getPrototypeOf(maxi).bark === Dog.myPrototype.bark); // true
console.log(Object.getPrototypeOf(dexter).bark === Dog.myPrototype.bark); // true
console.log(Object.getPrototypeOf(biggie).bark === Dog.myPrototype.bark); // true

// let test = Dog.prototype;
// let test1 = maxi.__proto__;
// let test2 = dexter.__proto__;
// let test3 = biggie.__proto__;
// console.log(test1 === test2);
// console.log(test2 === test3);
// console.log(test === test1);
console.log(Object.getPrototypeOf(Dog) === Object.getPrototypeOf(maxi));
console.log(Object.getPrototypeOf(Dog) === Object.getPrototypeOf(dexter));
console.log(Object.getPrototypeOf(Dog) === Object.getPrototypeOf(biggie));
console.log(Dog.prototype === Object.getPrototypeOf(biggie));
console.log('hi');