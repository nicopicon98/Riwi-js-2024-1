let currentComponent = null;

// Función hook useLayoutEffect
export function useLayoutEffect(callback, dependencies) {
  // Usar useEffect para manejar efectos
  useEffect(callback, dependencies);
}

// Vamos a explicar el código anterior:

// 1. Creamos una variable global `currentComponent` para almacenar la referencia al componente actual.
// 2. La función `useLayoutEffect` recibe un `callback` y un array de `dependencies`.
// 3. Usamos el hook `useEffect` para ejecutar el `callback` cuando las dependencias cambian.
// 4. La diferencia principal entre `useEffect` y `useLayoutEffect` es cuándo se ejecuta el `callback`.
//    Sin embargo, en esta implementación básica, ambos se comportan de la misma manera.
