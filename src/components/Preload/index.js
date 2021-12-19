import React from "react";
import { useApp } from "../../contexts/app";
import "./style.css";

function Preload(){
    const {loading} = useApp();
    return (
        <div className={!loading ? "container-preload" : "container-preload active"} />)
}

export default Preload;