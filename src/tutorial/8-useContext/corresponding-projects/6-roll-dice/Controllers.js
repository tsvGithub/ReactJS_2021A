import React from "react";
//Context
import { useGlobalContext } from "./context";

const Controllers = () => {
  const { rollDice, dice } = useGlobalContext();
  console.log(dice); //ok
  return (
    <div>
      <h2>Controllers Component</h2>
      <section>
        <img
          src={dice === null ? require(`./img/dice-5.png`).default : require(`./img/dice-${dice}.png`).default}
          alt=""
          className="dice"
        />

        <button
          className="btn btn--new"
          //
          // onClick={newGame}
        >
          🔄 New game
        </button>
        <button
          className="btn btn--roll"
          //
          onClick={rollDice}
        >
          🎲 Roll dice
        </button>
        <button className="btn btn--hold">📥 Hold</button>
      </section>
    </div>
  );
};

export default Controllers;
