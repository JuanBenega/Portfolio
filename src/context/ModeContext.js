import { createContext, useState, useEffect } from "react";

export const ModeContext = createContext();

const ModeProvider = ({ children }) => {

    const [darkMode, setdarkMode] = useState();
    let changeMode=0;

    useEffect(() => {
        darkMode ? setdarkMode(false) : setdarkMode(true);
    }, [changeMode])


    return (
        <ModeContext.Provider value={{ darkMode, changeMode }}>
            {children}
        </ModeContext.Provider>
    );
}

export default ModeProvider;
