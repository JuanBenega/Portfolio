import { createContext, useState, useEffect } from "react";

export const ModeContext = createContext();

const ModeProvider = ({ children }) => {

    


    return (
        <ModeContext.Provider >
                    {children}
        </ModeContext.Provider>
    );
}

export default ModeProvider;
