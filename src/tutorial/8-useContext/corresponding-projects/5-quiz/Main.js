import React from "react";

//
import { AppProvider } from "./context";
import { useGlobalContext } from "./context";

//
import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";

import "./styles.css";
function Main() {
  return (
    <AppProvider>
      <h2>quiz starter</h2>;
    </AppProvider>
  );
}
//
// const Main = () => {
//   const { waiting, loading, questions, index, correct, nextQuestion, checkAnswer } = useGlobalContext();

//   // multiple returns:
//   if (waiting) {
//     return <SetupForm />;
//   }
//   if (loading) {
//     return <Loading />;
//   }

//   const { question, incorrect_answers, correct_answer } = questions[index];
//   // const answers = [...incorrect_answers, correct_answer]
//   let answers = [...incorrect_answers];
//   const tempIndex = Math.floor(Math.random() * 4);
//   if (tempIndex === 3) {
//     answers.push(correct_answer);
//   } else {
//     answers.push(answers[tempIndex]);
//     answers[tempIndex] = correct_answer;
//   }
//   console.log(questions[0]);
//   console.log(questions);
//   return (
//     // <>
//     <AppProvider>
//       <main>
//         <Modal />
//         {/* {waiting ? <SetupForm /> : ""}
//         {loading ? <Loading /> : ""} */}

//         <section className="quiz">
//           <p className="correct-answers">
//             correct answers : {correct}/{index}
//           </p>
//           <article className="container">
//             <h2 dangerouslySetInnerHTML={{ __html: question }} />
//             <div className="btn-container">
//               {answers.map((answer, index) => {
//                 return (
//                   <button
//                     key={index}
//                     className="answer-btn"
//                     onClick={() => checkAnswer(correct_answer === answer)}
//                     dangerouslySetInnerHTML={{ __html: answer }}
//                   />
//                 );
//               })}
//             </div>
//           </article>
//           <button className="next-question" onClick={nextQuestion}>
//             next question
//           </button>
//         </section>
//       </main>
//     </AppProvider>
//     // </>
//   );
// };
export default Main;
