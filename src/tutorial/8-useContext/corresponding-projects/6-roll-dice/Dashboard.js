import React from "react";
//Context
import { useGlobalContext } from "./context";

const Dashboard = (props) => {
  const { players, currentScore, totalScoreOb, activePlayer } = useGlobalContext();
  // console.log(`In 'Dashboard' players from state are ${players}`); //1,2
  //------------------
  const { player } = props; //1,2
  // console.log(`In Dasshboard "Props" 'player' is ${player}`); // 1 + (next)2
  // console.log(totalScore[player - 1]);
  // console.log(players[activePlayer]); //2
  // console.log(activePlayer); //1
  return (
    // <section className="player player--active">
    <section className={activePlayer === player ? "player player--active" : "player "}>
      <h2 className="name">
        Player {player}
        {/* {console.log(player - 1)} */}
        {/* 0 */}
      </h2>
      <p className="score">
        {totalScoreOb[player]}
        {/* {activePlayer === 0 ? pirmais : otrais} */}
        {/* {totalScore ? 1 : 0}
          {first ? 1 : 0} */}
        {/* {first.totalScore[0]} */}
        {/* {first.totalScore[1]} */}
        {/* {totalScore[player - 1]} */}
        {console.log(totalScoreOb)}
        {/* {1:0, 2:0} */}
        {/* {console.log(totalScore[0])} */}
        {/* undefined */}
        {/* {console.log(totalScoreOb[player - 1])} */}
        {console.log(totalScoreOb[player])}
        {/* 0 */}

        {console.log(totalScoreOb[players[0]])}
        {/* 0 */}
      </p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score" id="current--0">
          {currentScore[player]}
          {console.log(currentScore)}
          {console.log(currentScore[player])}
          {console.log(currentScore[players[0]])}
        </p>
      </div>
    </section>
  );
};

export default Dashboard;
