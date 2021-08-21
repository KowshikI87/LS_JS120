const func = function () {};
func.call(this);
console.log('stop');

console.log(func.__proto__ === Function.prototype);
console.log(func.constructor === Function);