/**
 * Object.prototype
 */

// Object.prototype es un objeto que contiene los métodos y propiedades que son comunes a todos los objetos en JavaScript.

// Ejemplo de Object.prototype

const persona = {
    nombre: 'Pedro',
    apellido: 'Gomez',
    edad: 30
}

// Object.prototype.hasOwnProperty()

console.log(persona.hasOwnProperty('nombre')); // true

// Object.prototype.isPrototypeOf()

console.log(persona.isPrototypeOf(persona)); // false

// Object.prototype.toString()

console.log(persona.toString()); // [object Object] // Recordar que javascript no sabe como imprimir un objeto, por eso lo convierte a [object Object]

// Object.prototype.toLocaleString()

console.log(persona.toLocaleString()); // [object Object]

// Object.prototype.valueOf()

console.log(persona.valueOf()); // { nombre: 'Pedro', apellido: 'Gomez', edad: 30 }

// Object.prototype.constructor

console.log(persona.constructor); // [Function: Object]

// Object.prototype.__proto__

console.log(persona.__proto__); // {}

// Object.prototype.propertyIsEnumerable()

console.log(persona.propertyIsEnumerable('nombre')); // true

// Que significa que una propiedad sea enumerable? Significa que la propiedad puede ser iterada en un ciclo for...in.

// Cuando una propiedad no es enumerable, no se puede iterar en un ciclo for...in.
// Por defecto, las propiedades que se crean en un objeto literal son enumerables. 
// A menos que se especifique lo contrario con Object.defineProperty() o Object.defineProperties().
// Ejemplo de propiedad no enumerable

Object.defineProperty(persona, 'pais', {
    value: 'Colombia',
    enumerable: false
});

console.log(persona.propertyIsEnumerable('pais')); // false

// Object.prototype.toSource()

console.log(persona.toSource()); // ({ nombre: 'Pedro', apellido: 'Gomez', edad: 30, pais: 'Colombia' })