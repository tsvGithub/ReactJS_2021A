import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

import "./styles.css";

//localStorage for preferences of the user
//Application=>localStorage: key-value
const getStorageTheme = () => {
  let theme = "light-theme";

  //'theme'=>key; if the kye exists
  //set 'value' to the value that was passed
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  //return default value or value of the key from localStorage.
  return theme;
};
const Main = () => {
  //state
  //   const [theme, setTheme] = useState("light-theme");
  //state with user preferences
  const [theme, setTheme] = useState(getStorageTheme());

  //
  const toggleTheme = () => {
    // if (theme === "light-theme") {
    //   setTheme("dark-theme");
    // } else {
    //   setTheme("light-theme");
    // }
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
  };

  //run every time 'theme' changes
  useEffect(() => {
    //access HTML document & 'class'
    //and set theme
    document.documentElement.className = theme;
    //every time 'theme' changes value => set
    //localStorage to this value.
    localStorage.setItem("theme", theme);
  }, [theme]);
  //==========================
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button
            //
            onClick={toggleTheme}
            className="btn"
          >
            toggle
          </button>
        </div>
      </nav>
      <section className="article">
        {/*iterate over data 
spread out the item
*/}
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
};

export default Main;
