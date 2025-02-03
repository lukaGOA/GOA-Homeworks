// 1
let car = {
    brand: Mercedes,
    model: AMG-GT,
    year: 2025,
    color: black,
    weight: 1500,

    // 2
    carMethod: function() {
        console.log(`ამ მანქანის ბრენდია ${this.brand}, მოდელია არის ${this.model}, ${this.year} წლის, ფერი ${this.color}, წონა ${this.weight} კგ.`);
        
    }
}

// 3
console.log(car.brand);
console.log(car.model);
console.log(car.year);
console.log(car.color);
console.log(car.weight);

// 4
car.brand = 'BMW';
car.model = 'idk';
car.year = '2023';
car.color = 'red';
car.weight = '1000';

// 5
car.mode = 'sport'

// 6
delete car.mode;


// 7
let myCar = 'Toyota' // ეს უბრალოდ მაგალითზე ავიღე

if (car.brand === myCar) {
    console.log('იგივე მანქანის ბრენდია გვყოლია ძმობილო');
} else {
    console.log('სხვადასხვა მანქანის ბრენდია, ჩემი მოუგებს');
}

console.log(car.carMethod());