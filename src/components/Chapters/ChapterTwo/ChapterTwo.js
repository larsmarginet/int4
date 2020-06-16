import React, { useRef, useState }from "react";
import Lottie from 'react-lottie';
import { useStore } from '../../../hooks/UseStore';
import useWindowSize from "../../../hooks/useWindowSize";
import { useHistory } from 'react-router-dom';
import style from "./ChapterTwo.module.css";
import Button from '../../Ui/Button/Button';
import * as armyAnimation from "./assets/army.json";

const ChapterTwo = () => {
    const store = useStore();
    const history = useHistory();
    if(store.arts[0].levels[1].unlocked === false) {
        history.push('/');
    } 
    const {height} = useWindowSize();
    const army = useRef();
    const [churchText, setChurchText] = useState(false);

    const scroll = (e) => {
        const container = e.currentTarget.scrollLeft;
        //console.log(container);
            
        if (container > (height * .49) && container < (height * 3.086)) {
            army.current.anim.goToAndStop((container*1.2)-(height * .49)); 
        } 
    }
    
    return (
        <section className={style.wrapper} onScroll={e => scroll(e)}>
        <h2 style={{display: "none"}}>Deel 2</h2>
            <div className={style.story} style={{width: (height * 27)}}>
                <div className={style.button}>
                    <Button
                        action={() => history.goBack()}
                        button={"square"} 
                        content={
                            <svg className={style.back} width="71" height="36" viewBox="0 0 71 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38.0377 22.7673L0.239083 26.7291L2.9839 7.83182L40.4752 10.5751L40.4752 0.211637L70.6504 16.3664L38.0377 35.874L38.0377 22.7673Z" fill="#FFDD66"/>
                            </svg>
                        } 
                        height={86}/>
                </div>
                <p className={style.title}>
                    <svg className={style.titleBar} width="345" height="19" viewBox="0 0 345 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.294922 7.63197L344.295 0.000175428L332.288 19H0.294922V7.63197Z" fill="#FFF1F0"/>
                    </svg>
                    <span>Kortrijk</span>
                    <span>1792</span>
                </p>
                <div className={style.textWrapper}>
                    <p>Het is oorlog. De streken rond Kortrijk worden opgeschrikt door het Franse leger. Met honderden marcheren ze door de velden richting Kortrijk. Ze hopen daar hun plundertocht verder te kunnen zetten.</p>
                </div>
                <Lottie ref={army} height={'100%'} width={"240rem"} style={{margin: 0}} options={{
                        loop: false,
                        autoplay: false,
                        animationData: armyAnimation.default,
                }}/>
                 <div style={{position: "relative", height:"100%", width: (height * 3)}} className={style.pigeonWrapper}>
                    {churchText ? <div className={style.textBalloon}>
                    <Button
                        action={() => setChurchText(false)}
                        button={"smallSquare"} 
                        content={
                            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.5823 12.6137L25.4564 3.73956L22.3246 0L14.1129 9.94926L13.9639 9.75904L5.10174 0.896906L2.48223 4.48262L11.2895 12.3167L11.1478 12.4324L0 22.3244L4.2779 24.9181L13.7057 15.0999L13.7826 15.1936L22.4289 25.1155L26.6778 22.5858L16.3606 12.8016L16.5823 12.6137Z" fill="white"/>
                            </svg>
                        } 
                        height={43}
                        width={45}/>
                        <p className={style.textBalloonContentSmall}>Ik ben Napoleon, bevelhebber en heerser van Frankrijk.Veldslagen, en rooftochten zijn voor mij dagelijkse kost. Mijn allergrootste droom is het stichten van het grootste museum van Frankrijk. Met een groot museum word ik hopelijk niet meer uitgelachen met mijn kleine gestalte...</p>
                    </div> : <div className={style.spacer}></div>}
                    <img className={ churchText ? "" : style.glow } onClick={() => setChurchText(true)} alt="duif" style={{left: 0, bottom: 0, position: "absolute", zIndex: 2}} src="./assets/napoleon.svg"/>
                    <object aria-label="kerk" className={style.layer1} style={{ height: "100%"}} data="./assets/beelden.svg"></object>
                </div>
            </div>
        </section>
    )
}

export default ChapterTwo;