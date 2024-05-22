/**
 * DOM: Learn the basics
 */

// 1. Vamos a entender el DOM, que es el Document Object Model, como una representación de nuestro 
// documento HTML en forma de árbol de nodos.

// 2. Cada nodo es un objeto que representa una parte del documento HTML. Los nodos pueden ser de
// diferentes tipos, como elementos, atributos, texto, comentarios, etc.

// 3. El nodo raíz es el objeto document, que representa todo el documento HTML. Este documento viene 
// heredado del objeto window, que representa la ventana del navegador, y es el objeto global de JavaScript
// en un entorno de ejecución de navegador.

// Teniendo estas 3 cosas en mente, vamos a ver cómo podemos acceder a los nodos del DOM y manipularlos.

/**
 * Ejercicio 1: Crear y Manipular Nodos del DOM
 */

// 1. Crea un elemento <div>, <span>, <img>
// const $myDiv = document.createElement('DIV')
// const $mySpan = document.createElement('SPAN')
// const $myImg = document.createElement('IMG')
// 2. Obtén el prototipo de cada uno de los elementos creados
// console.log(Object.getPrototypeOf($myDiv), Object.getPrototypeOf($mySpan), Object.getPrototypeOf($myImg));
// 3. Obtener, del html anclado, los siguientes elementos:
// 3.1 Elemento cuya clase es 'card'
// const $myCard = document.getElementsByClassName('card')
// console.log($myCard[0]);
// 3.2 Elemento cuyo id es btn
// const $myBtn = document.getElementById('btn');
// console.log($myBtn);
// 3.3 Todos los elementos de etiqueta <div> e imprimir el segundo valor del array
// const $myDivs = document.getElementsByTagName('DIV')
// console.log($myDivs[1]);
// 3.4 Todos los elementos de atributo href y obtener su prototipo
// const $myLinks = document.querySelectorAll('[href]')
// console.log(Object.getPrototypeOf($myLinks[0]));
// 3.5 Todos los elementos cuyo atributo href sea igual a "https://twitter.com"
// const $myLinks = document.querySelectorAll('[href="https://twitter.com"]')
// console.log(Object.getPrototypeOf($myLinks));
// 3.6 Todos los elementos div de clase "social-links" hijos de un elemento div de clase "card"
// const $myDivs = document.querySelectorAll('div.card div.social-links')
// console.log($myDivs);
// 4. Recorrer todos los elementos del punto 3.4.
// $myLinks.forEach(($a) => {
//     console.log($a);
// })
// 5. Clonar de forma profunda y no profunda el nodo del elemento cuya clase es 'social-links' e imprimirlo en consola
// const $myLink = document.getElementsByClassName('social-links')[0]
// const $myShallowLink = $myLink.cloneNode()
// const $myDeepLink = $myLink.cloneNode(true);

// console.log($myShallowLink, $myDeepLink);
// 6. Checkear:
// 6.1 El prototipo del objeto img creado en el punto 1
// console.log($myDiv.isConnected);
// 6.2 El prototype del elemento span creado en el punto 1
// 6.3 Si el elemento div esta conectado al DOM

// 6.4 Utilizando la sentencia document.body.appendChild(div), conectar el elemento div al DOM y checkear de nuevo si esta conectado al DOM
// console.log($myDiv.isConnected);
// document.body.appendChild($myDiv)
// console.log($myDiv.isConnected);
// 7. Trabajando con fragmentos:
// 7.1 Crear un fragmento y añadirle 3 elementos div
// const $myFragment = document.createDocumentFragment();
// for (let index = 0; index < 3; index++) {
//     const $myDiv = document.createElement('DIV');
//     $myDiv.textContent = `Item ${index}`
//     $myFragment.appendChild($myDiv)
// }
// 7.2 Clonar el fragmento y añadirlo al body
// const $myClonedFragment = $myFragment.cloneNode(true)
// document.body.appendChild($myClonedFragment)

const $myCardElement = document.querySelector('.card');
const myClasses = ['bg-green', 'flex-1', 'container']
$myCardElement.classList.add(...myClasses)
console.log($myCardElement.classList.item(4));