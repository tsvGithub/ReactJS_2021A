import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //state:
  const [isPlaying, setIsPlaying] = useState(false);
  const [dice, setDice] = useState(null);
  const [winner, setWinner] = useState(null);
  const [activePlayer, setActivePlayer] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [totalScore, setTotalScore] = useState([]);
  //----------------
  //2 Next Player -
  const switchPlayer = () => {
    setIsPlaying(true);

    // setCurrentScore(0);

    setActivePlayer((prevState) => (prevState === 0 ? 1 : 0));
    console.log(activePlayer);
  };

  //1 Roll Dice
  const rollDice = () => {
    setIsPlaying(true);
    // console.log(isPlaying);
    setDice(Math.trunc(Math.random() * 6) + 1);
    console.log(`Dice ${dice}`);
    if (dice !== 1) {
      setCurrentScore((prevScore) => prevScore + dice);
      console.log(`CurrentScore ${currentScore}`);
    } else {
      setCurrentScore(0);
      switchPlayer();
    }
  };
  rollDice();

  //===============
  return <AppContext.Provider value={{ rollDice, switchPlayer }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
