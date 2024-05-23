# localstorage -> Storage Object

- **localStorage.length**

  - **Descripcion:** La propiedad de solo lectura `localStorage.length` devuelve el número de elementos almacenados en el objeto `localStorage`.
  - **Retorno:** Un entero que representa el número de elementos almacenados en el objeto `localStorage`.

  ```javascript
  console.log(localStorage.length); // 0
  ```

- **localStorage.key()**

  - **Descripcion:** El método `localStorage.key()` devuelve la clave del índice especificado.
  - **Parametros:** `index` - Un entero que representa el índice del elemento que se desea recuperar.
  - **Retorno:** Una cadena que representa la clave del índice especificado.

  ```javascript
  localStorage.setItem("key1", "value1");
  localStorage.setItem("key2", "value2");
  console.log(localStorage.key(0)); // key1
  ```

- **localStorage.getItem()**

  - **Descripcion:** El método `localStorage.getItem()` devuelve el valor asociado con la clave especificada.
  - **Parametros:** `key` - Una cadena que representa la clave del elemento que se desea recuperar.
  - **Retorno:** Una cadena que representa el valor asociado con la clave especificada.

  ```javascript
  localStorage.setItem("key1", "value1");
  console.log(localStorage.getItem("key1")); // value1
  ```

- **localStorage.setItem()**

  - **Descripcion:** El método `localStorage.setItem()` establece el valor asociado con la clave especificada.
  - **Parametros:** `key` - Una cadena que representa la clave del elemento que se desea almacenar.
  - **Parametros:** `value` - Una cadena que representa el valor asociado con la clave especificada.
  - **Retorno:** Ninguno.

  ```javascript
  localStorage.setItem("key1", "value1");
  console.log(localStorage.getItem("key1")); // value1
  ```

- **localStorage.removeItem()**

  - **Descripcion:** El método `localStorage.removeItem()` elimina el elemento asociado con la clave especificada.
  - **Parametros:** `key` - Una cadena que representa la clave del elemento que se desea eliminar.
  - **Retorno:** Ninguno.

  ```javascript
  localStorage.setItem("key1", "value1");
  localStorage.removeItem("key1");
  console.log(localStorage.getItem("key1")); // null
  ```
