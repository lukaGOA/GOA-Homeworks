// 1
function Triangle(a, b, c) {
    if (a + b > c && b + c > a && c + a > b) {
        return true;
    } else {
        return false;
    }
}

// 2
function requestEmail() {
    let email = prompt("Please enter your email address:");
    let email1;
    if (email == email1) {
        console.log("access granted");
    } else {
        console.log("Invalid email address.");
    }
}

// 3
function compareNumbers(num1, num2) {
    if (num1 === num2) {
        console.log("The numbers are equal.");
    } else if (num1 > num2) {
        console.log(num1 + " is greater than " + num2);
    } else {
        console.log(num1 + " is smaller than " + num2);
    }
}

// 4
function function(age, gender, income) {
    if (age >= 18) {
        if (gender === 'female') {
            if (income > 6000) {
                console.log("თქვენ მზად ხართ ინვესტიციებისთვის!");
            } else if (income > 4000) {
                console.log("შემოსავალი სტაბილურია");
            } else {
                console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
            }
        } else {
            if (income > 6000) {
                console.log("თქვენ მზად ხართ ინვესტიციებისთვის!");
            } else if (income > 4000) {
                console.log("შემოსავალი სტაბილურია");
            } else {
                console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
            }
        }
    } else {
        if (income >= 3000) {
            console.log("ფინანსური პოზიცია სტაბილურია. უკეთესი გეგმაა საჭირო.");
        } else {
            console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
        }
        console.log("მიიღეთ განათლება და შემდეგ დაიწყეთ ინვესტიცია");
    }
}

// 5
function function1(age, gender, income) {
    switch (true) {
        case (age >= 18 && gender === 'female' && income > 6000):
            console.log("თქვენ მზად ხართ ინვესტიციებისთვის!");
            break;
        case (age >= 18 && gender === 'female' && income > 4000):
            console.log("შემოსავალი სტაბილურია");
            break;
        case (age >= 18 && gender === 'female' && income <= 4000):
            console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
            break;
        case (age >= 18 && gender !== 'female' && income > 6000):
            console.log("თქვენ მზად ხართ ინვესტიციებისთვის!");
            break;
        case (age >= 18 && gender !== 'female' && income > 4000):
            console.log("შემოსავალი სტაბილურია");
            break;
        case (age >= 18 && gender !== 'female' && income <= 4000):
            console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
            break;
        case (age < 18 && income >= 3000):
            console.log("ფინანსური პოზიცია სტაბილურია. უკეთესი გეგმაა საჭირო.");
            break;
        case (age < 18 && income < 3000):
            console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
            break;
        case (age < 18):
            console.log("მიიღეთ განათლება და შემდეგ დაიწყეთ ინვესტიცია");
            break;
    }
}

// 6
function function2(age, score) {
    if (age >= 18) {
        if (score > 50) {
            console.log("თქვენ წარმატებული ხართ");
        } else {
            console.log("გჭირდებათ მეტი სწავლა");
        }
    } else {
        console.log("შენც ბავშვი ხარ, მაგრამ შეგიძლია წარმატებას მიაღწიო");
    }
}
// 9

javascript
Copy
function function3() {
    for (let num = 1; num <= 50; num++) {
        if (num === 25) {
            continue;
        }
        if (num % 2 === 0) {
            console.log(num);
        }
    }
}

