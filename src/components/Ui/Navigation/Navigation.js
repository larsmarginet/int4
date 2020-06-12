import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../../hooks/UseStore";
import style from "./Navigation.module.css";
import Button from "../Button/Button";
import { useObserver } from "mobx-react-lite";

const Navigation = ({ title, image }) => {
    const store = useStore();
    return useObserver(() => (
        <nav className={style.navigation}>
            <ul className={style.navigationLeft}>
                <li className={style.link}>
                    <Link to="/" >
                        <Button
                            button={"home"} 
                            height={56}
                            width={49}/>        
                    </Link>
                </li>
                <li>
                    <Link to="/Characters">
                        <Button
                            button={"character"}
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
                <div className={style.moneyWrapper}><p>€ {store.money}</p></div>
                <div className={style.avatarWrapper}><img className={style.avatar} src={`./assets/${store.avatar}.svg`} alt={store.avatar}/></div>
            </div>
        </nav>
    ))
}

export default Navigation;