import React from "react";
//Context
import { useGlobalContext } from "./context";
import dice_1 from "./img/dice-1.png";
import dice_2 from "./img/dice-2.png";
import dice_3 from "./img/dice-3.png";
import dice_4 from "./img/dice-4.png";
import dice_5 from "./img/dice-5.png";
import dice_6 from "./img/dice-6.png";

// const dices = [dice1, dice2, dice3, dice4, dice5, dice6];
const Controllers = () => {
  const { rollDice, dice } = useGlobalContext();
  // console.log(dices[dice - 1]); //[data: image/png;base64...]
  // console.log(dices); //[6 'data:image/png;...]
  console.log(dice); //ok
  // let image = dices[0];
  // console.log(image);
  let dices = dice === null ? dice - 5 : dice;
  return (
    <div>
      <h2>Controllers Component</h2>
      <section>
        {/* <div style={{ backgroundImage: `url('/dices/dice-5.png')` }}></div>
        <div style={{ backgroundImage: `url('${dice6}')` }}></div> */}
        {/* <img src={dice_5} alt="Playing dice" className="dice" /> */}
        {/* <img src={require("./img/dice-1.png").default} alt="" /> */}
        {/* <img src={require(`./img/dice-${dices}.png`).default} alt="" /> */}
        <img src={dice === null ? { dice_5 } : require(`./img/dice-${dices}.png`).default} alt="" className="dice" />
        {/* <img src={require("../../../../../public/dices/dice-1.png")} alt="" /> */}

        {/*ne rabotaet */}
        {/* <img src={`dice_${dices[dice - 1]}`} alt="Playing dice" className="dice" /> */}
        {/* <img src={dice_5} alt="Playing dice" className="dice" /> */}
        {/* <img src={`dice_${dice}`} alt="Playing dice" className="dice" /> */}

        <button
          className="btn btn--new"
          // //
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
