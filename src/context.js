import React, { useContext } from "react";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={"Website"}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = ()=>{
   return useContext(AppContext)
}

export default AppProvider;
