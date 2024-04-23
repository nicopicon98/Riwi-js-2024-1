/**
 * Global vs Local Scope.
 */

// Que es el scope global?

// El scope global es el alcance que tiene una variable en todo el programa.
// Recordemos, que de ahora en adelante el uso de var no es recomendable, por lo que usaremos let.
// Si una variable es declarada con la palabra reservada "let" fuera de cualquier bloque de código, estará disponible en todo el programa.
// Si una constante es declarada con la palabra reservada "const" fuera de cualquier bloque de código, estará disponible en todo el programa.
// Si una función es declarada fuera de cualquier bloque de código, estará disponible en todo el programa.

// Ejemplo de scope global

let x = 10;

if (true) {
    let y = 20;
    console.log(x + y); // 30
}

console.log(x); // 10

// En este ejemplo, la variable "x" está disponible en todo el programa, por lo que se imprime su valor.

// Ejemplo de scope global con funciones

function sum(a, b) {
    return a + b;
}

console.log(sum(10, 20)); // 30

// En este ejemplo, la función "sum" está disponible en todo el programa, por lo que se puede llamar en cualquier parte del código.

// Ejemplo de scope global con constantes

const PI = 3.1416;

function area(radio) {
    return PI * radio * radio;
}

// En este ejemplo, la constante "PI" está disponible en todo el programa, por lo que se puede usar en cualquier parte del código.

// En general, es recomendable usar el scope más reducido posible, para evitar errores y problemas en el código.
// En resumen, el scope global es el alcance que tiene una variable, función o constante en todo el programa.

// Que es el scope local?

// El scope local es el alcance que tiene una variable en un bloque de código.
// Este se divide en dos: Scope de función y scope de bloque.

// Scope de función

// El scope de función es el alcance que tiene una variable dentro de una función.

function sum(a, b) {
    let result = a + b;
    return result;
}

console.log(sum(10, 20)); // 30

// En este ejemplo, la variable "result" está disponible solo dentro de la función "sum".

// Scope de bloque

// El scope de bloque es el alcance que tiene una variable dentro de un bloque de código.

if (true) {
    let x = 10;
    console.log(x); // 10
}

// console.log(x); // ReferenceError: x is not defined

// En este ejemplo, la variable "x" está disponible solo dentro del bloque if.