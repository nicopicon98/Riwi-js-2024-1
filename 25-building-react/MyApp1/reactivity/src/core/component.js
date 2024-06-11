import { diff } from '../utils/diff.js';
import { setCurrentComponent, currentComponent } from './currentComponent.js';

export class Component {
  constructor(props) {
    this.props = props;
    this.state = {};
    this._vdom = null;
    this._container = null;
  }

  setState(newState) {
    console.log("from Component setState before", newState);
    this.state = { ...this.state, ...newState };
    console.log("from Component setState after", this.state);
    this._update();
  }

  getState() {
    return this.state;
  }

  _update() {
    setCurrentComponent(this); // Primero, guardamos el componente actual en una variable global.
    console.log(currentComponent, "currentComponent"); // Luego, imprimimos el componente actual.
    const newVdom = this.render(); // Luego, llamamos al método render del componente actual y guardamos el resultado en una variable.
    diff(this._vdom, newVdom, this._container);
    this._vdom = newVdom;
    setCurrentComponent(null);
  }

  mount(container) {
    this._container = container; // recordemos que container es una referencia al elemento con id 'app' en el index.html
    setCurrentComponent(this); // setCurrentComponent es una función que recibe un componente y lo guarda en una variable global.
    this._vdom = this.render(); // render es un método que debe ser implementado por el componente. lo que se hace aquí es llamar a render y guardar el resultado en _vdom.
    diff(null, this._vdom, container); // diff es una función que recibe dos nodos y un contenedor. La función se encarga de comparar los nodos y actualizar el contenedor con las diferencias.
    setCurrentComponent(null); // setCurrentComponent es una función que recibe un componente y lo guarda en una variable global.
  }

  render() {
    throw new Error('Render method should be implemented by the component');
  }
}
