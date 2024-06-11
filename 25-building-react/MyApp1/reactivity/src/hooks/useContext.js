let contextValue = null;

// Función hook useContext
export function useContext(Context) {
  // Retornar el valor actual del contexto
  return contextValue;
}

// Proveedor de contexto
export function ContextProvider({ value, children }) {
  // Establecer el valor del contexto
  contextValue = value;
  // Retornar los hijos
  return children;
}

// Vamos a explicar el código anterior:

// 1. Creamos una variable global `contextValue` que almacenará el valor del contexto actual.
// 2. La función `useContext` recibe un `Context` y retorna el valor actual del contexto (`contextValue`).
// 3. La función `ContextProvider` recibe un objeto con `value` y `children`, establece `contextValue` al valor proporcionado,
//    y retorna los hijos para que puedan acceder al contexto.
