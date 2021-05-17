import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //state:
  const [dice, setDice] = useState(null);
  //--------------
  const [player, setPlayer] = useState(1);
  // const [player, setPlayer] = useState([1, 2]);
  //------------------
  let [activePlayer, setActivePlayer] = useState(0);
  // let [activePlayer, setActivePlayer] = useState(null);
  // const [winner, setWinner] = useState(false);
  //---------------
  let [currentScore, setCurrentScore] = useState(0);
  let [totalScore, setTotalScore] = useState(0);
  // let [totalScore, setTotalScore] = useState([]);
  const [isPlaying, setIsPlaying] = useState(totalScore <= 101 ? true : false);

  //----------------
  //(1) new Game:
  const newGame = () => {
    setIsPlaying(true);
    console.log(`In Context playing is ${isPlaying}`); // true
    //-------------
    setPlayer(player);
    console.log(`In Context Player is ${player}`);
    // setPlayer(player[0]);
    // console.log(`Player is ${setPlayer(player[0])}`); //
    // console.log(`Player is ${player[0]}`); //
    // console.log(`Player is ${player}`); //

    // setPlayer(0);
    // console.log(`Player is ${player}`); //1,2
    // console.log(`Player is ${player(0)}`); //1,2
    //----------------
    setDice(null);
    console.log(`In Context dice is ${dice}`); //null
    //---------------
    // setActivePlayer(player[0]);
    // console.log(`ActivePlayer is ${activePlayer}`); //
    setActivePlayer(0);
    console.log(`In Context ActivePlayer is ${activePlayer}`); //
    //--------
    setCurrentScore(0);
    console.log(`In Context current score is ${currentScore}`); //
    setTotalScore(0);
    console.log(`In Context total score is ${totalScore}`); //-
    //---------
    // setWinner(false);
    // console.log(`winner is ${winner}`);
  };
  // //==============================
  // useEffect(() => {
  //   console.log("New game started");
  //   setPlayer(player[0]);
  //   console.log(`Player is ${setPlayer(player[0])}`); //
  //   // console.log(`Player is ${player[0]}`); //
  //   // console.log(`Player is ${player}`); //

  //   // setPlayer(0);
  //   // console.log(`Player is ${player}`); //1,2
  //   // console.log(`Player is ${player(0)}`); //1,2
  //   //----------------
  //   setDice(null);
  //   console.log(`dice is ${dice}`); //null
  //   //---------------
  //   setActivePlayer(player[0]);
  //   console.log(`ActivePlayer is ${activePlayer}`); //
  //   setActivePlayer(0);
  //   console.log(`ActivePlayer is ${activePlayer}`); //0
  //   //--------
  //   setCurrentScore(0);
  //   console.log(`current score is ${currentScore}`); //
  //   setTotalScore([0, 0]);
  //   console.log(`total score is ${totalScore}`); //0,0
  // }, [newGame]);

  // useEffect(() => {
  //   setColor(randomcolor());
  // }, [count]);
  //===============================

  //2 Next Player -
  // const switchPlayer = () => {
  //   setIsPlaying(true);

  //   setCurrentScore(0);

  //   // setActivePlayer((prevState) => (prevState === 0 ? 1 : 0));
  //   setActivePlayer(activePlayer === 0 ? 1 : 0);
  //   console.log(`Active Player is: ${activePlayer}`);
  // };

  //(2) Roll Dice
  const rollDice = () => {
    // setIsPlaying(true);
    if (isPlaying) {
      //----------------------------------------------------------------
      console.log(`Active Player now is ${player}`);
      // console.log(`Active Player now is ${player[activePlayer]}`);
      //===============
      //if activePlayer(0)=> 1, if activePlayer(1)=>2
      //------------------------
      // setDice(Math.trunc(Math.random() * 6) + 1);
      // let dice = Math.ceil(Math.random() * 6);
      let dice = Math.trunc(Math.random() * 6) + 1;
      console.log(`random Dice ${dice}`);
      setDice(dice);

      //--------------------
      if (dice !== 1) {
        setCurrentScore((currentScore += dice));
        console.log(`Current Score (not '1'): ${currentScore}`);
      } else {
        setCurrentScore(0);
        console.log(`Current Score (is '1'): ${currentScore}`);
        // switchPlayer();
      }
      // return <h2> Roll dice function</h2>;
    }
  };

  //-----------------
  //3) Hold
  const holdDice = () => {
    // setIsPlaying(true);

    // setTotalScore((totalScore[activePlayer] += currentScore));
    // setTotalScore[activePlayer]((totalScore += currentScore));
    setTotalScore((totalScore += currentScore));
    console.log(`In context 'totalScore' is ${totalScore}`);
    // setIsPlaying(false);
  };
  // hold();
  //===============
  return (
    <AppContext.Provider
      value={{
        //state
        dice,
        player,
        activePlayer,
        currentScore,
        totalScore,
        isPlaying,
        // winner,
        //-------
        //functions + onClicks
        newGame,
        rollDice,
        // switchPlayer,
        holdDice,
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
