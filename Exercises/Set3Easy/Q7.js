class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
console.log(Something.dupData()); //raise error as dupData is an instance method not static method
console.log(thing.dupData()); //raise error as dupData is a static method not instance method

//wrong answers.
//we have dupData both as static and instance method
//line 16 calls the static method annd calls ByeBye
//line 17 calls the instance method and calls HelloHello
//we would not be able to defin two methods with the same name in Pyhton
//even though one is an instance method and other is a static method