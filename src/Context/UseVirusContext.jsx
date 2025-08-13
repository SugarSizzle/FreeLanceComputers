import React, { createContext, useState, useContext } from "react";



const VirusContext = createContext();

export const UseVirusContext = ({children}) => {

    
    const [selectedVirus, setSelectedVirus] = useState("");


    return (

        <VirusContext.Provider value={{selectedVirus, setSelectedVirus}}>
            {children}
        </VirusContext.Provider>


    )


}

export const useVirus = () => useContext(VirusContext);




