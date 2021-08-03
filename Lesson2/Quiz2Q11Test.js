let logResult = function(func) {
  let result = func();
  console.log(result);
  return result;
};

let foo = function() {
  let sue = {
    name: 'Sue Perkins',
    age: 37,
    myAge() {
      let self = this;
      return `${self.name} is ${self.age} years old`;
    },
  };
  logResult(sue.myAge);
};
foo();