// 1
let number = 0;
while (number < 50) {
    console.log('GOA');
    number++;
}

// 2
let num = 20;
while (num >= 0) {
    console.log(num);
    num--;
}

// 3
let n = 1;
while (n <= 20) {
    if (n % 2 === 0) {
        console.log(n); 
    }
    n++;
}

// 4
let n = 1;
while (n <= 100) {
    if (n % 5 === 0) {
        console.log(n); 
    }
    n++;
}

// 5
let countdown= Number(prompt('Enter Number: '));
while (countdown >= 0) {
    console.log(countdown);
    countdown--;
}