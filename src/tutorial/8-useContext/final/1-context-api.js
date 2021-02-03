import React, { useState, useContext } from "react";
import { data } from "../../../data";

//1 create context
//1.1.create a Context object by using React.CreateContext
const PersonContext = React.createContext();
//useContext access to value from PersonContext.Provider
// This PersonContext object is what should be passed
//as an argument into the useContext Hook.
//1.2. see below => const mainData = useContext(PersonContext);

// PersonContext has two components - Provider, Consumer (don't have to use Consumer)

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
  //1.2. custom Hook:
  //useGlobalContext provides both a consumer and
  //a provider. When using the useContext Hook,
  //you have to pass in the whole context object,
  //not just the consumer or provider.
  //PersonContext Object from createContext()
  // is what should be passed as
  //an argument into the useContext Hook.
  //With useContext we consume our context object.
  //Any updates on the Provider will trigger a rerender with the updated context value.

  // console.log(mainData);
  return (
    <>
      {mainData.people.map((person) => {
        return (
          //3.2
          <SinglePerson key={person.id} {...person} />
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
