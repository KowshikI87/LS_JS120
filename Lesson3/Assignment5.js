let civicArgs = {
  make: 'Honda',
  model: 'Civic',
  year: 2016,
  color: 'black',
  passengers: 5,
  convertible: false,
  mileage: 16000
};

let civic = new Car(civicArgs);

function Car(args) {
  Object.assign(this, args);
  //this = Object.create(args); //can't use as not allowed to reassign "this"

  this.drive = function() {
    this.started = true;
  };

  // rest of the methods
}

let newCar = new Car(civicArgs);