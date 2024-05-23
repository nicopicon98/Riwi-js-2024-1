# DOM

## Buscar etiquetas

- **document.getElementById('id')**

  - **Descripción**: Devuelve el elemento que tiene el atributo id con el valor especificado. Si no hay ningún elemento con el id especificado, este método devuelve null.
  - **Retorna**: HTMLElement | null
  - **Parametros**: id: string

  ```javascript
  const element = document.getElementById("id");
  ```

- **document.getElementsByName('name')**

  - **Descripción**: Devuelve una NodeList de elementos con el atributo name y el valor especificado.
  - **Retorna**: NodeList
  - **Parametros**: name: string

  ```javascript
  const elements = document.getElementsByName("name");
  ```

- **document.getElementsByClassName('className')**

  - **Descripción**: Devuelve una lista de elementos con la clase especificada.
  - **Retorna**: HTMLCollection<HTMLElement>
  - **Parametros**: className: string

  ```javascript
  const elements = document.getElementsByClassName("className");
  ```

- **document.getElementsByTagName('tagName')**

  - **Descripción**: Devuelve una lista de elementos con el nombre de la etiqueta especificada.
  - **Retorna**: HTMLCollection<HTMLElement>
  - **Parametros**: tagName: string

  ```javascript
  const elements = document.getElementsByTagName("tagName");
  ```

- **document.querySelector('selector')**

  - **Descripción**: Devuelve el primer elemento que coincida con el selector especificado.
  - **Retorna**: HTMLElement | null
  - **Parametros**: selector: string

  ```javascript
  const element = document.querySelector("selector");
  ```

- **document.querySelectorAll('selector')**

  - **Descripción**: Devuelve una NodeList de elementos que coinciden con el selector especificado.
  - **Retorna**: NodeList
  - **Parametros**: selector: string

  ```javascript
  const elements = document.querySelectorAll("selector");
  ```

- **element.nodeName**

  - **Descripción**: Devuelve el nombre de la etiqueta del elemento.
  - **Retorna**: string

  ```javascript
  const nodeName = element.nodeName;
  ```

## Crear elementos

- **document.createElement('tagName')**

  - **Descripción**: Crea un nuevo elemento con el nombre de la etiqueta especificada.
  - **Retorna**: HTMLElement
  - **Parametros**: tagName: string

  ```javascript
  const element = document.createElement("tagName");
  ```

- **document.createTextNode('text')**

  - **Descripción**: Crea un nuevo nodo de texto con el texto especificado.
  - **Retorna**: Text
  - **Parametros**: text: string

  ```javascript
  const text = document.createTextNode("text");
  ```

- **document.createComment('comment')**

  - **Descripción**: Crea un nuevo comentario con el texto especificado.
  - **Retorna**: Comment
  - **Parametros**: comment: string

  ```javascript
  const comment = document.createComment("comment");
  ```

- **document.isConnected**

  - **Descripción**: Devuelve true si el nodo está conectado al DOM, de lo contrario, devuelve false.
  - **Retorna**: boolean

  ```javascript
  const isConnected = document.isConnected;
  ```

## Fragmentos

- **document.createDocumentFragment()**

  - **Descripción**: Crea un nuevo DocumentFragment.
  - **Retorna**: DocumentFragment
  - **Casos de uso**: Para añadir varios elementos al DOM de una sola vez y asi el DOM se actualiza una sola vez

  ```javascript
  const fragment = document.createDocumentFragment();
  ```

## Gestionar clases con classList y className

- **element.classList**

  - **Descripción**: Devuelve un DOMTokenList con los nombres de las clases del elemento.
  - **Retorna**: DOMTokenList con los nombres de las clases del elemento

  ```javascript
  const classList = element.classList;
  ```

- **element.className**

  - **Descripción**: Devuelve un string con los nombres de las clases del elemento.
  - **Retorna**: string con los nombres de las clases del elemento

  ```javascript
  const className = element.className;
  ```

- **element.className = 'class'**

  - **Descripción**: Asigna un string con los nombres de las clases del elemento. Puede ser una o varias clases separadas por espacios. No se recomienda usar este método ya que reemplaza todas las clases del elemento.
  - **Parametros**: class: string
  - **Retorna**: string

  ```javascript
  element.className = "class";
  ```

- **element.classList.length**

  - **Descripción**: Devuelve el número de clases del elemento.
  - **Retorna**: number

  ```javascript
  const length = element.classList.length;
  ```

- **element.classList.add('class')**

  - **Descripción**: Añade una clase al elemento.
  - **Parametros**: class: string
  - **Retorna**: undefined

  ```javascript
  element.classList.add("class");
  ```

- **element.classList.remove('class')**

  - **Descripción**: Elimina una clase del elemento.
  - **Parametros**: class: string
  - **Retorna**: undefined

  ```javascript
  element.classList.remove("class");
  ```

- **element.classList.contains('class')**

  - **Descripción**: Devuelve true si el elemento tiene la clase especificada, de lo contrario, devuelve false.
  - **Parametros**: class: string
  - **Retorna**: boolean

  ```javascript
  const contains = element.classList.contains("class");
  ```

- **element.classList.item(index)**

  - **Descripción**: Devuelve la clase del elemento en la posición especificada.
  - **Parametros**: index: number
  - **Retorna**: string

  ```javascript
  const item = element.classList.item(index);
  ```

- **element.classList.toggle('class', force)**

  - **Descripción**: Añade o elimina una clase del elemento. Si la clase ya existe, la elimina, de lo contrario, la añade.
  - **Parametros**: class: string, force: boolean -> Si es true, añade la clase, si es false la elimina a la fuerza
  - **Retorna**: boolean, true si la clase se añade, false si se elimina

  ```javascript
  const toggle = element.classList.toggle("class"); // El segundo parametro es opcional
  ```

- **element.classList.replace('oldClass', 'newClass')**

  - **Descripción**: Reemplaza una clase del elemento por otra.
  - **Parametros**: oldClass: string, newClass: string
  - **Retorna**: boolean, true si la clase se reemplaza, false si no

  ```javascript
  const replace = element.classList.replace("oldClass", "newClass");
  ```

## Insertar en el DOM: API de nodos

- **element.appendChild(child)**

  - **Descripción**: Añade un nodo hijo al final de la lista de nodos hijos del elemento.
  - **Parametros**: child: Node
  - **Retorna**: Node, el nodo hijo que se ha añadido

  ```javascript
  const child = element.appendChild(child);
  ```

- **element.removeChild(child)**

  - **Descripción**: Elimina un nodo hijo del elemento.
  - **Parametros**: child: Node
  - **Retorna**: Node, el nodo hijo que se ha eliminado

  ```javascript
  const child = element.removeChild(child);
  ```

- **element.replaceChild(newChild, oldChild)**

  - **Descripción**: Reemplaza un nodo hijo por otro.
  - **Parametros**: newChild: Node, oldChild: Node
  - **Retorna**: Node, el nodo hijo que se ha reemplazado

  ```javascript
  const child = element.replaceChild(newChild, oldChild);
  ```

- **element.insertBefore(newChild, referenceChild)**

  - **Descripción**: Inserta un nodo hijo antes de otro nodo hijo.
  - **Parametros**: newChild: Node, referenceChild: Node
  - **Retorna**: Node, el nodo hijo que se ha añadido

  ```javascript
  const child = element.insertBefore(newChild, referenceChild);
  ```

- **element.cloneNode(deep)**

  - **Descripción**: Clona un nodo.
  - **Parametros**: deep: boolean -> Si es true, clona los nodos hijos, si es false, solo clona el nodo
  - **Retorna**: Node, el nodo clonado

  ```javascript
  const clone = element.cloneNode(true); // El parametro es opcional
  ```

## Insertar en el DOM: API de elementos

- **element.before(nodes)**

  - **Descripción**: Inserta nodos antes del elemento.
  - **Parametros**: nodes: Node | string
  - **Retorna**: undefined

  ```javascript
  element.before(nodes);
  ```

- **element.after(nodes)**

  - **Descripción**: Inserta nodos después del elemento.
  - **Parametros**: nodes: Node | string
  - **Retorna**: undefined

  ```javascript
  element.after(nodes);
  ```

- **element.prepend(nodes)**

  - **Descripción**: Inserta nodos al principio del elemento.
  - **Parametros**: nodes: Node | string
  - **Retorna**: undefined

  ```javascript
  element.prepend(nodes);
  ```

- **element.append(nodes)**

  - **Descripción**: Inserta nodos al final del elemento.
  - **Parametros**: nodes: Node | string
  - **Retorna**: undefined

  ```javascript
  element.append(nodes);
  ```

- **element.replaceWith(nodes)**

  - **Descripción**: Reemplaza el elemento por nodos.
  - **Parametros**: nodes: Node | string
  - **Retorna**: undefined

  ```javascript
  element.replaceWith(nodes);
  ```

- **element.replaceChildren(nodes)**

  - **Descripción**: Reemplaza los nodos hijos del elemento por otros nodos.
  - **Parametros**: nodes: Node | string
  - **Retorna**: undefined

  ```javascript
  element.replaceChildren(nodes);
  ```

- **element.remove()**

  - **Descripción**: Elimina el elemento del DOM.
  - **Retorna**: undefined

  ```javascript
  element.remove();
  ```

## Insertar en el DOM: API de insercion adjacente

- **element.insertAdjacentElement(position, element)**

  - **Descripción**: Inserta un elemento en una posición adyacente al elemento.
  - **Parametros**: position: string, element: Element
  - **Retorna**: Element, el elemento que se ha insertado

  ```javascript
  const insertedElement = element.insertAdjacentElement("position", element);
  ```

- **element.insertAdjacentText(position, text)**

  - **Descripción**: Inserta un texto en una posición adyacente al elemento.
  - **Parametros**: position: string, text: string
  - **Retorna**: Text, el texto que se ha insertado

  ```javascript
  const insertedText = element.insertAdjacentText("position", text);
  ```

- **element.insertAdjacentHTML(position, html)**

  - **Descripción**: Inserta un HTML en una posición adyacente al elemento.
  - **Parametros**: position: string, html: string
  - **Retorna**: Element, el elemento que se ha insertado

  ```javascript
  const insertedElement = element.insertAdjacentHTML("position", html);
  ```

- **Posiciones**:

  - **beforebegin**: Antes de que comience el elemento.
  - **afterbegin**: Justo dentro del elemento, antes de su primer hijo.
  - **beforeend**: Justo dentro del elemento, después de su último hijo.
  - **afterend**: Después de que finalice el elemento.

  ```javascript
  element.insertAdjacentElement("beforebegin", element);
  element.insertAdjacentElement("afterbegin", element);
  element.insertAdjacentElement("beforeend", element);
  element.insertAdjacentElement("afterend", element);
  ```

## Navegar por el DOM: API de elementos

- **element.children**

  - **Descripción**: Devuelve una HTMLCollection de los elementos hijos del elemento.
  - **Retorna**: HTMLCollection<HTMLElement>

  ```javascript
  const children = element.children;
  ```

- **element.parentElement**

  - **Descripción**: Devuelve el elemento padre del elemento o null si no tiene.
  - **Retorna**: HTMLElement | null

  ```javascript
  const parentElement = element.parentElement;
  ```

- **element.firstElementChild**

  - **Descripción**: Devuelve el primer elemento hijo del elemento o null si no tiene.
  - **Retorna**: HTMLElement | null

  ```javascript
  const firstElementChild = element.firstElementChild;
  ```

- **element.lastElementChild**

  - **Descripción**: Devuelve el último elemento hijo del elemento o null si no tiene.
  - **Retorna**: HTMLElement | null

  ```javascript
  const lastElementChild = element.lastElementChild;
  ```

- **element.previousElementSibling**

      - **Descripción**: Devuelve el elemento hermano anterior del elemento o null si no tiene.
      - **Retorna**: HTMLElement | null

      ```javascript
      const previousElementSibling = element.previousElementSibling;
      ```

- **element.nextElementSibling**

  - **Descripción**: Devuelve el elemento hermano siguiente del elemento o null si no tiene.
  - **Retorna**: HTMLElement | null

  ```javascript
  const nextElementSibling = element.nextElementSibling;
  ```

## Navegar por el DOM: API de nodos

- **node.childNodes**

  - **Descripción**: Devuelve una NodeList de los nodos hijos del nodo.
  - **Retorna**: NodeList

  ```javascript
  const childNodes = node.childNodes;
  ```

- **node.parentNode**

  - **Descripción**: Devuelve el nodo padre del nodo o null si no tiene.
  - **Retorna**: Node | null

  ```javascript
  const parentNode = node.parentNode;
  ```

- **node.firstChild**

  - **Descripción**: Devuelve el primer nodo hijo del nodo o null si no tiene.
  - **Retorna**: Node | null

  ```javascript
  const firstChild = node.firstChild;
  ```

- **node.lastChild**

  - **Descripción**: Devuelve el último nodo hijo del nodo o null si no tiene.
  - **Retorna**: Node | null

  ```javascript
  const lastChild = node.lastChild;
  ```

- **node.previousSibling**

  - **Descripción**: Devuelve el nodo hermano anterior del nodo o null si no tiene.
  - **Retorna**: Node | null

  ```javascript
  const previousSibling = node.previousSibling;
  ```

- **node.nextSibling**

  - **Descripción**: Devuelve el nodo hermano siguiente del nodo o null si no tiene.
  - **Retorna**: Node | null

  ```javascript
  const nextSibling = node.nextSibling;
  ```
