import React from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.css";
import Button from '../../Ui/Button/Button';
import MemoryGame from '../../Games/Memory/MemoryGame';


const Home = () => {
    return (
        <section className={style.home}>
            <Link className={style.homeButton} to="camera">
                <Button
                    pressed={"buttonPress"}
                    unpress={"button"} 
                    content={<span className={style.btnText}>scan</span>} 
                    height={86}
                    width={305} />
            </Link>
            <MemoryGame />
        </section>
    )
}

export default Home;