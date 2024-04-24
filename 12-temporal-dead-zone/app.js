/**
 * Temporal Dead Zone
 */

// El temporal deadzone, es el trayecto desde el inicio del bloque, hasta la 
// inicialización de la variable. En este trayecto, no se puede acceder a la
// variable.

{
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    // Temporal Dead Zone
    // Temporal Dead Zone
    // Temporal Dead Zone
    let a = 1;
}

