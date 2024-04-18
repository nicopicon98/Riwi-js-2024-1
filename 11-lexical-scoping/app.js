/**
 * Lexical scoping:
 * 
 * Lexical scoping (sometimes known as static scoping ) is a convention used with 
 * many programming languages that sets the scope (range of functionality) of a variable 
 * so that it may only be called (referenced) from within the block or many 
 * lvl of blocks in which it is defined.
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