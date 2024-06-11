import { createDom, updateDom } from '../core/render.js';

// Esta función compara el DOM actual con el nuevo virtual DOM y actualiza el DOM actual
// Esto es mucho más eficiente que renderizar todo el árbol de nuevo
// Miralo de esta manera: si tienes una lista de 1000 elementos y solo cambia uno, 
// ¿por qué renderizar los 1000 elementos de nuevo?
// Si, inevitablemente, tienes que renderizar todo el árbol, entonces no hay forma de evitarlo
// Pero si puedes evitarlo, hazlo para mejorar el rendimiento.
export function diff(dom, vdom, container) {
  const newDom = diffNode(dom, vdom); // Primero, comparamos el nodo actual con el nuevo nodo
  if (container && newDom.parentNode !== container) { // Si el nodo actual no está en el contenedor
    container.appendChild(newDom); // Lo agregamos al contenedor
  }
  return newDom; // Devolvemos el nuevo nodo, o sea, el nodo actualizado.
}

function diffNode(dom, vdom) { // Esta función compara un nodo actual con un nodo virtual
  // Si el nodo actual no existe, creamos un nuevo nodo con el nodo virtual.
  // Esto se hace para que el DOM refleje el virtual DOM.
  if (dom == null) {
    return createDom(vdom);
  }

  // Si el nodo virtual no existe, eliminamos el nodo actual.
  // Esto se hace para que el DOM refleje el virtual DOM.
  if (vdom == null) {
    dom.remove();
    return null;
  }

  // Si el nodo actual es un nodo de texto y el nodo virtual es un nodo de texto,
  // comparamos el texto del nodo actual con el texto del nodo virtual.
  // Si son diferentes, actualizamos el texto del nodo actual con el texto del nodo virtual.
  if (dom.nodeType === Node.TEXT_NODE && vdom.type === 'TEXT_ELEMENT') {
    if (dom.textContent !== vdom.props.nodeValue) {
      dom.textContent = vdom.props.nodeValue;
    }
    return dom;
  }

  console.log(dom, "dom");

  if (dom.nodeName.toLowerCase() !== vdom.type.toLowerCase()) {
    const newDom = createDom(vdom);
    dom.replaceWith(newDom);
    return newDom;
  }

  updateDom(dom, dom._vdom ? dom._vdom.props : {}, vdom.props);

  const domChildren = Array.from(dom.childNodes);
  const vdomChildren = vdom.props.children;
  const max = Math.max(domChildren.length, vdomChildren.length);
  for (let i = 0; i < max; i++) {
    diffNode(domChildren[i], vdomChildren[i]);
  }

  dom._vdom = vdom;
  return dom;
}
