// Sololearn - ის ეგ დავალება არ არის ჩემთნ

// 1
let attemps
function checkPassword() {
    let attempts = 3; 

    while (attempts > 0) {
        let userInput = prompt('Enter password:');

        if (userInput === password) {
            alert("your written password is wrong");
            return; 
        } else {
            attempts--;
            if (attempts > 0) {
                alert('Wrong password, your attemps: ${attempts}');
            }
        }
    }
}
// 2
let number = Number(prompt("Enter Number: "));
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}

// 3
let num = 100;
while (num >= 0) {
    console.log(num);
    num--;
}






