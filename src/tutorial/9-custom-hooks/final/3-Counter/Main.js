import React from "react";
//custom hook
import useCounter from "./useCounter";

function App() {
  //state from custom hook useCounter.js
  //useCounter returns object with count property + increment property
  //const {count, increment} = useCounter(0)
  //or to be able to change names => destructure them:
  const [numb, addCount] = useCounter(0);
  return (
    <div>
      <h1>This count is {numb}</h1>
      <button
        className="btn"
        //
        onClick={addCount}
      >
        Add 1
      </button>
    </div>
  );
}

export default App;
