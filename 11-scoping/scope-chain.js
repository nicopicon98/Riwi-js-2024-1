/**
 * Cadena de scope
 */

// Como vimos en el ejemplo anterior, el scope de una variable 
// depende de su ubicación en el código.

// En JavaScript, cuando se busca una variable, el motor de 
// JavaScript busca primero en el scope local, y si no la encuentra, busca en el scope superior, 
// y así sucesivamente hasta llegar al scope global.

// Veamo un ejemplo:

let a = 1;

function foo() {
    let b = 2;

    function bar() {
        let c = 3;
        console.log(a, b, c); // 1 2 3
        console.log(d); // ReferenceError: d is not defined
    }

    bar();
    console.log(a, b); // 1 2
}

foo();

// En este ejemplo, la función bar() tiene acceso a las variables a, b y c.
// Si bar() intenta acceder a una variable d, el motor de JavaScript buscará en el scope local,
// luego en el scope superior (foo), y luego en el scope global.

// Si no encuentra la variable d en ninguno de esos scopes, lanzará un error de referencia no definida.
// En este caso, la variable d no está definida en ningún scope, por lo que se lanza un error.
