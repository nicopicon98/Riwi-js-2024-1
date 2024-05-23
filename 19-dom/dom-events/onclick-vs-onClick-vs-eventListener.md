# onClick vs onclick vs addEventListener

## onClick

El atributo `onClick` u `onclick` es un atributo de los elementos HTML que se utiliza para asignar un evento de clic a un elemento. Este atributo se puede utilizar en cualquier elemento HTML, pero generalmente se utiliza en elementos de formulario y enlaces.

```html
<button onClick="alert('Hello World!')">Click me</button>
<button onclick="console.log('hello world')">Console me</button>
<button onclick="document.write('Hello World!')">Write me</button>
<button onclick="myFunction()">Call a function</button>
```

```javascript
function myFunction() {
  alert('Hello World!');
}
```

## onclick de JavaScript

El evento `onclick` es un evento de clic que se puede utilizar en JavaScript para asignar un evento de clic a un elemento. Este evento se puede utilizar en cualquier elemento HTML, pero generalmente se utiliza en elementos de formulario y enlaces.

```html
<button id="btn">Click me</button>
<script>
  document.getElementById('btn').onclick = function() {
    alert('Hello World!');
  };
</script>
```


## addEventListener

El método `addEventListener` es un método de JavaScript que se utiliza para asignar un evento a un elemento. Este método se puede utilizar en cualquier elemento HTML, pero generalmente se utiliza en elementos de formulario y enlaces. Promueve la separación de la lógica de eventos y el marcado, a diferencia de los atributos de eventos HTML.

```html
<button id="btn">Click me</button>
<script>
  document.getElementById('btn').addEventListener('click', function() {
    alert('Hello World!');
  });
</script>
```

## Comparación

| **Característica**                  | **`onclick` desde JS**                             | **`onClick` desde HTML**                             | **`addEventListener('click')`**                      |
|-------------------------------------|----------------------------------------------------|-----------------------------------------------------|------------------------------------------------------|
| **Definición**                      | Asigna una función a la propiedad `onclick` del elemento. | Define el manejador de eventos directamente en el atributo HTML. | Adjunta un manejador de eventos al elemento sin sobrescribir manejadores existentes. |
| **Sintaxis**                        | `element.onclick = function() { ... };`            | `<button onclick="functionName()">...</button>`      | `element.addEventListener('click', function() { ... });` |
| **Múltiples manejadores**           | No permite múltiples manejadores (el último asignado sobrescribe los anteriores). | No permite múltiples manejadores (último en el HTML sobrescribe anteriores). | Permite múltiples manejadores para el mismo evento. |
| **Flexibilidad y Modularidad**      | Menos modular, el manejador está asignado directamente en el JS. | Menos modular, el manejador está incrustado en el HTML. | Más modular, separa la lógica del manejo de eventos del marcado HTML. |
| **Compatibilidad**                  | Compatible con todos los navegadores.              | Compatible con todos los navegadores.               | Compatible con todos los navegadores modernos, IE9+ para eventos adicionales. |
| **Mantenimiento**                   | Puede ser difícil de mantener en proyectos grandes. | Puede resultar en HTML menos limpio y difícil de mantener. | Mejor para proyectos grandes, facilita la organización del código. |
| **Estilo de Código**                | Promueve la separación de HTML y JS, pero no tanto como `addEventListener`. | Mezcla HTML y JS, no promueve separación de preocupaciones. | Promueve una clara separación de preocupaciones. |
| **Contexto `this`**                 | El contexto `this` es el elemento al que se asigna el manejador. | El contexto `this` es el elemento al que se asigna el manejador. | El contexto `this` es el elemento al que se adjunta el manejador, a menos que se use una función flecha (arrow function). |
