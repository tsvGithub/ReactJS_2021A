import React, { useState } from "react";
//react icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  //set state for toggle show or hide
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {/*conditional rendering for icon +/- */}
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/*short-circuit:
      if showInfo is true => display "info" 
      or display nothing */}
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
