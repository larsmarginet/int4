import React, { useState } from "react";

import style from "./Button.module.css";

const Button = ({ height, pressed, unpress, content, action}) => {
    const [press, setPress] = useState(false);

    return (
        <div style={{height: height}}>
        <button onClick={() => {
                    setPress(true);
                    setTimeout(function() { setPress(false); }, 100);
                    if(action) {action()}
                }} 
                className={style.button}><img alt="button" src={`./assets/${press ? pressed : unpress}.svg`}/> <span className={style.text}>{content}</span></button>
        </div>)
}

export default Button;