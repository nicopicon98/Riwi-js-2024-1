# Document Object Model (DOM)

El **DOM** es una interfaz de programación de aplicaciones (API) para documentos HTML y XML. Proporciona una representación estructurada del documento y define cómo los programas pueden acceder, modificar y agregar elementos al documento.

El DOM representa la estructura de un documento como un árbol de nodos, donde cada nodo representa una parte del documento (por ejemplo, un elemento, un atributo o un fragmento de texto). Los nodos pueden ser manipulados mediante métodos proporcionados por el DOM.

## Acceso al DOM

El DOM se puede acceder a través de la variable global `document`, que representa el documento actual. A partir de este objeto, se pueden acceder a los elementos del documento, modificar sus atributos y contenido, y agregar nuevos elementos.

```javascript
// Acceso al elemento con el id "titulo"
const titulo = document.getElementById('titulo');

// Modificación del contenido del elemento
titulo.textContent = 'Nuevo título';
```

## Selección de Elementos

El DOM proporciona varios métodos para seleccionar elementos del documento. Algunos de los métodos más comunes son:

- `getElementById`: Selecciona un elemento por su id.
- `getElementsByClassName`: Selecciona elementos por su clase.
- `getElementsByTagName`: Selecciona elementos por su etiqueta.
- `querySelector`: Selecciona el primer elemento que coincida con un selector CSS.
- `querySelectorAll`: Selecciona todos los elementos que coincidan con un selector CSS.

```javascript
// Selección de elementos por su id
const titulo = document.getElementById('titulo');

// Selección de elementos por su clase
const elementos = document.getElementsByClassName('elemento');

// Selección de elementos por su etiqueta
const parrafos = document.getElementsByTagName('p');

// Selección de elementos por un selector CSS
const primerElemento = document.querySelector('.elemento');

// Selección de todos los elementos que coincidan con un selector CSS
const todosLosElementos = document.querySelectorAll('.elemento');
```

## Modificación de Elementos

Los elementos del DOM se pueden modificar mediante propiedades y métodos proporcionados por el DOM. Algunas de las operaciones más comunes son:

- Modificación de atributos: Se pueden modificar los atributos de un elemento mediante la propiedad `attributes`.
- Modificación de contenido: Se puede modificar el contenido de un elemento mediante las propiedades `textContent` e `innerHTML`.
- Creación de elementos: Se pueden crear nuevos elementos mediante el método `createElement`.
- Inserción de elementos: Se pueden insertar elementos en el documento mediante los métodos `appendChild`, `insertBefore` y `insertAdjacentElement`.
- Eliminación de elementos: Se pueden eliminar elementos del documento mediante el método `remove`.

```javascript
// Modificación de atributos
const enlace = document.getElementById('enlace');
enlace.setAttribute('href', 'https://www.ejemplo.com');

// Modificación de contenido
const parrafo = document.getElementById('parrafo');
parrafo.textContent = 'Nuevo contenido';

// Creación de elementos
const nuevoElemento = document.createElement('div');

// Inserción de elementos
const contenedor = document.getElementById('contenedor');
contenedor.appendChild(nuevoElemento); // Inserta al final

// Eliminación de elementos
const elementoAEliminar = document.getElementById('elemento');
elementoAEliminar.remove();
```

## Eventos

Los eventos son acciones que ocurren en el documento, como hacer clic en un botón, mover el ratón o cargar una página. El DOM proporciona una forma de manejar estos eventos mediante la propiedad `on` de los elementos.

```javascript
// Manejo de eventos
const boton = document.getElementById('boton');
boton.onclick = function() {
    alert('¡Haz hecho clic en el botón!');
};
```

Además de la propiedad `on`, se pueden utilizar los métodos `addEventListener` y `removeEventListener` para manejar eventos de forma más flexible.

```javascript
// Manejo de eventos con addEventListener
const boton = document.getElementById('boton');
boton.addEventListener('click', function() {
    alert('¡Haz hecho clic en el botón!');
});

// Eliminación de eventos con removeEventListener
const boton = document.getElementById('boton');
const handleClick = function() {
    alert('¡Haz hecho clic en el botón!');
};
boton.addEventListener('click', handleClick);
boton.removeEventListener('click', handleClick);
```

Veamos la diferencia entre `addEventListener` y `onclick`:

```javascript
// Manejo de eventos con addEventListener
const boton = document.getElementById('boton');
boton.addEventListener('click', function() {
    alert('¡Haz hecho clic en el botón!');
});

// Manejo de eventos con onclick
const boton = document.getElementById('boton');
boton.onclick = function() {
    alert('¡Haz hecho clic en el botón!');
};
```

La principal diferencia entre `addEventListener` y `onclick` es que `addEventListener` permite agregar múltiples manejadores de eventos para un mismo evento, mientras que `onclick =` solo permite un manejador de evento, y sobrescribe el manejador anterior si se asigna uno nuevo.

Los eventos también se pueden propagar a través del árbol de nodos del documento. Esto se conoce como propagación de eventos o bubbling. Para detener la propagación de un evento, se puede utilizar el método `stopPropagation`.

```javascript
// Propagación de eventos
const contenedor = document.getElementById('contenedor');
contenedor.addEventListener('click', function() {
    alert('¡Haz hecho clic en el contenedor!');
});

const boton = document.getElementById('boton');
boton.addEventListener('click', function(event) {
    event.stopPropagation();
    alert('¡Haz hecho clic en el botón!');
});
```

Los eventos también se pueden cancelar mediante el método `preventDefault`. Esto evita que se realice la acción predeterminada asociada con el evento.

```javascript

// Cancelación de eventos
const enlace = document.getElementById('enlace');
enlace.addEventListener('click', function(event) {
    event.preventDefault();
    alert('¡Haz hecho clic en el enlace!');
});
```

Para los formularios y los botones de tipo `submit`, se puede utilizar el método `submit` para enviar el formulario.

```javascript
// Envío de formularios
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Formulario enviado!');
    formulario.submit();
});
```

event.preventDefault() evita que el formulario se envíe automáticamente, permitiendo que se realicen acciones personalizadas antes de enviar el formulario.