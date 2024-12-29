// 1

let num = Number(prompt('Enter number: '));

if (num % 2 === 0) {
    alert("Your number is Even");
} else {
    alert('Your number is Odd');
}

// 2

let number = Number(prompt("Enter deegres celsius: "));

if (number < 10) {
    alert('Its cold');
} else if (number > 10) {
    alert("Its warm");
} else {
    alert('Its hot')
}

// 3

let points = Number(prompt('Enter your points: '));

if (points < 59) {
    alert('You got a F');
} else if (points < 69) {
    alert('You got a D');
} else if (points < 79) {
    alert('You got a C');
} else if (points < 89) {
    alert('You got a B');
} else {
    alert('You got an A');
}