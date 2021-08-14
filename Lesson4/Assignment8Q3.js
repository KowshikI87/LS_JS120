//LS Solution is better

const tireFunctions = {
  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  },

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
};

class WheeledVehicle {
  constructor(kmTravelledPerLiter, fuelCapInLiter) {
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  range() {
    return this.fuelCap *  this.fuelEfficiency;
  }
}

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super(50, 25.0);
    this.tires = [30,30,32,32];
  }
}
Object.assign(Auto.prototype, tireFunctions);

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super(80, 8.0);
    this.tires = [20,20];
  }
}
Object.assign(Motorcycle.prototype, tireFunctions);


class Catamaran extends WheeledVehicle {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    // catamaran specific logic
    super(kmTravelledPerLiter, fuelCapInLiter);
    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
  }
}
