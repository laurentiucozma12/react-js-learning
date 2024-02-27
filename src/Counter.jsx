import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const updateDecrement = () => {
    setCounter(counter - 1);
  };

  const updateReset = () => {
    setCounter(0);
  };

  const updateIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={updateDecrement}>Decrement</button>
      <button onClick={updateReset}>Reset</button>
      <button onClick={updateIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
