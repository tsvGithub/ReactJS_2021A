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
    //
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

//export Provider & full context object
export { ThemeContextProvider, ThemeContext };
