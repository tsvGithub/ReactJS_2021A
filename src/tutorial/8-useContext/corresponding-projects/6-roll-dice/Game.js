import React from "react";
import Dashboard from "./Dashboard";
import Controllers from "./Controllers";

//Context
import { useGlobalContext } from "./context";

const Game = () => {
  const { player, currentScore, activePlayer } = useGlobalContext();
  return (
    <div>
      <Dashboard />
      {/* <Dashboard id={0} /> */}
      {/* <Dashboard>{player[0]}</Dashboard> */}
      <Controllers />
      {/* <Dashboard>{player[1]}</Dashboard> */}
      {/* <Dashboard id={1} /> */}
    </div>
  );
};

export default Game;
