import React from "react";
import style from "./Characters.module.css";
import Snake from "../../Games/Snake/SnakeGame"


const Characters = () => {
    return (
        <section className={style.wrapper}>
          <Snake />
        </section>
    )
}

export default Characters;