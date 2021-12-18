import React, { useRef } from "react";
import ReminderCard from "../ReminderCard";
import ReminderDetail from "../ReminderDetail";
import "./style.css";

function CalendarItem({item, onClick}){
    const reminderDetailRef = useRef();
    const today = new Date();

    return (
        <li 
            onClick={onClick}
            key={item.getTime()}
            day={item.getDay()}
            today={today.toLocaleDateString() === item.toLocaleDateString() ? '1' : '0'}>
                <div>
                    <small>{item.getDate()}</small>
                    <ReminderDetail ref={reminderDetailRef} />
                    <ul>
                        <ReminderCard onClick={(event)=>{
                            reminderDetailRef.current.show();
                        }} />
                    </ul>
                </div>
        </li>);
}

export default CalendarItem;