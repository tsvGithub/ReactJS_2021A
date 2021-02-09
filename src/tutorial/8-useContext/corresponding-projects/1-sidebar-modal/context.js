import React, { useState, useContext } from "react";
//----------------------
//1 Global context
//1.1.create a Context object by using React.CreateContext
const AppContext = React.createContext();
//get back Provider & Consumer
//Consumer isn't used, only Provider!!!
// This AppContext object is what should be passed
//as an argument into the useContext Hook.
//1.2. see below =>
// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };
//---------------------------

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
    //Any updates on the Provider will trigger a
    //rerender with the updated context value.

    <AppContext.Provider
      //pass value to children
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {/*Components */}
      {children}
    </AppContext.Provider>
  );
};
//------------------------

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
