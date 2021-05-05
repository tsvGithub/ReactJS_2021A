import React from "react";
//Context
import { useGlobalContext } from "./context";

const Dashboard = (props) => {
  const { player, currentScore } = useGlobalContext();
  // console.log(player[0]); //1
  // console.log(player[1]); //2
  const { id } = props;
  // console.log(id); //0 //1
  // console.log(player[id]); //1 //2
  // console.log(player.map((player) => player[id]));
  //undefined, undefined
  return (
    <div>
      <h2>Dashboard Component</h2>
      <section className="player player--0 player--active">
        <h2 className="name" id="name--0">
          Player {player[id]}
        </h2>
        <p className="score" id="score--0">
          43
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
