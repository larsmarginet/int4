import React, { useState } from "react";
import style from "./ChapterOne.module.css";
import AnimatedText from '../../Ui/AnimatedText/AnimatedText';


const ChapterOne = () => {
    const [anim, setAnim] = useState(true);
    let test = {}
    const scroll = e => {
        const container = e.currentTarget.scrollLeft;
        console.log(container);
        if (container > 520) { 
            setAnim(false);
         }
    }
    return (
        <section className={style.wrapper} onScroll={e => scroll(e)}>
            <div className={style.characters}>
                <p style={test} className={style.spacer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <AnimatedText paused={anim} text={"Hello world! It is me Lars"}/>
            </div>
        </section>
    )
}

export default ChapterOne;