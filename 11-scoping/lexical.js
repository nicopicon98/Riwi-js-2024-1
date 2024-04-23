/**
 * Lexical scoping:
 * 
 * El ámbito léxico, o scope léxico, en JavaScript es un concepto fundamental 
 * que define cómo las variables y otras identificaciones son accesibles en el código. 
 * Este ámbito está determinado por la ubicación física de las variables dentro del código fuente 
 * y sigue una estructura jerárquica basada en dónde se declaran las variables y funciones.
 */

// Como funciona el scope léxico?

/*
En JavaScript, cuando se define una función, esta crea su propio ámbito. 
Las variables definidas dentro de esta función solo pueden ser accedidas desde el código 
dentro de la misma función o de funciones anidadas. 
Esto se debe a que JavaScript usa un sistema de ámbito léxico, lo que significa 
que la accesibilidad de las variables está controlada por la posición de dichas 
variables dentro de las estructuras anidadas del código, como funciones o bloques de código.
*/

let x = 'global';

function outerFunction() {
    let x = 'outer';

    function innerFunction() {
        let x = 'inner';
        console.log(x); // Muestra 'inner', accede a la x más cercana en su propio alcance.
    }

    console.log(x); // Muestra 'outer', porque está en el alcance de outerFunction.
    innerFunction();
}

outerFunction();
console.log(x); // Muestra 'global', accede a la variable global x.