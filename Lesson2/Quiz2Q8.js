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
    this.inner.bar(); //obj is the context so the bar function nested inside the inner method is executed
    //we are not qualifying inner, so JS tries to look for "inner"
    //using lexical scoping rules. It can't find it there so it looks in global object
    //it of course finds inner as a property which refers to an object
    //inside this object, we have a method that is assigned to bar which is executed
    inner.bar();
    //we are not qualifying "bar" so JS uses lexical scoping rules and finds the the variable "bar"
    //in global scope. this variable refers to a function object which is invoked using the parentheses
    bar();
    //the final outputs is: good night \n good afternoon \n good morning
  }
};

obj.foo();