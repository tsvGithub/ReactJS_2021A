import React, { useState } from "react";
//create context:
const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
  // state
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    // setTheme(prevTheme => {
    //     return prevTheme === "light" ? "dark" : "light"
    // })
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      // value for consumer
      value={{ theme, toggleTheme }}
    >
      {/*children */}
      {props.children}
    </ThemeContext.Provider>
  );
}

//===================================
//Class Component
// class ThemeContextProvider extends Component {
//   state = {
//     theme: "dark",
//   };

//   toggleTheme = () => {
//     this.setState((prevState) => {
//       return {
//         theme: prevState.theme === "light" ? "dark" : "light",
//       };
//     });
//   };

//   render() {
//     return (
//       <ThemeContext.Provider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>
//         {this.props.children}
//       </ThemeContext.Provider>
//     );
//   }
// }

//=======================================
//export Provider & full context object
export { ThemeContextProvider, ThemeContext };
