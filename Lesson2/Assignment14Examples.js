// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     console.log(this);
//     [1, 2, 3].forEach(function(number) {
//       console.log(this);
//       console.log(String(number) + ' ' + this.a + ' ' + this.b);
//     });
//   },
// };

// obj.foo();

// => 1 undefined undefined
// => 2 undefined undefined
// => 3 undefined undefined

[1, 2, 3].forEach(number => console.log(this));
console.log(Object.keys(this));
console.log('stop');

function test() {
  console.log(this);
}

test();