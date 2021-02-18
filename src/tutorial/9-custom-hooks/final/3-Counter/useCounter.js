import { useState } from "react";
//not need React because useCounter doesn't
//render any jsx

//useCounter custom hook for Main.js
function useCounter() {
  //set state
  const [count, setCount] = useState(0);

  //modify state
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // return {count, increment} for another component
  //return {count: count, increment: increment};
  //to call count&increment in another components
  //whatever you want => change to array instead object
  return [count, increment];
}

export default useCounter;
