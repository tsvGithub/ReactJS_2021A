import React, { useState, useContext } from "react";
import sublinks from "./data";

//1 Global context
//1.1.create a Context object by using React.CreateContext
const AppContext = React.createContext();
// This AppContext object is what should be passed
//as an argument into the useContext Hook.
//1.2. see below =>
// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };

//=========================
//2
//create Provider
//{children} for whole App
const AppProvider = ({ children }) => {
  // 2.2. state
  //Sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //Submenu state
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  //page==text for Submenu btns (page&links values are in context.js)
  const [page, setPage] = useState({ page: "", links: [] });
  //{center, bottom} coordinates of Sublink btn
  const [location, setLocation] = useState({});
  //-----------------
  //2.3. open & close Sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  //=============================
  //2.4. open & close Submenu
  //text to know which btn (products/developers or company)
  //coordinates==={center, bottom} for location
  const openSubmenu = (text, coordinates) => {
    //get text value for page (submenu btn)
    const page = sublinks.find((link) => {
      //get link.page (data.js) that matches the page which coming from the button (text)
      link.page === text;
    });
    //update state
    setPage(page);
    //set location state with coordinates
    //{center, bottom} of hovered Submenu btn
    setLocation(coordinates);
    //update state
    setIsSubmenuOpen(true);
  };
  //-------------
  //when mouse (mouseOver) left Navbar=>
  //close Submenu
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  //=======================================
  //2.1.
  //return AppContext.Provider & children
  //Any updates on the Provider will trigger a
  //rerender with the updated context value.
  return (
    <AppContext.Provider
      //2.5. pass value to children
      value={{
        //Sidebar state
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        //Submenu state
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        //
        page,
        location,
      }}
    >
      {/* Components*/}
      {children}
    </AppContext.Provider>
  );
};

//1.2. custom Hook:
//useGlobalContext provides both a consumer and
//a provider. When using the useContext Hook,
//you have to pass in the whole context object,
//not just the consumer or provider.
export const useGlobalContext = () => {
  //AppContext Object from createContext()
  // is what should be passed as
  //an argument into the useContext Hook.
  return useContext(AppContext);
  //With useContext we consume our context object.
  //Any updates on the Provider will trigger a rerender with the updated context value.
};

//
export { AppContext, AppProvider };
