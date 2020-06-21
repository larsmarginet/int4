import React, {useState} from 'react';
import { useStore } from '../../../hooks/UseStore';
import useSound from 'use-sound';
import useWindowSize from "../../../hooks/useWindowSize";
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';
import Progress from "../assets/Progress/Progress";
import style from "./ChapterSeven.module.css";
import Button from '../../Ui/Button/Button';
import * as swipeAnimation from "../assets/swipe.json";
import pigeonSound from '../assets/pigeon.mp3';
import Levels from "../assets/Levels/Levels";
import Interrogation from "../../Games/Interrogation/Interrogation";

const ChapterSeven = () => {
    const store = useStore();
    const history = useHistory();
    const {height} = useWindowSize();
    if(store.arts[0].levels[6].unlocked === false) {
        history.push('/');
    } 
    const [play] = useSound(pigeonSound);

    const [chapter, setChapter] = useState(1);
    const [swipe, setSwipe] = useState(true);
    const [flikText, setFlikText] = useState(false);
    const [pigeonText, setPigeonText] = useState(false);
    const [posFirst, setPosFirst] = useState(height * .2);
    const [posSecond, setPosSecond] = useState(height * 28.7);

    const scroll = (e) => {
        const container = e.currentTarget.scrollLeft;
        console.log(container);
        if (container > (height * 0) && container < (height * .2)) {
            setChapter(1)
            setSwipe(false)
        } 
        if (container > (height * .2) && container < (height * 4.4)) {
            setPosFirst(container - (height * .2));
        } 
        if (container > (height * 4.5) && container < (height * 4.6)) {
            setChapter(2)
        } 
        if (container > (height * 11) && container < (height * 11.1)) {
            setChapter(3)
        }
        if (container > (height * 20) && container < (height * 20.1)) {
            setChapter(4)
        } 
        if (container > (height * 28.4) && container < (height * 28.5)) {
            setChapter(5)
        }   
        if (container > (height * 28.7) && container < (height * 31)) {
            setPosSecond(container - (height * 28.7));
        } 
    }
    
    return (
        <main className={style.wrapper} onScroll={e => scroll(e)}>
        <h2 style={{display: "none"}}>Deel 4</h2>
        <div className={style.story} style={{width: (height * 35)}}>
            <div className={style.button}>
                <Button
                    action={() => history.goBack()}
                    button={"square"} 
                    content={
                        <img src='./assets/mapIcon.svg' alt='terug naar kaart' />
                    } 
                    height={86}/>
            </div>
            <div className={style.swipe} style={swipe ? {pointerEvents: "none"} : {display: "none"}}>
                    <Lottie height={'100%'} width={'50rem'} isClickToPauseDisabled={true} style={{margin: 0, zIndex: 4}} options={{
                        loop: true,
                        autoplay: true,
                        animationData: swipeAnimation.default,
                    }}/></div>
            <div className={style.progress}>
                   <Progress chapter={chapter}/>
               </div>
            <p className={style.title}>
                <svg className={style.titleBar} width="345" height="19" viewBox="0 0 345 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.294922 7.63197L344.295 0.000175428L332.288 19H0.294922V7.63197Z" fill="#FFF1F0"/>
                </svg>
                <span>Kortrijk</span>
                <span>1907</span>
            </p>
            <div className={style.textWrapper}>
                <p>In het politiebureau is men druk aan het werk.</p>
            </div>
            <div style={{position: "relative", height:"100%", width: (height * 3.5)}}>
                <div className={`${style.layer4} ${style.flikWrapper}`} style={{height: "100%", bottom: 0, left: 0, transform: `translateX(${((posFirst/7)+1000)}px)`}}>
                    {flikText ? <div style={{marginLeft: "10rem"}} className={`${style.textBalloon}`}>
                    <Button
                        action={() => setFlikText(false)}
                        button={"smallSquare"} 
                        content={
                            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.5823 12.6137L25.4564 3.73956L22.3246 0L14.1129 9.94926L13.9639 9.75904L5.10174 0.896906L2.48223 4.48262L11.2895 12.3167L11.1478 12.4324L0 22.3244L4.2779 24.9181L13.7057 15.0999L13.7826 15.1936L22.4289 25.1155L26.6778 22.5858L16.3606 12.8016L16.5823 12.6137Z" fill="white"/>
                            </svg>
                        } 
                        height={43}
                        width={45}/>
                        <p className={style.textBalloonContent}>Ik ben Inspecteur Zwaantjens, hoofd van de Kortrijkse politie. Boeven pakken is mijn passie. Ik sta bekend in Kortrijk en omstreken voor mijn heldhaftigheid. </p>
                    </div> : <div  className={style.spacer}></div>}
                    <img onClick={() => setFlikText(true)} className={flikText ? "" : style.glow} style={{marginTop: -200, width: "40%", zIndex: 6}}  src='./assets/flik.svg' alt="directeur"/>
                </div>
                <p style={{width: "50rem", transform: 'translateX(2000px)', alignSelf: "center", position: "absolute", top: "55%", zIndex: 7, fontSize: "3rem"}}>Inspecteur Zwaantjens heeft het zeer druk. Er zijn namelijk 3 verdachten die allemaal moeten worden ondervraagd.</p>
                <object className={style.layer3} data='./assets/politieBureau.svg' aria-label="poltie bureau" style={{height: "90%", top: 20, left: 0, transform: `translateX(${((posFirst/15))}px)`}}></object>
                <object className={style.layer2} data='./assets/clouds2.svg' aria-label="wolken" style={{height: "30%", top: 20, left: 0, transform: `translateX(${((posFirst/20))-400}px)`}}></object>
                <object className={style.layer1} data='./assets/BG11.svg' aria-label="stad" style={{ bottom: 20, left: 0, height: "90%"}}></object>
            </div>
            <object data="./assets/mugshotCarlier.svg" style={{height: "100%", zIndex: 10}} aria-label="Carlier"></object>
            <img src="./assets/bricks.svg" style={{ marginLeft: "3rem", marginRight: "2rem", height: "100%"}} alt="muur" />
            <object data="./assets/mugshotBertrang.svg" style={{height: "100%"}}  aria-label="Bertrang"></object>
            <img src="./assets/bricks.svg" style={{marginLeft: "3rem", marginRight: "2rem", height: "100%"}} alt="muur" />
            <object data="./assets/mugshotSmid.svg" style={{height: "100%"}}  aria-label="Smid" ></object>
            <div>
                <img src="./assets/test.svg" alt="test" style={{height: "100%", marginLeft: "10rem"}}/>
            </div>
            <div style={{position: "relative", height:"100%", width: (height * 1.5)}}>
                <object  className={style.layer3} style={{height: "40%", top: 20, left: 200}} data="./assets/donut.svg" aria-label="donut"></object>
                <object  className={style.layer2} style={{height: "90%", top: -5, left: 350}} data="./assets/leugendetector.svg" aria-label="leugendetector"></object>
                <object  className={style.layer1} style={{height: "20%", bottom: 0, left: 0}} data="./assets/wood.svg" aria-label="hout"></object>
            </div>
            <div style={{position: "relative", height:"100%", width: (height * 6.2)}}>
                <div  className={style.pigeonWrapper}>
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
                        <p className={style.textBalloonContent}>Help inspecteur Zwaantjens met ondervragen. Klik op de vragen en let goed op de leugendetector! </p>
                    </div> : <div className={style.spacer}></div>}
                    <img className={ pigeonText ? "" : style.glow } onClick={() => {
                        play();
                        setPigeonText(true)
                        }} alt="duif" style={{zIndex: 6}} src="./assets/duif.svg"/>
                </div>
                <div className={style.layer2} style={{height: "100%", bottom: 0, right: "100rem"}}  >
                    <Interrogation person={"callier"} /> 
                </div>
                <object  className={style.layer1} style={{height: "100%", bottom: 0, left: 0}} data="./assets/ondervragingCallier.svg" aria-label="Callier"></object>
            </div>
            <div style={{position: "relative", height:"100%", width: (height * 4)}}>
                <div className={style.layer2} style={{height: "100%", bottom: 0, right: "80rem"}}  >
                    <Interrogation person={"betrang"} /> 
                </div>
                <object  className={style.layer1} style={{height: "100%", bottom: 0, left: 0}} data="./assets/ondervragingVerfmans.svg" aria-label="Verfmans"></object>
            </div>
            <div style={{position: "relative", height:"100%", width: (height * 5)}}>
                <div className={style.layer2} style={{height: "100%", bottom: 0, right: "140rem"}}  >
                    <Interrogation person={"smid"} /> 
                </div>
                <object  className={style.layer1} style={{height: "100%", bottom: 0, left: 0}} data="./assets/ondervragingSmid.svg" aria-label="Smid"></object>
            </div>
            <div style={{position: "relative", height:"100%", width: (height * 4), zIndex: 0}}>
                <img className={style.layer3} src='./assets/flik.svg' alt="flik" style={{height: "80%", bottom: 0, left: "80rem", transform: `translateX(${posSecond/10}px)`}}/>
                <div className={`${style.textBalloonBig} ${style.layer2}`}  style={{ bottom: 100, left: "110rem", transform: `translateX(${posSecond/10}px)`}}>
                    <p>Hmm... Dit waren zeer interessante getuigenissen.</p>
                    <p>De Smid leek wat onrustig. Carlier geraakte moeilijk uit zijn woorden. De antiquair leek wel erg op zijn gemak te zijn.</p>
                    <p>Morgen valt de eindbeslissing, ik zal er nog een nachtje over slapen... </p>
                </div>
                <object  className={style.layer1} style={{height: "60%", top: 10, left: 0}} data="./assets/BG12.svg" aria-label="Smid"></object>
            </div>
            <div className={style.great}>
                    <p className={style.greatTitle}>Geweldig!</p>
                    <div className={style.greatContentWrapper}>
                        <p>Je hebt verhaal</p>
                        <img className={style.greatNumber} src="./assets/7.svg" alt="7" />
                        <p>volbracht!</p>
                    </div>
                    <Levels level={7}/>
                </div>
                <div className={style.next}>
                    <p className={style.nextTitle}>Een nieuwe postkaart is onderweg!</p>
                    <div className={style.nextCardWrapper}>
                        <img className={style.nextNumber} src="./assets/8red.svg" alt="acht" />
                        <img className={style.nextCard} src='./assets/card.svg' alt="kaartje" />
                    </div>
                    <Button
                        action={() => {
                            history.push("/detailedOverview")
                            store.arts[0].levels[6].setDone();
                            store.update();
                        }} 
                        button={"button"} 
                        content={<span className={style.btnText}>Naar overzicht</span>} 
                        height={86}/>
                </div>
            </div>
        </main>
    )
}

export default ChapterSeven;