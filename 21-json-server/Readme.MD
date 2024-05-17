# Json-server en JavaScript

## Descripción

Bueno chicos, vamos a entender a JSON-SERVER como esta herramienta que nos va a facilitar el desarrollo, reduciendo el cuellode botella que se genera cuando el front-end y el back-end no están sincronizados.

## ¿Qué es JSON-SERVER?

JSON-SERVER es una herramienta que nos permite crear un servidor RESTful en cuestión de segundos. Y que es RESTful? RESTful es un estilo de arquitectura de software que se utiliza para describir cualquier interfaz entre sistemas que utilice HTTP para obtener datos o generar operaciones sobre esos datos en todos los formatos posibles, como XML y JSON.

## ¿Cómo instalar JSON-SERVER?

En esta seccion vamos a iniciar un proyecto de npm de cero, pero con informacion por defecto, para ello vamos a ejecutar el siguiente comando:

```bash
npm init -y
```

Se dieron cuenta que el comando anterior nos crea un archivo llamado package.json?, el cual es un archivo de configuración de nuestro proyecto, en el cual se almacenan los metadatos de nuestro proyecto, como el nombre, la versión, la descripción, los scripts, las dependencias, etc.

Cambiaremos cada uno de los anteriorment, asi que accede al archivo package.json y modificalo de la siguiente manera:

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

name debe ser tu nombre, verion debe ser la version 1.0.0, la descripcion sera "Json-server en JavaScript", el main sera "index.js", los scripts seran "start": "json-server --watch db.json", keywords sera un array vacio, author sera tu nombre y license sera ISC, la cual esta ultima recordemos que es la misma del MIT.

Ahora vamos a instalar json-server, para ello ejecutamos el siguiente comando:

```bash
npm install
```

## ¿Cómo usar JSON-SERVER?

Para usar JSON-SERVER, debemos crear un archivo llamado db.json, en el cual vamos a escribir la siguiente estructura:

```json
{
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    }
  ],
  "profile": {
    "name": "typicode"
  }
}
```

En este archivo db.json, tenemos tres objetos, posts, comments y profile, los cuales tienen una estructura de objetos y arrays.

Ahora vamos a ejecutar el siguiente comando:

```bash
npm start
```

Este comando ejecuta el script start que definimos en el archivo package.json, el cual ejecuta json-server --watch db.json, lo que significa que va a ejecutar json-server y va a estar pendiente de los cambios que se hagan en el archivo db.json.

Si todo sale bien, deberiamos ver algo como esto:

```bash
\{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/posts
  http://localhost:3000/comments
  http://localhost:3000/profile

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```

Acto seguido, iremos a la paleta izquierda de nuestro navegador y buscaremos la opcion "extensiones", en la barra de busqueda escribiremos "REST Client" y lo instalaremos.

Para utilizar REST Client, vamos a crear un archivo llamado rest.http, en el cual vamos a escribir lo siguiente:

```http
GET http://localhost:3000/posts
```

Ahora vamos a ejecutar el archivo rest.http, para ello vamos a hacer click derecho sobre el archivo y seleccionaremos la opcion "Run Rest Client".

Ahora, creamos un archivo llamado rest.http, en el cual vamos a escribir lo siguiente:

```http
GET http://localhost:3000/comments
```

Ahora vamos a ejecutar el archivo rest.http, para ello vamos a hacer click derecho sobre el archivo y seleccionaremos la opcion "Run Rest Client".

Ahora, debajo de lo ultimo escrito en el archivo rest.http, vamos a escribir lo siguiente:

```http
GET http://localhost:3000/profile
```

Ahora vamos a ejecutar el archivo rest.http, para ello vamos a hacer click derecho sobre el archivo y seleccionaremos la opcion "Run Rest Client", o Send Request.

Segun el mismo archivo database.json o database.json5, podemos eejcutar 6 verbos HTTP

- GET /posts
- GET /posts/:id
- POST /posts
- PUT /posts/:id
- PATCH /posts/:id
- DELETE /posts/:id

Es recomendable que lean la documentacion oficial de JSON-SERVER, la cual esta en el siguiente enlace: [JSON-SERVER](https://github.com/typicode/json-server/tree/v0)

Veamos que ocurre con cada uno de los verbos HTTP, para ello vamos a ejecutar los siguientes comandos:

```http
GET http://localhost:3000/posts
```

obtendremos una respuesta como la siguiente:

````json
[
  {
    "id": 1,
    "title": "json-server",
    "author": "typicode"
  }
]

```http
GET http://localhost:3000/posts/1
````

obtendremos una respuesta como la siguiente:

```json
{
  "id": 1,
  "title": "json-server",
  "author": "typicode"
}
```

```http
POST http://localhost:3000/posts
Content-Type: application/json

{
  "id": 2,
  "title": "json-server",
  "author": "typicode"
}

```

Fijemonos que debajo de la peticion POST, debemos enviar un objeto JSON, el cual debe tener la misma informacion que cada una de las entidades, que en este caso son id, title y un author.

```http
PUT http://localhost:3000/posts/2
Content-Type: application/json

{
  "id": 2,
  "title": "json-server",
  "author": "typicode"
}

```

De nuevo, debemos enviar un objeto JSON, el cual debe tener la misma informacion que cada una de las entidades, que en este caso son id, title y un author. Además, debemos enviar el id del recurso que queremos modificar. En este caso, el id es 2, debemos enviarlo tanto en la URL como en el objeto JSON. En un caso mas realista, esto no ocurriria, ya que el id se generaria automaticamente.

```http
PATCH http://localhost:3000/posts/2
Content-Type: application/json

{
  "title": "json-server"
}

```

De nuevo, debemos enviar un objeto JSON, el cual debe tener la misma informacion que cada una de las entidades, que en este caso son id, title y un author. Además, debemos enviar el id del recurso que queremos modificar. En este caso, el id es 2, debemos enviarlo tanto en la URL como en el objeto JSON. En un caso mas realista, esto no ocurriria, ya que el id se generaria automaticamente. Nota: Put actualiza todo el objeto, mientras que Patch actualiza solo una parte del objeto.

```http
DELETE http://localhost:3000/posts/2
```

En este caso, debemos enviar el id del recurso que queremos eliminar. En este caso, el id es 2, debemos enviarlo tanto en la URL como en el objeto JSON. En un caso mas realista, esto no ocurriria, ya que el id se generaria automaticamente.

## Inner Join con JSON-SERVER

Para hacer un inner join con JSON-SERVER, debemos hacer lo siguiente:

```http
http://localhost:3000/posts/1?_embed=comments
```

Y aqui, buscara entonces todos los comentarios que esten relacionados con el post 1.

Team leader, y si queremos traernos todos los posts con sus respectivos comentarios, como lo hariamos? Pues de la siguiente manera:

```http
http://localhost:3000/posts?_embed=comments
```

Y aqui, buscara entonces todos los comentarios que esten relacionados con todos los posts.

Y si deseamos traernos todos los comentarios con sus respectivos posts, como lo hariamos? Pues de la siguiente manera:

```http
http://localhost:3000/comments?_expand=post
```

Y aqui, buscara entonces todos los posts que esten relacionados con todos los comentarios.

## ¿Cómo hacer un filtro con JSON-SERVER?

Para hacer un filtro con JSON-SERVER, debemos hacer lo siguiente:

```http
http://localhost:3000/posts?title=json-server
```

Y aqui, buscara entonces todos los posts que tengan el titulo "json-server".

## ¿Cómo hacer un ordenamiento con JSON-SERVER?

Para hacer un ordenamiento con JSON-SERVER, debemos hacer lo siguiente:

```http
http://localhost:3000/posts?_sort=author&title=json-server
```

Y aqui, buscara entonces todos los posts que tengan el titulo "json-server", ordenados por el autor.

## ¿Cómo hacer un paginado con JSON-SERVER?

Para hacer un paginado con JSON-SERVER, debemos hacer lo siguiente:

```http
http://localhost:3000/posts?_page=1&_limit=1
```

Y aqui, buscara entonces todos los posts que esten en la pagina 1 y que tengan un limite de 1.

Para mas informacion visital el siguiente [link](https://github.com/typicode/json-server/tree/v0)