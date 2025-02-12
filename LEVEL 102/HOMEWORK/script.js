// 1
function getArrayLength(arr) {
  return arr.length;
}

// 2
function concatenateArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

// 3
function addValueToArray(arr, value) {
  arr.push(value);
  return arr.length;
}

// 4
function removeLastElement(arr) {
  return arr.pop();
}

// 5
function concatenateAndAdd(arr1, arr2, value) {
  let newArray = arr1.concat(arr2);
  newArray.push(value);
  return newArray;
}

// 6
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 7
function getEvenIndexedElements(arr) {
  let evenIndexedArray = [];
  for (let i = 0; i < arr.length; i += 2) {
    evenIndexedArray.push(arr[i]);
  }
  return evenIndexedArray;
}

// 8
function getStringLengths(arr) {
  let lengths = [];
  for (let i = 0; i < arr.length; i++) {
    lengths.push(arr[i].length);
  }
  return lengths;
}
