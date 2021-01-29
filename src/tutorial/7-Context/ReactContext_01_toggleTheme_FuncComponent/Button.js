import React from "react";
import PropTypes from "prop-types";
import { ThemeContextConsumer } from "./themeContext";

//III
function Button(props) {
  return (
    <ThemeContextConsumer>
      {/**render prop for child element:
       * function provides context object & returns element btn
       */}
      {(context) => (
        //return
        <button
          //
          onClick={context.toggleTheme}
          //
          className={`${context.theme}-theme`}
        >
          Switch Theme
        </button>
      )}
    </ThemeContextConsumer>
  );
}

Button.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]),
};

Button.defaultProps = {
  theme: "light",
};

export default Button;
