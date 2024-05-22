# Dom Traverse o tambien conocido como DOM Navigation

El DOM Traverse es una técnica que nos permite recorrer el DOM de una página web, es decir, navegar a través de los elementos HTML de un documento.

## ¿Por qué es importante el DOM Traverse?

El DOM Traverse es importante porque nos permite acceder a los elementos HTML de una página web y manipularlos de diferentes maneras. Por ejemplo, podemos cambiar el contenido de un elemento, agregar o eliminar elementos, cambiar el estilo de un elemento, etc.

## ¿Cómo funciona el DOM Traverse?

El DOM Traverse funciona de la siguiente manera:

1. Seleccionamos un elemento HTML del DOM.
2. A partir de ese elemento, podemos acceder a sus elementos hijos, padres, hermanos, etc.
3. Podemos modificar los elementos HTML de diferentes maneras.

## Navegar a traves de nodos

Para navegar a través de los nodos de un documento HTML, podemos utilizar las siguientes propiedades y métodos:

- `parentNode`: Devuelve el nodo padre de un nodo.
- `childNodes`: Devuelve una colección de los nodos hijos de un nodo.
- `firstChild`: Devuelve el primer nodo hijo de un nodo.
- `lastChild`: Devuelve el último nodo hijo de un nodo.
- `nextSibling`: Devuelve el siguiente nodo hermano de un nodo.
- `previousSibling`: Devuelve el nodo hermano anterior de un nodo.

## Navegar a traves de elementos

Para navegar a través de los elementos de un documento HTML, podemos utilizar las siguientes propiedades y métodos:

- `children`: Devuelve una colección de los elementos hijos de un elemento.
- `parentElement`: Devuelve el elemento padre de un elemento.
- `firstElementChild`: Devuelve el primer elemento hijo de un elemento.
- `lastElementChild`: Devuelve el último elemento hijo de un elemento.
- `nextElementSibling`: Devuelve el siguiente elemento hermano de un elemento.
- `previousElementSibling`: Devuelve el elemento hermano anterior de un elemento.

## Practicando con nodos

```html
<div id="container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

```javascript
// Seleccionar el contenedor
const container = document.getElementById('container'); // <div id="container">...</div>

// Seleccionar el primer nodo hijo del contenedor
const firstChild = container.firstChild; // #text

// Seleccionar el último nodo hijo del contenedor
const lastChild = container.lastChild; // #text

// Seleccionar el nodo hermano siguiente del primer nodo hijo
const nextSibling = firstChild.nextSibling; // <div>Item 2</div>

// Seleccionar el nodo hermano anterior del último nodo hijo
const previousSibling = lastChild.previousSibling; // <div>Item 3</div>
```

## Practicando con elementos

```html
<div id="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>
```

```javascript
// Seleccionar el contenedor
const container = document.getElementById('container'); // <div id="container">...</div>

// Seleccionar el primer elemento hijo del contenedor
const firstChild = container.firstElementChild; // <div class="item">Item 1</div>

// Seleccionar el último elemento hijo del contenedor
const lastChild = container.lastElementChild; // <div class="item">Item 3</div>

// Seleccionar el elemento hermano siguiente del primer elemento hijo
const nextSibling = firstChild.nextElementSibling; // <div class="item">Item 2</div>

// Seleccionar el elemento hermano anterior del último elemento hijo
const previousSibling = lastChild.previousElementSibling; // <div class="item">Item 2</div>
```

Nota* Entonces en que caso se debe navegar por nodos y en que caso por elementos?

La diferencia entre navegar por nodos y navegar por elementos radica en que los nodos incluyen todos los nodos del documento, incluidos los nodos de texto, mientras que los elementos incluyen solo los elementos HTML del documento. Por lo tanto, si necesitas acceder a los elementos HTML de un documento, debes navegar por elementos. Si necesitas acceder a todos los nodos del documento, lo que significa que también necesitas acceder a los nodos de texto, nodo de comentario, etc., debes navegar por nodos.