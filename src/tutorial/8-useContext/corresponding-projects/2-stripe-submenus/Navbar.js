import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
//grab global context
import { useGlobalContext } from "./context";

//
const Navbar = () => {
  //access to context (grab funcs from context)
  //openSidebar function for small screens to open Sidebar
  //open & close Submenu functions
  const {
    //Sidebar
    openSidebar,
    //Submenu
    openSubmenu,
    closeSubmenu,
  } = useGlobalContext();
  //================================
  //only when mouse is over=> display Submenu
  const displaySubmenu = (e) => {
    //grab text that is inside the btn (products, developers or company)
    const page = e.target.textContent;
    //---------------------------
    //get location of that btn
    const tempBtn = e.target.getBoundingClientRect();
    //get center of the btn
    const center = (tempBtn.left + tempBtn.right) / 2;
    //get bottom of the button
    const bottom = tempBtn.bottom - 3;
    //open Submenu func from context.js:
    //page===text of btn to know which link is;
    // and object{center, bottom}
    openSubmenu(page, { center, bottom });
    //---------------------
    //2.4. open & close Submenu context.js
    // const openSubmenu = (text, coordinates) => {
    //   const page = sublinks.find((link) => link.page === text);
    //   setPage(page);
    //   setLocation(coordinates);
    //   setIsSubmenuOpen(true);
    // };
  };
  //===========================
  //when mouse left Navbar=>close Submenu
  const handleSumbenu = (e) => {
    //if mouse is not over btn
    if (!e.target.classList.contains("link-btn")) {
      //call closeSubmenu function
      closeSubmenu();
    }
  };
  //=======================
  //
  return (
    <nav
      className="nav"
      //when mouse left Navbar => close Submenu
      onMouseOver={handleSumbenu}
    >
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button
            className="btn toggle-btn"
            //btn open Sidebar
            onClick={openSidebar}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button
              className="link-btn"
              //only when hover over => display Submenu
              onMouseOver={displaySubmenu}
            >
              products
            </button>
          </li>
          <li>
            <button
              className="link-btn"
              //only when hover over => display Submenu
              onMouseOver={displaySubmenu}
            >
              developers
            </button>
          </li>
          <li>
            <button
              className="link-btn"
              //only when hover over => display Submenu
              onMouseOver={displaySubmenu}
            >
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
