/** @jsx createElement */
import { Component, createElement, useState, useEffect } from '../reactivity/index.js';

class App extends Component {
  constructor() {
    super();
    this._state = null;
    this._dependencies = [];
    this._memo = null;
  }

  // override 
  render() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log('Count changed:', count);
    }, [count]);

    const increment = () => {
      console.log("count before increment", count);
      setCount(count + 1);
    };

    console.log(count, "count");

    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    );
  }
}

export default App;
