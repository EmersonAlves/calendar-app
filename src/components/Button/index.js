import React from "react";
import "./style.css";

export function ButtonPrimary(props){
    return (<button className="btn btn-primary" {...props}>{props.children}</button>)
}

export function ButtonSecondary(props){
    return (<button className="btn btn-secondary" {...props}>{props.children}</button>)
}