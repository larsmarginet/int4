import React, { useState } from "react";

import style from "./Button.module.css";

const Button = ({ height, width, pressed, unpress, content, action}) => {
    console.log(pressed);
    const [press, setPress] = useState(false);

    return (
        <div style={{height: height, width: width}}>
        <button onClick={() => {
                    setPress(true);
                    setTimeout(function() { setPress(false); }, 100);
                    if(action) {action()}
                }} 
                className={`${style.button} ${press ? style.press : ""}`}><img alt="button" src={`./assets/${press ? pressed : unpress}.svg`}/> <span className={style.text}>{content}</span></button>
        </div>)
}

export default Button;