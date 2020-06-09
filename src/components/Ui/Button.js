import React, { useState } from "react";

import style from "./Button.module.css";

const Button = ({width, height, content}) => {
    const [press, setPress] = useState(false);
    const adaptiveStyle = {
        width: width, 
        height: height
    }
    return (
        <button style={adaptiveStyle}
            onClick={() => {
                setPress(true);
                setTimeout(function() { setPress(false); }, 50);
            }} 
            className={`${style.button} ${press ? style.buttonPressed : style.buttonUnpressed}`}>{content}</button>
    )
}

export default Button;