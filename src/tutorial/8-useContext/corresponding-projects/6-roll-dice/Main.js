import React from "react";

import Game from "./Game";
import { AppProvider } from "./context";
import "./styles.css";
//-------------------------
//I.  (II. context.js)
//Main.js===App.js
//Wrapp all app (Game.js) into AppProvider
const Main = () => {
  return (
    <AppProvider className="wrapper">
      <Game />
    </AppProvider>
  );
};

export default Main;
