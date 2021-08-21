const Swimmable = {
  swim() {
    console.log("I can swim");
  }
};

const Flyable = {
  fly() {
    console.log("I can fly");
  }
};

function Bird() {
  return {};
}

function FlyingBird() {
  return Object.assign({}, Flyable);
}

function SwimmingBird() {
  return Object.assign({}, Swimmable);
}

function TalentedBird() {
  return Object.assign({}, Swimmable, Flyable);
}

function Stork() {
  return FlyingBird();
}

function Parrot() {
  return FlyingBird();
}

function Penguin() {
  return SwimmingBird();
}

function Ostritch() {
  return SwimmingBird();
}

function Duck() {
  return TalentedBird();
}

function Goose() {
  return TalentedBird();
}