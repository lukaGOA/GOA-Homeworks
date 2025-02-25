// 1
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

let year = 2000;
if (isLeapYear(year)) {
    console.log(`${year} is a leap year!`);
} else {
    console.log(`${year} is not a leap year.`);
}

// 2
function selectRandomName(names) {
    const randomIndex = Math.floor(Math.random() * names.length);
    const selectedName = names[randomIndex];
    return selectedName;
}

let names0 = ['Ana', 'Giorgi', 'Nino', 'Levan'];
let payer0 = selectRandomName(namesList);
console.log(payer0 + ' will pay for everyone\'s food.');

// 3
function fizzBuzz(names) {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            names.push('FizzBuzz');
        } else if (i % 3 === 0) {
            names.push('Fizz');
        } else if (i % 5 === 0) {
            names.push('Buzz');
        }
    }

    names = names.filter(name => name !== 'Fizz' && name !== 'Buzz' && name !== 'FizzBuzz');
    const randomIndex = Math.floor(Math.random() * names.length);
    const selectedName = names[randomIndex];
    
    return selectedName;
}

let names1 = ['Ana', 'Giorgi', 'Nino', 'Levan'];
let payer1 = fizzBuzz(names1);
console.log(payer1 + ' will pay for everyone\'s food.');
