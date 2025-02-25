// 1
let array1 = [0, 1, 3];
let array2 = [4, 7, 16];

// 2
let concatArray = array1.concat(array2);
console.log("Concatenated Array:", concatArray);

// 3
concatArray.copyWithin(concatArray.length, 1, 4);
console.log("After copyWithin:", concatArray);

// 4
concatArray.fill(0, concatArray.length - 3);
console.log("After fill:", concatArray);

// 5
let lastElement = concatArray.pop();
console.log("Last Element Removed:", lastElement);
console.log("After pop:", concatArray);

// 6
let firstElement = concatArray.shift();
console.log("First Element Removed:", firstElement);
console.log("After shift:", concatArray);

// 7
concatArray.unshift(0, 1);
console.log("After unshift:", concatArray);