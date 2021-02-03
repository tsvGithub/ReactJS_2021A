import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
//context
import { useGlobalContext } from "./context";

//
const Navbar = () => {
  //access to context (grab funcs from context)
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  //----------------------
  //
  const displaySubmenu = (e) => {
    //
    const page = e.target.textContent;
    //
    const tempBtn = e.target.getBoundingClientRect();
    //
    const center = (tempBtn.left + tempBtn.right) / 2;
    //
    const bottom = tempBtn.bottom - 3;
    //
    openSubmenu(page, { center, bottom });
  };
  //---------------------
  //
  const handleSumbenu = (e) => {
    //
    if (!e.target.classList.contains("link-btn")) {
      //
      closeSubmenu();
    }
  };
  //=======================
  //
  return (
    <nav
      className="nav"
      //
      onMouseOver={handleSumbenu}
    >
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button
            className="btn toggle-btn"
            //btn click open menu
            onClick={openSidebar}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button
              className="link-btn"
              //
              onMouseOver={displaySubmenu}
            >
              products
            </button>
            <button
              className="link-btn"
              //
              onMouseOver={displaySubmenu}
            >
              developers
            </button>
            <button
              className="link-btn"
              //
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
