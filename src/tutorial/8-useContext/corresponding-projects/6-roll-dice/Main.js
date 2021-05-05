import React from "react";

import Dashboard from "./Dashboard";
import Controllers from "./Controllers";

import { AppProvider } from "./context";
import "./styles.css";

const Main = () => {
  return (
    <AppProvider>
      <Dashboard id={0} />
      <Controllers />
      <Dashboard id={1} />
    </AppProvider>
  );
};

export default Main;
