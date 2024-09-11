

export const AppContext = React.createContext();

const AppProvider =({children})=>{
    return(
        <AppContext.Provider value={"Ahmad abu bakr"}>
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider;