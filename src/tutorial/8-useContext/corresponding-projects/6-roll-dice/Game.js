import React from "react";
import Dashboard from "./Dashboard";
import Controllers from "./Controllers";
import Input from "./Input";

//Context
import { useGlobalContext } from "./context";

//III. (II.context.js + IV. Dashboard.js)
//Is wrapper component => Dashboard component is used
//for players and Controller component is for buttons and dice
const Game = () => {
  const { players } = useGlobalContext();
  return (
    <div className="wrapper">
      <Input />

      <main>
        <Dashboard player={players[0]} />
        <Controllers />
        <Dashboard player={players[1]} />
      </main>
    </div>
  );
};

export default Game;
