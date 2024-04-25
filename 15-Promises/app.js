/**
 * Promises
 */

// Recordemos por un momento, los callbacks. Los callbacks son funciones que se pasan como argumentos a otras funciones. 

// Por ejemplo:

function connectDB(callback) {
    setTimeout(() => {
        console.log('Conexión establecida');
        callback();
    }, 2000);
}

// En el anterior ejemplo, simulamos un retardo utilizando la web API setTimeout. 
// Una vez que la conexión se establece, llamamos a la función callback.

// Sin embargo, si queremos capturar errores, la cosa se complica un poco.

function connectDB(callback, errorCallback) {
    setTimeout(() => {
        const error = false;
        if (error) {
            errorCallback('Error de conexión');
        } else {
            console.log('Conexión establecida');
            callback();
        }
    }, 2000);
}

// En el anterior ejemplo, simulamos un error en la conexión, lo cual demanda 
// un segundo callback para manejar el error.

// Vamos un paso más allá. ¿Qué pasa si la funcion callback y errorCallback 
// reciben callbacks como argumentos? La cosa se complica aún más.

function connectDB(callback, errorCallback, callback2) {
    setTimeout(() => {
        const error = false;
        if (error) {
            errorCallback(() => {
                console.error("Un error ocurrio")
            }, 'Error de conexión');
        } else {
            console.log('Conexión establecida');
            callback(callback2);
        }
    }, 2000);
}

// En el anterior ejemplo, simulamos la obtención de datos una vez que la conexión se establece.
// Para manejar los datos, necesitamos un tercer callback.

//... Ya te imaginarás lo que sigue. La cosa se pone fea. Podriamos incluso llegar a tener
// una estructura de callbacks anidados que se conoce como callback hell:

// connectDB(() => {
//     getData(() => {
//         processData(() => {
//             console.log('Datos procesados');
//         });
//     });
// });

// Para evitar este tipo de situaciones, es que surgen las Promesas.

// Una promesa es un objeto que representa la eventual finalización o 
// falla de una operación asíncrona. Tambien cabe aclarar que el event loop 
// lo identifica como un microtask, por ende tiene prioridad sobre las macrotasks.

// Las promesas tienen tres estados:

// 1. Pendiente (pending): Estado inicial, ni cumplida ni rechazada.
// 2. Cumplida (fulfilled): La operación se completó satisfactoriamente.
// 3. Rechazada (rejected): La operación falló.

// Para crear una promesa, utilizamos el constructor Promise.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = false;
        if (error) {
            reject('Error de conexión');
        } else {
            resolve('Conexión establecida');
        }
    }, 2000);
});

// La función que recibe el constructor Promise, recibe dos argumentos: resolve y reject.

// resolve: Se ejecuta cuando la operación se completa satisfactoriamente.
// reject: Se ejecuta cuando la operación falla.

// Para consumir una promesa, utilizamos el método then.

promise.then((message) => {
    console.log(message);
    return 'Datos obtenidos';
}).then(message => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});

// En el anterior ejemplo, encadenamos dos métodos then. El segundo then recibe el valor
// retornado por el primer then. En caso de error, utilizamos el método catch.

// Las promesas son una mejora significativa sobre los callbacks. Sin embargo,
// las promesas tienen un problema: no podemos cancelar una promesa.

// Para solucionar este problema, surgen los async/await... el cual veremos en 
// lecciones venideras.