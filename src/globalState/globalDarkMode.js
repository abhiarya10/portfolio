import React, { createContext, useState } from "react";

const darkModeContext = createContext();

function DarkModeContextProvider({ children }) {
  const [globalDark, setGlobalDark] = useState(false);
  const value = {
    globalDark,
    setGlobalDark,
  };
  return (
    <darkModeContext.Provider value={value}>
      {children}
    </darkModeContext.Provider>
  );
}

export { darkModeContext, DarkModeContextProvider };
