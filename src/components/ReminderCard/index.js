import React from "react";
import { useApp } from "../../contexts/app";
import "./style.css";

export default function ReminderCard({reminder}){
    const {setReminder} = useApp();

    return (
        <li 
            style={{backgroundColor: reminder.color}}
            className="reminder-card-item" 
            onClick={(event)=>{
                event.stopPropagation();
                setReminder(reminder);
            }}>
                <p>{reminder.title}</p>
                {reminder.icon ? <img src={reminder.icon} /> : null}
        </li>
        );
}