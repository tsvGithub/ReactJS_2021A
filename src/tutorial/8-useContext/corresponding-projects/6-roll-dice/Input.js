import React from "react";
//Context
import { useGlobalContext } from "./context";

const Input = (props) => {
  const { players, handleChange, handleSubmit, nicknames } = useGlobalContext();
  // console.log(`In 'Dashboard' players from state are ${players}`); //1,2
  //------------------
  const { player } = props; //1,2
  // console.log(`In Dasshboard "Props" 'player' is ${player}`); // 1 + (next)2
  // console.log(totalScore[player - 1]);
  // console.log(players[activePlayer]); //2
  // console.log(activePlayer); //1
  // console.log(firstName[player]);

  return (
    <section>
      <form
        className="form"
        //   onSubmit={handleSubmit}
      >
        <div className="form-control">
          <label htmlFor="nickname">Name:</label>
          <input
            className="input"
            type="text"
            name="nickname"
            // name={names[`${player}`]}
            value={nicknames.nickname}
            // value={firstName[activePlayer]}
            // value={firstName[player]}
            placeholder="Your Name"
            // onChange={(e) => setNames(e.target.value)}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          //onSubmit===onClick
          onClick={handleSubmit}
        >
          Submit your name
        </button>
      </form>
      {/* <h2>{names[player]}</h2>
      <h2>{names[`${player}`]}</h2> */}
      <h2>{nicknames.nickname}</h2>
    </section>
  );
};

export default Input;
