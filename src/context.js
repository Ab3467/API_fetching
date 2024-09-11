import React from "preact/compat";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={"Website"}>{children}</AppContext.Provider>
  );
};
export default AppProvider;
