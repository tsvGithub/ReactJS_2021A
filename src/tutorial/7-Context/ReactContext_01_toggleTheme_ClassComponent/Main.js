import React from "react";

import Header from "./Header";
import Button from "./Button";
import ThemeContext from "./themeContext";
import "./styles.css";

//https://reactjs.org/docs/context.html

// II (I themeContext.js; III Button.js)
function Main() {
  return (
    <div>
      {/*1
      ThemeContext.Provider from "./themeContext"
     Prop value is data that pass to Consumers
      */}
      <ThemeContext.Provider value={"dark"}>
        <Header />
        <Button />
      </ThemeContext.Provider>
    </div>
  );
}

export default Main;
