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

//also returns false because maxi, dexter, biggie uses Dog.myPrototype
//as prototype not Dog's __proto__
console.log(Object.getPrototypeOf(Dog) === Object.getPrototypeOf(maxi));
console.log(Object.getPrototypeOf(Dog) === Object.getPrototypeOf(dexter));
console.log(Object.getPrototypeOf(Dog) === Object.getPrototypeOf(biggie));

//returns false because we have explicitly set the object prototype of biggie
//as well as maxi, dexter to Dog.myPrototype
console.log(Dog.prototype === Object.getPrototypeOf(biggie));
console.log('hi');