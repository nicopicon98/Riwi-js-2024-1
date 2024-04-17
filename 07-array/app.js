/**
 * Array methods
 * 
 * Array is a collection of elements. It is a data structure that stores 
 * elements of any type.
 */

// 1. Array.concat()
// use case 1: to concatenate two arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = arr1.concat(arr2);

console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

// use case 2: to concatenate multiple arrays
let arr4 = [7, 8, 9];
let arr5 = [10, 11, 12];

let arr6 = arr1.concat(arr2, arr4, arr5);

console.log(arr6); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

// 2. Array.copyWithin()
// note: copyWithin() method copies array elements to another position in the same array
// use case 1: to copy array elements to another position in the same array
let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr7.copyWithin(3, 0, 3);

console.log(arr7); // [ 1, 2, 3, 1, 2, 3, 7, 8, 9 ]

// note: copyWithin(target, start, end), it replaces the target elements with the elements from start to end
// target: the position to copy the elements to
// start: the position to start copying elements from
// end: the position to stop copying elements from, it does not include the end position

// 3. Array.entries()

// use case 1: to get the key-value pair of an array
let arr8 = ['a', 'b', 'c'];
let iterator = arr8.entries();

console.log(iterator.next().value); // [ 0, 'a' ] // 0 is the index, 'a' is the value
console.log(iterator.next().value); // [ 1, 'b' ] // 1 is the index, 'b' is the value
console.log(iterator.next().value); // [ 2, 'c' ] // 2 is the index, 'c' is the value

// 4. Array.every()

// use case 1: to check if all elements in an array pass a test
let arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let isGreaterThanZero = arr9.every((element) => element > 0);

console.log(isGreaterThanZero); // true

// 5. Array.fill()

// use case 1: to fill an array with a static value

let arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr10.fill(0);

console.log(arr10); // [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

// use case 2: to fill an array with a static value from a specific position

let arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr11.fill(0, 3);

console.log(arr11); // [ 1, 2, 3, 0, 0, 0, 0, 0, 0 ]

// use case 3: to fill an array with a static value from a specific position to another specific position

let arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr12.fill(0, 3, 6);

console.log(arr12); // [ 1, 2, 3, 0, 0, 0, 7, 8, 9 ]

// 6. Array.filter()

// use case 1: to filter elements in an array based on a condition and return a new array
let arr13 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let filteredArray = arr13.filter((element) => element > 5);

console.log(filteredArray); // [ 6, 7, 8, 9 ]

// 7. Array.find()

// use case 1: to find the first element in an array based on a condition

let arr14 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let firstElement = arr14.find((element) => element > 5);

console.log(firstElement); // 6 (the first element that is greater than 5)

// 8. Array.findIndex()

// use case 1: to find the first element index in an array based on a condition

let arr15 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let firstElementIndex = arr15.findIndex((element) => element > 5);

console.log(firstElementIndex); // 5 (the index of the first element that is greater than 5)

// 9. Array.flat()

// use case 1: to flatten an array

let arr16 = [1, 2, [3, 4, [5, 6]]];
let flatArray = arr16.flat();   

console.log(flatArray); // [ 1, 2, 3, 4, [ 5, 6 ] ]

// note: by default, flat() method flattens the array by one level

// use case 2: to flatten an array by multiple levels

let arr17 = [1, 2, [3, 4, [5, 6]]];

let flatArray2 = arr17.flat(2);

console.log(flatArray2); // [ 1, 2, 3, 4, 5, 6 ]

// 10. Array.flatMap()

// use case 1: to map each element in an array and flatten the result into a new array

let arr18 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let mappedArray = arr18.flatMap((element) => [element * 2]);

console.log(mappedArray); // [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]

// 11. Array.forEach()

// use case 1: to iterate over an array, it does not return a new array

let arr19 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr19.forEach((element) => console.log(element));

// 12. Array.includes()

// use case 1: to check if an array includes a specific element

let arr20 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let isElementIncluded = arr20.includes(5);

console.log(isElementIncluded); // true

// 13. Array.indexOf()

// use case 1: to get the index of the first occurrence of an element in an array

let arr21 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let elementIndex = arr21.indexOf(5);

console.log(elementIndex); // 4 (the index of 5 element in the array)

// 14. Array.join()

// use case 1: to join all elements in an array into a string

let arr22 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let joinedString = arr22.join();

console.log(joinedString); // 1,2,3,4,5,6,7,8,9

// use case 2: to join all elements in an array into a string with a separator, returns a string

let arr23 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let joinedString2 = arr23.join(' - ');

console.log(joinedString2); // 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9

// 15. Array.keys()

// use case 1: to get the keys of an array

let arr24 = ['a', 'b', 'c'];
let keys = arr24.keys();

console.log(keys.next().value); // 0
console.log(keys.next().value); // 1
console.log(keys.next().value); // 2

// 16. Array.lastIndexOf()

// use case 1: to get the index of the last occurrence of an element in an array

let arr25 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5];

let elementIndex2 = arr25.lastIndexOf(5);

console.log(elementIndex2); // 9 (the index of the last occurrence of 5 element in the array)

// 17. Array.map()

// use case 1: to map each element in an array and return a new array

let arr26 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let mappedArray2 = arr26.map((element) => element * 2);

console.log(mappedArray2); // [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]

// 18. Array.pop()

// use case 1: to remove the last element from an array, it mutates the original array

let arr27 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let removedElement = arr27.pop();

console.log(removedElement); // 9

console.log(arr27); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// 19. Array.push()

// use case 1: to add elements to the end of an array, it mutates the original array

let arr28 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr28.push(10, 11, 12);

console.log(arr28); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

// 20. Array.reduce()

// use case 1: to reduce an array to a single value, reduce is used to accumulate a value. it'll iterate
// over each element in the array and apply a callback function to the current element and the accumulator
// value. The accumulator value is the value returned by the last iteration.

let arr29 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let reducedValue = arr29.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(reducedValue); // 45

// use case 2: to reduce an array to a single value with an initial value

let arr30 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let reducedValue2 = arr30.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 10);

console.log(reducedValue2); // 55

// use case 3: to reduce an array of objects to a single value

let arr31 = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jack', age: 35 }
];

let reducedValue3 = arr31.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.age;
}, 10);

console.log(reducedValue3); // 90

// use case 4: complex reduce example

let arr32 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let reducedValue4 = arr32.reduce((accumulator, currentValue, index, array) => {
    accumulator.push(currentValue * 2);

    if (index === array.length - 1) {
        return accumulator;
    } else {
        return accumulator;
    }
}, []);

// Let's explain the above code
// accumulator: []
// currentValue: 1, index: 0, array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// accumulator: [2]
// currentValue: 2, index: 1, array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// accumulator: [2, 4]
// currentValue: 3, index: 2, array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// accumulator: [2, 4, 6]
// currentValue: 4, index: 3, array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// accumulator: [2, 4, 6, 8]
// currentValue: 5, index: 4, array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// accumulator: [2, 4, 6, 8, 10]
// currentValue: 6, index: 5, array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// accumulator: [2, 4, 6, 8, 10, 12]
// currentValue: 7, index: 6, array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// accumulator: [2, 4, 6, 8, 10, 12, 14]

console.log(reducedValue4); // [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]

// 21. Array.reduceRight()

// use case 1: to reduce an array from right to left

let arr33 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let reducedValue5 = arr33.reduceRight((accumulator, currentValue) => accumulator + currentValue);

console.log(reducedValue5); // 45

// Note: The difference between reduce() and reduceRight() is that reduce() reduces the array from left to right
// which means it starts from the first element and iterates to the last element. reduceRight() reduces the array
// from right to left which means it starts from the last element and iterates to the first element.

// 22. Array.reverse()

// use case 1: to reverse an array, it mutates the original array

let arr34 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr34.reverse();

console.log(arr34); // [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

// Note: If there is no way to order the elements, the sort() method will produce incorrect results.

// 23. Array.shift()

// use case 1: to remove the first element from an array, it mutates the original array

let arr35 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let removedElement2 = arr35.shift();

console.log(removedElement2); // 1

console.log(arr35); // [ 2, 3, 4, 5, 6, 7, 8, 9 ]

// 24. Array.slice()

// use case 1: to get a part of an array, it does not mutate the original array

let arr36 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let slicedArray = arr36.slice(2, 5);

console.log(slicedArray); // [ 3, 4, 5 ]

// use case 2: to get a part of an array from a specific position to the end of the array

let arr37 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let slicedArray2 = arr37.slice(2);

console.log(slicedArray2); // [ 3, 4, 5, 6, 7, 8, 9 ] // it considers the first position to the end of the array

// 25. Array.some()

// use case 1: to check if at least one element in an array passes a test

let arr38 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let isGreaterThanFive = arr38.some((element) => element > 5);

console.log(isGreaterThanFive); // true cause at least one element is greater than 5

// 26. Array.sort()

// use case 1: to sort an array

let arr39 = [5, 2, 8, 1, 4, 9, 3, 6, 7];

arr39.sort();

console.log(arr39); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// use case 2: to sort an array of objects based on a property

let arr40 = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jack', age: 35 }
];

arr40.sort((a, b) => a.age - b.age);

console.log(arr40); // [ { name: 'Jane', age: 25 }, { name: 'John', age: 30 }, { name: 'Jack', age: 35 } ]

// 27. Array.splice()

// use case 1: to add or remove elements from an array

let arr41 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let removedElements = arr41.splice(2, 3);

console.log(removedElements); // [ 3, 4, 5 ]

console.log(arr41); // [ 1, 2, 6, 7, 8, 9 ]

// use case 2: to add elements to an array

let arr42 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr42.splice(2, 0, 10, 11, 12);

console.log(arr42); // [ 1, 2, 10, 11, 12, 3, 4, 5, 6, 7, 8, 9 ]

// use case 3: to replace elements in an array

let arr43 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr43.splice(2, 3, 10, 11, 12);

console.log(arr43); // [ 1, 2, 10, 11, 12, 6, 7, 8, 9 ]

// 28. Array.from()

//use case 1: Array.from() can be used to create an array from an array-like object
let arrayLikeObject = {
    0: 'Hello',
    1: 'World',
    length: 2
};
console.log(Array.from(arrayLikeObject)); // [ 'Hello', 'World' ]

//note: if length property is not present, it will return an empty array

//use case 2: Array.from() can be used to create an array from a string

console.log(Array.from('Hello')); // [ 'H', 'e', 'l', 'l', 'o' ]

//use case 3: Array.from() can be used to create an array from a set

let set = new Set([1, 2, 3, 4, 5]);

console.log(Array.from(set)); // [ 1, 2, 3, 4, 5 ]

//use case 4: Array.from() can be used to create an array from a map

let map = new Map([
    ['name', 'John'],
    ['age', 30]
]);

console.log(Array.from(map)); // [ [ 'name', 'John' ], [ 'age', 30 ] ]