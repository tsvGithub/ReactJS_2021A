import React from "react";
import logo from "./logo.png";
//context
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";

// IV
const Sidebar = () => {
  //state for closing sidebar
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      //toggle class css: show/hide sidebar
      className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
    >
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button
          className="close-btn"
          //close Sidebar
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {
          //menu links
          links.map((link) => {
            //destructuring link
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })
        }
      </ul>
      <ul className="social-icons">
        {
          //icons
          social.map((link) => {
            //destructuring link
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })
        }
      </ul>
    </aside>
  );
};

export default Sidebar;
