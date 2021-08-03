const OPERATIONS = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
  '/': (num1, num2) => num1 / num2,
};

let getOperation = operation => OPERATIONS[operation];

let compute = function(operation, num1, num2) {
  return operation(num1, num2);
};

console.log(compute(getOperation('+'), 5, 9) === 14);