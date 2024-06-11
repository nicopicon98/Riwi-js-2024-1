let currentComponent = null;

// Función hook useReducer
export function useReducer(reducer, initialState) {
  // Usar useState para manejar el estado
  const [state, setState] = useState(initialState);

  // Función para despachar acciones y actualizar el estado
  const dispatch = action => setState(reducer(state, action));

  // Retornar el estado actual y la función dispatch
  return [state, dispatch];
}

// Vamos a explicar el código anterior:

// 1. Creamos una variable global `currentComponent` para almacenar la referencia al componente actual.
// 2. La función `useReducer` recibe un `reducer` y un `initialState`, y retorna un array con el estado actual y la función `dispatch`.
// 3. Usamos el hook `useState` para manejar el estado, inicializado con `initialState`.
// 4. La función `dispatch` recibe una `action` y actualiza el estado usando el `reducer`.
// 5. Finalmente, retornamos el estado actual y la función `dispatch`.
