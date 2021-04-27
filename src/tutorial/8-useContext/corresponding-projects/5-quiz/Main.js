import React from "react";
import Home from "./Home";
//
import { AppProvider } from "./context";

import "./styles.css";
function Main() {
  return (
    //wrap all app into Provider
    <AppProvider>
      <Home />
    </AppProvider>
  );
}
export default Main;
