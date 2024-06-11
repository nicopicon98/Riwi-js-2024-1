let currentComponent = null;

// Función hook useRef
export function useRef(initialValue) {
  // Retornar un objeto con la propiedad `current` inicializada con el valor `initialValue`
  return { current: initialValue };
}

// Vamos a explicar el código anterior:

// 1. Creamos una variable global `currentComponent` para almacenar la referencia al componente actual.
// 2. La función `useRef` recibe un valor inicial y retorna un objeto con una propiedad `current` que se inicializa con `initialValue`.
// 3. Este objeto puede ser utilizado para mantener una referencia mutable a lo largo del ciclo de vida del componente.
