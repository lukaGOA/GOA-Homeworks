// 1
function Person(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;

    this.introduce = function() {
        console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old ${this.profession}.`);
    };
}

// 2
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    getSummary() {
        return `${this.title} არის ${this.author}-ის წიგნი, რომელიც გამოიცა ${year}-ში`;
    };
}

const book1 = new Book("example1", "example4", 1945);
const book2 = new Book("example2", "example5", 1964);
const book3 = new Book("example3", "example6", 2009);


console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book3.getSummary());

// 3 
function User(username, email, password,) {
    this.username = username;
    this.email = email;
    this.password = password;

    this.changePassword = function(newPassword) {
        this.password = newPassword;
    };
    
    this.getDetails = function() {
        return `Username: ${this.username}, Email: ${this.email}`;
    };
}

const user1 = new User("goaisbest", "goaisbest@gmail.com", "password123");
const user2 = new User("janezaisbest", "janezaisbest@gmaail.com", "password124");


user1.changePassword("novatoribandzia123");

console.log(user1.getDetails());
console.log(user2.getDetails());
