// 3
let day_of_the_week = Number(prompt('Enter your number: '));
switch (day_of_the_week) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Please Enter Valid Number: ');
}

// 4
let number = Number(prompt('Enter your Number: '));
let result;

switch (number % 2) {
    case 1:
        result = 'Even'
        break;
    case 2:
        result = "Odd"
        break;
}

// 5
let num = Number(prompt('Enter your number: '));
switch (num) {
    case 1:
        console.log('Sunny Day');
        break;
    case 2:
        console.log('Rainy Day');
        break;
    case 3:
        console.log('Cloudy Day');
        break;
    case 4:
        console.log('Windy Day');
        break;
    default:
        console.log('Enter Valid Number: ');
}

// 6
let month = Numebr(prompt("Enter your number: "));
let monthName;
let half;

switch (month) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "July";
    break;
  case 8:
    monthName = "August";
    break;
  case 9:
    monthName = "September";
    break;
  case 10:
    monthName = "October";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
  default:
    monthName = "Pleas enter valid Number";
    break;
}

half = (monthNumber >= 1 && month <= 6) ? "First half" : 
       (monthNumber >= 7 && month <= 12) ? "Second half" : "Invalid month";


