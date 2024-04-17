// /**
//  * Operators
//  */

// // 1. Arithmetic Operators

// // Addition
// let a = 5;
// let b = 3;
// let c = a + b;

// console.log(c); // 8

// // Subtraction
// c = a - b;
// console.log(c); // 2

// // Multiplication
// c = a * b;
// console.log(c); // 15

// // Division
// c = a / b;
// console.log(c); // 1.6666666666666667

// // Modulus
// c = a % b;

// console.log(c); // 2

// // Increment

// let d = 5;
// d++;

// console.log(d); // 6

// // Decrement
// d--;

// console.log(d); // 5

// // 2. Assignment Operators

// let x = 5;

// x += 5; // x = x + 5

// console.log(x); // 10

// x -= 5; // x = x - 5

// console.log(x); // 5

// x *= 5; // x = x * 5

// console.log(x); // 25

// x /= 5; // x = x / 5

// console.log(x); // 5

// x %= 5; // x = x % 5

// console.log(x); // 0, because 5 % 5 = 0

// // 3. Comparison Operators

// let y = 5;

// console.log(y == 5); // true

// console.log(y === 5); // true

// console.log(y != 5); // false

// console.log(y !== 5); // false

// console.log(y > 5); // false

// console.log(y >= 5); // true

// console.log(y < 5); // false

// console.log(y <= 5); // true

// /**
//  * Strict Equality (===)
//  *
//  * What is the difference between == and === in JavaScript?
//  *
//  * The == operator will compare for equality after doing any necessary type conversions.
//  * The === operator will not do the conversion,
//  *  so if two values are not the same type === will simply return false.
//  * It's this case where === will be faster, and may return a different result than ==.
//  * In all other cases performance will be the same.
//  */

// // 3 === 3             // true, porque ambos son del mismo tipo y valor
// //'hello' === 'hello' // true, porque ambos son del mismo tipo y valor
// //true === true       // true, porque ambos son del mismo tipo y valor
// //'1' === 1           // false, porque uno es 'string' y el otro 'number'
// //0 === false         // false, porque uno es 'number' y el otro 'boolean'
// //[] === []           // false, porque son diferentes objetos en memoria
// //{} === {}           // false, porque son diferentes objetos en memoria

// // Para primitivos
// // 5 === 5; // true - mismos tipo y valor
// // 'perro' === 'perro'; // true - mismos tipo y valor

// // Para objetos
// // const obj1 = { nombre: 'ChatGPT' };
// // const obj2 = { nombre: 'ChatGPT' };
// // const refObj1 = obj1; // once I make a copy of obj1, refObj1 and obj1 are pointing to the same memory location

// // obj1 === obj2; // false - distintas referencias en memoria
// // obj1 === refObj1; // true - misma referencia en memoria

// // 4. Logical Operators

// let z = 5;

// console.log(z > 3 && z < 10); // true (AND)

// console.log(z > 3 || z < 4); // true (OR)

// console.log(!(z > 3)); // false (NOT)

// console.log(z === 5 ? 'Yes' : 'No'); // ternary operator // Yes

// let altura = 1.50;

// altura >= 1.70 && altura<=  3
//     ?  console.log("Eres alto") 
//     :  console.log("Eres Bajito");


// // conditionals

// // if
// const coder = "Julian";
// const barrio = "Las palmas";
// const hayMetro = false;
// const horaDespertar = "6a.m";
// let julianDespierta = false;

// if (coder == "Julian") {
//     if (coder == "Julian" && barrio == "Las palmas") {
//         console.log("Ella vive el barrio las palmas")
//         if (!hayMetro) {
//             console.log("Julian llega en Indrive o bus")
//             if (horaDespertar == "6a.m") {
//                 console.log("LLega temprano")
//                 console.log("No pasa nada")
//             }else {
//                 console.log("La levanta la mamá")
//                 console.log("LLegó un poquito tarde")
//                 if (coder == "Julian" &&  !julianDespierta) {
//                     julianDespierta = true
//                 }else {
//                     console.log("Julian no llega")
//                 }
//             }
//         }else {
//             console.log("Julian cogeria el metro todos los días")
//         }
//     }

// }else {
//     console.log("No es Julian")
// }

// const a = false

// if(!a) {
//     console.log("no a");
// }