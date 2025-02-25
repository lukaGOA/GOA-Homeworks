function love_calculator(name1, name2) {
    let love_percent = Math.floor(Math.random() * 101);
    alert(`${name1} და ${name2}, თქვენი სიყვარულის პროცენტია ${love_percent}%`);
}

let name1 = prompt("შეიყვანეთ პირველი სახელი:");
let name2 = prompt("შეიყვანეთ მეორე სახელი:");
love_calculator(name1, name2);