import React from "react";
import Dashboard from "./Dashboard";
import Controllers from "./Controllers";

//Context
import { useGlobalContext } from "./context";

const Game = () => {
  const { players, currentScore, activePlayer } = useGlobalContext();
  // console.log(`In Game "players.length" are ${players.length}`); //2
  // console.log(`In Game "players" are ${players}`); // 1,2
  // console.log(`In Game "players[0]" is ${players[0]}`); //1
  // console.log(`In Game "players[1]" is ${players[1]}`); //2
  return (
    <div>
      <Dashboard player={players[0]} />
      <Controllers />
      <Dashboard player={players[1]} />
    </div>
  );
};

export default Game;
