const numbers = [4, 7, 10, 13, 18, 21, 24, 29];

let even = numbers.filter((value) => value % 2 === 0);

console.log(even);

let doubled = numbers.map((value) => value * 2);
console.log(doubled);

let squareOdds = numbers
  .filter((value) => value % 2 !== 0) // Filterd out odd
  .map((value) => value * value); // Mapped out squares
console.log(squareOdds);

let adjustedNums = numbers
  .filter((value) => value > 15)
  .map((value) => value - 5);
console.log(adjustedNums);
