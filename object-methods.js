/*
    ? Object methods
    - different from array methods
    - these methods are made manually
    - the require "this" to access data, or else, they grabe global scope
*/

/*
let f1Team = {
  name: "Petronas",
  principal: "Toto Wolff",
  location: "England",
  drivers: ["Kimi Antonelli, Gearge Russell"],
  listDrivers() {
    return this.drivers; // Using this over refernceing f1Team directly allows you to refernce properties regardless of objects since it jsut returns what is in scope
    // THis does not bind on arrow function expressions
  },
  thisArrowFx: () => {
    return this;
    //^ // "this" is not bound to the method // Prints: {}
    // ! DO NOT DO THIS DONUT DOTHIS
  },
  addDrivers: function (driver) {
    this.drivers.push(driver);
  },
};

console.log(f1Team.listDrivers());
console.log(f1Team.thisArrowFx());
f1Team.addDrivers("Agartha Diddy");
console.log(f1Team);

    ? Challenge
    addToday - to add an item to today key
    addTomorrow - to add an item to tomorrow key
    clearAll - clears all arrays
    !HARD MODE - removeFrom which will remove an item  from selected property
*/

let toDo = {
  today: [],
  tomorrow: [],
  urgent: [],
  addToday(today) {
    toDo.today.push(today);
  },
  addTomorrow(tomorrow) {
    toDo.tomorrow.push(tomorrow);
  },
  clearAll() {
    this.today = [];
    this.tomorrow = [];
  },
  removeFrom(list, item) {
    this[list] = this[list].filter((i) => i != item);
  },
};

toDo.addToday("gay day");
toDo.addTomorrow("straight day");
console.log(toDo);
toDo.removeFrom("today", "gay day");
console.log(toDo);
console.log("\\/ clear all");
toDo.clearAll();
console.log(toDo);
