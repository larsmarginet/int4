import React, { useState, useEffect } from "react";
import RegularBtn from "./assets/button.svg"
import RegularBtnPressed from "./assets/buttonPressed.svg"
import home from "./assets/home.svg"
import homePress from "./assets/homePress.svg"
import character from "./assets/character.svg"
import characterPress from "./assets/characterPress.svg"
import square from "./assets/squareButton.svg"
import squarePress from "./assets/squareButtonPress.svg"
import smallSquare from "./assets/smallSquare.svg"
import smallSquarePress from "./assets/smallSquarePress.svg"
import style from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = ({ height, width, button, content, action, link}) => {
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
    } else if (button === "smallSquare") {
        buttonUnpressed = smallSquare;
        buttonPressed = smallSquarePress;
    }
    
    useEffect(() => {
        return () => {
          setPress(false)
        }
      }, [press])

    if (link) {
        return (
            <div style={{height: height, width: width}}> 
                <Link to={link} onClick={() => {
                    setPress(true);
                    setTimeout(() => { setPress(false); }, 100);
                    if(action) {setTimeout(() => {action()}, 100)}
                }} 
                className={`${style.button} ${press ? style.press : ""}`}>
                    <img alt="button" src={press ? buttonPressed : buttonUnpressed}/> <span className={style.text}>{content}</span>
                </Link>
            </div>
        )
    } else {
        return (
            <div style={{height: height, width: width}}>
                <button onClick={() => {
                        setPress(true);
                        setTimeout(function() { setPress(false); }, 100);
                        if(action) {setTimeout(() => {action()}, 100)}
                    }} 
                    className={`${style.button} ${press ? style.press : ""}`}><img alt="button" src={press ? buttonPressed : buttonUnpressed}/> <span className={style.text}>{content}</span></button>
            </div>
        )
    }
}

export default Button;