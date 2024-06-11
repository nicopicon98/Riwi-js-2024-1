let currentId = 0;

// Función hook useId
export function useId() {
  // Generar un nuevo ID incrementando `currentId`
  return currentId++;
}

// Vamos a explicar el código anterior:

// 1. Creamos una variable global `currentId` para almacenar el último ID generado.
// 2. La función `useId` no recibe parámetros y retorna un nuevo ID único.
// 3. Incrementamos `currentId` en 1 cada vez que se llama a `useId` para asegurar que cada ID sea único.
