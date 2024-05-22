const container = document.createElement('DIV');
document.body.appendChild(container);

// Working with basic attributes

// container.id = 2; // <div id="2"></div>
// container.className = 'container-class'; // <div id="2" class="container"></div>
// container.style = 'background-color: red; height: 100px;' // <div id="2" class="container" style="background-color: red; height: 100px;"></div>
// container.style.backgroundColor = 'blue'; // <div id="2" class="container" style="background-color: blue; height: 100px;"></div>

// Checking attributes deeply

// container.hasAttributes(); // true
// container.hasAttributeNS(null, 'id'); // hasAttributeNS, se usa cuando se trabaja con namespaces
// container.hasAttribute('style'); // true
// container.getAttributeNames(); // ["id", "class", "style"]
// container.getAttribute('style'); // "background-color: blue; height: 100px;"
// console.log(container.getAttributeNode('style')); // style="background-color: blue; height: 100px;"

// Working with custom attributes
// container["new-attribute"] = 'new-attribute'; // doesn't work
// container.xd = 'xd'; // doesn't work
// container.setAttribute('new-attribute', "value"); // <div id="2" class="container" style="background-color: blue; height: 100px;" new-attribute="new-attribute"></div>
// container.removeAttribute('new-attribute'); // <div id="2" class="container" style="background-color: blue; height: 100px;"></div>

// container.toggleAttribute('new-attribute2'); // Para agregar o quitar un atributo
// container.hasAttribute('new-attribute2'); // true
// container.toggleAttribute('new-attribute2'); // false
// container.hasAttribute('new-attribute2'); // false

// ClassList
// console.log(container.classList); // DOMTokenList ["container", value: "container"]
// console.log(container.classList.length); // 1
// console.log(container.classList.contains('container-class')); // true
// getting the value
// console.log(container.classList.value); // "container container-class new-class"

// container.classList.add('new-class'); // <div id="2" class="container container-class new-class" style="background-color: blue; height: 100px;"></div>
// console.log(container.classList.item(0)); // "container-class"
// console.log(container.classList.item(1)); // "new-class"
// console.log(container.classList.item(2)); // null

// Adding and removing classes

// container.classList.add('new-class2', 'new-classn', 'class-to-be-removed'); // <div id="2" class="container container-class new-class new-class2" style="background-color: blue; height: 100px;"></div>
// container.classList.remove('new-class2', 'class-to-be-removed'); // <div id="2" class="container container-class new-class" style="background-color: blue; height: 100px;"></div>

// container.classList.toggle('new-class3'); // Si la clase no existe, la agrega. Si existe, la quita
// container.classList.toggle('new-class3', false); // Si el segundo parametro es false, quita la clase, si es true, la agrega
// container.classList.replace('new-class', 'new-class4'); // Si encuentra la clase, la reemplazara por la nueva clase

// Contenido del DOM
// console.log(container.nodeName); // DIV
// console.log(container.textContent); // ""
// container.textContent = '<div>hello world</div>'
// console.log(container.textContent); // "<div>hello world</div>"

// console.log("container innerHTML:", container.innerHTML); // container innerhtml: &lt;div&gt;hello world&lt;/div&gt;
// container.innerHTML = '<div>hello world</div>'
// console.log("container innerHTML", container.innerHTML); // "<div>hello world</div>"

// container.outerHTML = '<div>hello world</div>'; // <div>hello world</div>
// console.log("container outerHTML", container.outerHTML); // <div>hello world</div>
