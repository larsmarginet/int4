import React, { useState } from 'react';
import useSound from 'use-sound';
import useWindowSize from "../../../hooks/useWindowSize";
import MacroMap from "../../Maps/MacroMap/MacroMap";
import { useStore } from '../../../hooks/UseStore';
import Button from "../../Ui/Button/Button";
import style from "./Overview.module.css";
import pigeonSound from '../../Chapters/assets/pigeon.mp3';
  
const Overview = () => {
  const {width, height} = useWindowSize();
  const store = useStore();
  const [pigeonText, setPigeonText] = useState(false);
  const [play] = useSound(pigeonSound);
  return (
        <main style={{ overflow: 'scroll', width: '100%', height: (height-80)}}>
            <h2 style={{display: "none"}}>Overzicht De Kruisoprichting</h2>
            {store.arts[0].levels[0].unlocked === false ?  
            <div style={{zIndex: 6}} className={style.pigeonWrapper}>
                {pigeonText ? <div className={style.textBalloon}>
                <Button
                    action={() => setPigeonText(false)}
                    button={"smallSquare"} 
                    content={
                        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.5823 12.6137L25.4564 3.73956L22.3246 0L14.1129 9.94926L13.9639 9.75904L5.10174 0.896906L2.48223 4.48262L11.2895 12.3167L11.1478 12.4324L0 22.3244L4.2779 24.9181L13.7057 15.0999L13.7826 15.1936L22.4289 25.1155L26.6778 22.5858L16.3606 12.8016L16.5823 12.6137Z" fill="white"/>
                        </svg>
                    } 
                    height={43}
                    width={45}/>
                    <p className={style.textBalloonContent}>De postduif is onderweg met kaartje 1!  Morgen mag je het in je brievenbus verwachten. </p>
                </div> : ""}
                <img style={{ position: "absolute", right: 0, bottom: 0}} className={ pigeonText ? "" : style.glow } onClick={() => {
                    play()
                    setPigeonText(true)
                    }} alt="duif" src="./assets/postduif.svg"/>
            </div> : ""}
            <MacroMap width={width} height={height}/>
        </main>
    )
}

export default Overview;