/**
 * Strings
 */

// 1. String Basics

// - concatenation

// let firstName = 'John';
// let lastName = 'Doe';

// let fullName = firstName + ' ' + lastName;

// console.log(fullName); // John Doe

// - string length
// let message = 'Hello World!';
// let messageLength = message.length;

// console.log(messageLength); // 12

// - string interpolation

// let age = 25;
// let firstName = 'John';
// let message = `Hello, my name is ${firstName} and I am ${age} years old.`;

// - string scaping

// let message = 'Hello, my name is \'John\' and I am 25 years old.';
// let message2 = "Hello, my name is 'John' and I am 25 years old.";

// 2. String Methods

let message = 'Hello World!';

// charAt()
console.log(message.charAt(0)); // H // which is the same as message[0]

// charCodeAt()
console.log(message.charCodeAt(0)); // 72 // ASCII code of 'H'

// concat()
let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName.concat(' ', lastName);

console.log(fullName); // John Doe

// includes()
console.log(message.includes('World')); // true

// indexOf()
// Note: returns the position of the first occurrence of a specified value in a string,
// returns -1 if the value to search for never occurs
console.log(message.indexOf('World')); // 6

// lastIndexOf()
// Note: returns the position of the last occurrence of a specified value in a string, 
// returns -1 if the value to search for never occurs
console.log(message.lastIndexOf('o')); // 7

// match()
// note: the 'g' flag is used to perform a global match (find all matches rather than stopping after the first match)
console.log(message.match(/o/g)); // [ 'o', 'o' ] // returns an array of all matches

// repeat()
console.log(message.repeat(3)); // Hello World!Hello World!Hello World!

// replace()
console.log(message.replace('World', 'Universe')); // Hello Universe!

// search()
// Note: returns the position of the first match, technically the same as indexOf() but with different syntax
// usage: Useful when you want to search for a pattern in a string
// console.log(message.search('World')); // 6 
console.log(message.search(/World/)); // 6
console.log(message.search(/world/)); // -1 // case sensitive
console.log(message.search(/world/i)); // 6 // case insensitive

// slice()
// use case 1: slice() can be used to extract a part of a string
console.log(message.slice(6, 11)); // World
// use case 2: slice() can be used to extract a part of a string from the end
console.log(message.slice(-6)); // World!
// use case 3: slice() can be used to extract a part of a string from the end
// Note: the second parameter is non-inclusive which means it will not include the character at that index
console.log(message.slice(-6, -1)); // World

// split()
let fruits = 'Apple, Banana, Mango';
// use case 1: split() can be used to split a string into an array
console.log(fruits.split(', ')); // [ 'Apple', 'Banana', 'Mango' ]
// use case 2: split() can be used to split a string into an array with a limit
console.log(fruits.split(', ', 2)); // [ 'Apple', 'Banana' ]
// use case 3: split() can be used to split a string into an array with a limit
console.log(fruits.split(', ', 1)); // [ 'Apple' ]
// use case 4: split() can be used to split a string into an array with a limit
console.log(fruits.split(', ', 0)); // []

// startsWith()
// use case 1: startsWith() can be used to check if a string starts with a specified value
console.log(message.startsWith('Hello')); // true
// use case 2: startsWith() can be used to check if a string starts with a specified value at a specified position
console.log(message.startsWith('World', 6)); // true

// endsWith()
// use case 1: endsWith() can be used to check if a string ends with a specified value
console.log(message.endsWith('World!')); // true
// use case 2: endsWith() can be used to check if a string ends with a specified value at a specified position
console.log(message.endsWith('Hello', 5)); // true

// substring()
// use case 1: substring() can be used to extract a part of a string
console.log(message.substring(6, 11)); // World
// use case 2: substring() can be used to extract a part of a string from the end

// toLowerCase()
console.log(message.toLowerCase()); // hello world!

// toUpperCase()
console.log(message.toUpperCase()); // HELLO WORLD!

// trim()
console.log('   Hello World!   '.trim()); // Hello World! without leading and trailing spaces

// valueOf()
// use case: valueOf() can be used to return the primitive value of a string object
console.log(message.valueOf()); // Hello World!





