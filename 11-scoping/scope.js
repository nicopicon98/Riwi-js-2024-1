/**
 * Scope
 */

// Que es el scope?
// El scope es el alcance que tiene una variable en un programa.
// En JavaScript, el scope se define por las llaves {}. Como un if, un while, un for, etc.
// Si una variable es declarada con la palabra reservada "let" dentro de un bloque de código, solo estará disponible dentro de ese bloque.
// Si una variable es declarada con la palabra reservada "var" dentro de un bloque de código, estará disponible en todo el programa.

// Ejemplo de scope con let
let x = 10;

if (true) {
    let y = 20;
    console.log(x + y); // 30
}

// console.log(y); // ReferenceError: y is not defined

// Ejemplo de scope con var
var a = 10;

if (true) {
    var b = 20;
    console.log(a + b); // 30
}

console.log(b); // 20

// En el primer ejemplo, la variable "y" no está disponible fuera del bloque if, por lo que se genera un error.
// En el segundo ejemplo, la variable "b" está disponible fuera del bloque if, por lo que se imprime su valor.

// En general, es recomendable usar "let" en lugar de "var" para declarar variables, ya que "let" tiene un scope más limitado y es más seguro.
// Por recomendacion, siempre es recomendable usar el scope mas reducido, para evitar errores y problemas en el código.