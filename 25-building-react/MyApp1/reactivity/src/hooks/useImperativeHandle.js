let currentComponent = null;

// Función hook useImperativeHandle
export function useImperativeHandle(ref, createHandle, dependencies) {
  // Usar useMemo para memorizar el handle
  ref.current = useMemo(createHandle, dependencies);
}

// Vamos a explicar el código anterior:

// 1. Creamos una variable global `currentComponent` para almacenar la referencia al componente actual.
// 2. La función `useImperativeHandle` recibe un `ref`, una `createHandle` y un array de `dependencies`.
// 3. Usamos el hook `useMemo` para memorizar el handle, de modo que solo se recrea cuando las dependencias cambian.
// 4. Asignamos el handle memorizado a `ref.current`.
