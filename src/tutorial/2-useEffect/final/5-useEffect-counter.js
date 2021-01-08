import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

function UseEffectCounter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }
  //only rerender when count updates
  useEffect(() => {
    setColor(randomcolor());
  }, [count]);
  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <button className="btn" onClick={increment}>
        Increment!
      </button>
      <button className="btn" onClick={decrement}>
        Decrement!
      </button>
    </div>
  );
}

export default UseEffectCounter;
