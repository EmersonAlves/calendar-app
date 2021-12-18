import React from "react";
import "./style.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useApp } from "../../contexts/app";
import { getNameMonth } from "../../utils/date";

function Navbar(){
    const {dateSelected, previousMonth, nextMonth} = useApp();
    return (<nav className="navbar">
        <button type="button" onClick={()=> previousMonth()}>
            <IoIosArrowBack />
        </button>
        <button type="button" onClick={()=> nextMonth()}>
            <IoIosArrowForward />
        </button>
        <h4>{getNameMonth(dateSelected)} de {dateSelected.getFullYear()}</h4>
    </nav>)
}

export default Navbar;