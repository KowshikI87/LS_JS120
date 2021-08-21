const Swimmable = {
  swim() {}
};

const Flyable = {
  fly() {}
};

function bird() {
  return {};
}

function swimmingBird() {
  return Object.assign({}, Swimmable);
}

function flyingBird() {
  return Object.assign({}, Flyable);
}

function talentedBird() {
  return Object.assign({}, Swimmable, Flyable);
}

