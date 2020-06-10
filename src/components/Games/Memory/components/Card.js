import React from "react";
import Image from "./Image";
import style from "./Card.module.css"

export default function Card({imageURL, isFlipped, onClick}) {
	return <div className={style.cardContainer} onClick={onClick}>
                <div className={`${style.card} ${isFlipped ? style.flipped : ""}`}>
                    <Image className={`${style.side} ${style.front}`} src={imageURL}/>
                    <div className={`${style.side} ${style.back}`}></div>
                </div>
	        </div>;
}