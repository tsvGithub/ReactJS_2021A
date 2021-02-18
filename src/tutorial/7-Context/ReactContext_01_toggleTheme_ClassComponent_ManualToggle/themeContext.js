import React from "react";

// I. (for II Main.js)

//1
//Create Context is working around Provider & Consumer
//createContext can have default value
const ThemeContext = React.createContext();
//ThemeContext is compound Component:
//ThemeContext.Provider for Component that provides Context
// &
//ThemeContext.Consumer for Child Components that consumes Context

export default ThemeContext;
