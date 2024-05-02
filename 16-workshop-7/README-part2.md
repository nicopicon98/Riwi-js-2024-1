# Taller de prototipos en JavaScript

- 1. [Objetivos](#Objetivos)
- 2. [Introducción](#Introducción)
- 3. [Procedimiento](#Procedimiento)

## Objetivos

- Comprender qué son los prototipos en JavaScript y cómo se utilizan para herencia prototípica.
- Aprender a asignar y manipular prototipos en objetos y funciones.
- Aplicar el concepto de prototipos para resolver problemas reales y modelar situaciones del mundo real.

## Introduccion:

Pensemos en prototipos como una especie de plantilla que se puede utilizar para crear objetos. En JavaScript, los objetos pueden tener un prototipo, que es otro objeto. Un prototipo es un objeto al que se delegan las propiedades de otro objeto. Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características de otros objetos. Cada objeto en JavaScript tiene un prototipo interno que puede ser un objeto o null. Este taller explorará cómo podemos usar prototipos para reutilizar y extender comportamientos en nuestras aplicaciones.

## Procedimiento

### Seccion 1: Familizarizandonos con prototipos

#### Paso 1: Creación de Prototipos Básicos

- Definir un objeto Person como prototipo con las siguientes propiedades y métodos:

```javascript
function Person(nombre, apellido, edad, profesión, hobbies) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.profesión = profesión;
  this.hobbies = hobbies;
}

Person.prototype.saludar = function () {
  return `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`;
};
```

- Crear un objeto Student que herede de Person y añadimos propiedades especificas:

```javascript
function Student(nombre, apellido, edad, promedio, cursos) {
  Person.call(this, nombre, apellido, edad);
  this.promedio = promedio;
  this.cursos = cursos;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.presentarExamen = function () {
  console.log("Estoy presentando un examen.");
};
```

#### Paso 2: Extensión y Sobreescritura de Métodos

- Sobrescribir el método saludar en Student para reflejar su rol:

```javascript
Student.prototype.saludar = function () {
  return `${Person.prototype.saludar.call(this)} Y soy un estudiante.`;
};
```

### Seccion 2: Aplicando prototipos a Procedimiento Practico Taller de Orientacion a Objetos

- En esta parte del taller, aplicaremos el concepto de prototipos en JavaScript para estructurar dos sistemas complejos: una tienda de puntos online y un servicio de entrega de comida. La idea es utilizar la herencia prototípica para crear jerarquías de objetos que compartan métodos y propiedades de manera eficiente.

- Instrucciones generales:

  1. Identificar las entidades principales de los sitemas y sus propiedades y métodos. (e.g., Usuario, Cliente, Producto, Pedido).
  
  2. Definir prototipos base para cada entidad y extenderlos según sea necesario. Crea objetos prototipos para las entidades comunes que actúen como base para otras entidades más específicas. Estos prototipos deben incluir propiedades y métodos que son comunes a todas las entidades que heredarán de ellos.
  
  3. Extender los prototipos base para crear prototipos más específicos. Por ejemplo, un prototipo de Producto podría extenderse para crear prototipos de ProductosFisicos y ProductosDigitales.

  4. Sobrescribir métodos en los prototipos derivados para modificar o ampliar las funcionalidades definidas en el prototipo base. Este proceso permite que las subclases ajusten o personalicen su comportamiento de manera que se adecuen mejor a sus necesidades específicas. Por ejemplo, el método autenticación() en el prototipo Usuario o Persona, este método debería ser sobrescrito en el prototipo Cliente para implementar controles de seguridad específicos que difieran de los generales. De igual manera, el Repartidor podría necesitar una forma distinta de autenticación, reflejando las particularidades de su rol y responsabilidades, lo cual justificaría sobrescribir el método en esta subclase también.

- Entregables:
  
    1. Crear un archivo JavaScript para cada sistema.
    2. Definir los prototipos base y derivados para cada sistema.
    3. Implementar un ejemplo de uso de los prototipos en cada sistema. Puedes crear instancias de las entidades y llamar a sus métodos para demostrar cómo funcionan.
    4. Subir los archivos a un repositorio en GitHub y compartir el enlace en un archivo .txt en la semana 3.

