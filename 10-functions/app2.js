/**
 * Differences between function declaration and function expression
 */

// Since function declarations are hoisted, they can be called before they are declared
// console.log(sum(2, 3)); // 5
// function sum(a, b) {
//     return a + b;
// }

// Function expressions cannot be called before they are declared
// console.log(sum(2, 3)); // TypeError: sum is not a function
// const sum = function (a, b) {
//     return a + b;
// }

// Function declarations are hoisted, which means they are moved to the top of the code
// Function expressions are not hoisted, which means they are not moved to the top of the code
// This means that function expressions cannot be called before they are declared

// function sum(a, b) {
//     if (true)
//     {
//         var xd = "hello"
//     }
//     console.log(xd);
//     return a + b;
// }

// console.log(sum(1,2));