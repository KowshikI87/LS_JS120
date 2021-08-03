function Dog(name, breed, weight) {
  // deleted Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.bark = function() {
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
maxi.bark(); // 'Woof!'

let biggie = new Dog('Biggie', 'Whippet', 9);
biggie.bark(); // 'Yip!'

let dexter = new Dog('Dexter', 'Rottweiler', 50);
dexter.bark();


//first three all returns false
//this is because they are same as comparing
//Object.getPrototypeOf(Dog) === Dog.prototype
//Function's object prototype is not the same as function.prototype
console.log(Object.getPrototypeOf(Dog) === Object.getPrototypeOf(maxi));
console.log(Object.getPrototypeOf(Dog) === Object.getPrototypeOf(dexter));
console.log(Object.getPrototypeOf(Dog) === Object.getPrototypeOf(biggie));
//returns true because all the objects created using the dog function inherits
//from Dog.prototype
console.log(Dog.prototype === Object.getPrototypeOf(biggie));
console.log('hi');