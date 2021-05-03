import React from "react";
//Context
import { useGlobalContext } from "./context";

const Dashboard = (props) => {
  const { player } = useGlobalContext();
  // console.log(player[0]);
  const { id } = props;
  console.log(player[id]);
  return (
    <div>
      <h2>Dashboard Component</h2>
      <section className="player player--0 player--active">
        <h2 className="name" id="name--0">
          Player {id}
        </h2>
        <p className="score" id="score--0">
          43 {player[id]}
        </p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--0">
            0
          </p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
