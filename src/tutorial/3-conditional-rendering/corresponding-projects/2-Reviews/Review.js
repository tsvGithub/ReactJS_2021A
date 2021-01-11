import React, { useState } from "react";
//data
import people from "./data";
//react-icons
import { FaChevronCircleLeft, FaChevronCircleRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  //1
  //state: index of array
  //'0' for first in the array => to showcase the first person
  const [index, setIndex] = useState(0);

  //destructuring data from array "people" particular person
  //people[index] === state index => particular person
  const { name, job, image, text } = people[index];
  //---------------------
  //if index > last number of people array or < 0 => error!
  //checkNumber checks it
  const checkNumber = (number) => {
    //if numb > then array items
    if (number > people.length - 1) {
      //return 0 for the first item of array
      return 0;
    }
    if (number < 0) {
      //return last number in he array
      return people.length - 1;
    }
    //if ok (not <0 or > length-1)
    return number;
  };
  //---------------------
  //3
  const nextPerson = () => {
    //set index state
    setIndex((index) => {
      let newIndex = index + 1;
      //check if index >0 & <arr.length-1
      return checkNumber(newIndex);
    });
  };
  //-------------------
  //4
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      //check if index >0 & <arr.length-1
      return checkNumber(newIndex);
    });
  };
  //----------------
  //5
  const randomPerson = () => {
    //random number
    let randomNumber = Math.floor(Math.random() * people.length);
    //if new random number is the same as previous:
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    // check if random number is > 0 and < arr.length-1
    //and set a index state
    setIndex(checkNumber(randomNumber));
  };
  //-----------------
  //2
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronCircleLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronCircleRight />
        </button>
        <button className="random-btn" onClick={randomPerson}>
          surprise me
        </button>
      </div>
    </article>
  );
};

export default Review;
