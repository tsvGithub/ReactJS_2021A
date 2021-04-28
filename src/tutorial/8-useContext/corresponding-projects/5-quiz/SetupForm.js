import React from "react";
//
import { useGlobalContext } from "./context";

const SetupForm = () => {
  //state destructure from globalContext
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  //
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>setup quiz</h2>
          {/*amount */}
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input
              type="number"
              //name have to exactly match to the context state(amount, category & difficulty)
              name="amount"
              id="amount"
              //state quiz.amount default is 10 (context.js)
              value={quiz.amount}
              //(8) in context.js
              onChange={handleChange}
              //range
              min={1}
              max={50}
              className="form-input"
            />
          </div>

          {/*category */}
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              //name have to exactly match to the context state(amount, category & difficulty)
              name="category"
              id="category"
              className="form-input"
              //state quiz.category default  is 'geography' (context.js)
              value={quiz.category}
              //(8) in context.js
              onChange={handleChange}
            >
              <option value="geography">geography</option>
              <option value="history">history</option>
              <option value="animals">animals</option>
              <option value="art">art</option>
            </select>
          </div>

          {/*difficulty */}
          <div className="form-control">
            <label htmlFor="difficulty">select difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              //state quiz.difficulty default is 'easy' (context.js)
              value={quiz.difficulty}
              //(8) in context.js
              onChange={handleChange}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>

          {/*if the API doesn't return the questions */}
          {error && <p className="error">can't generate questions, please try different options</p>}

          {/*Submit */}
          <button
            //(9) context.js
            onClick={handleSubmit}
            type="submit"
            className="submit-btn"
          >
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
