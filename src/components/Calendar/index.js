import React, { useRef } from "react";
import { useApp } from "../../contexts/app";
import { createCalendarByMonth, getDaysOfTheWeek } from "../../utils/date";
import CalendarItem from "../CalendarItem";
import AddReminder from "../AddReminder";
import "./style.css";
import ReminderDetail from "../ReminderDetail";
import EditReminder from "../EditReminder";

function Calendar(){
    const addReminderRef = useRef();
    const {dateSelected, reminders} = useApp();
    const daysOfTheWeek = getDaysOfTheWeek();
    const days = createCalendarByMonth(dateSelected);

    return (
        <div className="container-calendar" >
            <AddReminder ref={addReminderRef} />
            <ReminderDetail />
            <EditReminder />
            <ul className="day-of-the-week">
                {daysOfTheWeek.map((label, index) => {
                    return <li key={index}>{label}</li>
                })}
            </ul>
            <ul className="list-days">
                {days.map(item=>{
                    const results = reminders.filter(reminder=>{
                        return reminder.reminderDate.toLocaleDateString() === item.toLocaleDateString()
                    });

                    return (
                        <CalendarItem 
                            reminders={results}
                            key={item.getTime()}
                            item={item} 
                            onClick={()=> {
                                addReminderRef.current.show(item)
                            }}
                             />)
                })}
            </ul>
        </div>);
}

export default Calendar;