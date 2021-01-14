import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import "./styles.css";
import data from "./data";

function Main() {
  //1
  const [people, setPeople] = useState(data);
  //'0' for first in the array => to showcase the first person
  const [index, setIndex] = useState(0);
  //---------------------
  //3e
  //to prevent from negative number of index
  //& to prevent from index number to be more
  //than people array:
  useEffect(
    () => {
      //last index===3[people array from 0 to 3, length=4]
      const lastIndex = people.length - 1;
      //if left btn clicked for negative count
      if (index < 0) {
        //set index to be last number of the array
        setIndex(lastIndex);
      }
      //if right btn clicked more then array items are
      if (index > lastIndex) {
        //set index to be 0 (for the first item of array)
        setIndex(0);
      }
    },
    //update when 'index' (btn clicked) or people array changed
    [index, people]
  );

  //--------------------------
  //3f
  //update useEffect every time when index changes
  //automated slides move
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    //clear
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  //3
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      {/*3a*/}
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          //-----------------------
          //3c
          //.nextSlide from css
          //transform: translateX(100%);
          //move slide to the right
          //default position for all slides
          let position = "nextSlide";
          //--------------------------
          //if person index from people arr === click index
          //add 'active' css class
          //first person (person[0] &click===0) will be 'active' in the center
          if (personIndex === index) {
            //dispjay centered:
            //transform: translateX(0);
            position = "activeSlide";
          }
          //-----------------------------
          //if active===1 now & 'clicks'index===1 now,
          if (
            //this perosnIndex will be personIndex[0] ;
            //"clicks"index===1-1=0 ===> (index-1)
            //first part is TRUE
            personIndex === index - 1 ||
            //for initial load is TRUE
            //index===0 => when initial load
            //& last person (last in the people array)
            (index === 0 && personIndex === people.length - 1)
          ) {
            //transform: translateX(-100%);
            //move slide to the left
            //(this will be a previous slide)
            position = "previousSlide";
          }
          //----------------------------------
          //3b
          return (
            //dinamic position see above 3c
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        {/*3d*/}
        <button
          className="prev"
          //decrease index on every click
          onClick={() => setIndex(index - 1)}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          //increase index on every click
          onClick={() => setIndex(index + 1)}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Main;
