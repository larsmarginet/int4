import React from "react";
import style from "./Characters.module.css";
import Barricade from "../../Games/Barricade/Barricade"


const Characters = () => {
    return (
        <section className={style.wrapper}>
          <Barricade />
        </section>
    )
}

export default Characters;