import React from "react";
import { FaTimes } from "react-icons/fa";
//global context
import { useGlobalContext } from "./context";
//data
import sublinks from "./data";

//
const Sidebar = () => {
  //state (state&func) for X-btn close Sidebar
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  //=======================
  return (
    <div
      //if isSidebarOpen===true, display Sidebar
      className={`${isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}`}
    >
      <aside className="sidebar">
        <button
          className="close-btn"
          // x-btn for closing Sidebar
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>

        <div className="sidebar-links">
          {/*nested iteartion because of nested data:
          Sublinks is array of objects;
          each object also has links array with objects
          */}
          {sublinks.map((item, index) => {
            //each sublinks' object has 1"page" & many"links" arr
            const { links, page } = item;
            return (
              <article key={index}>
                {/**page===name of sublink(product/developers/company) */}
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    //each links object has 'label','icon','url'
                    const { url, icon, label } = link;
                    return (
                      //url===path ('/products' or '/developers', '/company')
                      <a href={url} key={index}>
                        {/*FaIcon */}
                        {icon}
                        {/*sublink(payment/terminla/connect) */}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
