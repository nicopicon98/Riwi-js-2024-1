/**
 * Que es un closure?
 */

// Un closure es una función que tiene acceso a su scope local y a su scope superior,

// Ejemplo 1

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++;
        return count;
    }
    return innerFunction;
}

const myNewFunction = outerFunction();

console.log(myNewFunction());


// Detengamonos un momento en el ejemplo anterior, la función outerFunction retorna 
// la función innerFunction, pero esta función tiene acceso a la variable count que
// se encuentra en el scope de outerFunction, esto es un closure.
// La función innerFunction tiene acceso a su scope local y a su scope superior.
// Es como si la función innerFunction tuviera una memoria de la variable count
// O si lo quieres ver de otra manera, la función innerFunction esta encadenada a la función outerFunction

// Ejemplo 2

function outerFunction2() {
    let count = 0;

    function plusOne() {
        count++;
        return count;
    }

    function minusOne() {
        count--;
        return count;
    }

    return {
        plusOne,
        minusOne
    }
}

const myNewFunction2 = outerFunction2();

console.log(myNewFunction2.plusOne());

// En este ejemplo, la función outerFunction2 retorna un objeto con dos funciones, 
// plusOne y minusOne, estas funciones tienen acceso a la variable count que se encuentra
// en el scope de outerFunction2, esto es un closure.



