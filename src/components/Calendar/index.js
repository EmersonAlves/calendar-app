import React, { useRef } from "react";
import { useApp } from "../../contexts/app";
import { createCalendarByMonth, getDaysOfTheWeek } from "../../utils/date";
import CalendarItem from "../CalendarItem";
import AddReminder from "../AddReminder";
import "./style.css";

function Calendar(){
    const addReminderRef = useRef();
    const {dateSelected} = useApp();
    const daysOfTheWeek = getDaysOfTheWeek();
    const days = createCalendarByMonth(dateSelected);

    return (
        <div className="container-calendar" >
            <AddReminder ref={addReminderRef} />
            <ul className="day-of-the-week">
                {daysOfTheWeek.map((label, index) => {
                    return <li key={index}>{label}</li>
                })}
            </ul>
            <ul className="list-days">
                {days.map(item=>{
                    return (
                        <CalendarItem 
                            key={item.getTime()}
                            item={item} 
                            onClick={()=> {
                                console.log("test")
                                addReminderRef.current.show(item)
                            }}
                             />)
                })}
            </ul>
        </div>);
}

export default Calendar;