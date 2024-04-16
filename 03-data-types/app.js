/**
 * Data Types
 * 
 * Data types are the classification or categorization of data items. 
 * It represents the kind of value that tells what operations can be performed on a 7
 * particular data.
 * 
 * According to w3schools.com, Javascript has 8 Data Types:
 * 
 * 1. String
 * 2. Number
 * 3. BigInt
 * 4. Boolean
 * 5. Undefined
 * 6. Null
 * 7. Symbol
 * 8. Object
 * 
 * Which are divided into two categories:
 * 
 * 1. Primitive Data Types
 * 2. Object Data Types
 * 
 * Following are the examples of each data type:
 * 
 */

// 0. We can access the type of a variable using the constructor property of the variable.

// const str = 'Hello, World!';
// console.log(str.constructor.name); // String
// new Function().constructor.name; // Function

// console.log(typeof {});

// 1. Primitive Data Types

// 1.1. Number
// Number represents integer and floating point numbers.
// const num = 123;
// const num = Number(123); // Convert string to number
// const num = new Number(123); // Object
// const num = 123.45;
// const num = 1 / 0; // Infinity
// const num = -1 / 0; // -Infinity
// const num = NaN; // Not a Number
// const num = 0 / 0; // NaN
// const num = 0.1 + 0.2;
// const num = Math.PI;
// const num = Math.round(4.7); // 5
// const num = Math.tan(1.5708);
// const num = 123e5; // 12300000
// const num = 123e-5; // 0.00123
// const num = 0xFF; // 255 (Hexadecimal)
// const num = 0o377; // 255 (Octal)
// const num = 0b11111111; // 255 (Binary)
// const num = Number.MAX_VALUE; // 1.7976931348623157e+308 (Largest number possible in JS)
// const num = Number.MIN_VALUE; // 5e-324 (Smallest number possible in JS)
// const num = Number.POSITIVE_INFINITY; // Infinity
// const num = Number.NEGATIVE_INFINITY; // -Infinity
// const num = Number.NaN; // NaN
// console.log(`This type is ${typeof num}`, num);

// 1.2. String 
// String represents a sequence of characters.
// const str = 'Hello, World!';
// const str = "Hello, World!";
// const str = `Hello, World!`; // ES6 Template Literals

// const str = 'Hello, ' + 'World!'; // Concatenation
// const str = 'Hello, World!'.length; // length property (attribute)
// const str = 'Hello, World!'.toUpperCase(); // toUpperCase() method

// 1.3. Boolean
// Boolean represents true or false.
// const bool = true;
// const bool = false;
// const bool = 1 < 2; // true
// const bool = 1 > 2; // false
// const bool = 1 == 1; // true
// const bool = 1 === '1'; // false
// const bool = 1 !== '1'; // true
// const bool = 1 != '1'; // false
// const bool = 1 >= 1; // true
// const bool = 1 <= 1; // true
// const bool = 1 && 0; // false, 
// const bool = 1 || 0; // true
// const bool = !true; // false
// const bool = !false; // true
// const bool = Boolean(1); // true -> Same concept as python bool(1) Truthy and Falsy
// const bool = Boolean(0); // false
// const bool = Boolean('Hello'); // true
// console.log(bool);

// 1.4. Undefined
// Undefined represents undefined value.
// const und = undefined;
// const und;
// console.log(typeof und, und);

// 1.5. Null
// Null represents null value, which means no value. but it is an object, not a 
// primitive data type.

// const nul = null;
// console.log(typeof nul, nul);

// 1.6. Symbol
// Symbol represents a unique value. Inmutable and unique.
// const sym1 = Symbol('foo');
// const sym2 = Symbol('foo');
// console.log(sym1 === sym2); // false
// console.log(typeof sym1, sym1);


// 1.7. BigInt
// BigInt represents integers with arbitrary precision.
// const bigInt = 1234567890123456789012345678901234567890n;
// console.log(typeof bigInt, bigInt);

// 2. Object Data Types

// 2.1. Object
// Object represents instance through which we can access members.
// const obj = {};
// const obj = new Object();
// const obj = {
//     name: 'John Doe',
//     age: 30,
//     address: {
//         street: '123 Main St',
//         city: 'New York',
//         state: 'NY'
//     }
// };
// const garganta = {
//     size: 12,
//     color: "white",
//     hablar: function(){
//         console.log(this.);
//     }
// }

// console.log(garganta.hablar()()());

// 2.2. Array
// Array represents a list of elements.
// const arr = [];
// const arr = new Array();
// const arr = ['apple', 'banana', 'cherry'];
// const arr = [1, 2, 3];
// const arr = [1, 'apple', true];
// const arr = Array(1, 2, 3);
// const arr = Array.of(1, 2, 3); // this is the same as new Array(1, 2, 3)
// console.log(typeof arr, arr);


// let count = 0
// const myFunction = () => {
//     count++;
//     if(count < 5) {
//         myFunction()
//     }
// }

// myFunction();