import { useState } from "react";
export default function UseStateHook() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
}
