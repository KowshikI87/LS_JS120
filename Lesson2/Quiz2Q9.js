/* eslint-disable max-len */
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
};

function go(foo) {
  foo();
}

//we pass the method "foo" into the function go as a function
//on line 38, we invoke the function foo
//This is a regular function call and since we don't supply an explicit context
//JS provides the global object as the implicit context
//Now, we start executing at line 27. "this" refers to the global objecth here as discussed just above
//and line 28 executes the "bar" method in the "inner" object in the global object
//line 29's output is similar to that before and no explanation is necessary
//line 30's output is again similar to that before and no explanation is necessary


//Output so far: good afternoon \n good afternoon \good morning
go(obj.foo);