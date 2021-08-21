//Example 1

let obj = {
  monkey: 'yep'
};

console.log(obj.hasOwnProperty('__proto__')); //false. don't know where it comes from
console.log(obj.hasOwnProperty('constructor')); //false. Understood as it is inherited from Object.prototype
console.log('stop');

console.log(obj.constructor === Object); //true
console.log(obj.__proto__ === Object.prototype); //true; deprecated. Use line below
console.log(Object.getPrototypeOf(obj) === Object.prototype); //true
console.log(obj.constructor === Object.prototype.constructor); //true

console.log(Object.prototype.hasOwnProperty("constructor")); //logs true


function testFunction1() {
  console.log("Test Function");
}

console.log(testFunction1);
