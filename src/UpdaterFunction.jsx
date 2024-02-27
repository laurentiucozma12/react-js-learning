import { useState } from "react";

function Counter() {
  const [count, setCounter] = useState(0);

  const updateIncrement = () => {
    //// Trying to add + 1 for 3 times so when you click on increment btn
    //// it should make + 3 every time you click. But this doesn't work,
    //// because it didn't update the value of count yet. It
    //// takes the value of count which is 0, then adds 1, then
    //// takes again value of count which is 0, then adds 1, then
    //// takes again value of count which is 0, then adds 1, the result is still 1
    // setCounter(count + 1); // 0 + 1 = 1
    // setCounter(count + 1); // 0 + 1 = 1
    // setCounter(count + 1); // 0 + 1 = 1

    //// Solution, we can use an updater function, for example arrow functions. It
    //// takes the value of count which is 0, then adds 1, then update it, then
    //// takes again value of count which is 1, then adds 1, then update it, then
    //// takes again value of count which is 2, then adds 1, the result is 3
    setCounter((c) => c + 1); // 0 + 1 = 1
    setCounter((c) => c + 1); // 1 + 1 = 2
    setCounter((c) => c + 1); // 2 + 1 = 3
  };
  const updateDecrement = () => {
    setCounter((c) => c - 1);
    setCounter((c) => c - 1);
    setCounter((c) => c - 1);
  };

  const updateReset = () => {
    setCounter(0);
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={updateDecrement}>Decrement</button>
      <button onClick={updateReset}>Reset</button>
      <button onClick={updateIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
