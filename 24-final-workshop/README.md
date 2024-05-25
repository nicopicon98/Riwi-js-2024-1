# Workshop final

## Objectivos

- Aplicar los conocimientos de DOM, eventos, fetch, localStorage y json-server.
- Crear una aplicación web que permita a los usuarios ver, crear, editar y eliminar tareas.
- Implementar un sistema de autenticación simple con json-server.

## Consideraciones

- La aplicación debe ser una SPA.
- No se exigira el uso de imagenes.
- La aplicacion ya trae consigo los siguientes archivos:
  - .babelrc (configuracion de babel)
  - .gitignore (para ignorar node_modules)
  - package.json (con las dependencias necesarias)
  - README.md (Archivo actual con las instrucciones del workshop)
  - db.json (archivo json para simular una base de datos con json-server)
  - endpoints.http (archivo para probar los endpoints de json-server con la extension de Visual Studio Code REST Client)

## Requerimientos del taller

- Crear un proyecto con la estructura de archivos y carpetas que hemos utilizado en nuestras aplicaciones SPA.
- Crear un repositorio en GitHub con el nombre "final-workshop".
- La aplicacion debe ingresar por app/index.js.
- La aplicacion debe tener un archivo en la ruta raiz /index.html.
- La aplicacion debe tener un archivo en la ruta app/styles.css.
- El archivo styles.css debe estar importado en el archivo index.js.

## Requerimientos funcionales

### Vista de registro (publica) /register

- Crear una vista de registro con un formulario que contenga los siguientes campos:
  - Nombre
  - Email
  - Contraseña
- Al hacer submit en el formulario, se debe validar que los campos no esten vacios.
- Si los campos estan vacios, se debe mostrar un mensaje de error con el texto "Todos los campos son requeridos" sin distinguir cual campo esta vacio y prevenir el envio del formulario y evitar recargar la pagina.
- Si los campos no estan vacios, se debe hacer una peticion POST a la url `http://localhost:3000/register` con los datos del formulario.
- Se debe validar que el email no este registrado en la base de datos.
- Si el email ya esta registrado, se debe mostrar un mensaje de error con el texto "El email ya esta registrado" y prevenir el envio del formulario y evitar recargar la pagina.
- Si la peticion es exitosa, se debe redirigir al usuario a la vista de login.

### Vista de login (publica) /login

- Crear una vista de login con un formulario que contenga los siguientes campos:
  - Email
  - Contraseña
- Al hacer submit en el formulario, se debe validar que los campos no esten vacios.
- Si los campos estan vacios, se debe mostrar un mensaje de error con el texto "Todos los campos son requeridos" sin distinguir cual campo esta vacio y prevenir el envio del formulario y evitar recargar la pagina.
- Si los campos no estan vacios, se debe hacer una peticion POST a la url `http://localhost:3000/login` con los datos del formulario.
- Si la peticion es exitosa, se debe redirigir al usuario a la vista de tareas, la cual solo puede ser accedida siempre y cuando el usuario este autenticado.
- Si la peticion es exitosa, se debe crear un token de forma aleatoria utilizando la funcion `Math.random()` y guardarlo en localStorage con la clave `token`.
- Un usuario esta autenticado solo si existe un token en localStorage.
- Si la peticion falla, por cualquier motivo, se debe mostrar un mensaje de error con el texto "Usuario o contraseña incorrectos" y prevenir el envio del formulario y evitar recargar la pagina.

### Vista de tareas (privada) /tasks

- La vista de tareas debe tener un navbar fijo en la parte superior con tres opciones:
  - Usuarios
  - Tareas
  - Cerrar sesion
- Al hacer click en la opcion de cerrar sesion, se debe eliminar el token del localStorage y redirigir al usuario a la vista de login.
- La vista de tareas debe tener dos secciones:
  - En la parte izquierda, se debe mostrar un formulario con los siguientes campos:
    - Titulo
    - Descripcion
    - Prioridad (alta, media, baja)
    - Fecha de entrega
    - Boton de guardar
  - En la parte derecha, se debe mostrar una lista de tareas con las siguientes opciones:
    - Editar
      - Al hacer click en el boton de editar, se debe redirigir al usuario a la vista de edicion de tareas.
      - La vista de edicion de tareas debe tener un formulario con los mismos campos que el formulario de creacion de tareas, pero con los campos prellenados con los datos de la tarea seleccionada.
    - Eliminar
      - Al hacer click en el boton de eliminar, se debe eliminar la tarea de la lista de tareas.
    - Vista previa
    - Inactivar
      - Al hacer click en el boton de inactivar, se debe cambiar el estado de la tarea a inactiva.

### Vista de usuarios con sus respectivas tareas (privada) /users

- Crear una vista de usuarios con sus respectivas tareas.
- La vista de tareas debe tener un navbar fijo en la parte superior con tres opciones:
  - Usuarios
  - Tareas
  - Cerrar sesion
- La vista de usuarios con sus respectivas tareas de la siguiente forma:
  - En la parte superior, un boton para mostrar el usuario seleccionado, que solamente se active, cuando un usuario haya sido seleccionado, de lo contrario, debe estar desactivado de la siguiente forma:
  ```html
  <button disabled>Usuario seleccionado</button>
  ```
  - En la parte izquierda, se debe mostrar una lista de usuarios.
  - En la parte derecha, se debe mostrar una lista de tareas del usuario seleccionado.
  - Al hacer click en un usuario, se debe mostrar las tareas del usuario seleccionado.
  - Al hacer click en una tarea, se debe mostrar la vista previa de la tarea seleccionada.

## Logica de rutas

- Si el usuario no esta autenticado y trata de acceder a la vista de tareas, se debe redirigir al usuario a la vista de login.
- Si el usuario esta autenticado y trata de acceder a la vista de registro o login, se debe redirigir al usuario a la vista de tareas.
- Si el usuario esta autenticado y trata de acceder a la vista de usuarios, se debe redirigir al usuario a la vista de tareas.
- Si el usuario no esta autenticado y trata de acceder a la vista de usuarios, se debe redirigir al usuario a la vista de login.

## 404 /not-found

- Si se intenta acceder a una ruta que no existe, se debe redirigir al usuario a la vista de 404.