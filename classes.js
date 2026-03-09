/*
    ? Class
    - template for creating objects
    - constructor factory
    - it allows us to use the template to build instances of your Class
    - classes are always Capitalized
*/

class Car {
  // This code body contains what each new object will contain
  constructor(make, model, year, transmission, vin) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.transmission = transmission;
    this.vin;
    this.market = "North America";
  }
}
console.log(new Car());

class CarEurope extends Car {
  constructor(make, model, year, transmission, vin) {
    super(make, model, year, transmission, vin);
    //everything inherited needs to be passed through super
    this.isCPO = isCPO;
    this.market = "Europe";
  }
}
console.log(new CarEurope());
