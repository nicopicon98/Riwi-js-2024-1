export let currentComponent = null;

export function getCurrentComponent() {
  return currentComponent;
}

export function setCurrentComponent(component) {
  currentComponent = component;
}
