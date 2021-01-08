import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  //set staate
  const [size, setSize] = useState(window.innerWidth);

  //sets new state value
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    //every resize invoks checkSize function that sets new state with size's px
    window.addEventListener("resize", checkSize);

    //clean up removes event listener because of memory leak
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  console.log("render");
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
