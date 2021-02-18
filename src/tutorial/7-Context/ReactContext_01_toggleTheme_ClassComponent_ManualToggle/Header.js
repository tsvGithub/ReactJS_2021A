import React, { Component } from "react";
import ThemeContext from "./themeContext";

// IV (III Button.js)
class Header extends Component {
  //1 adding static property
  //NB! contextType working only for Class Component
  static contextType = ThemeContext;
  render() {
    //2 grabing theme from this.context
    const theme = this.context;
    return (
      <header className={`${theme}-theme`}>
        <h1>
          {/*3 dinamic label */}
          {theme === "light" ? "Light" : "Dark"} Theme
        </h1>
      </header>
    );
  }
}

export default Header;
