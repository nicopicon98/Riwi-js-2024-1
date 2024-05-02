/**
 * Prototypes en JavaScript
 */

/*
1. ¿Qué es un prototipo?
    - Prototipo como aquel objeto del cual otro objeto hereda propiedades y métodos. Es un mecanismo
    fundamental de JavaScript para la reutilización y encapsulamiento de código.
*/

/*
2. ¿Como aplicar prototipos?
    2.1 Función constructora e introducción a this
        - this es una palabra reservada que hace referencia al objeto que se está creando.
        - new crea un nuevo objeto y asigna this a ese objeto.
*/

// Función constructora

function UsuarioBase(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

UsuarioBase.prototype.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
}

const usuarioBase = new UsuarioBase('Juan', 'Perez'); // new asigna this a usuarioBase

/*
    2.2 Object.create vs Object.setPrototypeOf // No recomendado
        - Object.create crea un nuevo objeto con el prototipo que se le pasa como argumento.
        - Suponiendo Administrador como funcion constructora, 
        podemos heredar de UsuarioBase de la siguiente manera: Administrador.prototype = Object.create(UsuarioBase.prototype)
        - Object.setPrototypeOf es una función que establece el prototipo de un objeto. No esta
        recomendado usarla ya que es menos eficiente que Object.create y no es soportada por todos los navegadores.
        Como asi que es menos eficiente que Object.create?
*/

// Object.create

function Administrador(nombre, apellido, cargo) {
    UsuarioBase.call(this, nombre, apellido);
    this.cargo = cargo;
}

Administrador.prototype = Object.create(UsuarioBase.prototype);

// Checkear si el prototipo de Administrador es UsuarioBase

// Formas:
    console.log(Administrador.prototype instanceof UsuarioBase); // instanceof
    console.log(UsuarioBase.prototype.isPrototypeOf(Administrador.prototype)); // isPrototypeOf
    console.log(Object.getPrototypeOf(Administrador.prototype) === UsuarioBase.prototype); // Object.getPrototypeOf


Administrador.prototype.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y soy ${this.cargo}`);
}

const administrador = new Administrador('Pedro', 'Gomez', 'Administrador');

// Object.setPrototypeOf

function Administrador2(nombre, apellido, cargo) {
    UsuarioBase.call(this, nombre, apellido);
    this.cargo = cargo;
}

Administrador2.prototype = Object.setPrototypeOf(UsuarioBase.prototype);

Administrador2.prototype.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y soy ${this.cargo}`);
}

const administrador2 = new Administrador2('Pedro', 'Gomez', 'Administrador');

/*
3. Cadena de prototipos
    - La cadena de prototipos es la forma en la que JavaScript busca propiedades y métodos en los objetos.
    - Si no encuentra la propiedad o método en el objeto, busca en el prototipo del objeto, y así sucesivamente.
    - La cadena de prototipos termina en Object.prototype, que es el prototipo de todos los objetos.
    - Si se intenta acceder a una propiedad o método que no existe en la cadena de prototipos, se retorna undefined.
    - La cadena de prototipos es una forma de implementar herencia en JavaScript.

*/

// Ejemplo de cadena de prototipos

function Animal() {
    this.comer = function() {
        console.log('Comiendo');
    }
}

function Perro() {
    this.ladrar = function() {
        console.log('Guau');
    }
}

Perro.prototype = new Animal();

const perro = new Perro();
perro.ladrar(); // Guau
perro.comer(); // Hacer ruido

// HasOwnProperty: método que determina si un objeto tiene una propiedad con el nombre especificado como una propiedad directa del objeto.
console.log(perro.hasOwnProperty('ladrar')); // true
console.log(perro.hasOwnProperty('comer')); // false

// Si se intenta acceder a una propiedad o método que no existe en la cadena de prototipos, se retorna undefined.
perrro.dormir(); // undefined

/*
4. Shadowing u ocultamiento de propiedades
    - Shadowing es la forma en la que JavaScript resuelve conflictos de nombres en la cadena de prototipos.
    - Si una propiedad o método se encuentra en el objeto y en su prototipo, se utiliza el de mayor prioridad.
    - La prioridad de las propiedades y métodos es la siguiente: objeto > prototipo > prototipo del prototipo > ... > Object.prototype.
    - Si se intenta acceder a una propiedad o método que no existe en la cadena de prototipos, se retorna undefined.
*/

// Ejemplo de shadowing

function Animal2() {
    this.hacerRuido = function() {
        console.log('Hacer ruido');
    }
}

function Perro2() {
    this.hacerRuido = function() {
        console.log('Guau');
    }
}

Perro2.prototype = new Animal2();

const perro2 = new Perro2();

perro2.hacerRuido(); // Guau

/*
    5. Herencia prototípica
    - La herencia prototípica es un mecanismo de reutilización de código en JavaScript.
    - Se basa en la cadena de prototipos y en la delegación de responsabilidades.
    - Se puede implementar herencia prototípica con funciones constructoras y con Object.create.
    - La herencia prototípica es una forma de implementar herencia en JavaScript.
*/

// Ejemplo de herencia prototípica

function Animal3() {
    this.hacerRuido = function() {
        console.log('Hacer ruido');
    }
}

function Perro3() {
    this.ladrar = function() {
        console.log('Guau');
    }
}

Perro3.prototype = new Animal3();

const perro3 = new Perro3();

perro3.ladrar(); // Guau
perro3.hacerRuido(); // Hacer ruido

/*
6. Polimorfismo en prototipos
    - Polimorfismo es la capacidad de un objeto de comportarse de diferentes maneras 
    según el contexto.
    - En JavaScript, el polimorfismo se puede implementar con la herencia prototípica.
    - Se puede sobrescribir un método en un objeto hijo para modificar su comportamiento.
    - De esta forma, el objeto gato puede maullar y el objeto perro puede ladrar. Pero
    ambos heredan del objeto animal el cual tiene un comportamiento general, como "hacer ruido".
*/

// Ejemplo de polimorfismo en prototipos

function Animal4() {
    this.hacerRuido = function() {
        console.log('Hacer ruido');
    }
}

function Perro4() {
    this.hacerRuido = function() {
        console.log('Guau');
    }
}

function Gato() {
    this.hacerRuido = function() {
        console.log('Miau');
    }
}

Perro4.prototype = new Animal4();

Gato.prototype = new Animal4();

const perro4 = new Perro4();

const gato = new Gato();

perro4.hacerRuido(); // Hacer ruido
gato.hacerRuido(); // Hacer ruido

/*
7. De función constructora a clase
*/

// Función constructora

function UsuarioBase(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

UsuarioBase.prototype.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
}

// Clase

class UsuarioBase {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
    }
}