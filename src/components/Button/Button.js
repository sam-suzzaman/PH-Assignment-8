import React from "react";
import './button.css';

const Button=({btnName,btnHandler})=>{
    return(
        <button onClick={btnHandler}>{btnName}</button>
    )
}

export default Button;