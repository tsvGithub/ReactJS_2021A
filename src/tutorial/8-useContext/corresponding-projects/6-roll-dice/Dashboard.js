import React from "react";
//Context
import { useGlobalContext } from "./context";

const Dashboard = (props) => {
  const { players, currentScore, totalScoreOb, pirmais, otrais, activePlayer } = useGlobalContext();
  // console.log(`In 'Dashboard' players from state are ${players}`); //1,2
  // let [a, b] = totalScore;
  // console.log({ a, b });
  // console.log({ pirmais }, { otrais }); //0 0
  // console.log(totalScore); //[0,0] (+)
  // let first = totalScore;
  // console.log(first.totalScore[0]); //12 string
  // console.log(first.totalScore); //[12,0]
  // // let second = totalScore;
  // // console.log(second.totalScore[1]);
  // // console.log(totalScore[0]); //undefined
  // console.log(totalScore.length); //undefined
  // console.log(first.totalScore.length); //2

  // console.log(players); //[1,2]
  //------------------
  const { player } = props; //1,2
  // console.log(`In Dasshboard "Props" 'player' is ${player}`); // 1 + (next)2

  // console.log(totalScore[player - 1]);
  return (
    <div>
      <h2>Dashboard Component</h2>
      <section className="player player--0 player--active">
        <h2 className="name" id="name--0">
          Player {player}
          {/* {console.log(player - 1)} */}
          {/* 0 */}
        </h2>
        <p className="score" id="score--0">
          {totalScoreOb[player]}
          {/* {activePlayer === 0 ? pirmais : otrais} */}
          {/* {totalScore ? 1 : 0}
          {first ? 1 : 0} */}
          {/* {first.totalScore[0]} */}
          {/* {first.totalScore[1]} */}
          {/* {totalScore[player - 1]} */}
          {console.log(totalScoreOb)}
          {/* [13, 0] */}
          {/* {console.log(totalScore[0])} */}
          {/* undefined */}
          {/* {console.log(totalScoreOb[player - 1])} */}
          {console.log(totalScoreOb[player])}
          {/* undefined */}

          {console.log(totalScoreOb[players[0]])}
          {/* undefined */}
        </p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--0">
            {/* {currentScore[player]} */}
            {currentScore}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
