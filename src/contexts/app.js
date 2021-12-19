import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { getCalendarRange } from "../utils/date";


const AppContext = createContext({
    loading: false,
    reminder: null,
    dateSelected: new Date(),
    reminders: [],
    editReminder: null,
    previousMonth: () => {},
    nextMonth: () => {},
    updateReminders: () => {},
    setReminder:() => {},
    setLoading: () => {},
    setEditReminder: () => {},
    getWeather: () => {}
});

export const AppProvider = ({ children }) => {
    const [reminder, setReminder] = useState(null);
    const [loading, setLoading] = useState(false);
    const [dateSelected, setDateSelected] = useState(new Date());
    const [reminders, setReminders] = useState([]);
    const [editReminder, setEditReminder] = useState(null);

    const getReminders = useCallback(async (startDate, endDate) => {
        const {data} = await findReminders(startDate, endDate);
        setReminders(data.data.map(item=>{
            return {
                ...item,
                reminderDate: new Date(item.reminderDate._seconds * 1000)
            }
        }))
    },[])

    useEffect(()=>{
        const range = getCalendarRange(dateSelected);

        getReminders(range[0], range[1]);
       
    }, [dateSelected,getReminders]);

    function updateReminders(){
        const range = getCalendarRange(dateSelected);
        getReminders(range[0], range[1]);
    }

    function previousMonth(){
        setDateSelected(new Date(dateSelected.getFullYear(), dateSelected.getMonth() - 1, 1))
    }
    
    function nextMonth(){
        setDateSelected(new Date(dateSelected.getFullYear(), dateSelected.getMonth() + 1, 1))
    }

    async function getWeather(cityName){
        let icon = null;
        try{
            const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=469583ea02d11d332a65e2c889bfded2`)
                .then(result => result.json());

            icon = `http://openweathermap.org/img/wn/${result.weather[0].icon}.png`
        }catch(error){
            icon = null;
        }

        return icon;
    }

    async function findReminders(startDate, endDate){
        return await api.get('reminder/find', {
            params: {
                startDate,
                endDate
            }
        })
    }


    return (
        <AppContext.Provider
            value={{
                loading,
                reminder,
                dateSelected,
                reminders,
                editReminder,
                previousMonth,
                nextMonth,
                findReminders,
                updateReminders,
                setReminder,
                setLoading,
                setEditReminder,
                getWeather
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