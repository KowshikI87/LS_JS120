class Cat {
  constructor(name) {
    this.name = name;
  }
  //LS parameter name is better (newName)
  rename(name) {
    this.name = name;
  }
}

let kitty = new Cat('Sophie');
console.log(kitty.name); // Sophie
kitty.rename('Chloe');
console.log(kitty.name); // Chloe