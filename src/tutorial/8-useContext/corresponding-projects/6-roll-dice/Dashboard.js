import React from "react";
//Context
import { useGlobalContext } from "./context";

const Dashboard = (props) => {
  const {
    players,
    handleChange,
    handleSubmit,
    names,
    setNames,
    // firstName,
    // setFirstName,
    currentScore,
    totalScoreOb,
    activePlayer,
    winner,
  } = useGlobalContext();
  // console.log(`In 'Dashboard' players from state are ${players}`); //1,2
  //------------------
  const { player } = props; //1,2
  // console.log(`In Dasshboard "Props" 'player' is ${player}`); // 1 + (next)2
  // console.log(totalScore[player - 1]);
  // console.log(players[activePlayer]); //2
  // console.log(activePlayer); //1
  // console.log(firstName[player]);
  console.log(names);
  return (
    <section
      className={
        winner === player ? "player player--winner" : activePlayer === player ? "player player--active" : "player"
      }
      // className={
      //   (activePlayer === player ? "player player--active" : "player",
      //   winner === player ? "player player--winner" : "player")
      // }
    >
      {/* <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name:</label>
          <input
            className="input"
            type="text"
            name="names"
            value={names}
            // value={firstName[activePlayer]}
            // value={firstName[player]}
            placeholder="Your Name"
            onChange={(e) => setNames(e.target.value)}
            // onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          //onSubmit===onClick
          // onClick={handleSubmit}
        >
          Add your name
        </button>
      </form>
 */}
      <h2 className="name">{winner === player ? `Congrats, you won!` : `Player ${player}`}</h2>
      <p className="score">{totalScoreOb[player]}</p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score">{currentScore[player]}</p>
      </div>
    </section>
  );
};

export default Dashboard;
