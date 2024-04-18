/**
 * Control Structures
 */

// if statement

let age = 18;

if (age >= 18) {
    console.log('You are an adult');
} else {
    console.log('You are a minor');
}

// switch statement

let day = 3;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day');
}

// for loop: execute the block of code a number of times

// use let instead of var to avoid the variable hoisting
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// iterate over an array

let colors = ['red', 'green', 'blue'];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// for...of loop: iterate over the values of an iterable object

for (let color of colors) {
    console.log(color);
}

// for...in loop: iterate over the properties of an object

let person = {
    name: 'John',
    age: 30
};

for (let key in person) {
    console.log(key, person[key]);
}

// while loop: execute the block of code while the condition is true

let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

// do while loop: execute the block of code at least once

let j = 0;

do {
    console.log(j);
    j++;
} while (j < 5);

// break statement: exit the loop

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

// continue statement: skip the current iteration

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}