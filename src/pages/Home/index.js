import React from "react";
import Calendar from "../../components/Calendar";
import Navbar from "../../components/Navbar";
import "./style.css";

function Home (){
    return (
        <div className="container-home">
            <Navbar />
            <Calendar />
        </div>
    )
}

export default Home;