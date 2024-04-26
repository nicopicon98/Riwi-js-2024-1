### Prototipos en JavaScript

Los prototipos son una característica fundamental de JavaScript y son esenciales para comprender cómo funcionan los objetos en JavaScript. En este módulo, aprenderemos cómo trabajar con prototipos en JavaScript y cómo crear prototipos personalizados para nuestros objetos.

En este módulo, aprenderemos sobre los siguientes temas:

- Prototipos en JavaScript
- Propiedades de prototipo
- Métodos de prototipo
- Herencia de prototipos

¡Vamos a empezar!

### Prototipos en JavaScript

En JavaScript, los objetos tienen un enlace a un objeto prototipo. Cuando intentamos acceder a la propiedad de un objeto, el intérprete de JavaScript intenta encontrar la propiedad en el objeto. Si no se encuentra, busca en el prototipo del objeto, y así sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.

```javascript
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

Persona.prototype.saludar = function() {
  console.log(`Hola, soy ${this.nombre}`);
};

const juan = new Persona('Juan', 20);

juan.saludar(); // Hola, soy Juan
```

En el ejemplo anterior, `Persona` es una función constructora que define un objeto `Persona` con propiedades `nombre` y `edad`. La función constructora también define un método `saludar` en el prototipo del objeto `Persona`. Cuando se llama al método `saludar` en el objeto `juan`, el intérprete de JavaScript busca la propiedad `saludar` en el objeto `juan`. Como no se encuentra, busca en el prototipo del objeto `juan`, que es el prototipo del objeto `Persona`. El método `saludar` se encuentra en el prototipo del objeto `Persona`, por lo que se ejecuta correctamente.

### Propiedades de prototipo

Las propiedades de prototipo son propiedades que se definen en el prototipo de un objeto. Cuando se accede a una propiedad de un objeto, el intérprete de JavaScript busca la propiedad en el objeto. Si no se encuentra, busca en el prototipo del objeto. Si la propiedad se encuentra en el prototipo del objeto, se devuelve el valor de la propiedad. Si la propiedad no se encuentra en el prototipo del objeto, el intérprete de JavaScript busca en el prototipo del prototipo del objeto, y así sucesivamente hasta que se encuentre la propiedad o se alcance el final de la cadena de prototipos.

```javascript

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

Persona.prototype.saludar = function() {
  console.log(`Hola, soy ${this.nombre}`);
};

const juan = new Persona('Juan', 20);

console.log(juan.nombre); // Juan
console.log(juan.edad); // 20
```

En el ejemplo anterior, las propiedades `nombre` y `edad` se definen en el objeto `juan`. Cuando se accede a las propiedades `nombre` y `edad` en el objeto `juan`, el intérprete de JavaScript encuentra las propiedades en el objeto `juan` y devuelve sus valores. Con respecto a la palabra reservada `this`, por ahora, vamos a comprender que `this` se refiere al objeto actual, es por eso, que cuando Persona.prototype.saludar es llamado, `this` se refiere al objeto `juan`, y por eso, `this.nombre` es igual a `juan.nombre`, que es igual a `Juan`.

### Métodos de prototipo

Los métodos de prototipo son métodos que se definen en el prototipo de un objeto. Cuando se llama a un método en un objeto, el intérprete de JavaScript busca el método en el objeto. Si no se encuentra, busca en el prototipo del objeto. Si el método se encuentra en el prototipo del objeto, se ejecuta el método. Si el método no se encuentra en el prototipo del objeto, el intérprete de JavaScript busca en el prototipo del prototipo del objeto, y así sucesivamente hasta que se encuentre el método o se alcance el final de la cadena de prototipos.

```javascript

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

Persona.prototype.saludar = function() {
  console.log(`Hola, soy ${this.nombre}`);
};

const juan = new Persona('Juan', 20);