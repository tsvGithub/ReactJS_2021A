import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //state:
  const [player, setPlayer] = useState([1, 2]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [dice, setDice] = useState(null);
  const [winner, setWinner] = useState(null);
  let [activePlayer, setActivePlayer] = useState(1);
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
  const rollDice = () => {
    // setIsPlaying(true);
    //----------------------------------------------------------------
    // console.log(player[activePlayer]);
    //===============
    //if activePlayer(0)=> 1, if activePlayer(1)=>2
    //------------------------
    // setDice(Math.trunc(Math.random() * 6) + 1);
    // let dice = Math.ceil(Math.random() * 6);
    let dice = Math.trunc(Math.random() * 6) + 1;
    // let dice = Math.ceil(Math.random() * 5) + 1;
    // setDice(Math.ceil(Math.random() * 6) + 1);
    console.log(`random Dice ${dice}`);
    setDice(dice);
    console.log(dice);

    //--------------------
    // if (dice === 0) {
    //   setDice(dice + 1);
    //   console.log(`bylo dice=0 => stalo  ${dice}`);
    // }
    if (dice !== 1) {
      // setCurrentScore((prevScore) => prevScore + dice);
      setCurrentScore((currentScore += dice));
      console.log(`Current Score ${currentScore}`);
    } else {
      setCurrentScore(0);
      console.log(`current score: ${currentScore}`);
      // switchPlayer();
    }
    // return <h2> Roll dice function</h2>;
  };
  // rollDice();
  // useEffect(() => {
  //   rollDice();
  // }, [dice]);

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
        rollDice,
        currentScore,
        dice,
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
