let a = {
  first: 'hi',
  second: 'hello',
  logMessage() {
    console.log(this.first);
  }};
let b = Object.create(a);
//logs undefind
//"this" on line 5 refers to object b which does not have the "first" property
console.log(b.logMessage());

