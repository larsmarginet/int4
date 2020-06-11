import React, { useState } from "react";
import RegularBtn from "./button.svg"
import RegularBtnPressed from "./buttonPressed.svg"
import home from "./home.svg"
import homePress from "./homePress.svg"
import character from "./character.svg"
import characterPress from "./characterPress.svg"
import square from "./squareButton.svg"
import squarePress from "./squareButtonPress.svg"

import style from "./Button.module.css";

const Button = ({ height, width, button, content, action}) => {
    const [press, setPress] = useState(false);
    let buttonUnpressed = RegularBtn;
    let buttonPressed = RegularBtnPressed;
    if (button === "button") {
        buttonUnpressed = RegularBtn;
        buttonPressed = RegularBtnPressed
    } else if (button === "home") {
        buttonUnpressed = home;
        buttonPressed = homePress
    } else if (button === "character") {
        buttonUnpressed = character;
        buttonPressed = characterPress
    } else if (button === "square") {
        buttonUnpressed = square;
        buttonPressed = squarePress;
    }

    return (
        <div style={{height: height, width: width}}>
        <button onClick={() => {
                    setPress(true);
                    setTimeout(function() { setPress(false); }, 100);
                    if(action) {action()}
                }} 
                className={`${style.button} ${press ? style.press : ""}`}><img alt="button" src={press ? buttonPressed : buttonUnpressed}/> <span className={style.text}>{content}</span></button>
        </div>)
}

export default Button;