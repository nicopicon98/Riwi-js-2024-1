/**
 * Callback
 */

// Entendamos a los callbacks como funciones que se pasan como argumentos a otras funciones.

// 1. Consideremos la siguiente función que recibe un callback como argumento.

function mostrarMensaje(callback) {
    callback();
}

// 2. Definimos una función que pasaremos como callback a mostrarMensaje.

function mensaje() {
    console.log('Hola Mundo!');
}

// 3. Llamamos a mostrarMensaje y pasamos mensaje como callback.

mostrarMensaje(mensaje); // Hola Mundo!