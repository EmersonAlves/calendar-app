import React from "react";
import ReminderCard from "../ReminderCard";
import "./style.css";

function CalendarItem({item, reminders, onClick}){
    const today = new Date();

    return (
        <li 
            onClick={onClick}
            key={item.getTime()}
            day={item.getDay()}
            today={today.toLocaleDateString() === item.toLocaleDateString() ? '1' : '0'}>
                <div>
                    <small>{item.getDate()}</small>
                    <ul>
                        {reminders.map(reminder=>{
                            return (
                                <ReminderCard 
                                    reminder={reminder}
                                    key={reminder.id}
                                />
                            )
                        })}
                        
                    </ul>
                </div>
        </li>);
}

export default CalendarItem;