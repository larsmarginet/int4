import React from "react";
import style from "./Food.module.css"

const Food = ({dot}) => {

    const position = {
        left: `${dot[0]}%`,
        top: `${dot[1]}%`
    }
   
    return (
       <div className={style.food} style={position}>
           
       </div>
    )
}

export default Food;