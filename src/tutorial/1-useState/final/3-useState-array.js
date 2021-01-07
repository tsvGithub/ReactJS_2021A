import React from "react";
import { data } from "../../../data";
const UseStateArray = () => {
  //1 fill state with default data
  const [people, setPeople] = React.useState(data);

  // 3
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    //or functional approach to setState:
    // setPeople((oldArr) => {
    //   let newArr = oldArr.filter((person) => person.id !== id);
    //   return newArr;
    // });
  };
  return (
    <>
      {/*2 map over Arr people from state  */}
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>X</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear all
      </button>
    </>
  );
};

export default UseStateArray;
