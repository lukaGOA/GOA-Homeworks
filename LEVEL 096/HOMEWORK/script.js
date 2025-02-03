// 1
let book = {
    title: "მატრიცა",
    author: "ლევ ტოლსტოი",
    publishYear: 1869,
    genre: "რომანი",
    price: 30,
};
  

console.log(book);
  
console.log(book.title);          
console.log(book["author"]);     
console.log(book["publishYear"]);
console.log(book.genre);         
console.log(book["price"]);       
  

console.log(`${book.title} არის ${book.author}-ის წიგნი, რომელიც გამოიცა ${book.publishYear}-ში. ეს არის ${book.genre} ჟანრის და მისი ფასი არის ${book.price}₾.`);

// 2
let student = {
    firstName: "გიორგი",
    age: 21,
    faculty: "პედაგოგიკის ფაკულტეტი",
    course: 3,
    averageGrade: 85,
};
  

console.log(student);
  
console.log(student.firstName);         
console.log(student["age"]);           
console.log(student["faculty"]);        
console.log(student.course);            
console.log(student["averageGrade"]);  
  

console.log(`${student.firstName} არის ${student.age}-წელი სტუდენტი, რომელიც სწავლობს ${student.faculty} ფაკულტეტზე და არის ${student.course}-ე კურსზე. მისი საშუალო ქულა არის ${student.averageGrade}.`);
  