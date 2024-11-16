let meuInt =5;
let meuFloat = 6.1321212;

console.log(typeof meuInt);
console.log(typeof meuFloat);

console.log(5 === 2 + 4);

let x = 5;
console.log(x == "5"); // true
console.log(x === "5"); // false

console.log(x != 8); // true
console.log(x != "5"); // false
console.log(x !== 5); // false
console.log(x !== "5"); // true

let name1 = null;
let text = "missing";
let result = name1 ?? text;

console.log(result); //missing

const car = { type: "Fiat", model: "500", color: "white"};
console.log(car?.name); // undefined