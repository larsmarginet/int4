import React from "react";
import style from "./Snake.module.css"

const Snake = ({snakeDots}) => {
    return (
       <div>
           {snakeDots.map((dot, i) => {
                const position = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`
                }
               return (
                   <div className={style.snakeDot} key={i} style={position}></div>
               )
           })}
       </div>
    )
}

export default Snake;