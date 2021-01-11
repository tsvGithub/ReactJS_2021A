import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
import "./styles.css";
function Main() {
  //set state from data
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {/*List: */}
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default Main;
