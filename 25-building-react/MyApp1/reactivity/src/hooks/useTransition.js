let currentComponent = null;

// Función hook useTransition
export function useTransition() {
  // Retornar un estado falso (no en transición) y una función que ejecuta un callback
  return [false, callback => callback()];
}

// Vamos a explicar el código anterior:

// 1. Creamos una variable global `currentComponent` para almacenar la referencia al componente actual.
// 2. La función `useTransition` no recibe parámetros y retorna un array con dos elementos: un estado `false`
//    que indica que no estamos en transición, y una función que ejecuta un `callback` inmediatamente.
// 3. Esta es una implementación simplificada que no maneja realmente las transiciones.
