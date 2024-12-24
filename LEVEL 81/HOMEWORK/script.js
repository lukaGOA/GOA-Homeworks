// 1
let userInput = prompt("Please enter some text:");

userInput = userInput.slice(0, 140);
console.log("The truncated text is: " + userInput);

// 2
let name = prompt("Please enter your name (in lowercase):");

name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

console.log("Hello " + name);

// 3
let name1 = prompt("Please enter the first user's name:");
let name2 = prompt("Please enter the second user's name:");

console.log(name1.length > name2.length ? "The first name is longer." : 
            name1.length < name2.length ? "The second name is longer." : 
            "Both names have the same length.");

// 4
let num1 = parseFloat(prompt("Please enter the first number:"));
let num2 = parseFloat(prompt("Please enter the second number:"));

console.log("Addition: " + (num1 + num2));
console.log("Subtraction: " + (num1 - num2));
console.log("Multiplication: " + (num1 * num2));

console.log("Division: " + (num2 !== 0 ? (num1 / num2) : "Cannot divide by zero"));
console.log("Modulus: " + (num2 !== 0 ? (num1 % num2) : "Cannot divide by zero"));
console.log("Exponentiation: " + (num2 !== 0 ? (num1 ** num2) : "Cannot divide by zero"));
console.log("Floor Division: " + (num2 !== 0 ? Math.floor(num1 / num2) : "Cannot divide by zero"));
