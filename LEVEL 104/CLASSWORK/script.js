// 1
let fruit = ["Peach", "cherry", "pear", "strawberry", "raspberry"];

// 2
let citrus = fruit.slice(1, 3);

// 3
fruit.splice(-2, 2, "fig");
console.log("Fruits after splice:",);

// 4
let fruitString = fruit.join('-');
console.log("Fruit string:", fruitString);

