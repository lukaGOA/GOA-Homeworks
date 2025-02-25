// 1
const nestedArray = [1, 2, [3, [4, 5, 6]], [7, [8, 9]]];

// 2
const flatArray = nestedArray.flat();
console.log(flatArray);

// 3
const fullyFlatArray = nestedArray.flat(2);
console.log(fullyFlatArray);

// 4
function checkElement(array, value) {
    return array.includes(value);
}

console.log(checkElement(flatArray, 3));  
console.log(checkElement(fullyFlatArray, 10));  

