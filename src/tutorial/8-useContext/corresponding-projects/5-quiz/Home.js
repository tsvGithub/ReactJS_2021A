import React from "react";
import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
import { useGlobalContext } from "./context";

const Home = () => {
  //1) state from context
  const { waiting, loading, questions, index, correct, nextQuestion, checkAnswer } = useGlobalContext();

  //2) multiple returns:
  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }
  //3)
  //   console.log(questions[0]);
  //   console.log(questions);
  //destructuring properties from 'questions[X]'
  //where 'x' is 'index' and by default is 0
  const { question, incorrect_answers, correct_answer } = questions[index];
  //--------------------
  //answers: 3 incorrect answers + 1 (last) correct answer:
  // const answers = [...incorrect_answers, correct_answer]
  //generate dinamically correct answers order in the array 'answers':
  //array of incorrect answers [0,1,2]
  let answers = [...incorrect_answers];
  //----------------------
  //Generate placement order of correct answers dinamically:
  //generate random number 0,1,2 or 3
  const tempIndex = Math.floor(Math.random() * 4);
  //if random number===3, that means
  //in 'answers' array won't be that number,
  //there are only 0,1,2, so add correct
  //answer to the end of array of incorrect answers
  if (tempIndex === 3) {
    //add correct answer at the end of array
    answers.push(correct_answer);
  } else {
    //if the number is 0,1 or 2:
    //for example, place incorrect answer with
    //random index 2 at the end of array
    answers.push(answers[tempIndex]);
    //and this spot (number2) replace with correct answer
    //===correct_answer is at index 2
    answers[tempIndex] = correct_answer;
  }

  //================================
  //================================
  //4)
  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">
          {/* 'correct':how many questions are answered correctly
          / 'index': what is the current index of the question
          */}
          correct answers : {correct}/{index}
        </p>
        <article className="container">
          {/*'question' from API is not a string,
          but HTML. When use 'dangerouslySetInnerHTML'
          make sure that value isn't come from the user!
          As user can pass some melisious code!
          */}
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {/* iterate over answers  */}
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className="answer-btn"
                  //check if answer is correct:
                  onClick={() => checkAnswer(correct_answer === answer)}
                  // 'answer' from API is not a string,
                  //but HTML. When use 'dangerouslySetInnerHTML'
                  //make sure that value isn't come from the user!
                  //As user can pass some melisious code!
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              );
            })}
          </div>
        </article>
        <button
          className="next-question"
          //next question:
          onClick={nextQuestion}
        >
          next question
        </button>
      </section>
    </main>
  );
};

export default Home;
