/**
 * toString() vs toLocaleString()
 */

// toString() y toLocaleString() son métodos que se encuentran en el prototipo de Object.
// toString() retorna una cadena de texto que representa al objeto.
// toLocaleString() retorna una cadena de texto que representa al objeto en el idioma del navegador.

// Ejemplo de toString()

const persona = {
    nombre: 'Pedro',
    apellido: 'Gomez',
    edad: 30,
    toString() {
        return `${this.nombre} ${this.apellido}, ${this.edad} años`;
    }
}

console.log(persona.toString()); // Pedro Gomez, 30 años

// Ejemplo de toLocaleString()

const fecha = new Date();

console.log(fecha.toLocaleString()); // 9/8/2021, 10:00:00 AM

// Si se sobreescriben los métodos toString() y toLocaleString() en un objeto, se pueden personalizar las representaciones de los objetos.

// Ejemplo de toString() y toLocaleString() personalizados

const persona2 = {
    nombre: 'Pedro',
    apellido: 'Gomez',
    edad: 30,
    toString() {
        return `${this.nombre} ${this.apellido}, ${this.edad} años`;
    },
    toLocaleString() {
        return `${this.nombre} ${this.apellido}, ${this.edad} años desde localeString()`;
    }
}

console.log(persona2.toString()); // Pedro Gomez, 30 años

console.log(persona2.toLocaleString()); // Pedro Gomez, 30 años desde localeString()

// En resumen, toString() y toLocaleString() son métodos que se encuentran en el prototipo de Object y permiten personalizar la representación de los objetos en forma de cadena de texto. toString() retorna una cadena de texto estándar, mientras que toLocaleString() retorna una cadena de texto en el idioma del navegador. Estos métodos pueden ser sobrescritos en los objetos para personalizar su representación.