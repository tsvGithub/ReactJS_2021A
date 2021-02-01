import React, { useState, useContext } from "react";
//create context
const AppContext = React.createContext();
//get back Provider & Consumer
//Consumer isn't used, only Provider!!!

// V
//create Provider: pass in childern
const AppProvider = ({ children }) => {
  //state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //toggle side bar: two funcs because they work in different components
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  //-----------------------------
  //toggle modal: : two funcs because they work in different components
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    //Provider
    <AppContext.Provider
      //value props
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {/** */}
      {children}
    </AppContext.Provider>
  );
};
//------------------------

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
//AppProvider for Main.js
export { AppContext, AppProvider };
