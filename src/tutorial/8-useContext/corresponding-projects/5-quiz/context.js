import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const url = "";

const tempUrl = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";
//-----------------
// API example:
//"results": [
//     {
//       "category": "Sports",
//       "type": "multiple",
//       "difficulty": "easy",
//       "question": "In baseball, how many fouls are an out?",
//       "correct_answer": "0",
//       "incorrect_answers": [
//         "5",
//         "3",
//         "2"
//       ]
//     },
//----------------

//----------------------
//1 Global context
//1.1.create a Context object by using React.CreateContext
const AppContext = React.createContext();
//get back Provider & Consumer
//Consumer isn't used, only Provider!!!
// This AppContext object is what should be passed
//as an argument into the useContext Hook.
//1.2. see below =>
// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };
//---------------------------

// I
//create Provider: pass in childern
const AppProvider = ({ children }) => {
  //state
  //1)
  //waiting OR loading:
  //'waiting' is for 'setupForm': if true => display setupForm component
  //in that form will construct url
  const [waiting, setWaiting] = useState(true);
  //'loading' is for moment when fetching data
  const [loading, setLoading] = useState(false);
  //----------------
  //empty array for recieved data
  const [questions, setQuestions] = useState([]);
  //questions order in array
  //to display questions in order of creation;
  //Array is zero based, so default order for
  //first question is 0
  const [index, setIndex] = useState(0);
  //number of correct answers
  //'Correct Answers: 0/0' => first '0' is
  //that number of 'correct' answers and
  //and ste second '0' is number of total
  //questions that currently answered.
  const [correct, setCorrect] = useState(0);
  //Error message: when API cannot generate questions
  const [error, setError] = useState(false);
  //
  // const [quiz, setQuiz] = useState({
  //   amount: 10,
  //   category: "sports",
  //   difficulty: "easy",
  // });

  //modal window shows percentage of correct questions
  const [isModalOpen, setIsModalOpen] = useState(false);

  //2)fetching data:
  const fetchQuestions = async (url) => {
    setLoading(true);
    setWaiting(false);
    //
    const response = await axios(url).catch((err) => console.log(err));
    console.log(response);
    //     //=====================
    if (response) {
      const data = response.data.results;
      console.log(data);
      //------------
      if (data.length > 0) {
        //set questions [] with recieved data
        setQuestions(data);
        setLoading(false);
        setWaiting(false);
        setError(false);
      } else {
        //if there is no data
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
    }
  };
  //3)
  useEffect(() => {
    fetchQuestions(tempUrl);
  }, []);

  return (
    //Provider
    //Any updates on the Provider will trigger a
    //rerender with the updated context value.
    <AppContext.Provider
      //pass value to children
      value={{ waiting, loading, questions, index, correct, error, isModalOpen }}
    >
      {/*Components */}
      {children}
    </AppContext.Provider>
  );
};
//------------------------

//1.2. custom Hook:
//useGlobalContext provides both a consumer and
//a provider. When using the useContext Hook,
//you have to pass in the whole context object,
//not just the consumer or provider.
export const useGlobalContext = () => {
  //AppContext Object from createContext()
  // is what should be passed as
  //an argument into the useContext Hook.
  return useContext(AppContext);
  //With useContext we consume our context object.
  //Any updates on the Provider will trigger a rerender with the updated context value.
};

// // I
// const AppProvider = ({ children }) => {
//   //1)
//   //waiting OR loading:
//   //'waiting' is for 'setupForm': if true => display setupForm component
//   //in that form will construct url
//   const [waiting, setWaiting] = useState(false);
//   //'loading' is for moment when fetching data
//   const [loading, setLoading] = useState(false);
//   //----------------
//   //for data
//   const [questions, setQuestions] = useState([]);
//   //order to display questions; array is zero based, so default order is 0
//   const [index, setIndex] = useState(0);
//   //nubmer of correct answers
//   const [correct, setCorrect] = useState(0);
//   //when API cannot generate questions
//   const [error, setError] = useState(false);
//   //
//   const [quiz, setQuiz] = useState({
//     amount: 10,
//     category: "sports",
//     difficulty: "easy",
//   });
//   //modal shows percantage of correct questions
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const fetchQuestions = async (url) => {
//     setLoading(true);
//     setWaiting(false);
//     //
//     const response = await axios(url).catch((err) => console.log(err));
//     console.log(response);
//     //=====================
//     if (response) {
//       const data = response.data.results;
//       console.log(data);
//       //------------
//       if (data.length > 0) {
//         //set questions [] with recieved data
//         setQuestions(data);
//         setLoading(false);
//         setWaiting(false);
//         setError(false);
//       } else {
//         //if there is no data
//         setWaiting(true);
//         setError(true);
//       }
//     } else {
//       setWaiting(true);
//     }
//   };

//   useEffect(() => {
//     fetchQuestions(tempUrl);
//   }, []);

//   const nextQuestion = () => {
//     setIndex((oldIndex) => {
//       const index = oldIndex + 1;
//       if (index > questions.length - 1) {
//         openModal();
//         return 0;
//       } else {
//         return index;
//       }
//     });
//   };
//   const checkAnswer = (value) => {
//     if (value) {
//       setCorrect((oldState) => oldState + 1);
//     }
//     nextQuestion();
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };
//   const closeModal = () => {
//     setWaiting(true);
//     setCorrect(0);
//     setIsModalOpen(false);
//   };
//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setQuiz({ ...quiz, [name]: value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { amount, category, difficulty } = quiz;

//     const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;
//     fetchQuestions(url);
//   };

//   return (
//     //2)
//     <AppContext.Provider
//       value={{
//         waiting,
//         loading,
//         questions,
//         index,
//         correct,
//         error,
//         isModalOpen,
//         nextQuestion,
//         checkAnswer,
//         closeModal,
//         quiz,
//         handleChange,
//         handleSubmit,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };
// // make sure use
// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };

export { AppContext, AppProvider };