import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";
import "./styles.css";

function Main() {
  //1
  //from input
  const [color, setColor] = useState("");
  //error for input if value is not correct
  const [error, setError] = useState(false);
  //array with default value
  const [list, setList] = useState(new Values("#3498dbf8").all(10));
  //---------------------
  //3
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Hello!");
    //--------------------------
    try {
      //new Values is imported from values.js
      //.all method values.js generates both: shades & tints
      //-----------------
      //pass in Values color === value from input that is state
      let colors = new Values(color).all(10);
      console.log(colors);
      //set array to update List state
      setList(colors);
    } catch (error) {
      //set error to true
      setError(true);
      console.log(error);
    }
  };
  //2
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        {/*3 */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            //controlled input (value for state)
            value={color}
            //change state value
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            //if value user provided is not a color
            // set red border around input
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>

      <section className="colors">
        {/* 4 List of colors */}
        {list.map((color, index) => {
          console.log(color);
          return (
            <SingleColor
              key={index}
              //pass in all the properties of the item
              {...color}
              //for displaying text with black or white color
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default Main;
