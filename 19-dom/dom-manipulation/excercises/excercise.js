/**
 * DOM: Manipulación de Atributos y Clases del DOM
 */

//1. Crear un contenedor `div` y agregarlo al cuerpo del documento.
const $myDiv = document.createElement('DIV')
$myDiv.textContent = "hello world"
document.body.appendChild($myDiv)
//2. Trabajar con atributos básicos
//    - Asignar el id "container" al contenedor.
//    - Asignar la clase "container" al contenedor.
//    - Asignar width: 80vw, height: 80vh y border: 1px solid black al contenedor.
//    - Cambiar width a 70vw y height a 70vh de forma individual.
// $myDiv.id = "container";
// $myDiv.className = "custom-classname"
// $myDiv.style = "width: 80vw; height: 80vh; border: 1px solid black;"
// $myDiv.style.width = "70vw";
// $myDiv.style.height = "70vh";
// $myDiv.style["background-color"] = "red";
// $myDiv.style.background = "url('')";

//3. Verificar atributos
//    - Comprobar si el contenedor tiene atributos.
//    - Obtener nombre de los atributos: id, class, style.
//    - Obtener el valor de los atributos: id, class, style.
// console.log($myDiv.hasAttributes());
// $myDiv.id = "container"
// $myDiv.classList.add('card')
// $myDiv.style = "width: 100%";
// console.log($myDiv.getAttributeNames());
// console.log($myDiv.getAttribute('id'));
// console.log($myDiv.getAttribute('class'));
// console.log($myDiv.getAttribute('style'));
//4. Trabajar con atributos personalizados
//    - Añadir y eliminar el atributo personalizado "data-id" de valor "123".
//  - Alternar un atributo personalizado.

// $myDiv.setAttribute('data-id', "123")
// console.log($myDiv.getAttribute('data-id'));
// $myDiv.removeAttribute('data-id')

// $myDiv.toggleAttribute('data-id')

//5. Manipulación de `classList`
//    - Añadir la clase "hidden" al contenedor
//    - Eliminar la clase "hidden" al contenedor
//   - Alternar la clase "hidden" al contenedor, o sea si la tiene quitarla y si no la tiene añadirla.

// $myDiv.classList.add('hidden');
// $myDiv.classList.remove('hidden')

// $myDiv.classList.toggle('hidden') // Agregar
// $myDiv.classList.toggle('hidden') // Eliminar

//6. Contenido del DOM
//    - Establecer la frase "Hola mundo desde riwi" como contenido del contenedor. 
// Finalmente, obtener por consola el contenido del contenedor con innerText.
//    - Establecer el siguiente html como contenido del contenedor: `<h1>Hola mundo desde riwi</h1>`. Finalmente, obtener por consola el contenido del contenedor con innerHTML.
//    - Establecer el siguiente texto como contenido del contenedor: `<h1>Hola mundo desde riwi</h1>`. Finalmente, obtener por consola el contenido del contenedor con outerHTML.


// $myDiv.innerHTML = `
//     Hola mundo
//     <span>Desde el span</span>
// `

// console.log($myDiv.innerHTML);
// console.log($myDiv.textContent);
// console.log($myDiv.innerText);
$myDiv.addEventListener('', () => {})