import React from "react";
import style from "./Character.module.css";
import { useStore } from "../../../hooks/UseStore";
import Button from "../../Ui/Button/Button";
import { useParams, useHistory } from "react-router-dom";

const Character = () => {
    let {id} = useParams();
    const history = useHistory();
    const store = useStore();
    const character = store.arts[0].resolveCharacter(id);
    return (
        <main className={style.wrapper}>
            <section className={style.bar}>
                <div className={style.button}>
                    <Button
                        action={() => history.goBack()}
                        button={"square"} 
                        content={
                            <img className={style.back} alt="arrow" src="../assets/arrow.svg" />
                        } 
                        height={86}
                        width={92}/>
                </div>
                <h2 className={style.title}>{character.name}</h2>
            </section>
            <p className={style.subTitle}>{character.title}</p>
            <section className={style.content}>
                <h2 style={{display: "none"}}>Overzicht</h2>
                <div>
                    <img className={style.pic} src={`../assets/${character.pic}.svg`} alt={character.name} />
                </div>
                <article className={style.info}>
                    <h3 style={{display: "none"}}>Info</h3>
                    <blockquote >
                        <p className={style.quote} >{character.quote}</p>
                        <footer>-{character.name}</footer>
                    </blockquote>
                    <p className={style.secretsTitle}>Geheimen</p>
                    <ul className={style.secrets}>
                    {character.secrets.map((secret, index) => (
                        <li className={style.secretsItem} key={index}>{secret}</li>
                    ))}
                    </ul> 
                </article>
            </section>
        </main>
    )
}

export default Character;