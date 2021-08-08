let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment.apply(foo);
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();