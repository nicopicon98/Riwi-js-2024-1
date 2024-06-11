export function mount(component, container) {
    container.innerHTML = component.render();
}
  