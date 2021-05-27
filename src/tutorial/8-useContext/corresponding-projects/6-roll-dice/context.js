import { set } from "mongoose";
import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }, props) => {
  //state:
  const [dice, setDice] = useState(null);
  //--------------
  // const [player, setPlayer] = useState(1);
  const [players, setPlayers] = useState([1, 2]);
  // let [names, setNames] = useState(["", ""]);
  // const [names, setNames] = useState({ 1: "", 2: "" });
  const [names, setNames] = useState("");
  const [nicknames, setNicknames] = useState({ nickname: "" });
  // const [nickname, setNickname] = useState({ 1: "", 2: "" });
  //------------------
  let [activePlayer, setActivePlayer] = useState(0);
  // let [activePlayer, setActivePlayer] = useState(0);
  // let [activePlayer, setActivePlayer] = useState(null);
  const [winner, setWinner] = useState("");
  //---------------
  let [currentScore, setCurrentScore] = useState({
    1: 0,
    2: 0,
  });
  let [totalScoreOb, setTotalScoreOb] = useState({
    1: 0,
    2: 0,
  });
  const [isPlaying, setIsPlaying] = useState(true);
  //----------------
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setNames({ [name]: value });
  //   // let playerName = { [name]: value };

  //   // setFirstName(playerName);
  //   // setFirstName({ [name]: value });
  //   // setFirstName(players === 0 ? { 1: e.target.value, 2: "" } : { 1: "", 2: e.target.value });
  //   // console.log(firstName);
  //   // setFirstName(players === 1 ? { 1: playerName, 2: "" } : { 1: "", 2: playerName });
  //   // console.log(firstName);
  // };
  const handleChange = (e) => {
    // const { value } = e.target.value;
    // const { [names]: value } = e.target;
    // setNames(value);
    // setNames(e.target.value);
    // setNames({ names: value });
    const name = e.target.name;
    const value = e.target.value;
    setNicknames({ ...nicknames, [name]: value });
  };
  //-----------------
  const handleSubmit = (e) => {
    e.preventDefault();
    const { nickname } = nicknames;
    if (nickname) {
      console.log(nickname);
      console.log(nicknames);
      setNames("");
    }

    // //---------------
    // if (names) {
    //   console.log(names);
    //   // console.log(nickname[1]);
    //   // console.log(nickname[2]);

    //   // setNickname(nickname["1"] ? nickname["2"](names) : nickname["1"](names));
    //   // setNickname(nickname["1"] ? nickname({ 2: names }) : nickname({ 1: names }));

    //   // const firstNN = nickname[2] ? setNickname({ 1: names }) : nickname[2];
    //   // console.log(firstNN); //{1: "Zhur"}

    //   // if (!nickname[1]) {
    //   //   setNickname((nickname[1] = names));
    //   //   setNames("");
    //   // } else {
    //   //   setNickname((nickname[2] = names));
    //   //   setNames("");
    //   // }

    //   setNickname({ ...nickname, names });
    //   // console.log(nickname[1]);
    //   // console.log(nickname[2]);

    //   setNames("");
    // }
    // console.log(nickname);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // setFirstName(players === 0 ? { 1: e.target.value, 2: "" } : { 1: "", 2: e.target.value });
  //   let name = e.target.value;
  //   console.log(name);
  //   setNames(names["1"] === "" ? { 1: name, 2: names["2"] } : { 1: names["1"], 2: name });
  //   // if (names["1"] === "") {
  //   //   console.log(names[1]);
  //   //   setNames([...names, { 1: name }]);
  //   // } else {
  //   //   setNames([...names, (names[1] = name)]);
  //   //   console.log(names[1]);
  //   // }

  //   console.log(names[1]);
  //   console.log(names[2]);
  // };
  // //----------------
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
    setActivePlayer(0); //0
    console.log(`NewGame In Context ActivePlayer is ${activePlayer}`); //
    //--------
    setCurrentScore({ 1: 0, 2: 0 }); //0
    console.log(`NewGame In Context current score is ${currentScore}`); //
    setTotalScoreOb({ 1: 0, 2: 0 }); //0
    console.log(`NewGame In Context total score is ${totalScoreOb}`); //-
    //---------
    setWinner("");
    console.log(`winner is ${winner}`);
  };

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
      setWinner(activePlayer);
      setCurrentScore({ 1: 0, 2: 0 });
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
  };
  useEffect(() => {
    checkWinner();
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
        winner,
        //-------
        //functions + onClicks
        newGame,
        rollDice,
        // switchPlayer,
        holdDice,
        handleChange,
        // firstName,
        // setFirstName,
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
