let a = { b: 3, c: 4};
let topProtoType = Object.getPrototypeOf(a);
console.log(Object.getPrototypeOf(a));
console.log('stop');
console.log(Object.prototype);
console.log(Object.prototype === topProtoType);
console.log({} === Object.prototype);