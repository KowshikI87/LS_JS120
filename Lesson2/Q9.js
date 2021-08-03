function bar() {
  console.log('good morning');
}

global.inner = {
  bar() {
    console.log('good afternoon');
  },
};

let obj = {
  inner: {
    bar() {
      console.log('good night');
    },

    foo() {
      bar();
    },
  },

  bar() {
    console.log('wake up');
  },

  foo() {
    this.inner.bar();
    inner.bar();
    bar();
  }
};

let foo = function() {
  console.log('go to sleep');
}

function go(foo) {
  foo();
}

go(obj.foo);