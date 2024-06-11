let currentComponent = null;

// Función hook useMemo
export function useMemo(factory, dependencies) {
  // Determinar si las dependencias han cambiado
  const hasChanged = dependencies.some((dep, i) => dep !== currentComponent._dependencies[i]);

  // Si las dependencias han cambiado, recalcular el valor memoizado
  if (hasChanged) {
    currentComponent._memo = factory();
    currentComponent._dependencies = dependencies; // Actualizar las dependencias
  }

  // Retornar el valor memoizado
  return currentComponent._memo;
}

// Vamos a explicar el código anterior:

// 1. Creamos una variable global `currentComponent` para almacenar la referencia al componente actual.
// 2. La función `useMemo` recibe una `factory` y un array de `dependencies`.
// 3. Verificamos si alguna de las dependencias ha cambiado en comparación con las dependencias guardadas anteriormente en `currentComponent._dependencies`.
// 4. Si alguna dependencia ha cambiado, recalculamos el valor memoizado llamando a la `factory` y actualizamos `currentComponent._dependencies` con las nuevas dependencias.
// 5. Retornamos el valor memoizado almacenado en `currentComponent._memo`.
