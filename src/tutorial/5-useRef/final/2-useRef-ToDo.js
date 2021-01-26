import React, { useState, useRef } from "react";

//UseRef:
// for uncontrolled inputs
// preserves value in between renders
// DOES NOT trigger re-render
// target DOM nodes/elements

function App() {
  //useState for todo
  const [newTodoValue, setNewTodoValue] = useState("");
  const [todosList, setTodosList] = useState([]);
  //-----------------------
  //1
  //inputRef is for input box recieving focus automaticly
  //for type in again after clicking submit button
  //refs to DOM node
  //initial state null for grabing element on the screen
  const inputRef = useRef(null);

  function handleChange(event) {
    setNewTodoValue(event.target.value);
  }

  function addTodo(event) {
    event.preventDefault();
    setTodosList((prevTodosList) => [...prevTodosList, newTodoValue]);
    setNewTodoValue("");
    //3. DOM node===inputRef
    //when Component renders => inputRef became
    // an object with property .current
    //current points to (2)DOM node <input ref={inputRef}.../>
    //input has method focus()
    // console.log(inputRef); //{current: input}
    //get focus on input
    inputRef.current.focus();
  }

  const allTodos = todosList.map((todo) => <p key={todo}>{todo}</p>);

  return (
    <div>
      <form className="form">
        <input
          //2. prop for DOM node ref with inputRef
          ref={inputRef}
          type="text"
          name="todo"
          value={newTodoValue}
          onChange={handleChange}
        />
        <button onClick={addTodo}>Add todo item</button>
      </form>
      {allTodos}
    </div>
  );
}

export default App;
