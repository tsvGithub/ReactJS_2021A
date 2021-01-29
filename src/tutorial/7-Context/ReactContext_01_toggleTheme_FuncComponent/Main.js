import React from "react";

import Header from "./Header";
import Button from "./Button";

import { ThemeContextProvider } from "./themeContext";

import "./styles.css";

// II
function Main() {
  return (
    <div>
      <ThemeContextProvider>
        <Header />
        <Button />
      </ThemeContextProvider>
    </div>
  );
}

export default Main;
