import React from "react";
//Context
import { useGlobalContext } from "./context";
import dice1 from "./img/dice-1.png";
import dice2 from "./img/dice-2.png";
import dice3 from "./img/dice-3.png";
import dice4 from "./img/dice-4.png";
import dice5 from "./img/dice-5.png";
import dice6 from "./img/dice-6.png";

// const dice = [dice1, dice2, dice3, dice4, dice5, dice6];
const Controllers = () => {
  const {} = useGlobalContext();
  return (
    <div>
      <h2>Controllers Component</h2>
      <section>
        {/* <img src="dice-5.png" alt="Playing dice" className="dice" /> */}
        <img src={dice5} alt="Playing dice" className="dice" />
        <button className="btn btn--new">🔄 New game</button>
        <button className="btn btn--roll">🎲 Roll dice</button>
        <button className="btn btn--hold">📥 Hold</button>
      </section>
    </div>
  );
};

export default Controllers;
