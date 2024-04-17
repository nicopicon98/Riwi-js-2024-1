/**
 * Functions in JavaScript
 */

// Function Declaration
function greet() {
    console.log('Hello World!');
}

// Function Declaration with return value
function greet() {
    return 'Hello World!';
}

// Function Expression
const greet = function () {
    console.log('Hello World!');
}

// Function Expression with name
/**
 * Function expressions can have a name, which can be helpful for debugging, recursion,
 * and self-referencing functions, legibility and self-documentation.
 */
const greet = function greet() {
    console.log('Hello World!');
}

// Function Expression with return value
const greet = function () {
    return 'Hello World!';
}

// Arrow Function
const greet = () => {
    console.log('Hello World!');
}

// Arrow Function with one line
const greet = () => console.log('Hello World!');

// Arrow Function with one argument and one line
const greet = name => console.log(`Hello ${name}`);

// Arrow Function with multiple arguments and one line
const greet = (name, age) => console.log(`Hello ${name}, you are ${age} years old`);

// Arrow Function with return value
const greet = () => {
    return 'Hello World!';
}

// Arrow Function with one argument and one line with implicit return
const greet = name => `Hello ${name}`;

// Arrow Function with multiple arguments and one line with implicit return
const greet = (name, age) => `Hello ${name}, you are ${age} years old`;

// Arrow Function with no arguments and one line with implicit return
const greet = () => `Hello World!`;