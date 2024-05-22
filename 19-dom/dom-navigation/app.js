/**
 * DOM Navigation
 */

// Navegando a través de los nodos
const $h1 = document.querySelector('.title');
const $ul = document.querySelector('.list');
console.log($h1); // <h1 class="title">DOM Navigation</h1>
console.log($h1.parentNode); // <div class="container">...</div>
console.log($ul.childNodes); // NodeList(3)  [text, li, text, li, text, li, text]
console.log($ul.lastChild); // #text ya que el último hijo es un salto de línea
console.log($ul.nextSibling); // #text ya que el siguiente hermano es un salto de línea
console.log($ul.previousSibling); // #text ya que el hermano anterior es un salto de línea

// Para evitar los saltos de línea, utilizaremos navegación a través de elementos

console.log($ul.children); // HTMLCollection(3) [li, li, li]
console.log($ul.parentElement); // <div class="container">...</div>
console.log($ul.firstElementChild); // <li>...</li>
console.log($ul.lastElementChild); // <li>...</li>
console.log($ul.nextElementSibling); // <h2>...</h2>
console.log($ul.previousElementSibling); // <h1 class="title">DOM Navigation</h1>