// 1

// 1.1
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = [11, 12, 13];

// 1.2
let mergedArray = arr1.concat(arr2);
console.log("Merged Array:", mergedArray);

// 1.3
mergedArray.copyWithin(5, 0, 3);
console.log("After copyWithin:", mergedArray);

// 1.4
mergedArray.fill(0, 6);
console.log("After fill:", mergedArray);

// 1.5
let lastElement = mergedArray.pop();
console.log("Last Element Removed:", lastElement);
console.log("After pop:", mergedArray);

// 1.6
let firstElement = mergedArray.shift();
console.log("First Element Removed:", firstElement);
console.log("After shift:", mergedArray);

// 1.7
mergedArray.unshift(100, 200);
console.log("After unshift:", mergedArray);

// 1.8
mergedArray.splice(2, 2, ...arr3);
console.log("After splice:", mergedArray);

// 1.9
let slicedArray = mergedArray.slice(-5);
console.log("Sliced Array:", slicedArray);

// 1.10
let joinedString = slicedArray.join(",");
console.log("Joined String:", joinedString);

// 2

// 2.1
let students = ["Luka", "Nika", "Saba"];
let grades = [85, 90, 78];

// 2.2
function addStudent(name, grade) {
  students.unshift(name);
  grades.unshift(grade);
  return { students, grades };
}

// 2.3
function removeLastStudent() {
  students.pop();
  grades.pop();
  return { students, grades };
}

// 2.4 
function replaceGrade(index, newGrade) {
  grades.splice(index, 1, newGrade);
  return grades;
}

// 2.5 
function updateGrades(newGrade) {
  grades.fill(newGrade);
  return grades;
}


// 3

// 3.1 
let playlist = ["idk1", "idk2", "idk3", "idk4"];

// 3.2 
function addSong(songTitle) {
  playlist.unshift(songTitle);
  return playlist;
}

// 3.3 
function removeLastSong() {
  playlist.pop();
  return playlist;
}

// 3.4 
function moveSongs() {
  playlist.copyWithin(playlist.length, 0, 2);
  playlist.splice(0, 2);
  return playlist;
}

// 3.5
function combinePlaylists(secondPlaylist) {
  let combinedPlaylist = playlist.concat(secondPlaylist);
  return combinedPlaylist;
}

// 4

// 4.1
let cartItems = ["Apple", "Banana", "Orange"];
let prices = [1.0, 0.5, 0.75];

// 4.2
function addItem(item, price) {
  cartItems.unshift(item);
  prices.unshift(price);
  return { cartItems, prices };
}

// 4.3
function removeFirstItem() {
  cartItems.shift();
  prices.shift();
  return { cartItems, prices };
}

// 4.4 
function replaceItem(index, newItem, newPrice) {
  cartItems.splice(index, 1, newItem);
  prices.splice(index, 1, newPrice);
  return { cartItems, prices };
}

// 4.5 
function createReceipt() {
  return cartItems.join(", ");
}

// 4.6 
function applyDiscount(discountPrice) {
  prices.fill(discountPrice);
  return prices;
}

// 5


// 5.1 
let library = [
    { title: "idk1", author: "idk4", copies: 3 },
    { title: "idk2", author: "idk5", copies: 5 },
    { title: "idk3", author: "idk6", copies: 2 }
  ];
  
// 5.2 
function addBook(book) {
    library.push(book);
    return library;
}
  
// 5.3 
function removeLastBook() {
    library.pop();
    return library;
}
  
// 5.4 
function updateBookCopies(title, newCopies) {
    let bookIndex = library.findIndex(book => book.title === title);
    if (bookIndex !== -1) {
      library[bookIndex].copies = newCopies;
    }
    return library;
}
  
// 5.5 
function listBooks() {
    let titles = library.map(book => book.title);
    return titles.join(", ");
}
  
// 5.6 
function extractBooks(start, end) {
    return library.slice(start, end);
}
  
// 5.7 
function modifyBooks() {
    library.copyWithin(library.length, 0, 1);
    return library;
}
  
// 5.8 
function resetCopies(newCopies) {
    library.forEach(book => book.copies = newCopies);
    return libRary;
}
  
 // 5.9 
function removeFirstBook() {
    library.shift();
    return library;
}
  
 // 5.10 
function addFirstBook(book) {
    library.unshift(book);
    return library;
}
