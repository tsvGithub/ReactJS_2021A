import React, { useContext } from "react";
//1
import { ThemeContext } from "./themeContext";

function Button(props) {
  //2 pass context object ThemeContext to useContext
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      //
      onClick={toggleTheme}
      className={`${theme}-theme`}
    >
      Switch Theme
    </button>
  );
}

export default Button;
