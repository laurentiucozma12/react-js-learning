import { useEffect, useState } from "react";

export default function UseEffectHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Your count is: " + count);

    return () => {
      console.log("Your code is cleaned up");
    };
  }, [count]);

  return (
    <>
      <div>Counter:{count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
}
