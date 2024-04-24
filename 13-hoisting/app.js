/**
 * Hoisting
 */

// Que es hoisting?
// Es un comportamiento de JavaScript que mueve las declaraciones de variables y funciones
// a la parte superior de su scope antes de que se ejecute el código.

// Ejemplo 1
console.log(name); // undefined
var name = 'John';

// Ejemplo 2
console.log(name); // ReferenceError: Cannot access 'name' before initialization
let name = 'John';

// Ejemplo 3
console.log(myFunction()); // [Function: myFunction]
function myFunction() {
  console.log('Hello World');
}

// Ejemplo 4
console.log(myFunction()); // TypeError: myFunction is not a function
var myFunction = function () {
  console.log('Hello World');
};

// Conclusiones
// - Las declaraciones de variables son hoisted pero no sus asignaciones
// - Las declaraciones de funciones son hoisted y sus definiciones