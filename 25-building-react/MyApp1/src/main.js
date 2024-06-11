import App from './App.js';

const app = new App();
const container = document.getElementById('app'); // container es una variable que guarda una referencia al elemento con id 'app' en el DOM.
app.mount(container); // Llama al método mount de la instancia de App, pasando el elemento con id 'app' como argumento.

window.app = app;