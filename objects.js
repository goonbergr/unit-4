/*
    ? Objects
    - structured containers for data
    - in a JavaScript Object Notation (JSON)
    - no index ability but it does give us structure
    - the structure comes in the form of .properties
    - it also has .methods() -- some built in, some can be created
    - utilizes "this" keyword
*/

// ? How to Object

let sampleObject = {};
console.log(sampleObject);

let student = {
  name: "Scott",
  age: 30,
  cohort: "FullStack10",
  grades: [90, 25, 30, 17, 100],
  isEnrolled: true,
};
console.log(student);

// ? Lets talk real JSON real quick

// ? turn an object into a JSON string

let jsonString = JSON.stringify(student);
console.log(typeof jsonString, jsonString);

// ? how to turn JSON string into an object to parse

let sampleJSONString = '{ "name": "Paul": "age": 30 }';
console.log(sampleJSONString);

// ? Access any property or value

console.log(student.cohort);

console.log(student["name"]);

// ? The above two references to student do the same thing with different syntax

// ? How to modify properties and values

student.isEnrolled = false;
console.log(student);

// ? creating new key value pairs

student.mainLanguage = "JavaScript";

console.log(student);

// ? Simple built-in methods on Objects

// Object - interface creating object instances: .keys - method on that object
let studentProperties = Object.keys(student); // Get all object keys in an array format
console.log(studentProperties);

let studentValues = Object.values(student);
console.log(studentValues);

/*
    ? JS Fundamentals Crash Course
    - JS is a prototype-based Object oriented language
    - "new" keyword, will instantiate a new object when using Object keyword
*/

let studentGrades = student.grades;
let gpa =
  studentGrades.reduce((acc, currentV) => {
    return acc + currentV;
  }) / studentGrades.length;
console.log(gpa);

let payload = {
  email: "goobertown69@gmail.com",
  password: "gigity",
};

let db = [
  { email: "goobertown69@gmail.com", password: "gigity" },
  { email: "goobertown420@gmail.com", password: "noue" },
  { email: "agartha69@gmail.com", password: "gigity" },
  { email: "cs2case@gmail.com", password: "goldgoldgold" },
];

let authenticate = (db, payload) => {
  // loop over database
  // check if payload email matches email in db
  // check if payload password matches password in db
  //
};
// ? EMPTY ARRAYS ARE NOT FALSEY!!!!!
/* 
	? Learn Objects by creating authentication service
*/

let payload = {
  email: "paul@codecademy.com",
  password: "dbLocal",
};

let db = [
  { email: "paul@codecademy.com", password: "dbLocal" },
  { email: "scott@gmail.com", password: "Scotti3" },
  { email: "arush@google.com", password: "password" },
  { email: "rus@cyberexpert.com", password: "lakdh&)ldkx-dakhjlf" },
];

// Function is used to encapsulate reusable code
function authenticate(database, request) {
  // let foundUser = []
  // database.forEach(usr => {
  // 	if (usr.email === request.email) {
  // 		foundUser.push(usr)
  // 	}
  // })

  let foundUser = database.filter((usr) => usr.email === request.email);
  console.log(foundUser);
  if (foundUser.length) {
    if (foundUser[0].password === request.password) {
      console.log("Logged in");
    } else {
      console.log("Invalid password");
    }
  } else {
    console.log("No user, go away");
  }
}

authenticate(db, payload);

/* 
	? Array Copy Shenanigans
*/

let arr1 = ["Gary", "Paul", "Jake"];
let arr2 = arr1;
console.log(arr1, arr2);

let var1 = "Paul";
let var2 = var1;
console.log(var1, var2);
var2 = "Kiara";
console.log(var1, var2);

arr2[0] = "Arthur";
console.log(arr1, arr2);
// This modifies both arrays because reference values are by pointer
// shallow copy
let arr3 = arr1.map((i) => i); // deep copy
arr3[0] = "Potato";
console.log(arr1, arr3);
