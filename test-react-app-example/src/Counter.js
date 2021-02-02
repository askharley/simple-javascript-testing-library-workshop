import React from "react";
import "./style.css";

export default function Counter() {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(x => x + 1);
  const decrement = () => setCount(x => x - 1);

  return (
    <div>
      <div>{count}</div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}
