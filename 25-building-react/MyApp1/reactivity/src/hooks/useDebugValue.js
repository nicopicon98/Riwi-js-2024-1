let currentComponent = null;

// Función hook useDebugValue
export function useDebugValue(value, format) {
  // Mostrar el valor en la consola para depuración
  console.debug(format ? format(value) : value);
}

// Vamos a explicar el código anterior:

// 1. Creamos una variable global `currentComponent` para almacenar la referencia al componente actual.
// 2. La función `useDebugValue` recibe un `value` y un `format` opcional.
// 3. Si se proporciona un `format`, usamos esa función para formatear el valor antes de mostrarlo en la consola.
// 4. Mostramos el valor (formateado o no) en la consola para propósitos de depuración.
