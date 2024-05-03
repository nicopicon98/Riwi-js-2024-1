/**
 * Clases en JavaScript
 */

// Definición de una clase

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

// Creación de un objeto de la clase Persona

const persona1 = new Persona('Juan', 30);

console.log(persona1.nombre); // Juan

persona1.saludar(); // Hola, soy Juan

// Herencia

class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y estudio ${this.curso}`);
    }
}

const estudiante1 = new Estudiante('Ana', 25, 'JavaScript');

estudiante1.saludar(); // Hola, soy Ana y estudio JavaScript

// Métodos estáticos

class Calculadora {
    static sumar(a, b) {
        return a + b;
    }

    static restar(a, b) {
        return a - b;
    }
}

console.log(Calculadora.sumar(2, 3)); // 5

console.log(Calculadora.restar(5, 2)); // 3

// Getters y setters

class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    get area() {
        return this.base * this.altura;
    }

    set area(valor) {
        this.base = Math.sqrt(valor);
        this.altura = Math.sqrt(valor);
    }
}

const rectangulo1 = new Rectangulo(3, 4);

console.log(rectangulo1.area); // 12

rectangulo1.area = 16;

console.log(rectangulo1.base); // 4

console.log(rectangulo1.altura); // 4

// Propiedades estáticas

class Animal {
    static especie = 'Perro';
}

console.log(Animal.especie); // Perro

// Propiedades privadas

class Coche {
    #velocidad = 0;

    acelerar() {
        this.#velocidad++;
    }

    frenar() {
        this.#velocidad--;
    }

    get velocidad() {
        return this.#velocidad;
    }
}

const coche1 = new Coche();

coche1.acelerar();

console.log(coche1.velocidad); // 1

coche1.frenar();

console.log(coche1.velocidad); // 0