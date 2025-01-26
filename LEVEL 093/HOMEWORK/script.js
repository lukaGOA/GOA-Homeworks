// 1
let name = prompt("გთხოვთ, შეიყვანეთ თქვენი სახელი:");
let age = parseInt(prompt("გთხოვთ, შეიყვანეთ თქვენი ასაკი:"));
let distance = parseInt(prompt("გთხოვთ, შეიყვანეთ სამუშაო ადგილამდე მანძილი (კმ):"));
let workDays = parseInt(prompt("გთხოვთ, შეიყვანეთ სამუშაო დღეების რაოდენობა კვირაში (0-დან 7-მდე):"));

if (age < 16) {
    console.log("გთხოვთ, მოითხოვოთ გამგზავრების ნებართვა უფროსისგან.");
} else if (age >= 16 && age < 65) {
    if (distance >= 0 && distance <= 5) {
        console.log("რეკომენდირებული ტრანსპორტი: ველოსიპედი.");
    } else if (distance > 5 && distance <= 20) {
        console.log("რეკომენდირებული ტრანსპორტი: მანქანა.");
    } else if (distance > 20) {
        console.log("რეკომენდირებული ტრანსპორტი: მატარებელი.");
    }
    if (workDays >= 5) {
        console.log("გთხოვთ, შესწავლეთ შეღავათები ტრანსპორტზე.");
    }
} else {
    console.log("გთხოვთ, შეარჩიეთ ტრანსპორტი!");
}

// 2
let name1 = prompt("გთხოვთ, შეიყვანეთ თქვენი სახელი:");
let age1 = parseInt(prompt("გთხოვთ, შეიყვანეთ თქვენი ასაკი:"));
let dailyRunDistance = parseFloat(prompt("გთხოვთ, შეიყვანეთ რამდენი კილომეტრი სირბილში გირბია ყოველდღე:"));
let workoutDays = parseInt(prompt("გთხოვთ, შეიყვანეთ სავარჯიშო დღეების რაოდენობა კვირაში (0-დან 7-მდე):"));

if (age1 < 16 && age1 >= 60) {
    console.log("გთხოვთ, გაიაროთ ექიმის კონსულტაცია.");
}

let weeklyRunDistance = dailyRunDistance * workoutDays;

if (weeklyRunDistance < 20) {
    console.log("შესაძლებელია მეტი ვარჯიში.");
}
