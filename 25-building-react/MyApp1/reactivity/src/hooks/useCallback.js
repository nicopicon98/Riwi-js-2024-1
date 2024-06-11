let currentComponent = null;

// Función hook useCallback
export function useCallback(callback, dependencies) {
  // Usar useMemo para memorizar el callback
  return useMemo(() => callback, dependencies);
}

// Vamos a explicar el código anterior:

// 1. Creamos una variable global `currentComponent` para almacenar la referencia al componente actual.
// 2. La función `useCallback` recibe un `callback` y un array de `dependencies`.
// 3. Usamos el hook `useMemo` para memorizar el `callback`, de modo que solo se recrea cuando las dependencias cambian.
// 4. Retornamos el `callback` memorizado.
