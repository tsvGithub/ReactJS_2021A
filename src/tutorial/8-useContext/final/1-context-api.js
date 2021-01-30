import React, { useState, useContext } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

//1 create context
const PersonContext = React.createContext();
//useContext access to value from PersonContext.Provider

// two components - Provider, Consumer (don't have to use Consumer)
//2 Provider: root component
const ContextAPI = () => {
  //2.1
  const [people, setPeople] = useState(data);
  //2.2
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    //2.3 wrap List (consumer) into Provider
    <PersonContext.Provider
      //2.4 value for Consumer components
      value={{ removePerson, people }}
    >
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

// 3 Consumer
const List = () => {
  //3.1
  //access to value from PersonContext.Provider
  //value={{ removePerson, people }}
  const mainData = useContext(PersonContext);
  // console.log(mainData);
  return (
    <>
      {mainData.people.map((person) => {
        return (
          //3.2
          <SinglePerson
            key={person.id}
            //
            {...person}
          />
        );
      })}
    </>
  );
};

//4 Consumer
const SinglePerson = ({ id, name }) => {
  //4.1.
  //access to value from PersonContext.Provider
  //value={{ removePerson, people }}
  const { removePerson } = useContext(PersonContext);

  return (
    <div className="item">
      <h4>{name}</h4>
      <button
        //
        onClick={() => removePerson(id)}
      >
        remove
      </button>
    </div>
  );
};

export default ContextAPI;
