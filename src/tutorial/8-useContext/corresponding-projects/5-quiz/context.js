import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const url = "";

// const tempUrl = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
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
