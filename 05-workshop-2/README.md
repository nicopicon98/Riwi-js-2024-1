## Taller de Fundamentos de JavaScript para Principiantes

#### Este taller se centra en los conceptos básicos de JavaScript, diseñado para ayudarte a entender la sintaxis y el flujo de control en la programación. Cada sección propone retos que deberás resolver aplicando lo aprendido.

### Requisitos

- Conocimientos básicos en:
        - Variables
        - Tipos de datos
        - Truthy y Falsy
        - Operadores
        - Estructura de control if-else

### Objetivos

- Comprender la sintaxis básica de JavaScript.
- Aplicar los conceptos de variables, tipos de datos, operadores y estructuras de control en JavaScript.
- Resolver retos de programación utilizando JavaScript.

### Instruccioens de entrega

- Crea un repositorio en GitHub para este taller.
- Crea una carpeta para cada sección del taller.
- Dentro de cada carpeta, crea un archivo para cada reto.
- Escribe el código de cada reto en su archivo correspondiente.
- Realiza un commit y un push después de completar cada reto.
- Envía la URL de tu repositorio al moodle.

***

### Descripción

#### Sección 1: Variables y Tipos de Datos

*Objetivo*: Comprender cómo declarar variables, diferenciar entre var, let y const, y reconocer los diferentes tipos de datos en JavaScript.

Reto 1: El Viaje de Julian

Descripción: Julian está planificando un viaje y necesita un programa en JavaScript que lo ayude a organizar su itinerario. Este programa debe permitirle definir y ajustar el destino, la duración del viaje en días y el presupuesto estimado para el viaje. Es importante que Julian pueda modificar algunos de estos datos a medida que planifica, mientras que otros permanecerán constantes.


**Detalles del Reto:**

- Requerimientos del Programa:
    - Definir el destino del viaje:
        - Julian debe poder establecer el destino de su viaje. Una vez establecido, el destino no debería cambiar.

    - Establecer la cantidad de días:
        - Julian debería ser capaz de establecer y ajustar la cantidad de días que durará su viaje. Esto es porque podría recibir recomendaciones que le hagan querer extender o acortar su estancia.
    - Presupuesto del viaje:
        - Julian necesita fijar un presupuesto inicial para su viaje, pero también debe ser capaz de ajustarlo según encuentre diferentes opciones de alojamiento, transporte y actividades.

**Consejos para Julian:**

Decide qué datos son propensos a cambiar durante la fase de planificación y cuáles no. Esto te ayudará a elegir entre usar let, o const para declarar tus variables.
Considera la importancia de cada tipo de dato y cómo la flexibilidad en la modificación de estos datos puede afectar la planificación de tu viaje.

**Instrucciones Adicionales:**

Escribe un pequeño script que utilice condicionales para verificar si el presupuesto que Julian ha calculado inicialmente es suficiente, dada la duración del viaje y un costo diario estimado de actividades y alimentos. Si el presupuesto excede este cálculo, el programa debería indicar que Julian tiene suficiente dinero. Si no, debería sugerir ajustar el presupuesto o la duración del viaje.

_________________

- Reto 2: Tipos de Souvenirs

Descripción: Julian desea tener un programa en JavaScript que le permita gestionar una lista de souvenirs potenciales para comprar durante su viaje. Cada souvenir tiene características específicas: un nombre, un costo y la disponibilidad para la compra. Es importante que Julian pueda evaluar cada uno de estos aspectos, que están representados por diferentes tipos de datos en el programa.

**Detalles del Reto:**

- Requerimientos del Programa:
    - Gestión de souvenirs:
        - El programa debe permitir a Julian introducir diversos souvenirs con sus respectivos detalles. Julian quiere poder ingresar el nombre del souvenir, cuánto cuesta y si está disponible en ese momento o no.
    - Representación de Datos:
        - Cada aspecto del souvenir (nombre, costo, disponibilidad) debe ser representado por un tipo de dato adecuado:
            - El nombre debe ser una cadena de texto.
            - El costo debe ser un número que pueda incluir decimales.
            - La disponibilidad debe ser un valor booleano que indique si el souvenir puede ser comprado (true) o no (false).
    - Verificación de Tipos de Datos:
        - Julian quiere asegurarse de que los tipos de datos sean correctos para evitar errores al calcular costos o al mostrar la disponibilidad de los souvenirs. El programa debe incluir una función que verifique el tipo de cada dato ingresado usando typeof y que informe si los tipos son los esperados.

**Consejos para Julian:**

Considera utilizar funciones para capturar y validar la entrada del usuario. Esto puede ayudar a mantener tu código organizado y facilitar la verificación de tipos.

Asegúrate de proporcionar mensajes claros de error o confirmación sobre los tipos de datos para cada entrada, lo cual es crucial para la depuración y el mantenimiento del código.

**Instrucciones Adicionales:**

Implementa una estructura de control que permita a Julian revisar todos los souvenirs ingresados y decidir cuáles quiere comprar, basándose en su disponibilidad y su presupuesto actual. Esta lógica debería ayudar a Julian a gestionar sus recursos de manera eficiente durante el viaje.

_____________________

- Reto 3: Planificación del Itinerario

Descripción: Julian necesita un programa en JavaScript que le ayude a decidir si puede incluir un artículo extra en su equipaje, basado en el presupuesto final que tiene después de planificar su viaje. Este programa debería evaluar si el presupuesto restante de Julian después de todos los gastos planeados es suficiente para permitirle comprar un artículo adicional sin exceder su límite financiero.

**Detalles del Reto:**

- Requerimientos del Programa:
    - Evaluación del Presupuesto:
        - El programa debe permitir a Julian ingresar el total de su presupuesto inicial y los costos estimados de su viaje, incluyendo alojamiento, transporte y comida.
        - Julian desea saber si el dinero que le queda después de cubrir estos gastos básicos es suficiente para adquirir un artículo extra que ha estado considerando.
    - Lógica de Decisión:
        - Utiliza una estructura if-else para determinar si el presupuesto restante supera un cierto umbral. Si Julian tiene más dinero que este umbral, entonces puede considerar llevar el artículo extra.
        - Si el dinero restante es inferior al umbral, el programa debería aconsejar a Julian que evite gastos adicionales para no sobrepasar su presupuesto.
    - Determinación de Viabilidad:
        - El umbral para la decisión debería ser una cantidad fija que Julian considere como mínimo necesario para gastos imprevistos o emergencias durante el viaje.

**Consejos para Julian:**

Piensa en cómo puedes utilizar variables para representar el presupuesto inicial, los costos del viaje, y el precio del artículo extra.

Asegúrate de que la estructura if-else está correctamente implementada para reflejar esta decisión financiera importante de manera precisa.

**Instrucciones Adicionales:**

Considera agregar una funcionalidad donde Julian pueda introducir múltiples opciones de artículos extras con diferentes costos. El programa podría entonces no solo decirle si puede comprar el artículo extra, sino también cuál de ellos es la opción más económica que aún se ajusta a su presupuesto.

***

#### Sección 2: Truthy y Falsy, Operadores, If-Else

- Objetivo: Explorar cómo JavaScript evalúa diferentes valores como verdaderos o falsos y cómo utilizar operadores para controlar el flujo del programa.

- Reto 1: La Evaluación de Julian

Descripción: Julian desea un programa en JavaScript que le ayude a decidir sus actividades diarias basado en ciertos estados de ánimo y condiciones externas. El programa debe evaluar varias condiciones utilizando valores truthy y falsy para determinar si Julian decide salir a correr, trabajar en proyectos personales, o simplemente tomar un día libre.

**Detalles del Reto:**
- Establecimiento de Condiciones:
    - Evaluación de Condiciones:
        - Julian tiene diferentes factores que influyen en cómo decide pasar el día. Estos incluyen su nivel de energía, el clima, y su carga de trabajo actual.
        - El programa deberá evaluar estos factores y usar valores que pueden ser considerados truthy o falsy para tomar decisiones.
    - Lógica de Decisión:
        - Utiliza una serie de declaraciones if-else para evaluar los factores. Por ejemplo, si el nivel de energía de Julian es bajo (null o 0), puede decidir no salir a correr y en lugar de eso tomar un día libre.
        - Considera cómo condiciones como un clima malo (undefined o false) podrían influir en su decisión de quedarse en casa trabajando en proyectos personales o simplemente relajarse.
    - Influencia de Truthy y Falsy:
        - Asegúrate de que Julian entienda cómo valores aparentemente no relacionados pueden influir en la lógica de control de flujo. Por ejemplo, cualquier string no vacío es truthy y podría representar un clima bueno, lo que animaría a Julian a salir a correr.

**Consejos para Julian:**

Examina cuidadosamente qué valores son considerados truthy y cuáles falsy en JavaScript. Esto es esencial para configurar correctamente las condiciones en tus declaraciones if-else.

Piensa en cómo cada decisión está ligada a la evaluación de una condición y cómo podrías usar esto para modelar decisiones más complejas basadas en múltiples factores.

**Instrucciones Adicionales:**

Integra la función console.log para mostrar el resultado de cada decisión, permitiendo a Julian ver claramente qué actividad ha sido seleccionada cada día según las condiciones dadas.

_____________________

- Reto 2: Calculadora de Presupuesto

Descripción: Julian está interesado en desarrollar un programa en JavaScript que le ayude a administrar su presupuesto diario. Este programa debe calcular si el dinero que tiene es suficiente para cubrir varios gastos como salir a comer, comprar un libro nuevo o ahorrar algo de dinero. Julian utilizará una combinación de operadores matemáticos y lógicos para tomar estas decisiones.

**Detalles del Reto:**
- Requerimientos del Programa:
    - Definir Parámetros de Presupuesto:
        - El programa deberá permitir a Julian introducir su presupuesto diario y los costos estimados de actividades como comer fuera y comprar libros.
        - Julian también deberá establecer un mínimo de ahorro diario que le gustaría alcanzar.
    - Evaluación de Gastos:
        - Utiliza operadores matemáticos para comparar el presupuesto de Julian con los costos de las actividades.
        - Emplea operadores lógicos para determinar si Julian puede permitirse uno, ambos o ninguno de los gastos, asegurándose de que aún pueda alcanzar su objetivo de ahorro.
    - Uso de Operadores:
        - Implementa operadores como >, <, &&, ||, y ! para evaluar si las condiciones financieras permiten a Julian realizar cada actividad.
        - Por ejemplo, si Julian quiere comer fuera y comprar un libro, pero solo tiene presupuesto suficiente para uno de esos gastos, debe decidir cuál priorizar basado en la importancia o el deseo.

**Consejos para Julian:**
Organiza las condiciones de manera que primero verifiques cada gasto individualmente y luego considera combinaciones de gastos usando operadores lógicos.

Reflexiona sobre cómo podrías estructurar las condiciones para que Julian no solo vea si puede cubrir sus gastos, sino también cómo afectan estas decisiones a su capacidad para ahorrar.

**Instrucciones Adicionales:**
Considera incluir una interfaz simple de usuario que permita a Julian ingresar sus datos financieros y recibir feedback inmediato sobre sus opciones de gasto y ahorro. Esto podría implementarse a través de prompts para entrada de datos y alertas o console.log para mostrar los resultados.

_____________________

- Reto 3: Decisiones de Última Hora

Descripción: Julian está finalizando su empaque para un viaje y enfrenta varias decisiones de última hora sobre qué artículos adicionales llevar. Él necesita un programa en JavaScript que evalúe múltiples condiciones, como el clima, el espacio disponible en su maleta, y el peso total permitido para ayudarlo a decidir qué objetos incluir.

**Detalles del Reto:**
- Establecimiento de Condiciones:
    - Evaluación de Condiciones:
        - Julian necesita considerar varios factores al decidir qué empacar adicionalmente. Estos factores incluyen el pronóstico del clima, el espacio restante en la maleta, y el límite de peso de su equipaje.
        - Cada decisión sobre un artículo adicional dependerá de la combinación de estas condiciones.
    - Implementación de Lógica Condicional:
        - Utiliza múltiples estructuras if-else anidadas para determinar qué artículos puede llevar Julian. Por ejemplo, si el pronóstico indica lluvia, Julian considerará llevar un paraguas.
        - Además, si Julian tiene espacio adicional y el peso de su equipaje lo permite, podría decidir llevar una cámara o algún otro artículo que no sea esencial pero deseable.
    - Priorización de Artículos:
        - En casos donde Julian deba elegir entre múltiples artículos debido a restricciones de espacio o peso, el programa deberá ayudarlo a priorizar qué artículos son más importantes o útiles basándose en el clima y la duración del viaje.

**Consejos para Julian:**

Piensa en cómo las condiciones pueden superponerse y afectar las decisiones de otros artículos. Por ejemplo, llevar un paraguas podría ser más crítico que una cámara si se espera mucha lluvia.
Considera cómo cada decisión afecta al límite de peso total, especialmente cuando los artículos adicionales son relativamente pesados.

**Instrucciones Adicionales:**

El programa debería permitir a Julian ingresar información sobre el clima esperado, el espacio disponible en la maleta y el peso total permitido antes de tomar decisiones sobre los artículos.
Implementa mensajes claros que informen a Julian si es aconsejable o no llevar ciertos artículos y por qué, basado en las condiciones dadas.






