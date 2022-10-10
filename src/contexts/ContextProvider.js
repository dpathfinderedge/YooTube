import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({children}) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [currentMode, setCurrentMode] = useState('Light');
  const [screenSize, setScreenSize] = useState(undefined);

  const setMode = () => {
    if(currentMode === 'Light') {
      setCurrentMode('Dark');
    } else {
      setCurrentMode('Light');
    }

    // localStorage.setItem('Mode', currentMode);
  };

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  }

  return(
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        currentMode,
        setCurrentMode,
        screenSize,
        setScreenSize,
        setMode,
        handleCloseSideBar
      }}
    >
        {children}
    </StateContext.Provider>
  ); 
};

export const useStateContext = () => useContext(StateContext);