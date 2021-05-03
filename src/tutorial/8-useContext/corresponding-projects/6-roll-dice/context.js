import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //state:
  const [player, setPlayer] = useState([1, 2]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [dice, setDice] = useState(0);
  const [winner, setWinner] = useState(null);
  let [activePlayer, setActivePlayer] = useState(0);
  let [currentScore, setCurrentScore] = useState(0);
  let [totalScore, setTotalScore] = useState([0, 0]);
  //----------------

  //2 Next Player -
  // const switchPlayer = () => {
  //   setIsPlaying(true);

  //   setCurrentScore(0);

  //   // setActivePlayer((prevState) => (prevState === 0 ? 1 : 0));
  //   setActivePlayer(activePlayer === 0 ? 1 : 0);
  //   console.log(`Active Player is: ${activePlayer}`);
  // };

  //1 Roll Dice
  // const rollDice = () => {
  //   // setIsPlaying(true);
  //   //------------------------
  //   // setDice(Math.trunc(Math.random() * 6) + 1);
  //   // setDice(Math.floor(Math.random() * 6) + 1);
  //   // console.log(`random Dice ${dice}`);
  //   // //--------------------
  //   // if (dice !== 1) {
  //   //   // setCurrentScore((prevScore) => prevScore + dice);
  //   //   setCurrentScore((currentScore += dice));
  //   //   console.log(`Current Score ${currentScore}`);
  //   // } else {
  //   //   setCurrentScore(0);
  //   //   console.log(`current score: ${currentScore}`);
  //   //   switchPlayer();
  //   // }
  //   return <h2> Roll dice function</h2>;
  // };
  // rollDice();

  //-----------------
  //3) Hold
  // const hold = () => {
  //   setIsPlaying(true);

  //   // setTotalScore((totalScore[activePlayer] += currentScore));
  //   setTotalScore[activePlayer]((totalScore += currentScore));
  //   console.log(totalScore);
  //   setIsPlaying(false);
  // };
  // hold();
  //===============
  return (
    <AppContext.Provider
      value={{
        player,
        // rollDice,
        // switchPlayer
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
