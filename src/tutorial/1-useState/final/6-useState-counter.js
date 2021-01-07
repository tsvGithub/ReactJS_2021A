import React, { useState } from "react";

function UseStateCounter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <div style={{ margin: "4rem 0" }}>
      <h1>{count}</h1>
      <button className="btn" onClick={increment}>
        increment
      </button>
      <button className="btn" onClick={decrement}>
        decrement
      </button>
    </div>
  );
}

export default UseStateCounter;
