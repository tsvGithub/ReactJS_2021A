import React, { Component } from "react";
import ThemeContext from "./themeContext";

// III (II Main.js; IV Header.js)

class Button extends Component {
  static contextType = ThemeContext;

  render() {
    //this.context is value provided through
    //<ThemeContext.Provided value={...} > in Main.js
    // 3
    const theme = this.context;
    // 2
    console.log(this.context);
    return (
      <div>
        {/**3  */}
        <button
          //dinamic className based on context for css
          className={`${theme}-theme`}
        >
          Switch Theme
        </button>
      </div>
    );
  }
}

//1
//adding static property to Class Component Button
Button.contextType = ThemeContext;

export default Button;
