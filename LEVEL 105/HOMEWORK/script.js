// 1

// 1.1
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let nestedArray = [1, [2, 3], 4, [5, 6], 7];

// 1.2
let combinedArray = arr1.concat(arr2);

// 1.3
combinedArray.copyWithin(5, 0, 3);

// 1.4
combinedArray.fill(0, 6);

// 1.5
combinedArray.pop();

// 1.6
combinedArray.shift();

// 1.7
combinedArray.unshift(100, 200);

// 1.8
combinedArray.splice(2, 2, 'x', 'y', 'z');

// 1.9
let slicedArray = combinedArray.slice(-5);

// 1.10
let joinedString = slicedArray.join(',');

// 1.11
let flatArray = nestedArray.flat();

// 1.12
let isEightIncluded = flatArray.includes(8);

// 1.13
let indexOfNine = flatArray.indexOf(9);

// 1.14
let lastIndexOfSeven = flatArray.lastIndexOf(7);

// 2

// 2.1
let arry1 = [1, 2, 3, 4];
let arry2 = [5, 6, 7, 8];
let nestedArray1 = [1, [2, 3], 4, [5, 6], 7];

// 2.2
let combinedArray1 = arr1.concat(arr2);

// 2.3
combinedArray1.copyWithin(4, 0, 2);

// 2.4
combinedArray1.fill(0, 2, 5);

// 2.5
combinedArray1.pop();

// 2.6
combinedArray1.shift();

// 2.7
combinedArray1.unshift(10, 20);

// 2.8
combinedArray1.splice(2, 2, 30, 40);

// 2.9
let slicedArray1 = combinedArray.slice(-3);

// 2.10
let joinedString1 = slicedArray.join('-');

// 2.11
let flatArray1 = nestedArray.flat();

// 2.12
let isNineIncluded1 = flatArray.includes(9);

// 2.12
let indexOfTen1 = flatArray.indexOf(10);

// 2.14
let lastIndexOfNine1 = flatArray.lastIndexOf(9);

// 2.15
flatArray1.push(13);

// 3

// 3.1
let numbers3 = [10, 20, 30, 40, 50];
let secondArray3 = [60, 70, 80];
let combinedArray3 = numbers3.concat(secondArray3);

// 3.2 
numbers3.copyWithin(3, 1, 3);

// 3.3
numbers3.fill(100, 0, 3);

// 3.4
let removedElement3 = numbers3.pop();

// 3.5
let shiftedElement3 = numbers3.shift();

// 3.6
numbers3.unshift(5, 15);

// 3.7
let numbersString3 = numbers3.join('-');

// 3.8
let slicedArray3 = numbers3.slice(1, 4);

// 3.9
numbers3.splice(1, 2, 200, 300);

// .10
let nestedArr3 = [1, [2, 3], [4, [5, 6]]];
let flatArray3 = nestedArr3.flat(2);

// 3.11
let containsFifty3 = numbers3.includes(50);

// 3.12
let indexOfThirty3 = numbers3.indexOf(30);

// 3.12
let lastIndexOfTwenty3 = numbers3.lastIndexOf(20);

// 3.14
numbers3.push(90, 100);

// 4

// Initial data
let people = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];
  
let morePeople = [
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' },
];
  
 // 4.1
let allPeople = people.concat(morePeople);
  
// 4.2
allPeople.copyWithin(3, 0, 2);
  
// 4.3
allPeople.fill({ id: 0, name: 'Unknown' }, 0, 2);
  
// 4.4
let removedPerson = allPeople.pop();
  
// 4.5
let firstRemovedPerson = allPeople.shift();
  
// 4.6
allPeople.unshift({ id: 6, name: 'Frank' }, { id: 7, name: 'Grace' });
  
// 4.7
let peopleString = allPeople.map(person => person.name).join(',');
  
// 4.8
let somePeople = allPeople.slice(1, 4);
  
// 4.9
allPeople.splice(2, 2, { id: 10, name: 'Ivan' }, { id: 11, name: 'Judy' });
  
// 4.10
let nestedArray4= [[1, 2], [3, 4], [[5, 6], [7, 8]]];
let flatArray4 = nestedArray.flat(2);
  
// 4.11
let isEveIncluded = allPeople.some(person => person.id === 5 && person.name === 'Eve');
  
 // 4.12
let indexOfCharlie = allPeople.findIndex(person => person.id === 3);
  
// 4.13
let lastIndexOfBob = allPeople.reverse().findIndex(person => person.id === 2 && person.name === 'Bob');
  
// 4.14
flatArray.push({ id: 8, name: 'Hank' });
  
