import React from "react";
//Context
import { useGlobalContext } from "./context";

const Input = (props) => {
  const { players, handleChange, handleSubmit, nicknames, names } = useGlobalContext();
  // console.log(`In 'Dashboard' players from state are ${players}`); //1,2
  //------------------
  const { player } = props; //1,2
  // console.log(`In Dasshboard "Props" 'player' is ${player}`); // 1 + (next)2
  // console.log(totalScore[player - 1]);
  // console.log(players[activePlayer]); //2
  // console.log(activePlayer); //1
  // console.log(firstName[player]);
  console.log(nicknames);
  console.log(nicknames.length);
  return (
    // <section className="form">test</section>
    <section className={nicknames.length === 2 ? "hidden" : ""}>
      <form
        className="form"
        // className={nicknames.length === 2 ? "hidden" : "form"}
        onSubmit={handleSubmit}
      >
        <div className="form-control">
          <label htmlFor="names">Name:</label>
          <input
            className="input"
            type="text"
            name="names"
            // name={names[`${player}`]}
            value={names}
            // value={firstName[activePlayer]}
            // value={firstName[player]}
            placeholder="Enter Your Name"
            // onChange={(e) => setNames(e.target.value)}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          //onSubmit===onClick
          //   onClick={handleSubmit}
          className="btn-submit"
        >
          Submit
        </button>
      </form>
      {/* <h2>{names[player]}</h2>
      <h2>{names[`${player}`]}</h2> */}
      {/* <h2>{names}</h2>
      <h2>{nicknames[0]}</h2>
      <h2>{nicknames[1]}</h2>
      <h2>{nicknames[2]}</h2> */}
    </section>
  );
};

export default Input;
