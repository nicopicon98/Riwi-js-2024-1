# Json vs Json5

## ¿Qué es JSON?

JSON (JavaScript Object Notation) es un formato de intercambio de datos ligero y fácil de leer. Es un formato de texto que es completamente independiente del lenguaje pero utiliza convenciones que son familiares para los programadores de la familia de lenguajes C, incluidos C, C++, C#, Java, JavaScript, Perl, Python y muchos otros. Estas propiedades hacen que JSON sea un lenguaje de intercambio de datos ideal.

JSON es un formato de texto que es completamente independiente del lenguaje pero utiliza convenciones que son familiares para los programadores de la familia de lenguajes C, incluidos C, C++, C#, Java, JavaScript, Perl, Python y muchos otros. Estas propiedades hacen que JSON sea un lenguaje de intercambio de datos ideal.

## Ejemplo de JSON

```json
{
  "name": "json-server",
  "version": "1.0.0",
  "description": "Json-server en JavaScript",
  "main": "index.js",
  "scripts": {
    "start": "json-server --watch db.json"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "json-server": "^0.16.3"
  }
}
```

## ¿Qué es JSON5?

JSON5 es una extensión de JSON que agrega algunas características adicionales a JSON. 
Basicamente se puede entender como una versión mejorada de JSON.

## Ejemplo de JSON5

```json5
{
  // name debe ser tu nombre
  "name": "json-server",
  // version debe ser la version 1.0.0
  "version": "1.0.0",
  // la descripcion sera "Json-server en JavaScript"
  "description": "Json-server en JavaScript",
  // el main sera "index.js"
  "main": "index.js",
  // los scripts seran "start": "json-server --watch db.json"
  "scripts": {
    "start": "json-server --watch db.json"
  },
  // keywords sera un array vacio
  "keywords": [],
  // author sera tu nombre
  "author": "",
  // license sera ISC
  "license": "ISC",
  // la cual esta ultima recordemos que es la misma del MIT
  "dependencies": {
    "json-server": "^0.16.3"
  }
}
```

## Diferencias entre JSON y JSON5

- JSON5 permite comentarios
- JSON5 permite comas finales
- JSON5 permite cadenas de texto sin comillas
- JSON5 permite claves de objeto sin comillas
- JSON5 permite números hexadecimales
- JSON5 permite números binarios
- JSON5 permite números octales
- JSON5 permite números decimales con o sin punto decimal
- JSON5 permite números decimales con o sin exponente
- JSON5 permite números decimales con o sin signo
- JSON5 permite números decimales con o sin cero inicial
- JSON5 permite números decimales con o sin cero final
- JSON5 permite números decimales con o sin cero intermedio
