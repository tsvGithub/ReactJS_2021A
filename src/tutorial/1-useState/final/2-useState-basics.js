import React, { useState } from "react";
// - hook starts with use(Hook)
// - hooks invoke inside function/component body
// ! don't call hooks conditonally

const UseStateBasics = () => {
  const [text, setText] = useState("random title");
  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
