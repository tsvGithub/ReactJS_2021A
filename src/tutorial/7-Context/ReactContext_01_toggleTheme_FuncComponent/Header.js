import React from "react";
import { ThemeContextConsumer } from "./themeContext";

// IV
function Header(props) {
  //
  return (
    //wrap header into consumer
    <ThemeContextConsumer>
      {/* provide func that recieve context object and returns element*/}
      {(context) => (
        <header className={`${context.theme}-theme`}>
          <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
        </header>
      )}
    </ThemeContextConsumer>
  );
}

export default Header;
