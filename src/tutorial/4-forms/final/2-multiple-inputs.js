import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  //1 set state
  //person object
  const [person, setPerson] = useState(
    //person.object
    { firstName: "", email: "", age: "" }
  );
  //List array
  const [people, setPeople] = useState([]);
  //--------------------------
  //3
  const handleChange = (e) => {
    //access event object
    const name = e.target.name;
    const value = e.target.value;
    //set state 'person'
    setPerson({
      //spread person object to update some properties
      //if do not spread & update 1, others will remove
      ...person,
      //update person firstName or lastName or age)
      [name]: value,
    });
  };
  //4
  const handleSubmit = (e) => {
    //access event object
    e.preventDefault();
    //check if inputs are not empty
    if (person.firstName && person.email && person.age) {
      //create new person
      const newPerson = {
        //...spread person from state
        ...person,
        //add id
        id: new Date().getTime().toString(),
      };
      //spread people & add newPerson
      setPeople([...people, newPerson]);
      //clean person to empty value
      setPerson({ firstName: "", email: "", age: "" });
    }
  };
  //2
  return (
    <>
      <article className="form">
        <form>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              //person object first name
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input type="email" id="email" name="email" value={person.email} onChange={handleChange} />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input type="number" id="age" name="age" value={person.age} onChange={handleChange} />
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            add person
          </button>
        </form>
      </article>
      <article>
        {/** */}
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div key={id} className="item">
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
