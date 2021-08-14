console.log("Hello");
console.log([1,2,3]);
console.log({name: 'Srdjan'});

/*
//makes sense
//they are created using constructor
//we have the constructor property in this path:
  //constructorFunction.prototype.constructor
//the objects created using the constructorFunction
  //delegates obj.constructor.name to
  //constructorFunction.prototype.constructor.name
*/
console.log("Hello".constructor.name);
console.log([1,2,3].constructor.name);
console.log({name: 'Srdjan'}.constructor.name);