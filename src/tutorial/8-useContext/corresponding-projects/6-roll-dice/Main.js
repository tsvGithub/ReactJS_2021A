import React from "react";

import Game from "./Game";

import { AppProvider } from "./context";

import "./styles.css";

const Main = () => {
  return (
    <AppProvider className="wrapper">
      <Game />
    </AppProvider>
  );
};

export default Main;
