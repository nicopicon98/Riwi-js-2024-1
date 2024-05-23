
// Eventos en el DOM

// Eventos de ratón
// document.querySelector('button').addEventListener('click', function (e) {
//     console.log(Object.getPrototypeOf(e));
//     console.log("el evento es: ", e.type);
//     console.log('Hiciste click en el botón');
//     console.log("el dispositivo es: ", e.pointerType);
// });

// document.querySelector('button').addEventListener('dblclick', function (e) {
//     console.log("el evento es: ", e.type);
//     console.log('Haz dado doble click en el botón');
// });

// document.querySelector('button').addEventListener('mouseenter', function (e) {
//     console.log("el evento es: ", e.type);
//     console.log('Haz entrado al botón');
// });

// document.querySelector('button').addEventListener('mouseleave', function (e) {
//     console.log("el evento es: ", e.type);
//     console.log('Haz salido del botón');
// });

// document.querySelector('button').addEventListener('mousedown', function (e) {
//     console.log("el evento es: ", e.type);
//     console.log('Haz presionado el botón');
// });

// document.querySelector('button').addEventListener('mouseup', function (e) {
//     console.log("el evento es: ", e.type);
//     console.log('Haz soltado el botón');
// });

// document.querySelector('button').addEventListener('mousemove', function (e) {
//     console.log("el evento es: ", e.type);  
//     console.log('Haz movido el mouse');
// });

// // Eventos de teclado

// document.querySelector('input').addEventListener('keydown', function (e) {
//     console.log('Presionaste la tecla', e.key);
//     // o tambien podemos ver el acumulado de teclas presionadas
//     console.log('Hasta ahora has presionado: ', e.target.value);
//     console.log('El dispositivo es: ', e.pointerType);
// });


// Event propagation o propagación de eventos
// document.querySelector('button').addEventListener('click', function () {
//     alert('Haz click en el botón');
// });

// document.querySelector('div').addEventListener('click', function () {
//     alert('Haz click en el div');
// });

const myFunction = (e) => {
    e.preventDefault();
    console.log('Haz click en el botón');
}

const $myForm = document.getElementsByTagName('form')[0];
console.log($myForm);
$myForm.addEventListener('submit', myFunction, { passive: false, once: true })

document.getElementById('grandparent').addEventListener('click', () => {
    console.log('Grandparent clicked');
}, true);  // true para capturar

document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent clicked');
}, false);  // false para burbujeo

document.getElementById('child').addEventListener('click', () => {
    console.log('Child clicked');
});
