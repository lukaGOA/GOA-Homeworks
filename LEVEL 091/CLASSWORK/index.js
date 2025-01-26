// 1
let num = 1;

for(1 = 1; 1<=100; i++) {
    num *= i;
    if(num > 10000) {
        break;
    };
};

console.log(num);

// 2

function welcome(name) {
    let name1 = prompt('Enter name: ');
    console.log("Welcome, " + name);
}

// 3
function convert(feet) {
    let foot = Number(prompt("Enter the foot value:"));
    let inches = feet * 12; 
    console.log(inches);
}

