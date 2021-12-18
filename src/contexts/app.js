import React, { createContext, useContext, useState } from "react";


const AppContext = createContext({
    dateSelected: new Date(),
    previousMonth: ()=>{},
    nextMonth: ()=>{},
});

export const AppProvider = ({ children }) => {
    const [dateSelected, setDateSelected] = useState(new Date());

    function previousMonth(){
        setDateSelected(new Date(dateSelected.getFullYear(), dateSelected.getMonth() - 1, 1))
    }
    
    function nextMonth(){
        setDateSelected(new Date(dateSelected.getFullYear(), dateSelected.getMonth() + 1, 1))
    }


    return (
        <AppContext.Provider
            value={{
                dateSelected,
                previousMonth,
                nextMonth
            }}
        >
            {children}
        </AppContext.Provider>
        )
}

export function useApp(){
    const context = useContext(AppContext);

    return context;
}