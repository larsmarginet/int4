import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../../hooks/UseStore";
import style from "./Navigation.module.css";
import Button from "../Button/Button";

const Navigation = ({ title, image }) => {
    const store = useStore();
    return (
        <nav className={style.navigation}>
            <ul className={style.navigationLeft}>
                <li className={style.link}>
                    <Link to="/" >
                        <Button
                            pressed={"homePress"}
                            unpress={"home"} 
                            height={56}
                            width={49}/>        
                    </Link>
                </li>
                <li>
                    <Link to="characters">
                        <Button
                            pressed={"characterPress"}
                            unpress={"character"} 
                            height={49}
                            width={47}/>        
                    </Link>
                </li>
            </ul>
            <div className={style.titleWrapper}>
                <h1 className={style.title}>{title}</h1>
                <img className={style.titleImg} src={`./assets/${image}.svg`} alt={title}/>
            </div>
            <div className={style.profile}>
                <div className={style.moneyWrapper}><p>€1000</p></div>
                <div className={style.avatarWrapper}><img className={style.avatar} src={`./assets/${store.avatar}.svg`} alt={store.avatar}/></div>
            </div>
        </nav>
    )
}

export default Navigation;