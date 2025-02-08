// 1
let student = {
    name: "saba",
    age: "dvalishvili",
    grade: "B",
    isEnrolled: true,
    getInfo: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}, Enrolled: ${this.isEnrolled}`);
    }
};

student.grade = "A";
console.log(student.getInfo());


// 2
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getCarInfo = function() {
        return `Car: ${this.brand} ${this.model}, Year: ${this.year}`;
    };
}


let car1 = new Car("Mercedes", "s-class", 2022);
let car2 = new Car("BMW", "F10", 2021);
let car3 = new Car("Ford", "Mustang", 2023);


console.log(car1.getCarInfo());
console.log(car2.getCarInfo());
console.log(car3.getCarInfo());


// 3
let library = {
    name: "City Library",
    location: "Downtown",
    books: [
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "Moby Dick", author: "Herman Melville", year: 1851 }
    ],
    listBooks: function() {
        this.books.forEach(book => {
            console.log(`This book name is '${book.title}', written by ${book.author} in ${book.year}. You can find this book at ${this.location}.`);
        });
    }
};

library.listBooks();


// 4
let inventory = {
    product1: { productName: "Laptop", price: 1200, quantity: 5, isAvailable: true },
    product2: { productName: "Phone", price: 800, quantity: 0, isAvailable: true },
    product3: { productName: "Tablet", price: 500, quantity: 10, isAvailable: false },
    displayAvailableProducts: function() {
        if (this.product1.isAvailable && this.product1.quantity > 0) {
            console.log(`Product: ${this.product1.productName}, Price: $${this.product1.price}, Quantity: ${this.product1.quantity}`);
        }
        if (this.product2.isAvailable && this.product2.quantity > 0) {
            console.log(`Product: ${this.product2.productName}, Price: $${this.product2.price}, Quantity: ${this.product2.quantity}`);
        }
        if (this.product3.isAvailable && this.product3.quantity > 0) {
            console.log(`Product: ${this.product3.productName}, Price: $${this.product3.price}, Quantity: ${this.product3.quantity}`);
        }
    }
};

inventory.displayAvailableProducts();

// 5
function Contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = function() {
        console.log(`${this.name}: ${this.number}`);
    };
}

var a = new Contact("David", 12345);
var b = new Contact("Amy", 987654321);

a.print();
b.print();
