# Eventos en el DOM

## Eventos

Los eventos son acciones que suceden en el DOM, como por ejemplo hacer click en un botón, pasar el mouse sobre un elemento, escribir en un input, etc.

Tenemos 3 formas de ejecutar eventos en el DOM:

1. **HTML**: Podemos ejecutar eventos directamente en el HTML, por ejemplo:

```html
<button onclick="alert('Hola mundo')">Haz click</button>
```

2. **JavaScript**: Podemos ejecutar eventos desde JavaScript, por ejemplo:

```js
document.querySelector('button').onclick = function() {
  alert('Hola mundo');
}
```

3. **addEventListener**: Podemos ejecutar eventos con el método `addEventListener`, por ejemplo:

```js
document.querySelector('button').addEventListener('click', function() {
  alert('Hola mundo');
});
```

## Tipos de eventos

Existen muchos tipos de eventos, algunos de los más comunes son:

- `click`: Se ejecuta al hacer click en un elemento.
- `mouseover`: Se ejecuta al pasar el mouse sobre un elemento.
- `submit`: Se ejecuta al enviar un formulario.
- `keydown`: Se ejecuta al presionar una tecla.
- `keyup`: Se ejecuta al soltar una tecla.
- `load`: Se ejecuta al cargar un elemento.
- `change`: Se ejecuta al cambiar el valor de un input.
- `DOMContentLoaded`: Se ejecuta al cargar el DOM.

## Escuchadores de eventos

Denominamos escuchadores de eventos a las funciones que se ejecutan cuando un evento sucede. Por ejemplo:

```js
document.querySelector('button').addEventListener('click', function() {
  alert('Hola mundo');
});
```

En este caso, la función anónima que se ejecuta al hacer click en el botón es el escuchador de eventos.

Podemos agregar tantos escuchadores de eventos como queramos a un mismo elemento con el metodo `addEventListener` y tambien podemos quitarlos con el método `removeEventListener`.

```js
function saludar() {
  alert('Hola mundo');
}

document.querySelector('button').addEventListener('click', saludar);
document.querySelector('button').removeEventListener('click', saludar);
```

## Eventos por defecto

Algunos eventos tienen un comportamiento por defecto, por ejemplo, al hacer click en un enlace, el navegador nos redirige a la URL del enlace. Podemos prevenir este comportamiento por defecto con el método `preventDefault`, por ejemplo:

```js
document.querySelector('a').addEventListener('click', function(event) {
  event.preventDefault();
});
```

En este caso, al hacer click en el enlace, el navegador no nos redirigirá a la URL del enlace.

## Eventos de propagación

Cuando un evento sucede en un elemento, este evento se propaga a los elementos padres del elemento donde sucedió el evento. Por ejemplo, si hacemos click en un botón, el evento `click` se propaga a todos los elementos padres del botón.

Y que significa esto? Que si tenemos un evento `click` en un botón y también en un div que contiene al botón, al hacer click en el botón se ejecutarán ambos eventos.

Veamos un ejemplo:

```html
<div>
  <button>Haz click</button>
</div>
```

```js
document.querySelector('button').addEventListener('click', function() {
  alert('Haz click en el botón');
});

document.querySelector('div').addEventListener('click', function() {
  alert('Haz click en el div');
});
```

En este caso, al hacer click en el botón, se ejecutará el evento `click` del botón y también se ejecutará el evento `click` del div.