# Inserciones y eliminaciones en el DOM

## Objetivos

- Identificar los métodos para insertar elementos en el DOM.
- Utilizar los métodos para insertar y eliminar elementos en el DOM.
- Utilizar los métodos para insertar y eliminar elementos en el DOM de forma dinámica.

## Introducción

Hasta ahora hemos visto cómo seleccionar elementos del DOM y cómo modificar sus atributos y contenido. En esta sesión veremos cómo insertar elementos en el DOM.

## Insertando y eliminando elementos en el DOM

Para insertar elementos en el DOM, podemos utilizar los siguientes métodos 3 API's de DOM:

### Api de nodos

- `appendChild(node)`: Este método inserta un nodo al final de la lista de hijos de un nodo padre.
- `removeChild(node)`: Este método elimina un nodo hijo de un nodo padre.
- `replaceChild(newNode, oldNode)`: Este método reemplaza un nodo hijo por otro.
- `insertBefore(newNode, referenceNode)`: Este método inserta un nodo antes de un nodo de referencia. Si `referenceNode` es nulo, `newNode` se inserta al final de la lista de hijos.

### Api de elementos

- `.before()`: Este método inserta un conjunto de nodos o un texto antes del elemento.
- `.after()`: Este método inserta un conjunto de nodos o un texto después del elemento.
- `.prepend()`: Este método inserta un conjunto de nodos o un texto al principio del elemento.
- `.append()`: Este método inserta un conjunto de nodos o un texto al final del elemento.
- `.replaceChildren()`: Elimina todos los nodos hijos de un elemento y reemplaza el contenido por un conjunto de nodos o un texto.
- `.replaceWith()`: Reemplaza un elemento por un conjunto de nodos o un texto.
- `.remove()`: Elimina un elemento del DOM.

### Api de inserción adyacente

- `insertAdjacentElement(position, element)`: Inserta un elemento en una posición adyacente al elemento.
- `insertAdjacentHTML(position, html)`: Inserta un fragmento de HTML en una posición adyacente al elemento.
- `insertAdjacentText(position, text)`: Inserta un texto en una posición adyacente al elemento.

### Casos de uso

- `appendChild(node)`

Caso de uso: Insertar un nuevo elemento p al final de la lista de hijos de un nodo padre cuyo id es parent.

```html
<div id="parent">
  <p>Elemento 1</p>
  <p>Elemento 2</p>
</div>
```

```js
const parent = document.getElementById('parent');
const newElement = document.createElement('p');
newElement.textContent = 'Elemento 3';
parent.appendChild(newElement);
```

Resultado:

```html
<div id="parent">
  <p>Elemento 1</p>
  <p>Elemento 2</p>
  <p>Elemento 3</p>
</div>
```

- `removeChild(node)`

Caso de uso: Eliminar el primer elemento hijo de un nodo padre cuyo id es parent.

```html
<div id="parent">
  <p>Elemento 1</p>
  <p>Elemento 2</p>
</div>
```

```js
const parent = document.getElementById('parent');
const firstElement = parent.firstElementChild;
parent.removeChild(firstElement);
```

Resultado:

```html
<div id="parent">
  <p>Elemento 2</p>
</div>
```

- `replaceChild(newNode, oldNode)`

Caso de uso: Reemplazar el primer elemento hijo de un nodo padre cuyo id es parent por un nuevo elemento p.

```html
<div id="parent">
  <p>Elemento 1</p>
  <p>Elemento 2</p>
</div>
```

```js
const parent = document.getElementById('parent');
const newElement = document.createElement('p');
newElement.textContent = 'Elemento 3';
const firstElement = parent.firstElementChild;
parent.replaceChild(newElement, firstElement);
```

Resultado:

```html
<div id="parent">
  <p>Elemento 3</p>
  <p>Elemento 2</p>
</div>
```

- `insertBefore(newNode, referenceNode)`

Caso de uso: Insertar un nuevo elemento p antes del segundo elemento hijo de un nodo padre cuyo id es parent.

```html
<div id="parent">
  <p>Elemento 1</p>
  <p>Elemento 2</p>
</div>
```

```js
const parent = document.getElementById('parent');
const newElement = document.createElement('p');
newElement.textContent = 'Elemento 3';
const secondElement = parent.children[1];
parent.insertBefore(newElement, secondElement);
```

Resultado:

```html
<div id="parent">
  <p>Elemento 1</p>
  <p>Elemento 3</p>
  <p>Elemento 2</p>
</div>
```

- `.before()`

Caso de uso: Insertar un nuevo elemento p antes de un nodo cuyo id es reference.

```html
<div>
  <p id="reference">Elemento 1</p>
  <p>Elemento 2</p>
</div>
```

```js
const reference = document.getElementById('reference');
const newElement = document.createElement('p');
newElement.textContent = 'Elemento 3';
reference.before(newElement);
```

Resultado:

```html
<div>
  <p>Elemento 3</p>
  <p id="reference">Elemento 1</p>
  <p>Elemento 2</p>
</div>
```

- `.after()`

Caso de uso: Insertar un nuevo elemento p después de un nodo cuyo id es reference.

```html
<div>
  <p id="reference">Elemento 1</p>
  <p>Elemento 2</p>
</div>
```

```js
const reference = document.getElementById('reference');
const newElement = document.createElement('p');
newElement.textContent = 'Elemento 3';
reference.after(newElement);
```

Resultado:

```html
<div>
  <p id="reference">Elemento 1</p>
  <p>Elemento 3</p>
  <p>Elemento 2</p>
</div>
```

- `.prepend()`

Caso de uso: Insertar un nuevo elemento p al principio de un nodo cuyo id es parent.

```html
<div id="parent">
  <p>Elemento 1</p>
  <p>Elemento 2</p>
</div>
```

```js
const parent = document.getElementById('parent');
const newElement = document.createElement('p');
newElement.textContent = 'Elemento 3';
parent.prepend(newElement);
```

Resultado:

```html
<div id="parent">
  <p>Elemento 3</p>
  <p>Elemento 1</p>
  <p>Elemento 2</p>
</div>
```

- `.append()`

Caso de uso: Insertar un nuevo elemento p al final de un nodo cuyo id es parent.

```html
<div id="parent">
  <p>Elemento 1</p>
  <p>Elemento 2</p>
</div>
```

```js
const parent = document.getElementById('parent');
const newElement = document.createElement('p');
newElement.textContent = 'Elemento 3';
parent.append(newElement);
```

Resultado:

```html
<div id="parent">
  <p>Elemento 1</p>
  <p>Elemento 2</p>
  <p>Elemento 3</p>
</div>
```

Nota*: La diferencia entre appendChild y append es que append puede recibir varios nodos o textos separados por coma. Por ejemplo, `parent.append(newElement1, newElement2, newElement3);`. Mientras que appendChild solo puede recibir un nodo.

- `.replaceChildren()`

Caso de uso: Reemplazar todos los elementos hijos de un nodo cuyo id es parent por un nuevo elemento p.

```html
<div id="parent">
  <p>Elemento 1</p>
  <p>Elemento 2</p>
</div>
```

```js
const parent = document.getElementById('parent');
const newElement = document.createElement('p');
newElement.textContent = 'Elemento 3';
parent.replaceChildren(newElement);
```

Resultado:

```html
<div id="parent">
  <p>Elemento 3</p>
</div>
```

- `.replaceWith()`

Caso de uso: Reemplazar un nodo cuyo id es reference por un nuevo elemento p.

```html
<div>
  <p id="reference">Elemento 1</p>
  <p>Elemento 2</p>
</div>
```

```js
const reference = document.getElementById('reference');
const newElement = document.createElement('p');
newElement.textContent = 'Elemento 3';
reference.replaceWith(newElement);
```

Resultado:

```html
<div>
  <p>Elemento 3</p>
  <p>Elemento 2</p>
</div>
```

- `.remove()`

Caso de uso: Eliminar un nodo cuyo id es reference.

```html
<div>
  <p id="reference">Elemento 1</p>
  <p>Elemento 2</p>
</div>
```

```js
const reference = document.getElementById('reference');
reference.remove();
```

Resultado:

```html
<div>
  <p>Elemento 2</p>
</div>
```

- `insertAdjacentElement(position, element)`

Caso de uso: Insertar un nuevo elemento p antes de un nodo cuyo id es reference.

```html
<div>
  <p id="reference">Elemento 1</p>
  <p>Elemento 2</p>
</div>
```

```js
const reference = document.getElementById('reference');
const newElement = document.createElement('p');
newElement.textContent = 'Elemento 3';
reference.insertAdjacentElement('beforebegin', newElement);
```

Resultado:

```html
<div>
  <p>Elemento 3</p>
  <p id="reference">Elemento 1</p>
  <p>Elemento 2</p>
</div>
```

- `insertAdjacentHTML(position, html)`

Caso de uso: Insertar un nuevo elemento p después de un nodo cuyo id es reference.

```html
<div>
  <p id="reference">Elemento 1</p>
  <p>Elemento 2</p>
</div>
```

```js
const reference = document.getElementById('reference');
reference.insertAdjacentHTML('afterend', '<p>Elemento 3</p>');
```

Resultado:

```html
<div>
  <p id="reference">Elemento 1</p>
  <p>Elemento 2</p>
  <p>Elemento 3</p>
</div>
```

- `insertAdjacentText(position, text)`

Caso de uso: Insertar un nuevo texto después de un nodo cuyo id es reference.

```html
<div>
  <p id="reference">Elemento 1</p>
  <p>Elemento 2</p>
</div>
```

```js
const reference = document.getElementById('reference');
reference.insertAdjacentText('afterend', 'Elemento 3');
```

Resultado:

```html
<div>
  <p id="reference">Elemento 1</p>
  Elemento 3
  <p>Elemento 2</p>
</div>
```

## Ejercicios para practicar.

Para los ejercicios del 1 al 14, considera el siguiente HTML:
    
```html
<div id="parent">
  <p>Elemento 1</p>
  <p>Elemento 2</p>
</div>
```

1. Inserta un nuevo elemento p al final de la lista de hijos de un nodo padre cuyo id es parent utilizando `appendChild`.
2. Elimina el primer elemento hijo de un nodo padre cuyo id es parent utilizando `removeChild`.
3. Reemplaza el primer elemento hijo de un nodo padre cuyo id es parent por un nuevo elemento p utilizando `replaceChild`.
4. Inserta un nuevo elemento p antes del segundo elemento hijo de un nodo padre cuyo id es parent utilizando `insertBefore`.
5. Inserta un nuevo elemento p antes de un nodo cuyo id es reference utilizando `before`.
6. Inserta un nuevo elemento p después de un nodo cuyo id es reference utilizando `after`.
7. Inserta un nuevo elemento p al principio de un nodo cuyo id es parent utilizando `prepend`.
8. Inserta un nuevo elemento p al final de un nodo cuyo id es parent utilizando `append`.
9. Reemplaza todos los elementos hijos de un nodo cuyo id es parent por un nuevo elemento p utilizando `replaceChildren`.
10. Reemplaza un nodo cuyo id es reference por un nuevo elemento p utilizando `replaceWith`.
11. Elimina un nodo cuyo id es reference utilizando `remove`.
12. Inserta un nuevo elemento p antes de un nodo cuyo id es reference utilizando `insertAdjacentElement`.
13. Inserta un nuevo elemento p después de un nodo cuyo id es reference utilizando `insertAdjacentHTML`.
14. Inserta un nuevo texto después de un nodo cuyo id es reference utilizando `insertAdjacentText`.

Ahora, pensemos en un ejercicios de la vida real.

Inicialmente, tenemos el siguiente HTML:

```html
<div id="cards">
  <div class="card">
    <h2>Card 1</h2>
    <p>Contenido de la tarjeta 1</p>
  </div>
  <div class="card">
    <h2>Card 2</h2>
    <p>Contenido de la tarjeta 2</p>
  </div>
</div>
```

15. Agrega un nuevo elemento div con la clase card al final de la lista de hijos de un nodo padre cuyo id es cards. Este nuevo elemento debe contener un h2 con el texto "Card 3" y un p con el texto "Contenido de la tarjeta 3".
16. Agrega una nueva tarjeta al principio de la lista. La nueva tarjeta debe tener un título <h2> que diga "Card 0" y un párrafo <p> con el texto "Contenido de la tarjeta 0".
17. Agrega una nueva tarjeta después de la segunda tarjeta existente. La nueva tarjeta debe tener un título <h2> que diga "Card 3" y un párrafo <p> con el texto "Contenido de la tarjeta 3".
18. Reemplaza la primera tarjeta existente con una nueva tarjeta. La nueva tarjeta debe tener un título <h2> que diga "Card Nuevo" y un párrafo <p> con el texto "Contenido de la tarjeta nueva".
19. Elimina la segunda tarjeta de la lista.
20. Reemplaza el contenido de la primera tarjeta con un nuevo título <h2> que diga "Card 1 Modificado" y un nuevo párrafo <p> con el texto "Contenido de la tarjeta 1 modificado".