import { createContext, useState, useEffect } from "react";

export const ModeContext = createContext();

const ModeProvider = ({ children }) => {

    const [mode, setMode] = useState("");
    let changeMode = 0;
    let themeMode = localStorage.getItem("theme");

    const switchMode = () => {
        console.log(themeMode);
        switch (themeMode) {
            case "light":
                setMode("dark");
                break;
            case "dark":
                setMode("light");
                break;
            default:
                break;
        }
        localStorage.setItem("theme", mode);
        console.log(themeMode);

    }


    return (
        <ModeContext.Provider value={{ mode, switchMode }}>
            {children}
        </ModeContext.Provider>
    );
}

export default ModeProvider;
