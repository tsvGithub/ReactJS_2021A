import React, { useEffect, useRef } from "react";

//UseRef:
// for uncontrolled inputs
// preserves value in between renders
// DOES NOT trigger re-render
// target DOM nodes/elements

//1
const UseRefBasics = () => {
  //2.3
  //set up useRef:with initial value
  const refContainer = useRef(null);
  //2.2
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    //logges: input value
  };

  // console.log(refContainer);
  //--------------------
  //2.4
  //as useRef don't cause rerender,
  //use useEffect without dependencies
  useEffect(() => {
    console.log(refContainer.current);
    //logged: <input type="text">
    refContainer.current.focus();
  });
  //========================
  //2
  return (
    <>
      <form
        className="form"
        //2.1
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="text"
            //2.4 use refContainer as attribute "ref"
            ref={refContainer}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
