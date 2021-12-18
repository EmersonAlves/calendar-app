import React from "react";
import "./style.css";

export default function ReminderCard({onClick}){
    return (
        <li 
            className="reminder-card-item" 
            onClick={(event)=>{
                event.stopPropagation();
                onClick();
            }}>
                <p>Reunião as 12pm, teste aqui para tamanho do texto</p>
        </li>
        );
}