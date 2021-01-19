import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

//1
//props rgb (array) & weight(%) are coming from the color (values.js)
//props index is sets up with 'list.map' in Main.js
function SingleColor({ rgb, weight, index, hexColor }) {
  //2 state
  //alert when coping to clipboard
  const [alert, setAlert] = useState(false);
  //for backgroundColor turns rgb array into string for css
  const bcg = rgb.join(",");
  // a) from rgbToHex "./utils";
  const hex = rgbToHex(...rgb);
  // or b) from library values.js
  //gets hex value for displaying it from color
  const hexValue = `#${hexColor}`;
  //------------------------
  //4 clear value of notification (alert)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);
  //-------------------------
  //3
  return (
    <article
      //if color is dark => set up white text
      className={`color ${index > 10 && "color-light"}`}
      //css inline style uses "bcg" state
      style={{ backgroundColor: `rgb(${bcg})` }}
      //copy value to clipboard
      onClick={() => {
        //set alert to true to show up a notification
        setAlert(true);
        //copying to clipboard
        navigator.clipboard.writeText(hexValue);
      }}
    >
      {/*display % */}
      <p className="percent-value">{weight}%</p>
      {/*display hex value of color */}
      <p className="color-value">{hexValue}</p>
      {/*if copied to clipboard => alert with notification */}
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
}

export default SingleColor;
