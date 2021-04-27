import React from "react";
import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
import { useGlobalContext } from "./context";

const Home = () => {
  //1)
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
  // const answers = [...incorrect_answers, correct_answer]
  let answers = [...incorrect_answers];

  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }
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
                  //
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
          //
          onClick={nextQuestion}
        >
          next question
        </button>
      </section>
    </main>
  );
};

export default Home;
