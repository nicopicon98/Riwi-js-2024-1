import { getCurrentComponent } from '../core/currentComponent.js';

export function useState(initialValue) {
  const currentComponent = getCurrentComponent();
  if (currentComponent === null) {
    throw new Error("useState must be used within a component's render method");
  }

  if (!currentComponent._state) {
    currentComponent._state = [initialValue];
  }

  
  const state = currentComponent._state[0];
  console.log(state, "state");
  console.log(currentComponent);

  const setState = newValue => {
    console.log("count after increment", newValue);
    currentComponent._state[0] = newValue;
    console.log(currentComponent._state[0], "currentComponent._state[0] before _update");
    currentComponent._update();
    // console.log(currentComponent._state[0], "currentComponent._state[0] after _update"); flag right here
  };

  return [state, setState];
}