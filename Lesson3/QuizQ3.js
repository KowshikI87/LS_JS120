function Dog() {
}

function Pet(type) {
  if (type === 'dog') {
    return new Dog();
  } else if (type === 'lion') {
    return 'not a pet!';
  }
}

let dog = new Pet('dog');
let lion = new Pet('lion');
let cat = new Pet('cat');
console.log('stop');