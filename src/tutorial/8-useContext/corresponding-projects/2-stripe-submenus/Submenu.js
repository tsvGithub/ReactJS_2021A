import React, { useState, useRef, useEffect } from "react";
//global context
import { useGlobalContext } from "./context";

//
const Submenu = () => {
  //
  const {
    //state
    isSubmenuOpen,
    //page for text on btn
    page: { page, links },
    //coordinates of Submenu btn
    location,
  } = useGlobalContext();
  //------------------------------
  //useRef for Submenu container
  const container = useRef(null);
  //--------------------------
  //for css width of submenu: how many columns/items are in links
  const [columns, setColumns] = useState("col-2");
  //=================================
  //every time location is changed===>
  useEffect(
    () => {
      //set to default value
      setColumns("col-2");
      //=======================
      //CHANGE SUBMENU BTN LOCATION
      //get submenu container (useRef)
      //for inline css
      const submenu = container.current;
      //get btn coordinates {center&bottom}
      const { center, bottom } = location;
      //----inline css:-----
      //display horizontally
      submenu.style.left = `${center}px`;
      //display vertically
      submenu.style.top = `${bottom}px`;
      //=============================
      //
      console.log(links);
      //change classname for css
      if (links.length === 3) {
        setColumns("col-3");
      }
      //
      if (links.length > 3) {
        setColumns("col-4");
      }
    },
    //run useEffect if location/coordinates,
    //page===text on button and links
    //are changed
    [page, location, links]
  );

  //===================
  //
  return (
    <aside
      //if Submenu open is true => display it
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      //for useRef
      ref={container}
    >
      <section>
        {/*page===text on btn*/}
        <h4>{page}</h4>
        <div
          className={
            //with depends on how many links are in
            `submenu-center ${columns}`
          }
        >
          {/*iterate over submenu links*/}
          {links.map((link, index) => {
            //destructuring url===path; icon & label from link
            const { url, icon, label } = link;
            return (
              <a href={url} key={index}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
