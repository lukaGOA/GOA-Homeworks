// 1
function simple_calculator() {
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
            return;
        }
        result = num1 / num2;
    } else {
        alert("Invalid operation.");
        return;
    }
  
    alert("The result is: " + result);
  }

// 2
function even_or_odd(num) {
    if (num % 2 == 0) {
        console.log('Your Number is Even');
    } else {
        console.log('Your Number is Odd');
    }
}

// 3
function square(n) {
    console.log(n * 2);
}

// 4
function chech_number(number) {
    if (number > 0) {
        console.log('Your Numebr is Positive'); 
    } else if (number < 0) {
        console.log('Your Number is Negative');
    } else {
        console.log('Your Number is Zero');
    }
}