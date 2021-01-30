import React from "react";

import Header from "./Header";
import Button from "./Button";
import { ThemeContextProvider } from "./themeContext";
import "./styles.css";

function App() {
  return (
    <ThemeContextProvider>
      <div>
        <Header />
        <Button />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
