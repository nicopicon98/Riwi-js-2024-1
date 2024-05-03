/**
 * call, bind, apply
 */

// call, bind y apply son métodos que se utilizan para cambiar el contexto de una función.

// Recordemos que el contexto de una función es el objeto que la contiene, es decir, 
// el objeto que está a la izquierda del punto.

// Veamos un ejemplo:

const person = {
    name: 'John',
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
}

person.greet(); // Hello John

// En este caso, el contexto de la función greet es el objeto person, por lo que this.name 
// hace referencia a person.name.

// Pero, ¿qué pasa si queremos utilizar la función greet con otro objeto que tenga una propiedad name?

// Por defecto, el contexto de una función es el objeto global, pero podemos cambiarlo
// utilizando call, bind o apply.

// call

function greet() {
    console.log(`Hello ${this.name}`);
}

const person2 = {
    name: 'John'
}

greet.call(person2); // Hello John

// bind

const greetPerson = greet.bind(person);

greetPerson(); // Hello John

// apply

function greet2(greeting, message) {
    console.log(`${greeting} ${this.name}, ${message}`);
}

greet2.apply(person, ['Hello', 'How are you?']); // Hello John, How are you?

// call y apply son muy similares, la única diferencia es que apply recibe los argumentos en un array.