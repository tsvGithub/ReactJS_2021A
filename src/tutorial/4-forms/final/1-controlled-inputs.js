import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

//CONTROLLED INPUTS & LIST OF NEW ITEMS
//controlled form === value + onChange
const ControlledInputs = () => {
  //2
  //to connect inputs to state value
  //access tha data inside the inputs
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  //4 for List
  const [people, setPeople] = useState([]);

  //3
  const handleSubmit = (e) => {
    //access to event object (e)
    //for event preventDefault
    e.preventDefault();
    //4.1
    //if inputs are true (not empty)
    if (firstName && email) {
      //create a new person
      const person = {
        //id===time when created person
        id: new Date().getTime().toString(),
        firstName,
        email,
      };
      console.log(person);
      //update people state=> add person
      setPeople((people) => {
        return [
          //spread new arrary
          ...people,
          //add person to people array
          person,
        ];
      });
      //set state to empty string
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };
  //1
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            {/**connect label to input */}
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              //
              id="firstName"
              //connect state & input
              name="firstName"
              //reference to state value
              value={firstName}
              //fires when type in the input
              //set new state value
              //access to event object (e)
              //for event target value
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button
            type="submit"
            //onSubmit===onClick
            // onClick={handleSubmit}
          >
            add person
          </button>
        </form>
        {/**4.2 people array */}
        {people.map((person, index) => {
          //destructuring person
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
