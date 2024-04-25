# Taller de Fundamentos Avanzados

Este taller tiene como objetivo poner en práctica los conceptos vistos en clase sobre fundamentos avanzados de JavaScript.

- 1. [Requisitos](#Requisitos)
- 2. [Objetivos](#Objetivos)
- 3. [Instrucciones](#Instrucciones)
- 4. [Descripcion](#Descripcion)

## Requisitos

- Conocimiento básico de JavaScript, incluyendo variables, funciones, y estructuras de control.

## Objetivos

- Entender y aplicar conceptos como scope, hoisting, y closures en JavaScript.
- Manejar adecuadamente funciones expresadas vs declaradas y entender su comportamiento durante el hoisting.
- Utilizar callbacks y promesas para manejar la asincronía.
- Comprender el funcionamiento del event loop y las Web APIs.

## Instrucciones

- Crea un repositorio en GitHub llamado javascript-6th-workshop.
- Copia y pega el contenido de este archivo en tu README.md.
- Sigue las instrucciones de cada sección para completar los ejercicios.

___

## Descripcion

### Seccion 1: Scope y Hoisting

**Objetivo:** Comprender y aplicar correctamente los conceptos de scope global, local y de bloque, así como el hoisting en JavaScript.

- Ejercicio 1: El Quiz de Scope
    - Considera el siguiente condigo:
        ```javascript
        // Global Scope
        var globalVariable = "Soy una variable global.";

        function testScope() {
            // Function Scope
            var functionVariable = "Soy una variable local.";

            if (true) {
                // Block Scope
                let blockVariable = "Soy una variable de bloque.";
                console.log("Dentro del bloque:", blockVariable);
            }

            console.log("Dentro de la función:", functionVariable);
        }

        console.log("Fuera de la función:", globalVariable);
        testScope();
        ```
    - A traves de un prompt, pregunta al usuario a qué valor (o si) pueden acceder en diferentes partes del código.
    - El usuario debe responder en el prompt() y luego el script debe mostrar si su respuesta fue correcta o no y explicar por qué.

- Ejercicio 2: Hoisting en Práctica
    - Copia y pega el siguiente código en un archivo de JavaScript o en la consola de tu navegador:
        ```javascript
        // vars call
        console.log("Valor de a:", a);
        console.log("Valor de b:", b);
        console.log("Valor de c:", c);

        // functions call
        console.log("Resultado de funcionDeclarada:", funcionDeclarada());
        console.log("Resultado de funcionExpresada:", funcionExpresada());

        // vars declaration
        var a = 1;
        let b = 2;
        const c = 3;

        // functions declarations
        function funcionDeclarada() {
            return "Función declarada ha sido llamada.";
        }

        const funcionExpresada = function() {
            return "Función expresada ha sido llamada.";
        };

        ```
    - Pide al usuario predecir el resultado de cada operación y luego muestra el resultado real para explicar el comportamiento del hoisting. Recuerda que todas las variables y funciones son hoisted, pero con comportamientos diferentes. Por ejemplo, las variables declaradas con var son inicializadas con undefined, mientras que las variables con let y const no pueden ser accedidas antes de su declaración. Con respecto a las funciones, estas son inicializadas con su definición completa, por lo que pueden ser llamadas antes de su declaración.

### Seccion 2: Funciones, closures y Asincronía

**Objetivo:** Diferenciar entre funciones declaradas y expresadas, manejar asincronía con callbacks y promesas, y entender el event loop.

- Ejercicio 3: Closures en Acción
    - Desarrollarás un script que involucra una función principal que crea y retorna una función secundaria. Esta función secundaria utilizará el concepto de closure para acceder y operar con una variable definida en el scope de la función principal.
        - 3.1 Creación de la Función con Closure:
            - Define una función llamada crearSumador() que acepte un parámetro numérico. Este número será utilizado en el closure que crearás.
            - Dentro de crearSumador(), define y retorna otra función que también acepte un único argumento numérico y sume este número al parámetro original de crearSumador().
        - 3.2 Uso de la Función y Observación de Closures:
            - Llama a crearSumador() con un número específico, por ejemplo, 5. Esto te retornará una nueva función, guardándola en una variable, por ejemplo, sumarCinco.
            - Luego, utiliza sumarCinco() para sumar otro número, por ejemplo, 3, y observa el resultado.
        - 3.3 Ejecución y Análisis:
            - Ejecuta el script y verifica que el resultado sea el esperado (en este caso, 8).
            - Date cuenta cómo sumarCinco, a pesar de ser llamada después de que crearSumador() haya completado su ejecución, todavía tiene acceso al valor original con el que fue creada (5 en este ejemplo).
    Experimentación Adicional:
            - Prueba crearSumador() con diferentes valores iniciales y utiliza la función retornada para realizar varias sumas.
            - Observa y reflexiona sobre cómo cada instancia de la función creada por crearSumador() mantiene su propio entorno cerrado con el valor inicial específico.

    Finalmente responde las siguientes preguntas:
        - ¿Cómo mantienen las funciones su acceso a variables externas después de que la función externa ha terminado de ejecutarse?
        - ¿Cuáles son las implicaciones de memoria de mantener estos closures, especialmente si se crean muchas instancias de funciones con closures?
    
- Ejercicio 4: Funciones Declaradas vs Expresadas
    - Crearás un pequeño script que intenta llamar a dos funciones, una declarada y otra expresada, antes y después de su declaración. Observarás qué sucede cuando intentas llamar a estas funciones en diferentes puntos de tu código.
        - 4.1: Preparación del Script: Copia el siguiente código en un archivo de JavaScript o en la consola de tu navegador:
            ```javascript
                console.log("Intentando llamar a 'funcionDeclarada' antes de su declaración:");
            try {
                console.log(funcionDeclarada());
            } catch (error) {
                console.log("Error:", error.message);
            }

            console.log("Intentando llamar a 'funcionExpresada' antes de su declaración:");
            try {
                console.log(funcionExpresada());
            } catch (error) {
                console.log("Error:", error.message);
            }

            // Declaración de una función declarada
            function funcionDeclarada() {
                return "Función declarada ha sido llamada.";
            }

            // Declaración de una función expresada
            const funcionExpresada = function() {
                return "Función expresada ha sido llamada.";
            };

            console.log("Llamando a 'funcionDeclarada' después de su declaración:");
            console.log(funcionDeclarada());

            console.log("Llamando a 'funcionExpresada' después de su declaración:");
            console.log(funcionExpresada());
            ```
        - 4.2: Ejecuta el script y observa los resultados de los intentos de llamar a ambas funciones antes y después de su declaración.
        - 4.3  Después de ejecutar el código, responde los siguientes puntos:
                - ¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
                - ¿Cómo difieren los resultados entre la función declarada y la función expresada?
                - ¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?

- Ejercicio 5: Promesas y Callbacks en Acción
    - En este ejercicio, desarrollarás un script que incluye una función. Esta función debe aceptar un callback y trabajar con una promesa. El objetivo es que el callback se ejecute solo después de que la promesa se haya resuelto, permitiendo entender la relación y el flujo entre operaciones síncronas y asíncronas.
        - 5.1: Definir la función: Vamos a definir una función llamada manejarAsincronia. Esta función aceptará dos parámetros: un callback y una promesa. La función deberá asegurarse de que el callback solo se ejecute una vez que la promesa se haya resuelto.
        - 5.2: Crear la Promesa: Dentro de la función, crearás una promesa que se resuelva automáticamente después de 2 segundos. Puedes usar setTimeout dentro del constructor de la promesa para lograr este comportamiento.
        - 5.3: Ejecutar el Callback: Una vez que la promesa se resuelva, debes ejecutar el callback proporcionado. Este callback simplemente mostrará un mensaje en la consola, por ejemplo: "¡Promesa cumplida y callback ejecutado!".
        - 5.4: Invocar la Función: Después de definir la función, deberás invocarla pasando un callback y la promesa que creaste. Observa cómo el callback solo se ejecuta después de que la promesa se resuelve.
        - 5.5: Despues de invocar la funcion, responde las siguientes preguntas:
            -¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo?
            - ¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta?
            - ¿Puedes modificar la función para que el callback maneje diferentes tipos de información dependiendo del resultado de la promesa?

        Nota* Si deseas llevar este ejercicio un paso más allá, modifica la función para que también maneje el rechazo de la promesa. En este caso, el callback debería recibir información sobre si la promesa fue resuelta o rechazada, y mostrar un mensaje adecuado en la consola.

- Ejercicio 6: Event Loop y Web APIs
    - En este ejercicio, escribirás un script que utiliza setTimeout() para organizar la ejecución de código en tiempos específicos. Observarás el orden en el que los mensajes se muestran en la consola y reflexionarás sobre el papel del event loop y cómo JavaScript gestiona las operaciones de entrada/salida y las tareas asíncronas.

    **Diseño del Experimento**
        - Vamos a diseñar un simple experimento para ver cómo el event loop maneja las tareas.
        - Necesitarás utilizar la función setTimeout() para planificar la ejecución de código.
    
    **Implementación del Script:**
        - Inicia tu script mostrando un mensaje en consola que diga "Mensaje 1: Inmediatamente".
        - Luego, utiliza setTimeout() con un retardo de 0 segundos para mostrar "Mensaje 2: Con timeout de 0 segundos".
        - Finalmente, configura otro setTimeout() con un retardo de 1 segundo para mostrar "Mensaje 3: Con timeout de 1 segundo".
    **Ejecución y Observación:**
        - Ejecuta el script en tu entorno de desarrollo o en la consola del navegador.
        - Observa el orden en el que aparecen los mensajes y toma nota.
    
    **Reflexión y Análisis:**
        - ¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos?
        - ¿Que nos dicen este comportamiento sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas?

- Ejercicio 7: Considera el siguiente script:

```javascript
console.log('Inicio del script');

setTimeout(() => {
  console.log('Primer setTimeout');
}, 0);

setTimeout(() => {
  console.log('Segundo setTimeout');
}, 0);

Promise.resolve('Promesa resuelta').then(console.log);

console.log('Fin del script');
```

- Crea un script que muestre al usuario el codigo anterior y le pida predecir el orden en que se mostrarán los mensajes en consola. Con base en la respuesta del usuario, muestra el resultado real (muestra por consola el orden en que se muestran los mensajes) e identifica el error del usuario de la siguiente manera:

    - Si el usuario acertó el orden, muestra un mensaje de felicitaciones.
    - Si el usuario falló en un solo paso, muestra un mensaje de error y explica el paso incorrecto.
    - Si el usuario falló en dos o más pasos, muestra un mensaje de error y explica los pasos incorrectos.

### Seccion 3: Closures, Promesas y  web APIs

**Objetivo:** Aplicar closures y entender el funcionamiento de las Web APIs en JavaScript.

- Ejercicio 8: Magia con Closures
    - Implementa un contador utilizando closures que permita incrementar y obtener el valor actual.
    - Proporciona una interfaz simple con prompts para que el usuario interactúe con el contador.
    - Utiliza un bucle while para preguntar al usuario si desea incrementar el contador o salir.

- Ejercicio 9: Domina las Web APIs con Promesas y Fetch

    - Crea un script interactivo que utilice setTimeout para ejecutar una acción después de un intervalo pedido al usuario.
    - Suponiendo que el usuario ingreso n segundos, el script debe mostrar un mensaje en consola despues de n*1000 milisegundos.
    - Usa promesas para manejar la asincronía y mostrar el mensaje en consola.
    - Usa fetch para cargar datos de la siguiente URL: https://jsonplaceholder.typicode.com/posts
    - Muestra los datos en consola y maneja cualquier error que pueda ocurrir en el bloque catch de la promesa.

### Seccion 4: Proyecto Final (resumen de todos los conceptos)


