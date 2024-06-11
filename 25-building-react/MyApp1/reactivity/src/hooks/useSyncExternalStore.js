let currentComponent = null;

// Función hook useSyncExternalStore
export function useSyncExternalStore(subscribe, getSnapshot) {
  // Usar useState para manejar el estado del snapshot
  const [state, setState] = useState(getSnapshot());

  // Usar useEffect para suscribirse a los cambios
  useEffect(() => {
    // Función para manejar cambios en el estado del snapshot
    const handleChange = () => setState(getSnapshot());

    // Suscribirse a los cambios
    const unsubscribe = subscribe(handleChange);

    // Limpiar la suscripción cuando el efecto se desmonta
    return () => unsubscribe();
  }, [subscribe]);

  // Retornar el estado actual del snapshot
  return state;
}

// Vamos a explicar el código anterior:

// 1. Creamos una variable global `currentComponent` para almacenar la referencia al componente actual.
// 2. La función `useSyncExternalStore` recibe una función `subscribe` para suscribirse a los cambios y una función `getSnapshot` para obtener el estado actual.
// 3. Usamos el hook `useState` para manejar el estado del snapshot inicial, obteniéndolo con `getSnapshot`.
// 4. Usamos el hook `useEffect` para suscribirse a los cambios llamando a `subscribe` con una función `handleChange` que actualiza el estado.
// 5. Cuando el efecto se desmonta, limpiamos la suscripción llamando a `unsubscribe`.
// 6. Retornamos el estado actual del snapshot.
