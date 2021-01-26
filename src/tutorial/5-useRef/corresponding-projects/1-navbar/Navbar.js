import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.png";

//1
const Navbar = () => {
  //3.1
  //state : for showing & hiding menu links for menu btn
  const [showLinks, setShowLinks] = useState(false);
  // creating dinamic hight for Menu links CONTAINER for 2.3.2
  const linksContainerRef = useRef(null);
  //creating unordered list for LINKS  for 2.3.3
  const linksRef = useRef(null);
  //-------------------------
  //3.2. showing/hiding menu links for 2.1
  const toggleLinks = () => {
    //set opposite state (true/false)
    setShowLinks(!showLinks);
  };
  //----------------------
  //
  useEffect(
    () => {
      //to check height of links:
      //linksRef=== ul container state
      //current===node
      //getBoundingClientRect().height = method JS
      //*********************** */
      //!!!NB in styles.css "!important" =>
      //@media screen and (min-width: 800px)
      // .links-container{height: auto !important}
      //because here in Component we use inline style
      //with 'height=0'!!!
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      console.log(linksHeight);
      console.log(linksContainerRef.current.getBoundingClientRect());
      //if state showLinks===true for showing Menu
      //
      if (showLinks) {
        //display pop down Menu links with dinamic height
        //for the case, if menu items number are changed
        //linksContainerReff===div
        //node===current
        //style==JS inline style
        //height
        //update height dinamicaly with linksHeight value in px
        linksContainerRef.current.style.height = `${linksHeight}px`;
      } //
      else {
        //display  === height=0
        linksContainerRef.current.style.height = "0px";
      }
    },
    //when state showLinks changed (true/false) =>
    //check the height of the links to adjust the height
    //of .links-container
    [showLinks]
  );

  //------------------------
  //2
  return (
    <nav>
      {/**2.1 */}
      <div className="nav-center">
        <div className="nav-header">
          {/**Logo img */}
          <img src={logo} alt="logo" className="logo" />
          {/**Burger menu btm: */}
          <button
            className="nav-toggle"
            //3.2. toggle btn
            onClick={toggleLinks}
          >
            <FaBars />
          </button>
        </div>

        {/**2.3 Menu links: home, about, contact, products*/}
        <div
          //this links-container div for adjusting the
          //height with initial heigtht in css ===0
          //is a parent element of unordered list .links
          //Without this div the adjusting functionality won't work!
          className="links-container"
          //2.3.2 this div points to linksContainerRef state
          ref={linksContainerRef}
        >
          <ul
            className="links"
            //2.3.3 this ul points to linksRef state
            //
            ref={linksRef}
          >
            {/*2.3.1*Dinamic displaying menu links:
             * map over links from data.js */}
            {links.map((link) => {
              //destructuring link object
              const { id, url, text } = link;
              return (
                //return li for every link
                <li key={id}>
                  {/*href => path from link.url: /, /about, /contats...
                    text => name of path: home, about, contacts... */}
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 2.2 Social media links: Twitter, Linkedin, Facbook etc*/}
        <ul className="social-icons">
          {/**Dinamic displaying social links:
           * map over social  from data.js */}
          {social.map((socialIcon) => {
            //destructuring social
            const { id, url, icon } = socialIcon;
            //return li for every socialIcon
            return (
              <li key={id}>
                {/*href => path from link.url: tweeter, facebook...
                    icon => react/icons... */}
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
