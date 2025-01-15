//let age = prompt('Enter your age:');

//if (age > 5) {
   // console.log('You are child');
//} else if (age > 12) {
  //  console.log('You are Teenager');
//} else if (age > 18) {
  //  console.log('You are an adult');
//} else (age > 80) {
  //  console.log('Brother you are old');
//}

let num1 = Number(prompt('Enter First Number:'));
let num2 = Number(prompt('Enter Second Number:')); 

let operation = prompt("Enter operation (+, -, *, /):");

let result;


if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
if (num2 === 0) {
    alert("You can't divide by zero.");
    }
    result = num1 / num2;
  } else {
    alert("Invalid operation.");
  }

  alert("The result is: " + result);
