import { createContext } from "react";

export const ActionsContext = createContext(
    {
        sideNavBar: false,
        notiNavBar: false,
        loadRef: null,
        screenSize: 0,
        setScreenSize: ()=>{},
        scan: null,
        write: null,
        setActions:()=>{},
        isActive: false,
        setUserActive: ()=>{},

    }
);