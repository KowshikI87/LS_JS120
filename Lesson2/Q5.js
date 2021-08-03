let foo = { bar: 1, xyz: 3 };
let baz = Object.create(foo);
baz.qux = "Why not?";

//console.log(Object.keys(baz).toString());

// for (let prop in baz) {
//   console.log(prop);
// }

// for (let prop in baz) {
//   if (baz.hasOwnProperty(prop)) {
//     console.log(prop);
//   }
// }

//Object.keys(baz).forEach(prop => console.log(prop));

Object.keys(baz).forEach(prop => {
  if (baz.hasOwnProperty(prop)) {
    console.log(prop);
  }
});