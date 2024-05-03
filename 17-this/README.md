# this en JavaScript

## Contenido

- [Introducción](#introducción)
- [¿Qué es `this`?](#qué-es-this)
- [¿Cómo funciona `this`?](#cómo-funciona-this)
- [¿Cuándo usar `this`?](#cuándo-usar-this)
- [`this` en funciones](#this-en-funciones)
- [`this` en métodos](#this-en-métodos)
- [`this` en arrow functions](#this-en-arrow-functions)
- [`this` en eventos](#this-en-eventos)
- [`this` en funciones de callback](#this-en-funciones-de-callback)
- [`this` en funciones asíncronas](#this-en-funciones-asíncronas)

## Introducción

El objeto `this` en JavaScript es un objeto especial que hace referencia al objeto que está ejecutando el código actual. En otras palabras, `this` se refiere al objeto que posee el contexto de ejecución actual.

## ¿Qué es `this`?

`this` es una palabra clave que se refiere a un objeto en el que se está ejecutando el código actual. En otras palabras, `this` se refiere al objeto que posee el contexto de ejecución actual.

```javascript
const person = {
  personProperty: "new property",
  personMethod: function () {
    return this;
  },
};

console.log(Object.is(person, person.personMethod())); // true
```

## ¿Cómo funciona `this`?

La forma en que `this` funciona en JavaScript depende de cómo se llama a una función. `this` siempre se refiere al objeto que posee el contexto de ejecución actual.

Por ejemplo, si una función se llama como un método de un objeto, `this` se refiere al objeto que posee el método. Si una función se llama como una función normal, `this` se refiere al objeto global.

```javascript
const person = {
  name: "John",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.sayHello(); // Hello, my name is John

const sayHello = person.sayHello;

sayHello(); // Hello, my name is undefined
```

## ¿Cuándo usar `this`?

`this` se usa comúnmente en los métodos de un objeto para hacer referencia a las propiedades del objeto. También se puede usar en funciones de constructor y en funciones de eventos.

```javascript
function Person(name) {
  this.name = name;
}

const john = new Person("John");

console.log(john.name); // John
```

## `this` en funciones

Cuando se llama a una función normal, `this` se refiere al objeto global.

```javascript
function sayHello() {
  console.log(this);
}

sayHello(); // Window
```

Pero si se usa el modo estricto, `this` se establece en `undefined`.

```javascript
function sayHello() {
  "use strict";
  console.log(this);
}

sayHello(); // undefined
```

## `this` en métodos

Cuando se llama a un método de un objeto, `this` se refiere al objeto que posee el método.

```javascript
const person = {
  name: "John",
  sayHello: function () {
    console.log(this);
  },
};

person.sayHello(); // { name: 'John', sayHello: [Function: sayHello] }
```

Pero si se extrae el método y se llama como una función normal, `this` se refiere al objeto global.

```javascript
const person = {
  name: "John",
  sayHello: function () {
    console.log(this);
  },
};

const sayHello = person.sayHello;

sayHello(); // Window
```

## `this` en arrow functions

Las arrow functions no tienen su propio `this`. En su lugar, `this` se refiere al objeto que posee el contexto de ejecución actual. O sea, `this` en una arrow function se refiere al objeto que posee la función que contiene la arrow function.

```javascript
const person = {
  name: "John",
  sayHello: () => {
    console.log(this);
  },
  sayGoodbye: function () {
    console.log(this);
  },
  sayNestedHello: function () {
    const sayHello = () => {
      console.log(this); // { name: 'John', sayHello: [Function: sayHello], sayGoodbye: [Function: sayGoodbye], sayNestedHello: [Function: sayNestedHello] }
    };
    sayHello(); // { name: 'John', sayHello: [Function: sayHello], sayGoodbye: [Function: sayGoodbye], sayNestedHello: [Function: sayNestedHello] }
  },
};

person.sayHello(); // Window
person.sayGoodbye(); // { name: 'John', sayHello: [Function: sayHello], sayGoodbye: [Function: sayGoodbye] }
```

Entendamos que ocurrio con sayNestedHello, en este caso se esta llamando a una arrow function dentro de un metodo de un objeto, por lo que el this de la arrow function se refiere al objeto que posee el contexto de ejecución actual. Veamolo parte por parte:

- Cuando llamamos sayNestedHello, se ejecuta la arrow function sayHello. Y que retorna el this de sayHello? El this de sayHello es el this del objeto que posee la función que contiene la arrow function, en este caso el objeto person. Por lo tanto, el this de sayHello es el objeto person.

- Veamos un ejemplo aún mas complejo:

```javascript
const person = {
  name: "John",
  sayHello: () => {
    console.log(this);
  },
  sayGoodbye: function () {
    console.log(this);
  },
  sayNestedHello: function () {
    const sayHello = () => {
      console.log(this); // { name: 'John', sayHello: [Function: sayHello], sayGoodbye: [Function: sayGoodbye], sayNestedHello: [Function: sayNestedHello] }
    };
    sayHello(); // { name: 'John', sayHello: [Function: sayHello], sayGoodbye: [Function: sayGoodbye], sayNestedHello: [Function: sayNestedHello] }
  },
  sayNestedGoodbye: function () {
    const sayGoodbye = function () {
      console.log(this); // Window
    };
    sayGoodbye(); // Window
  },
};

person.sayHello(); // Window
person.sayGoodbye(); // { name: 'John', sayHello: [Function: sayHello], sayGoodbye: [Function: sayGoodbye] }
person.sayNestedHello(); // { name: 'John', sayHello: [Function: sayHello], sayGoodbye: [Function: sayGoodbye], sayNestedHello: [Function: sayNestedHello] }
person.sayNestedGoodbye(); // Window
```
