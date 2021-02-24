import React, { useState, useEffect } from "react";
import { data } from "../../../data";
// useParams for dinamic route
import { Link, useParams } from "react-router-dom";

// V
const Person = () => {
  //state
  const [name, setName] = useState("default name");
  //for dinamic route
  //useParams is a part of URL after /:
  //=> this is :id
  //destructuring id
  const { id } = useParams();

  //initial render
  useEffect(() => {
    const newPerson =
      //find current person to display:
      data.find(
        (person) =>
          //check id
          //if a "id" is a string => to number
          // or use '==' instead of '==='
          person.id === parseInt(id)
      );
    //set state
    setName(newPerson.name);
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      {/*link to all people */}
      <Link to="/people" className="btn">
        Back To People
      </Link>
    </div>
  );
};

export default Person;
