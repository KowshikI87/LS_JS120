class Pet {
  constructor(name, age, furColor) {
    this.name = name;
    this.age = age;
    this.furColor = furColor;
  }

  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.furColor} fur.`;
  }
}

class Cat extends Pet {

}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());