
// Eventos en el DOM

// Eventos de ratón
document.querySelector('button').addEventListener('click', function () {
    console.log('Haz click en el botón');
});

document.querySelector('button').addEventListener('dblclick', function () {
    console.log('Haz dado doble click en el botón');
});

document.querySelector('button').addEventListener('mouseenter', function () {
    console.log('Haz entrado al botón');
});

document.querySelector('button').addEventListener('mouseleave', function () {
    console.log('Haz salido del botón');
});

document.querySelector('button').addEventListener('mousedown', function () {
    console.log('Haz presionado el botón');
});

document.querySelector('button').addEventListener('mouseup', function () {
    console.log('Haz soltado el botón');
});

document.querySelector('button').addEventListener('mousemove', function () {
    console.log('Haz movido el mouse');
});

// Eventos de teclado

document.querySelector('input').addEventListener('keydown', function (e) {
    console.log('Presionaste la tecla', e.key);
    // o tambien podemos ver el acumulado de teclas presionadas
    console.log('Hasta ahora has presionado: ', e.target.value);
});


// Event propagation o propagación de eventos
// document.querySelector('button').addEventListener('click', function () {
//     alert('Haz click en el botón');
// });

// document.querySelector('div').addEventListener('click', function () {
//     alert('Haz click en el div');
// });