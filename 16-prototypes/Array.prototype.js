/**
 * JavaScript Array prototype
 */

// Array.prototype es un objeto que contiene los métodos y propiedades que son comunes a todos los arrays en JavaScript.

// .map

Array.prototype.map = function(callback) {
    const newArray = []; // Se inicializa un nuevo array
    for (let i = 0; i < this.length; i++) { // Se recorre el array
        newArray.push(callback(this[i], i, this)); // Se agrega al nuevo array el resultado de llamar la función callback con el elemento actual, el índice y el array
    }
    return newArray;
}

// .filter

Array.prototype.filter = function(callback) {
    const newArray = []; // Se inicializa un nuevo array
    for (let i = 0; i < this.length; i++) { // Se recorre el array
        if (callback(this[i], i, this)) { // Si la condición es verdadera, se agrega el elemento al nuevo array
            newArray.push(this[i]); // Se agrega el elemento al nuevo array
        }
    }
    return newArray; // Se retorna el nuevo array
}

// .reduce

Array.prototype.reduce = function(callback, initialValue) {
    let accumulator = initialValue || 0; // Si no se pasa un valor inicial, se inicializa en 0
    for (let i = 0; i < this.length; i++) { // Se recorre el array
        accumulator = callback(accumulator, this[i], i, this); // Se llama la función callback con el acumulador, el elemento actual, el índice y el array
    }
    return accumulator; // Se retorna el acumulador
}

// .forEach

Array.prototype.forEach = function(callback) {
    for (let i = 0; i < this.length; i++) { // Se recorre el array
        callback(this[i], i, this); // Se llama la función callback con el elemento actual, el índice y el array
    }
}

// .every

Array.prototype.every = function(callback) {
    for (let i = 0; i < this.length; i++) { // Se recorre el array
        if (!callback(this[i], i, this)) { // Si la condición es falsa, se retorna false
            return false;
        }
    }
    return true; // Si la condición es verdadera para todos los elementos, se retorna true
}

// .some

Array.prototype.some = function(callback) {
    for (let i = 0; i < this.length; i++) { // Se recorre el array
        if (callback(this[i], i, this)) { // Si la condición es verdadera, se retorna true
            return true;
        }
    }
    return false; // Si la condición es falsa para todos los elementos, se retorna false
}

// .find

Array.prototype.find = function(callback) {
    for (let i = 0; i < this.length; i++) { // Se recorre el array
        if (callback(this[i], i, this)) { // Si la condición es verdadera, se retorna el elemento
            return this[i];
        }
    }
}

// .findIndex

Array.prototype.findIndex = function(callback) {
    for (let i = 0; i < this.length; i++) { // Se recorre el array
        if (callback(this[i], i, this)) { // Si la condición es verdadera, se retorna el índice
            return i;
        }
    }
    return -1; // Si no se encuentra ningún elemento que cumpla la condición, se retorna -1
}

// .includes

Array.prototype.includes = function(element) {
    for (let i = 0; i < this.length; i++) { // Se recorre el array
        if (this[i] === element) { // Si el elemento actual es igual al elemento buscado, se retorna true
            return true;
        }
    }
    return false; // Si no se encuentra el elemento, se retorna false
}

// .indexOf

Array.prototype.indexOf = function(element) {
    for (let i = 0; i < this.length; i++) { // Se recorre el array
        if (this[i] === element) { // Si el elemento actual es igual al elemento buscado, se retorna el índice
            return i;
        }
    }
    return -1; // Si no se encuentra el elemento, se retorna -1
}

// .lastIndexOf

Array.prototype.lastIndexOf = function(element) {
    for (let i = this.length - 1; i >= 0; i--) { // Se recorre el array en orden inverso
        if (this[i] === element) { // Si el elemento actual es igual al elemento buscado, se retorna el índice
            return i;
        }
    }
    return -1; // Si no se encuentra el elemento, se retorna -1
}

// .concat

Array.prototype.concat = function(array) {
    const newArray = [...this]; // Se copia el array actual para no modificarlo
    for (let i = 0; i < array.length; i++) { // Se recorre el array pasado como argumento
        newArray.push(array[i]); // Se agrega cada elemento al nuevo array
    }
    return newArray; // Se retorna el nuevo array
}

// .slice

Array.prototype.slice = function(start, end) {
    const newArray = []; // Se inicializa un nuevo array
    for (let i = start; i < end; i++) { // Se recorre el array desde el índice de inicio hasta el índice de fin
        newArray.push(this[i]); // Se agrega cada elemento al nuevo array
    }
    return newArray; // Se retorna el nuevo array
}

// .splice

Array.prototype.splice = function(start, deleteCount, ...items) {
    const deletedItems = []; // Se inicializa un array para almacenar los elementos eliminados
    for (let i = start; i < start + deleteCount; i++) { // Se recorre el array desde el índice de inicio hasta el índice de fin
        deletedItems.push(this[i]); // Se agrega cada elemento al array de elementos eliminados
    }
    const newArray = [...this.slice(0, start), ...items, ...this.slice(start + deleteCount)]; // Se crea un nuevo array con los elementos antes del índice de inicio, los elementos pasados como argumento y los elementos después del índice de fin
    this.length = 0; // Se vacía el array actual
    for (let i = 0; i < newArray.length; i++) { // Se recorre el nuevo array
        this.push(newArray[i]); // Se agrega cada elemento al array actual
    }
    return deletedItems; // Se retornan los elementos eliminados
}