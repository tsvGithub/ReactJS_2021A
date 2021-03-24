import React, { useState, useEffect } from "react";
//icons
import { FaEnvelopeOpen, FaUser, FaCalendarTimes, FaMap, FaPhone, FaLock } from "react-icons/fa";
import "./styles.css";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

const Main = () => {
  //1
  //for fetch loading
  const [loading, setLoading] = useState(true);
  //currently displayed person
  const [person, setPerson] = useState(null);
  //title for string 'My... is...' with
  //default value==='name' & also next are:
  // email,age,street, phone and password
  const [title, setTitle] = useState("name");
  //value is for displaying corresponding 'values'
  //of 'title', for example:
  //title = 'name'; value='Susan';
  //title='street'; value='1012 Chaka iela' etc.
  //default 'random person'
  const [value, setValue] = useState("random person");

  //--------------
  //4 fetch:
  const getPerson = async () => {
    //set loading
    setLoading(true);
    //-------------
    const response = await fetch(url);
    //data is an object
    const data = await response.json();
    //'results' array => is from api
    //results[0] => first object in the array
    const person = data.results[0];
    //destructuring preoperties from person object
    const { phone, email } = person;
    //destructuring from nested objects:
    //'person' is 'results[0]' =>person object
    //'person' has property 'picture'  => person.picture
    //'picture' is Object with property 'large' =>
    //destructuring 'large' from 'picture.person' &
    //rename 'large' to 'image'
    const { large: image } = person.picture;
    //'person' has property 'login'
    //'login' is Object with property 'password'
    //destructuring 'password' from 'person.login'
    const { password } = person.login;
    //'person' has property 'name'
    //destructuring 'first'&'last' from 'person.name'
    const { first, last } = person.name;
    //'person' has property 'dob'
    //destructuring 'age' from 'dob' of 'person
    const {
      dob: { age },
    } = person;
    //destructuring from 'person.location'
    //object 'street' & 'number' and 'name'
    const {
      street: { number, name },
    } = person.location;
    //-------------
    //create a new Object
    const newPerson = {
      //use destructured properties:
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    };
    //set state 'person' to new Person
    setPerson(newPerson);
    //set state 'loading' to false
    setLoading(false);
    //set state 'title' to 'name' value
    //always show first 'name'
    setTitle("name");
    //show 'name' of 'person'
    setValue(newPerson.name);
  };
  //--------------
  //5 invoke getPerson() only when App is loaded
  useEffect(() => {
    getPerson();
  }, []);
  //------------------
  //3 hover over icon btn
  const handleValue = (e) => {
    //if hovered over btn className='icon' =>
    if (e.target.classList.contains("icon")) {
      //get 'data-label' value from the current
      //hovered button with 'dataset.label' help
      const newValue = e.target.dataset.label;
      //set 'title' to the new value of hovered icon
      setTitle(newValue); //<= from "data-label"
      //set 'value' of 'title' with the dynamic
      //new value => perosn.age/peron.image/person.email etc.
      setValue(person[newValue]); //person['data-label' value]
    }
  };

  //2
  return (
    <main>
      <div className="block bcg-black"></div>

      <div className="block">
        <div className="container">
          <img
            //if there is person => display person.image
            //if there is no person => display default image
            //! (person.image || defaultImage) cause problems if there is no person!!!
            src={(person && person.image) || defaultImage}
            alt="random user"
            className="user-img"
          />
          {/*My title=is default'name' & also are 'street'/'password'/etc  */}
          <p className="user-title">My {title} is</p>
          {/*value="Zhur"/"Chaka/etc..." */}
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              className="icon"
              //this is 'title' in the State
              //data-label provided value to the state
              data-label="name"
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              //this is 'title' in the State
              data-label="email"
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button
              className="icon"
              //this is 'title' in the State
              data-label="age"
              onMouseOver={handleValue}
            >
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              //this is 'title' in the State
              data-label="street"
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              //this is 'title' in the State
              data-label="phone"
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              //this is 'title' in the State
              data-label="password"
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>

          <button
            className="btn"
            type="button"
            //fetch on click
            onClick={getPerson}
          >
            {loading ? "loading..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
