let foo = {
  a: 1,
  b: 2,
};

let bar = {
  a: 'abc',
  b: 'def',
  add: function() {
    return this.a + this.b;
  },
};

bar.add.call(foo);