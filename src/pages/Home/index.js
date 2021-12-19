import React from "react";
import Calendar from "../../components/Calendar";
import Navbar from "../../components/Navbar";
import Preload from "../../components/Preload";
import "./style.css";

function Home (){
    return (
        <div className="container-home">
            <Navbar />
            <Calendar />
            <Preload />
        </div>
    )
}

export default Home;