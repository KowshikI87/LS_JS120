const swimMixin = {
  swim() {
    console.log("I can swim");
  }
};

class Bird {

}

class FlyingBird {
  fly() {
    console.log("I can fly");
  }
}

class Stork extends FlyingBird {

}

class Parrot extends FlyingBird {

}

class Penguin extends Bird {

}
Object.assign(Penguin.prototype, swimMixin);

class Ostrich extends Bird {

}
Object.assign(Ostrich.prototype, swimMixin);

class Duck extends FlyingBird {

}
Object.assign(Duck.prototype, swimMixin);

class Goose extends FlyingBird {

}
Object.assign(Goose.prototype, swimMixin);

