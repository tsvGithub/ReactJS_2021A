import React from "react";
//Context
import { useGlobalContext } from "./context";

const Dashboard = (props) => {
  const { players, currentScore, totalScore } = useGlobalContext();
  console.log(`In 'Dashboard' players are ${players}`); //1,2
  // console.log(`State 'player[0]' is ${player[0]}`); //1
  // console.log(`State 'player[1]' is ${player[1]}`); //2
  //------------------
  const { player } = props; //1,2
  console.log(`In Dasshboard "Props" 'player' is ${player}`); // 1 + (next)2
  // const { id } = props;
  // console.log(`props 'ID' is ${id}`); //0 //1
  // console.log(`State + props 'player[id}' is ${player[id]}`); //1 //2

  // console.log(`'Dice' is ${dice}`);
  // console.log(`Players are ${player}`);
  return (
    <div>
      <h2>Dashboard Component</h2>
      <section className="player player--0 player--active">
        {/* <section key={player.id} className="player player--0 player--active"> */}
        <h2 className="name" id="name--0">
          {/* Player {players[player]} */}
          Player {player}
          {/* Player {player[id]} */}
        </h2>
        <p className="score" id="score--0">
          {totalScore}
        </p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--0">
            {currentScore}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
