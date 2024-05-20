/**
 * DOM: Learn the basics
 */

// 1. Vamos a entender el DOM, que es el Document Object Model, como una representación de nuestro 
// documento HTML en forma de árbol de nodos.

// 2. Cada nodo es un objeto que representa una parte del documento HTML. Los nodos pueden ser de
// diferentes tipos, como elementos, atributos, texto, comentarios, etc.

// 3. El nodo raíz es el objeto document, que representa todo el documento HTML. Este documento viene 
// heredado del objeto window, que representa la ventada del navegador, y es el objeto global de JavaScript
// en un entorno de ejecucion de navegador.

// Teniendo estas 3 cosas en mente, vamos a ver cómo podemos acceder a los nodos del DOM y manipularlos.

//-- El objeto DOM

//console.log(document);

/*/ Tipos especificos /*/

const div = document.createElement('div'),
    span = document.createElement('span'),
    img = document.createElement('img'),
    audio = document.createElement('audio');

//console.log(typeof div, "-", Object.getPrototypeOf(div)); // object, HTMLDivElement
//console.log(typeof span, "-", Object.getPrototypeOf(span)); // object, HTMLDivElement
//console.log(typeof img, "-", Object.getPrototypeOf(img)); // object, HTMLDivElement
//console.log(typeof audio, "-", Object.getPrototypeOf(audio)); // object, HTMLDivElement

/*/ Seleccionar elementos del DOM /*/

/* getElementById */

// console.log(div.getElementById('root')); // uncaught type error debido a que getElementById es un método del objeto document
//console.log(Object.getPrototypeOf(document)); // HTMLDocument
//console.log(Object.getPrototypeOf(div)); // HTMLDocument
// div.createElement('div'); // Uncaught TypeError: div.createElement is not a function

/* getElementsByClassName */
// console.log(div.getElementsByClassName('card')); // Devuelve un HTMLCollection con todos los elementos que tengan la clase 'card', si no hay ninguno, devuelve un HTMLCollection vacío
// for (let i = 0; i < document.getElementsByClassName('card').length; i++) {
//     console.log(document.getElementsByClassName('card')[i]);
// }

/* getElementsByName */

const myTag = document.getElementsByName('first-card');
//console.log(myTag); // Devuelve un NodeList con todos los elementos que tengan el atributo name con el valor 'first-card', si no hay ninguno, devuelve un NodeList vacío

/* getElementsByTagName */

const myTag2 = document.getElementsByTagName('div');
//console.log(myTag2); // Devuelve un HTMLCollection con todos los elementos que sean de tipo 'div', si no hay ninguno, devuelve un HTMLCollection vacío

/* querySelector y querySelectorAll */
// Nota: querySelector devuelve el primer elemento que cumpla con el selector que le pasamos como argumento
// En terminos de rendimiento, querySelector es más lento que getElementById, getElementsByClassName, getElementsByName y getElementsByTagName
// ya que querySelector tiene que recorrer todo el documento para encontrar el primer elemento que cumpla con el selector que le pasamos como argumento
// const myTag3 = document.querySelector('.card');
// const myTag4 = document.querySelector('#my-id-element');
// const myTag5 = document.querySelector('div');
// const myTag6 = document.querySelectorAll('[my-attribute]');
// const myTag7 = document.querySelector('[my-attribute="something2"]');
// const myTag8 = document.querySelector('div.card div.info');

// console.log(myTag3);
// console.log(myTag4);
// console.log(myTag5);
// console.log(myTag6);
// console.log(myTag7);
// console.log(myTag8);

// Si deseo recorrer myTag6, debo hacerlo de la siguiente manera
// myTag6.forEach((element) => {
//     console.log(element);
// });

/* Crear elementos del DOM */

// Tenemos 4 formas de crear elementos en el DOM

// 1. Crear un elemento con el método createElement del objeto document
// const div2 = document.createElement('div');

// 2. Crear un comentario con el método createComment del objeto document
// const comment = document.createComment('This is a comment from js');
// document.body.appendChild(comment);

// 3. Crear un texto con el método createTextNode del objeto document
// const textNode = document.createTextNode('Hello, World!');
// document.body.appendChild(textNode);

// 4. Clonar un nodo con el método cloneNode del objeto Node
// const originalNode = document.querySelector('.original');
// const shallowClone = originalNode.cloneNode(); // Clonación superficial
// console.log(shallowClone);
// const deepClone = originalNode.cloneNode(true); // Clonación profunda (incluye hijos)
// console.log(deepClone);
// document.body.appendChild(deepClone);

/* Checkear si un lemento esta conectado al DOM */

// console.log(originalNode.isConnected); // true
// console.log(shallowClone.isConnected); // false

/* Fragmentos del DOM */

// Los fragmentos del DOM son una forma de agrupar nodos del DOM en un solo nodo, sin que este nodo sea parte del árbol de nodos del DOM
// Esto es útil cuando queremos agregar varios nodos al DOM, ya que al agregar un fragmento al DOM, todos los nodos que estén dentro del fragmento
// se agregarán al DOM, pero el fragmento en sí no se agregará al DOM.

// const fragment = document.createDocumentFragment();
// const div3 = document.createElement('div');
// const span2 = document.createElement('span');
// fragment.appendChild(div3);
// fragment.appendChild(span2);
// document.body.appendChild(fragment);

// Los fragmentos son sencillos de entender, piensa en ellos como si fuera una etiqueta sin valor <></>
// la cual no se renderiza en el DOM, pero si los elementos que estén dentro de ella, esto es util para
// evitar tanto div o span innecesarios en el DOM

// for(let i=0; i< 5000; i++){
//     const div4 = document.createElement('div');
//     div4.textContent = `Elemento ${i}`;
//     fragment.appendChild(div4);
// }
// document.body.appendChild(fragment);

// Nota*: Recordemos que cada vez que agregamos un nodo al DOM, estamos forzando al navegador a re-renderizar,
// lo que puede ser costoso en términos de rendimiento. Este proceso es especialmente relevante cuando agregamos muchos nodos individualmente.

// En el ejemplo anterior, mostramos cómo agregar 5000 nodos al DOM de una manera eficiente.
// Aunque la cantidad total de nodos agregados es 5000, al hacerlo de una sola vez, es mucho más eficiente
// que agregar los 5000 nodos uno por uno al DOM.

// Para optimizar el rendimiento, es recomendable usar fragmentos del DOM (DocumentFragment) cuando necesitemos
// agregar múltiples nodos al DOM simultáneamente.

const myCustomElement = document.createTextNode('This is a comment');
document.body.appendChild(myCustomElement);

