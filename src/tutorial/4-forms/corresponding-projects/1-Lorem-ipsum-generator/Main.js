import React, { useState } from "react";
import data from "./data";

import "./styles.css";
//1
function Main() {
  //2
  //how many paragraphs
  const [count, setCount] = useState(0);
  //array for paragraphs to display
  const [text, setText] = useState([]);

  //4
  //when submit -> change count & array
  const handleSubmit = (e) => {
    //4.1
    e.preventDefault();
    // console.log("hello world!");
    //-------------------
    //4.2
    console.log(typeof count);
    // console.log(typeof count); ==='string'
    //even it has 'number' type in the input!
    //convert 'count' to number:
    let amount = parseInt(count);
    console.log(typeof amount);
    //----------------------------------
    //4.4
    //max parargaphs===8 =>
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }

    //------------------
    //4.3
    //set state 'text' with full data array:
    // setText(data);
    //OR: how many paragraphs do you want?
    //slice will return a new copy of an array
    //set state with data array & slice it
    //from start (0) to 'amount' number (for example, 5)
    //and remove other paragraphs from array
    setText(data.slice(0, amount));
    //----------------------------------
  };
  //3
  return (
    <section className="section-center">
      <h3>How many paragraphs do you need?</h3>
      <form
        className="lorem-form"
        //4
        onSubmit={handleSubmit}
      >
        <label htmlFor="amount">paragraphs:</label>

        <input
          type="number"
          name="amount"
          id="amount"
          //controlled input
          value={count}
          //change state
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      {/*display text===paragraphs */}
      <article className="lorem-text">
        {/* */}
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default Main;
