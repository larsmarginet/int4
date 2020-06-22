import React from "react";
import { useStore } from "../../../hooks/UseStore";
import style from "./Navigation.module.css";
import Button from "../Button/Button";
import { useObserver } from "mobx-react-lite";
import { Link } from "react-router-dom"

const Navigation = ({ title, characters }) => {
    const store = useStore();
    return useObserver(() => (
        <nav className={style.navigation}>
            <ul className={style.navigationLeft}>
                
                <li className={style.link}>
                    
                        <Button
                            link={"/"}
                            button={"home"} 
                            height={56}
                            width={49}/>        
                    
                </li>
                {characters ? <li>
                        <Button
                            link={"/Characters"}
                            button={"character"}
                            height={49}
                            width={47}/>        
                    
                </li> : ""}
                
            </ul>
            <div className={style.titleWrapper}>
                <h1 className={style.title}>{title}</h1>
            </div>
            <div className={style.profile}>
                <div className={style.moneyWrapper}>
                    <img className={style.coin} src={`./assets/coin.svg`} alt="munt"/>
                    <p className={style.money}>{store.money}</p>    
                </div>
                <Link to="/avatar" className={style.avatarWrapper}><img className={style.avatar} src={`./assets/${store.avatar}.svg`} alt="avatar"/></Link>
            </div>
        </nav>
    ))
}

export default Navigation;