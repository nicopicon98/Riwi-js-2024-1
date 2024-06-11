export function render(vdom, container) {
  const dom = createDom(vdom);
  container.appendChild(dom);
}

export function createDom(vdom) {
  const dom = vdom.type === 'TEXT_ELEMENT'
    ? document.createTextNode('')
    : document.createElement(vdom.type);

  updateDom(dom, {}, vdom.props);

  vdom.props.children
    .map(createDom)
    .forEach(child => dom.appendChild(child));

  return dom;
}

export function updateDom(dom, prevProps, nextProps) {
  Object.keys(prevProps).forEach(name => {
    if (name === 'children') return;
    if (!(name in nextProps)) {
      dom[name] = null;
    }
  });

  Object.keys(nextProps).forEach(name => {
    if (name === 'children') return;
    if (name.startsWith('on')) {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, nextProps[name]);
    } else {
      dom[name] = nextProps[name];
    }
  });
}
function isProperty(key) {
  return key !== 'children';
}
