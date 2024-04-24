# Event Loop en JavaScript

## Event Loop

El Event Loop es un bucle que se encarga de manejar los eventos y las tareas que se ejecutan en JavaScript. Es un mecanismo que permite que JavaScript sea no bloqueante, es decir, que no se detenga la ejecución de un script mientras se espera a que se resuelva una tarea.

## ¿Cómo funciona?

Consideremos el siguiente código:

```javascript
console.log("Inicio del script");

// Macrotarea: setTimeout
setTimeout(() => {
  console.log("Macrotarea (setTimeout)");
}, 0);

// Microtarea: Promesa
Promise.resolve()
  .then(() => {
    console.log("Microtarea 1 (Promesa)");
  })
  .then(() => {
    console.log("Microtarea 2 (Promesa)");
  });

console.log("Fin del script");
```

- 1. **Carga y analisis del Script**: Cuando el motor de JavaScript carga el archivo .js que alberga el anterior trozo de codigo, realiza un análisis léxico inicial para entender la estructura del código y detectar errores de sintaxis. Aquí no hay declaración de variables o funciones que requieran hoisting tradicional (var, funciones declaradas), pero el motor sí reconoce las estructuras de control y las funciones que se ejecutarán.

- 2. **Creacion del contexto de ejecucion global**: Al iniciar la ejecución del script, JavaScript crea un contexto de ejecución global (GEC). Este contexto incluye un objeto de entorno global, que contiene todas las variables globales y funciones, así como un enlace al objeto this global (que en el navegador es window).

- 3. **Ejecucion del codigo y hoisting**: En este paso, el motor de JavaScript recorre el código línea por línea, esto a traves de un puntero que se mueve de arriba hacia abajo ejecutando las instrucciones que encuentra. En este punto, se realiza el hoisting de las variables declaradas con var y las funciones declaradas, lo que significa que se reservan espacios en memoria para ellas antes de que se ejecute el código.
    - console.log('Inicio del script'); Este comando es lo primero que se ejecuta, por lo que se imprime en la consola.

- 4. **Llamadas a web APIs y colocacion en colas**: Cuando el motor de JavaScript encuentra una tarea asíncrona, como una llamada a setTimeout o una promesa, delega la tarea a las Web APIs del navegador, que se encargan de ejecutarla. Mientras tanto, JavaScript continúa con la ejecución del código síncrono. Vamos a desglosar esto un poco mejor

    - setTimeout(..., 0);: setTimeout es una Web API que no es manejada directamente por el motor de JavaScript, sino por el entorno del navegador. El callback de setTimeout se coloca en la cola de tareas o macrotareas (task queue) para ser ejecutado después de un mínimo retardo de 0 milisegundos. Aunque el tiempo es 0, la ejecución real depende de cuándo el event loop pueda procesar esta tarea después de las microtareas.

    - Promise.resolve().then(...): Las promesas utilizan una cola especial llamada microtask queue. El método then() de una promesa resuelta encola un callback en la microtask queue, que será ejecutado tan pronto como termine la ejecución del script en curso y antes de cualquier otra macrotarea (como setTimeout).

- 5. **Continuacion de ejecucion asincrona**: Una vez que el motor de JavaScript ha delegado las tareas asíncronas a las Web APIs, continúa con la ejecución del código síncrono. En este caso, las tareas asíncronas son setTimeout y las promesas, que se han colocado en las colas de tareas y microtareas, respectivamente. Mientras tanto, console.log('Fin del script'); se ejecuta y se imprime en la consola.

- 6. **Procesamiento de Microtareas**: Una vez que el script principal ha terminado, el motor de JavaScript procesa todas las microtareas antes de cualquier otra macrotarea:
    - console.log('Microtarea 1 (Promesa)'); y luego console.log('Microtarea 2 (Promesa)');: Se ejecutan en secuencia, ya que cada then() encola un nuevo callback en la microtask queue.

Nota* Cada then() encola un nuevo callback en la microtask queue, que se ejecuta tan pronto como termina la ejecución del script principal y antes de cualquier macrotarea.

- 7. **Ejecucion de Macrotareas**: console.log('Macrotarea (setTimeout)');: Una vez que la microtask queue está vacía, el event loop revisa la task queue. Encuentra el callback de setTimeout y lo ejecuta, imprimiendo "Macrotarea (setTimeout)".

- 8. **Fin del script**: El event loop continúa monitoreando el call stack y las task queues. En este caso, como no hay más tareas pendientes, el ciclo se detiene hasta que se active otro evento o tarea.

## Conclusión

En terminos de importancia, las microtareas tienen prioridad sobre las macrotareas. Esto significa que las microtareas se ejecutan antes que las macrotareas, incluso si se han encolado después. Por lo tanto, es importante tener en cuenta el orden de ejecución de las tareas asíncronas en JavaScript para evitar errores y comportamientos inesperados.

## Glosario

Web APIs: DOM, AJAX, setTimeout, setInterval, fetch, requestAnimationFrame.
Microtareas: Promesas, async/await, MutationObserver, queueMicrotask.
Macrotareas: setTimeout, setInterval, setImmediate, I/O, rendering.



