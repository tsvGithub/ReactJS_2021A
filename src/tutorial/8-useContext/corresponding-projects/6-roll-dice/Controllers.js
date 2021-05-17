import React from "react";
//Context
import { useGlobalContext } from "./context";

// import dice_5 from "./img/dice-5.png";

const Controllers = () => {
  const { rollDice, dice, newGame, holdDice } = useGlobalContext();
  // console.log(dice); //ok
  return (
    <div>
      <h2>Controllers Component</h2>
      <section>
        {/* <img src={dice_5} alt="" /> */}
        <img
          src={dice === null ? require(`./img/dice-5.png`).default : require(`./img/dice-${dice}.png`).default}
          alt="dice"
          className="dice"
        />

        <button
          className="btn btn--new"
          //start the new game:
          onClick={newGame}
        >
          🔄 New game
        </button>
        <button
          className="btn btn--roll"
          //roll the dice:
          onClick={rollDice}
        >
          🎲 Roll dice
        </button>
        <button
          className="btn btn--hold"
          //hold the dice
          onClick={holdDice}
        >
          📥 Hold
        </button>
      </section>
    </div>
  );
};

export default Controllers;
