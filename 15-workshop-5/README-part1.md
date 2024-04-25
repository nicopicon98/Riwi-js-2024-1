# Taller de prototipos en JavaScript

- 1. [Objetivos](#Objetivos)
- 2. [Introducción](#Introducción)
- 3. [Procedimiento](#Procedimiento)

## Objetivos

- Aprender a crear prototipos en JavaScript.
- Aprender a identificar prototipos de objetos y datos primitivos en JS
- Aprender a asignar prototipos a objetos y datos primitivos en JS

## Introduccion:

Pensemos en prototipos como una especie de plantilla que se puede utilizar para crear objetos. En JavaScript, los objetos pueden tener un prototipo, que es otro objeto. Un prototipo es un objeto al que se delegan las propiedades de otro objeto.

## Procedimiento

### Seccion 1: Familizarizandonos con prototipos

1. Crear un objeto literal de nombre Person con las siguientes propiedades y metodos
    - Nombre
    - Apellido
    - Edad
    - Profesión
    - Hobbies
    - Saludar: función que imprima en consola un saludo con el nombre y apellido del objeto.

2. Crear otro objeto llamado Student que albergue las siguientes propiedades y métodos:
    - Promedio de notas
    - Cursos (un array con los nombres de los cursos)
    - Presentar examen: función que imprima en consola un mensaje de presentación del examen.

3. Asignar al objeto literal Student el prototipo Person.
4. Modificar el método Saludar del prototipo Person para que imprima en consola un saludo con el nombre, apellido y edad del objeto.
5. Sobre escribir el metodo Saludar del prototipo Person para que imprima en consola "Desde el objeto Student".

### Seccion 2: Aplicando prototipos a problemas cotidianos.

#### Objetivo: Identificar entidades clave en una situacion común de la industria y asignar prototipos a estas entidades, de modo que podamos reutilizar la logica de estas entidades en otras situaciones.

En una industria de vehiculos se desea modelar la eficiencia de los vehiculos de la siguiente manera:

1. Para cheqeuar si un vehiculo es eficiente, se debe tener en cuenta las siguientes aristas:
    - El vehiculo debe tener un consumo de combustible menor a 10 litros por cada 100 km.
    - El vehiculo debe tener una velocidad maxima mayor a 100 km/h.
    - El vehiculo debe tener un peso menor a 2000 kg.

2. En la empresa existen muchos tipos de vehiculo, vehiculos de carga, de transporte, de pasajeros y acuaticos. Cada uno de estos vehiculos tiene caracteristicas especificas que los hacen eficientes:

    - 2.1. Los vehiculos de carga tienen las siguiente aristas:
        - El vehiculo debe tener un consumo de combustible menor a 10 litros por cada 100 km.
        - El vehiculo debe tener una velocidad maxima mayor a 100 km/h.
        - El vehiculo debe tener un peso menor a 2000 kg.
        - El vehiculo debe tener una capacidad de carga mayor a 1000 kg.
        - El vehiculo debe tener un volumen de carga mayor a 10 m3.

    - 2.2. Los vehiculos de transporte tienen las siguiente aristas:
        - El vehiculo debe tener un consumo de combustible menor a 10 litros por cada 100 km.
        - El vehiculo debe tener una velocidad maxima mayor a 100 km/h.
        - El vehiculo debe tener un peso menor a 2000 kg.
        - El vehiculo debe tener una capacidad de pasajeros mayor a 10 personas.
        - El vehiculo debe tener un certificado de revision tecnica al dia.
        - El vehiculo debe tener un seguro de responsabilidad civil.

    - 2.3. Los vehiculos de pasajeros tienen las siguiente aristas:
        - El vehiculo debe tener un consumo de combustible menor a 10 litros por cada 100 km.
        - El vehiculo debe tener una velocidad maxima mayor a 100 km/h.
        - El vehiculo debe tener un peso menor a 2000 kg.
        - El vehiculo debe tener una capacidad de pasajeros mayor a 10 personas.

    - 2.4. Los vehiculos acuaticos tienen las siguiente aristas:
        - El vehiculo debe tener un consumo de combustible menor a 10 litros por cada 100 km.
        - El vehiculo debe tener una velocidad maxima mayor a 100 km/h.
        - El vehiculo debe tener un peso menor a 2000 kg.
        - El vehiculo debe tener una capacidad de pasajeros mayor a 10 personas.
        - El vehiculo debe tener un certificado de revision tecnica al dia.
        - El vehiculo debe tener un seguro de responsabilidad civil.
        - El vehiculo debe tener un certificado de navegabilidad.

    

