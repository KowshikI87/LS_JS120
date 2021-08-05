
//LS solution makes sense and produces the right result
function User(first, last) {
  this.name = first + ' ' + last;
  this.testMethod = function() {
    return "nothing";
  };
}

let user1 = new User('John', 'Doe');
console.log(user1.hasOwnProperty('testMethod'));
console.log(user1);
console.log(User.prototype);
console.log('stop');
