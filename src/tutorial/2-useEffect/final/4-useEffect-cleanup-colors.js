import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

function useEffectCleanup() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      // setCount(prevCount => prevCount + 1)
    }, 1000);
    //clean up
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
    </div>
  );
}

export default useEffectCleanup;
