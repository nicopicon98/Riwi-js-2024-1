import { getCurrentComponent } from '../core/currentComponent.js';

export function useEffect(callback, dependencies) {
  const currentComponent = getCurrentComponent();

  if (!currentComponent) {
    throw new Error("useEffect must be used within a component's render method");
  }

  if (!currentComponent._dependencies) {
    currentComponent._dependencies = [];
  }

  const hasChanged = dependencies.some((dep, i) => dep !== currentComponent._dependencies[i]);

  if (hasChanged) {
    callback();
    currentComponent._dependencies = dependencies;
  }
}

// Vamos a explicar el código anterior:

// 1. Importamos `getCurrentComponent` para obtener la referencia al componente actual.
// 2. La función `useEffect` recibe un `callback` que se ejecutará cuando las dependencias cambien, y un array de `dependencies`.
// 3. Obtenemos el componente actual llamando a `getCurrentComponent`. Si `currentComponent` es `null`, lanzamos un error indicando que `useEffect` debe ser usado dentro del método `render` de un componente.
// 4. Verificamos si alguna de las dependencias ha cambiado en comparación con las dependencias guardadas anteriormente en `currentComponent._dependencies`.
// 5. Si alguna dependencia ha cambiado, ejecutamos el `callback` y actualizamos `currentComponent._dependencies` con las nuevas dependencias.
