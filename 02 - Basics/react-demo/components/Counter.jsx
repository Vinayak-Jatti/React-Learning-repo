import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
        <button className="increment" onClick={increment}>
          Increment
        </button>
        <button className="decrement" onClick={decrement}>
          Decrement
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
