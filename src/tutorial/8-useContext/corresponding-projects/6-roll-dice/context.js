import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }, props) => {
  //state:
  const [dice, setDice] = useState(null);
  //--------------
  // const [player, setPlayer] = useState(1);
  const [players, setPlayers] = useState([1, 2]);
  //------------------
  let [activePlayer, setActivePlayer] = useState(1);
  // let [activePlayer, setActivePlayer] = useState(0);
  // let [activePlayer, setActivePlayer] = useState(null);
  // const [winner, setWinner] = useState(false);
  //---------------
  let [currentScore, setCurrentScore] = useState({
    1: 0,
    2: 0,
  });
  // let [currentScore, setCurrentScore] = useState(0);
  // let [totalScore, setTotalScore] = useState(0);
  let [totalScoreOb, setTotalScoreOb] = useState({
    1: 0,
    2: 0,
  });
  // let [totalScore, setTotalScore] = useState([0, 0]);
  // let [pirmais, otrais] = totalScore;
  // console.log({ pirmais }, { otrais });
  //{pirmais: 0} {otrais: 0}
  // const [isPlaying, setIsPlaying] = useState(totalScoreOb[activePlayer] <= 10 ? true : false);
  const [isPlaying, setIsPlaying] = useState(true);
  //----------------
  //(1) new Game:
  const newGame = () => {
    setIsPlaying(true); // true
    console.log(`NewGame In Context "playing" is ${isPlaying}`); // true
    //-------------
    setPlayers(players); //1,2
    console.log(`NewGame In Context "Players" are ${players}`); //1,2
    //----------------
    setDice(null); //null
    console.log(`NewGame In Context "dice" is ${dice}`); //null
    //---------------
    setActivePlayer(1); //0
    console.log(`NewGame In Context ActivePlayer is ${activePlayer}`); //
    //--------
    setCurrentScore({ 1: 0, 2: 0 }); //0
    console.log(`NewGame In Context current score is ${currentScore}`); //
    setTotalScoreOb({ 1: 0, 2: 0 }); //0
    console.log(`NewGame In Context total score is ${totalScoreOb}`); //-
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
  const switchPlayer = () => {
    // setCurrentScore([]);
    setCurrentScore({ 1: 0, 2: 0 });

    // setActivePlayer((prevState) => (prevState === 0 ? 1 : 0));
    setActivePlayer(activePlayer === 1 ? 2 : 1);
    // setActivePlayer(activePlayer === 0 ? 1 : 0);
    console.log(`SwitchPlayer In context: Active Player swiched to ${activePlayer}`);
  };
  //=============================
  const checkWinner = () => {
    if (totalScoreOb[activePlayer] >= 21) {
      console.log(`totalScore of activePlayer is ${totalScoreOb[activePlayer]}`);
      console.log(`Congrats! The winner is ${activePlayer}`);
      setIsPlaying(false);
    } else {
      switchPlayer();
    }
  };
  //(2) Roll Dice
  const rollDice = () => {
    if (isPlaying) {
      //----------------------------------------------------------------
      // console.log(`Active Player now is ${players}`);
      console.log(`RollDice in context: Active Player now is ${activePlayer}`);
      //===============
      //if activePlayer(0)=> 1, if activePlayer(1)=>2
      //------------------------
      // setDice(Math.trunc(Math.random() * 6) + 1);
      // let dice = Math.ceil(Math.random() * 6);
      let dice = Math.trunc(Math.random() * 6) + 1;
      console.log(`RollDice in context: random Dice ${dice}`);
      setDice(dice);

      //--------------------
      if (dice !== 1) {
        // setCartItems((prevItems) => [...prevItems, newItem]);

        // setCurrentScore((score) => (console.log(score), [...score, (currentScore[activePlayer] += dice)]));
        // setCurrentScore((currentScore[activePlayer] += dice));
        //-----------------
        // setCurrentScore((currentScore += dice));
        // console.log(`RollDice in context: Current Score (not '1'): ${currentScore}`);

        let itogo = (currentScore[activePlayer] += dice);
        // let itogo = (currentScore += dice);
        console.log(`HoldDice 'Itogo': ${itogo}`);
        setCurrentScore(activePlayer === 1 ? { 1: itogo, 2: 0 } : { 1: 0, 2: itogo });
        // setCurrentScore(activePlayer === 1 ? { ...currentScore, 1: itogo } : { ...currentScore, 2: itogo });
      } else {
        console.log(`Rolled 1`);
        setCurrentScore({ 1: 0, 2: 0 });
        console.log(`RollDice in context: Current Score (is '1'): ${currentScore}`);
        switchPlayer();
      }
      // return <h2> Roll dice function</h2>;
    }
  };

  //-----------------
  //3) Hold
  const holdDice = () => {
    // console.log(`HoldDice ActivePlayer is ${activePlayer}`);
    // console.log(`HoldDice TotalScore is ${{ totalScoreOb }}`);
    // console.log(`HoldDice CurrentScore is ${currentScore}`);
    // console.log(`HoldDice TotalScore of ActivePlayer is ${totalScoreOb[activePlayer]}`);

    let itogo = totalScoreOb[activePlayer] + currentScore[activePlayer];
    console.log(`HoldDice 'Itogo': ${itogo}`);
    setTotalScoreOb(activePlayer === 1 ? { ...totalScoreOb, 1: itogo } : { ...totalScoreOb, 2: itogo });
    console.log(`HoldDice 'totalScore' is ${totalScoreOb}`);

    // checkWinner();
    // if (totalScoreOb[activePlayer] >= 21) {
    //   console.log(`Congrats! The winner is ${activePlayer}`);
    //   setIsPlaying(false);
    // } else {
    //   switchPlayer();
    // }
  };
  useEffect(() => {
    checkWinner();
    // if (totalScoreOb[activePlayer] >= 21) {
    //   console.log(`totalScore of activePlayer is ${totalScoreOb[activePlayer]}`);
    //   console.log(`Congrats! The winner is ${activePlayer}`);
    //   setIsPlaying(false);
    // } else {
    //   switchPlayer();
    // }
  }, [totalScoreOb]);

  //===============
  return (
    <AppContext.Provider
      value={{
        //state
        dice,
        players,
        activePlayer,
        currentScore,
        totalScoreOb,
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
