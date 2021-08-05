//Bad solution
//Works but for line 13
//we create properties on the global objct
// function User(first, last) {
//   this.name = first + " " + last;
//   return this;
// }

//LS solution makes sense and produces the right result
function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last);
  }
  else this.name = first + ' ' + last;
}


let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe