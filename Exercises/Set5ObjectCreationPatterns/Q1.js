/* eslint-disable no-lonely-if */
/*
Understanding problem
- write a method ancestors that returns the prototype chain (ancestors)
of a calling object as an array of object names

when we reach the last prototype, Object.prototype or null,
then name property gives undefined

so when name is undefind, if the object is truthy then it is
Object.prototype otherwise it is null

at that point stop looping

Examples and Test Cases
- Given

Other Cases:
console.log(Object.prototype.__proto__); //outputs null
Object.prototype does not have name property. So when
accessing the name property gives falsy value (undefined) then
if the object is truthy then the last __proto__ is object.prototype
otherwise, it is null (so don't add anything to array)

Data Structures
- array

Algorithm
- lets define the method on foo.
  - The only other place to define it would be in
  Object.prototype but it is not recommended

- High Level Algorithm
  - use a while loop to keep getting the __proto__ of passed in object (this)
  - if the prototype has a name property then append obj1.__proto__.name
  - otherwise
    - if the prototype is truthy then append Object.__prototype__ and
      break out of loop
    - if the protoytpe is falsy then append nothing and
    break out of loop anyways


Code

*/

// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';


foo.ancestors = function() {
  let protoytpeChain = [];
  let prototype = Object.getPrototypeOf(this);
  while (true) {
    if (prototype.hasOwnProperty("name")) {
      protoytpeChain.push(prototype["name"]);
    } else { break }
    prototype = Object.getPrototypeOf(prototype);
  }

  //not really needed since any object not having 
  //foo in its protype chain won't have the ancestors method
  if (prototype) {
    protoytpeChain.push("Object.prototype");
  }

  return protoytpeChain;
};

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']

