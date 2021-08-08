//check where constructor property comes from
// let obj1 = {};
// console.log(obj1);
// console.log(obj1.hasOwnProperty('constructor'));
// console.log('stop');

let qux = { foo: 1};
let bar = Object.create(qux);
let bar2 = {};
Object.assign(bar2, qux);

console.log(bar.hasOwnProperty('foo'));
console.log(bar2.hasOwnProperty('foo'));


