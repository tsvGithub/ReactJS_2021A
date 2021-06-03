import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

//II. (I.Main.js + III.Game.js)
//all logic is here
const AppProvider = ({ children }) => {
  //state:
  //initial state for 'dice' is 'null' not '0'!
  const [dice, setDice] = useState(null);
  //--------------
  //array with two players=> player 1 & player 2
  const [players, setPlayers] = useState([1, 2]);
  //'names' (vscode doesn't like 'name') for current input value
  const [names, setNames] = useState("");
  //'nicknames' store 'names' of 'players 1 & 2' in array
  const [nicknames, setNicknames] = useState([]);
  //------------------
  //current 'player' who plays the dice
  let [activePlayer, setActivePlayer] = useState(0);
  //'current score' object (before adding to the 'total score')
  let [currentScore, setCurrentScore] = useState({
    1: 0,
    2: 0,
  });
  //'total score' object (after adding 'current score')
  let [totalScoreOb, setTotalScoreOb] = useState({
    1: 0,
    2: 0,
  });
  //-----------------------
  //'is playing' is to prevent ('false') playing after
  //the player won the Game
  const [isPlaying, setIsPlaying] = useState(true);
  //who is winner?
  const [winner, setWinner] = useState("");
  //===========================================

  //Form
  const handleChange = (e) => {
    const value = e.target.value;
    setNames(value);
  };
  //-----------------
  const handleSubmit = (e) => {
    e.preventDefault();
    setNicknames([...nicknames, names]);
    setNames("");
  };
  //=================================

  //(1) new Game:
  const newGame = () => {
    setIsPlaying(true);
    setPlayers(players);
    setNames("");
    setNicknames([]);
    setDice(null);
    setActivePlayer(0);
    setCurrentScore({ 1: 0, 2: 0 });
    setTotalScoreOb({ 1: 0, 2: 0 });
    setWinner("");
  };
  //-------------------
  //(2) Roll Dice
  const rollDice = () => {
    if (isPlaying) {
      //random roll:
      let dice = Math.trunc(Math.random() * 6) + 1;
      setDice(dice);
      //--------------------
      //If 'dice' is '1' => set 'current score' to '0'
      //and change 'player'. Otherwise, add 'dice' to
      //'current score':
      if (dice !== 1) {
        let itogo = (currentScore[activePlayer] += dice);
        setCurrentScore(activePlayer === 1 ? { 1: itogo, 2: 0 } : { 1: 0, 2: itogo });
        // setCurrentScore(activePlayer === 1 ? { ...currentScore, 1: itogo } : { ...currentScore, 2: itogo });
      } else {
        setCurrentScore({ 1: 0, 2: 0 });
        switchPlayer();
      }
    }
  };
  //-----------------
  //(3) Next Player -
  const switchPlayer = () => {
    setCurrentScore({ 1: 0, 2: 0 });
    //check current player & set the other player
    setActivePlayer(activePlayer === 1 ? 2 : 1);
    console.log(`SwitchPlayer In context: Active Player swiched to ${activePlayer}`);
  };
  //----------------
  //(4) Hold
  const holdDice = () => {
    //add 'current score' to the 'total score'
    let itogo = totalScoreOb[activePlayer] + currentScore[activePlayer];
    setTotalScoreOb(activePlayer === 1 ? { ...totalScoreOb, 1: itogo } : { ...totalScoreOb, 2: itogo });
  };
  //4a Check 'winner' when 'total score' has been changed
  useEffect(() => {
    checkWinner();
  }, [totalScoreOb]);
  //----------------
  //(5) Check winner
  const checkWinner = () => {
    if (totalScoreOb[activePlayer] >= 21) {
      setWinner(activePlayer);
      setCurrentScore({ 1: 0, 2: 0 });
      //end the Game
      setIsPlaying(false);
    } else {
      switchPlayer();
    }
  };
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
        winner,
        //-------
        //functions + onClicks
        newGame,
        rollDice,
        holdDice,
        handleChange,
        handleSubmit,
        nicknames,
        names,
        setNames,
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
