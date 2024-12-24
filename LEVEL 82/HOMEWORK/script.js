// 1
let num1 = parseInt(prompt("Enter the first number"));
let num2 = parseInt(prompt("Enter the second number"));

console.log(num1 > num2 ? "Number 1 is greater than number 2" : num1 === num2 ? "Number 1 is equal to number 2" : "Number 2 is greater than number 1");

// 2
let str = "Apple";

console.log("Uppercase: " + str.toUpperCase());
console.log("Lowercase: " + str.toLowerCase());

// 3
let currentYear = 2024; 
let birthYear = parseInt(prompt("Enter your birth year"));

console.log("Your age is: " + (currentYear - birthYear));

// 4
let num1_3 = parseInt(prompt("Enter the first number"));
let num2_3 = parseInt(prompt("Enter the second number"));
let num3_3 = parseInt(prompt("Enter the third number"));

let sum = num1_3 + num2_3 + num3_3; 
let average = sum / 3;

console.log("Sum: " + sum);
console.log("Average: " + average);

alert("Sum: " + sum);
alert("Average: " + average);
