/**
 * Prototypes
 */

//- Entendiendo los objetos en JS

// 1. Consideremos el siguiente objeto en JS

let animal = {
    tipo: 'Mamífero',
    mostrarTipo: function () {
        console.log(this.tipo);
    }
};

// let animal = {}: Declaramos un nuevo objeto llamado animal.
// tipo: 'Mamífero': Definimos una propiedad tipo para el objeto, que es una cadena de texto 'Mamífero'.
// mostrarTipo: function() { ... }: Añadimos un método mostrarTipo al objeto, que cuando se llama, muestra el tipo del animal.

// 2. Usamos el objeto animal y accedemos a su metodo mostrarTipo

//{...}

//- Introduccion a los prototipos

// 1. Crear un objeto con un prototipo

// Pensemos en un prototipo, como un objeto cuyas propiedades y métodos 
// seran compartidos por otros objetos que "heredan" de él.

let perro = Object.create(animal); 
perro.tipo = 'Perro';

// Object.create(animal) -> crea un nuevo objeto perro que hereda todas las propiedades y métodos del objeto animal.
// perro.tipo = "perro" -> sobreescribimos la propiedad tipo del objeto perro.

// 2. Accedemos al metodo mostrarTipo del objeto perro

//{...}

// Aunque perro fue creado a partir de animal, y usa el método mostrarTipo heredado, 
// muestra 'Perro' porque hemos sobrescrito la propiedad tipo.

// 3. 





