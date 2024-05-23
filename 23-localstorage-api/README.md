# LocalStorage

## Introducción

El almacenamiento web es una forma de almacenar datos en el navegador del cliente. Antes de HTML5, las cookies se utilizaban para este propósito. Sin embargo, las cookies tienen algunas desventajas. Por ejemplo, las cookies son enviadas con cada solicitud HTTP, lo que puede ralentizar la aplicación. Además, las cookies tienen un límite de tamaño de 4 KB, lo que limita la cantidad de datos que se pueden almacenar.

HTML5 introdujo el almacenamiento web, que permite almacenar datos en el navegador del cliente. El almacenamiento web es más seguro y eficiente que las cookies. Hay dos tipos de almacenamiento web: `localStorage` y `sessionStorage`. Nos enfocaremos en `localStorage` en esta lectura.

## Metodos de `localStorage`

`localStorage` es un objeto global que se utiliza para almacenar datos en el navegador del cliente. Los datos almacenados en `localStorage` persisten incluso después de que el navegador se cierre. Los datos almacenados en `localStorage` no tienen fecha de vencimiento y no se eliminan automáticamente. Los datos almacenados en `localStorage` se almacenan en pares clave-valor. La clave y el valor son cadenas.

- `setItem(key, value)`: Este método se utiliza para almacenar un par clave-valor en `localStorage`. Si la clave ya existe, el valor se actualiza. Retorna `undefined`.
- `getItem(key)`: Este método se utiliza para recuperar el valor almacenado en `localStorage` para una clave dada. Retorna el valor almacenado o `null` si la clave no existe.
- `removeItem(key)`: Este método se utiliza para eliminar un par clave-valor de `localStorage` para una clave dada. Retorna `undefined`.
- `clear()`: Este método se utiliza para eliminar todos los pares clave-valor de `localStorage`. Retorna `undefined`.
- `key(index)`: Este método se utiliza para recuperar la clave almacenada en `localStorage` en un índice dado. Retorna la clave almacenada en el índice dado o `null` si el índice está fuera de rango.
- `length`: Este método se utiliza para recuperar el número de pares clave-valor almacenados en `localStorage`. Retorna el número de pares clave-valor almacenados en `localStorage`.

## Casos de uso

`localStorage` se puede utilizar para almacenar datos en el navegador del cliente. Algunos casos de uso comunes de `localStorage` son:

- Almacenar la configuración del usuario.
- Almacenar el estado de la aplicación.
- Almacenar datos de sesión.
- Almacenar datos de preferencias del usuario.

## Ejemplo

```javascript
// Almacenar un par clave-valor en localStorage
localStorage.setItem('name', 'John Doe');

// Recuperar el valor almacenado en localStorage para una clave dada
const name = localStorage.getItem('name');

// Eliminar un par clave-valor de localStorage para una clave dada
localStorage.removeItem('name');

// Eliminar todos los pares clave-valor de localStorage
localStorage.clear();
```

## Caso de uso real:

Imaginemos por un momento que estamos desarrollando una aplicacion de notas y queremos que el usuario pueda guardar sus notas en algun lugar para que no se pierdan. El usuario no tiene bases de datos ni un servidor para guardar sus notas, es aqui donde localStorage entra en juego. Podemos guardar las notas en localStorage y cuando el usuario vuelva a la aplicacion, sus notas seguiran ahi.

Consideremos el siguiente HTML.

```html
<form>
  <textarea id="note" placeholder="Escribe tu nota aquí"></textarea>
  <input type="date" id="date">
  <button type="submit">Guardar</button>
</form>
```

Desde Javascript podemos capturar el evento submit del formulario y guardar las notas en localStorage, de la siguiente manera:

```javascript

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const note = document.querySelector('#note').value;
  const date = document.querySelector('#date').value;
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.push({ note, date });
  localStorage.setItem('notes', JSON.stringify(notes));
  document.querySelector('#note').value = '';
  document.querySelector('#date').value = '';
});

```