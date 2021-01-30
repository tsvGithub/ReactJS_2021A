import React, { useContext } from "react";
//1
import { ThemeContext } from "./themeContext";

function Header(props) {
  //2 pass full context object ThemeContext to useContext
  const { theme } = useContext(ThemeContext);
  return (
    <header className={`${theme}-theme`}>
      <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
    </header>
  );
}

export default Header;
