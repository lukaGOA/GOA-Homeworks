// 1

// 1.1
let numsArray = [10, 20, 30, 40];
let strArray = ["apple", "banana", "cherry"];

// 1.2
let combinedArray = numsArray.concat(strArray);
console.log("Combined Array:", combinedArray);

// 1.3
combinedArray.copyWithin(4, 0, 3);
console.log("After copyWithin:", combinedArray);

// 1.4
combinedArray.fill("filled", 2, 5);
console.log("After fill:", combinedArray);

// 1.5
let lastElement1 = combinedArray.pop();
console.log("Last Element Removed:", lastElement);
console.log("After pop:", combinedArray);

// 1.6
let firstElement1 = combinedArray.shift();
console.log("First Element Removed:", firstElement);
console.log("After shift:", combinedArray);

// 1.7
combinedArray.unshift(100, 200);
console.log("After unshift:", combinedArray);

// 2

// 2.1
let people = [
    { name: "Saba" },
    { name: "Sandro" },
    { name: "Kote" }
];
  
let places = [
    { city: "Batumi" },
    { city: "Qutaisi" },
    { city: "Tbilisi" }
];
  
// 2.2
  let mergedArray = people.concat(places);
  console.log("Merged Array:", mergedArray);
  
// 2.3
  mergedArray.copyWithin(2, 0, 2);
  console.log("After copyWithin:", mergedArray);
  
// 2.4
mergedArray.fill({ city: "Gori" }, mergedArray.length - 2);
console.log("After fill:", mergedArray);
  
 // 2.5
let lastElement2 = mergedArray.pop();
console.log("Last Element Removed:", lastElement);
console.log("After pop:", mergedArray);
  
// 2.6
let firstElement2 = mergedArray.shift();
console.log("First Element Removed:", firstElement);
console.log("After shift:", mergedArray);
  
// 2.7
mergedArray.unshift({ name: "Luka" }, { name: "Nika" });
console.log("After unshift:", mergedArray);

// 3

// 3.1
let mixedArray = [1, 2, "three", 4, "five", 6];

// 3.2
let extendedArray = mixedArray.concat([true, false]);
console.log("Extended Array:", extendedArray);

// 3.3
extendedArray.copyWithin(0, 2, 4);
console.log("After copyWithin:", extendedArray);

// 3.4
extendedArray.fill(0, 4, 7);
console.log("After fill:", extendedArray);

// 3.5
let lastElement3 = extendedArray.pop();
console.log("Last Element Removed:", lastElement);
console.log("After pop:", extendedArray);

// 3.6
let firstElement3 = extendedArray.shift();
console.log("First Element Removed:", firstElement);
console.log("After shift:", extendedArray);

// 3.7
extendedArray.unshift(null, undefined);
console.log("After unshift:", extendedArray);