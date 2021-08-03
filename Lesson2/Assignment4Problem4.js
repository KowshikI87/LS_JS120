let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);


function assignProperty(obj, propertyName, value) {
  if (obj.hasOwnProperty(propertyName)) {
    obj[propertyName] = value;
    return;
  }

  let prototype =  Object.getPrototypeOf(obj);
  while (prototype) {
    if (prototype.hasOwnProperty(propertyName)) {
      prototype[propertyName] = value;
      return;
    }
    prototype = Object.getPrototypeOf(prototype);
  }
}

//LS solution is better as it is more concise

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false
