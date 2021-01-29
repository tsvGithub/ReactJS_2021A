import React, { Component } from "react";
//destructuring React.createContext
const { Provider, Consumer } = React.createContext();

// I
// create Component with state
//ThemeContextProvider===ThemeContext.Provider
class ThemeContextProvider extends Component {
  //state:
  state = {
    theme: "dark",
  };
  //------------------
  toggleTheme = () => {
    this.setState((prevState) => {
      return {
        theme: prevState.theme === "dark" ? "light" : "dark",
      };
    });
  };

  //
  render() {
    console.log(this.state.theme);
    return (
      <Provider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>
        {/** */}
        {this.props.children}
      </Provider>
    );
  }
}
//export  Provider & Consumer
export { ThemeContextProvider, Consumer as ThemeContextConsumer };
