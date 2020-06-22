import React, { useRef, useState }from "react";
import useSound from 'use-sound';
import Lottie from 'react-lottie';
import { useStore } from '../../../hooks/UseStore';
import useWindowSize from "../../../hooks/useWindowSize";
import { useHistory } from 'react-router-dom';
import style from "./ChapterTwo.module.css";
import Levels from "../assets/Levels/Levels";
import Button from '../../Ui/Button/Button';
import Barricade from '../../Games/Barricade/Barricade';
import Progress from "../assets/Progress/Progress";
import pigeonSound from '../assets/pigeon.mp3';
import * as swipeAnimation from "../assets/swipe.json";
import * as armyAnimation from "./assets/army.json";
import * as mapAnimation from "./assets/map.json";
import * as paperAnimation from "./assets/krant.json";

const ChapterTwo = () => {
    const store = useStore();
    const history = useHistory();
    if(store.arts[0].levels[1].unlocked === false) {
        history.push('/');
    } 
    const {height} = useWindowSize();
    const [play] = useSound(pigeonSound);
    const army = useRef();
    const map = useRef();
    const paper = useRef();
    const [chapter, setChapter] = useState(1);
    const [swipe, setSwipe] = useState(true);
    const [churchText, setChurchText] = useState(false);
    const [pigeonGameText, setPigeonGameText] = useState(false);
    const [posFirst, setPosFirst] = useState(0);
    const [posSecond, setPosSecond] = useState(0);
    const [posThird, setPosThird] = useState(0);
    const [posFourth, setPosFourth] = useState(0);
    const [posFifth, setPosFifth] = useState(0);

    const scroll = (e) => {
        const container = e.currentTarget.scrollLeft;
        // console.log(container);
        if (container > (height * 0) && container < (height * .2)) {
            setChapter(1)
            setSwipe(false)
        } 
        if (container > (height * .49) && container < (height * 3.086)) {
            army.current.anim.goToAndStop((container*1.2)-(height * .49)); 
        }
        if (container > (height * 3.086) && container < (height * 6.6)) {
            setPosFirst(container-(height * 3.086));
        }
        if (container > (height * 6.6) && container < (height * 6.7)) {
            setChapter(2)
        } 
        if (container > (height * 8.1) && container < (height * 10.8)) {
            setPosSecond(container-(height * 8.1));
        }
        if (container > (height * 14.06) && container < (height * 15.5)) {
            setPosThird(container-(height * 14.06));
        }
        if (container > (height * 15.5) && container < (height * 17.5)) {
            map.current.anim.goToAndStop(((container)-(height * 15.5))*2); 
        }
        if (container > (height * 17.6) && container < (height * 17.7)) {
            setChapter(3)
        } 
        if (container > (height * 20.96) && container < (height * 22.5)) {
            setPosFourth(container-(height * 20.96));
        }
        if (container > (height * 22.6) && container < (height * 22.7)) {
            setChapter(4)
        } 
        if (container > (height * 22.7) && container < (height * 26.3)) {
            setPosFifth(container-(height * 22.7));
        }
        if (container > (height * 26.3) && container < (height * 26.4)) {
            setChapter(5)
        } 
        if (container > (height * 26.4) && container < (height * 28.7)) {
            paper.current.anim.goToAndStop(((container)-(height * 26.4))*3);
        }
    }
    
    return (
        <main className={style.wrapper} onScroll={e => scroll(e)}>
        <h2 style={{display: "none"}}>Deel 2</h2>
            <div className={style.story} style={{width: (height * 33)}}>
                <div className={style.button}>
                    <Button
                        action={() => history.push('/overview')}
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
                    <span>1792</span>
                </p>
                <div className={style.textWrapper}>
                    <p>Het is oorlog. De streken rond Kortrijk worden opgeschrikt door het Franse leger. Met honderden marcheren ze door de velden richting Kortrijk. Ze hopen daar hun plundertocht verder te kunnen zetten.</p>
                </div>
                <Lottie ref={army} height={'100%'} width={"240rem"} style={{margin: 0, zIndex: 2}} options={{
                        loop: false,
                        autoplay: false,
                        animationData: armyAnimation.default,
                }}/>
                <div style={{position: "relative", height:"100%", width: (height * 4.9)}} >
                    <div className={style.churchWrapper} style={{left: 0, top: 0, position: "absolute", transform: `translateX(${(posFirst/7)+400}px)`, zIndex: 3}}>
                        {churchText ? <div style={{marginLeft: "20rem"}} className={style.textBalloon}>
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
                        <img className={ churchText ? "" : style.glow } onClick={() => setChurchText(true)} style={{marginTop: -180, height: "80%"}} alt="napoleon" src="./assets/napoleon.svg"/>
                    </div>
                    <object aria-label="kerk" className={style.layer2} style={{pointerEvents: 'none', height: "100%", transform: `translateX(${posFirst/15}px)`}} data="./assets/beelden.svg"></object>
                    <object className={style.layer1} data='./assets/bel2.svg' aria-label="stad" style={{height: "30%",top: 0, marginLeft: 350}}></object>
                    <object aria-label="stad" className={style.layer1} style={{pointerEvents: 'none', height: "100%", left: 0, top: 0, transform: 'translateX(-800px)'}} data="./assets/BG4.svg"></object>
                </div>
                <div style={{position: "relative", height:"100%", width: (height * 2.1)}} >
                    <object aria-label="napoleon" className={style.layer2} style={{ height: "50%", bottom: 0, transform: `translateX(${(posSecond/7)+400}px)`}} data="./assets/napoleon2.svg"></object>
                    
                    <object aria-label="kerk" className={style.layer1} style={{ height: "100%", left: 0, top: 0}} data="./assets/kerkBeelden.svg"></object>
                </div>
                <div className={style.pigeonGameWrapper}>
                    {pigeonGameText ? <div className={style.textBalloon}>
                    <Button
                        action={() => setPigeonGameText(false)}
                        button={"smallSquare"} 
                        content={
                            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.5823 12.6137L25.4564 3.73956L22.3246 0L14.1129 9.94926L13.9639 9.75904L5.10174 0.896906L2.48223 4.48262L11.2895 12.3167L11.1478 12.4324L0 22.3244L4.2779 24.9181L13.7057 15.0999L13.7826 15.1936L22.4289 25.1155L26.6778 22.5858L16.3606 12.8016L16.5823 12.6137Z" fill="white"/>
                            </svg>

                        } 
                        height={43}
                        width={45}/>
                        <p className={style.textBalloonContent}>Bescherm de kerk tegen dief Napoleon! Kies telkens de beste optie om Napoleon buiten te houden. Kaartje 2 geeft je enkele tips!</p>
                    </div> : <div className={style.spacer}></div>}
                    <img className={ pigeonGameText ? "" : style.glow } onClick={() => {
                        play()
                        setPigeonGameText(true)
                        }} alt="duif" src="./assets/duif.svg"/>
                </div>
                <Barricade style={{height: "100%"}}/>
                <div style={{position: "relative", height:"100%", width: (height * 3.5), marginLeft: "-10rem"}} >
                    <object aria-label="napoleon" className={style.layer4} style={{ height: "90%", bottom: 0, transform: `translateX(${(posThird/7)+1200}px)`}} data="./assets/napoleon3.svg"></object>
                    <div className={style.parallaxTextWrapper}>
                        <p>Napoleon geraakt toch binnen.</p>
                        <p>Zijn troepen plunderen de kerk en nemen naast andere kunstwerken ons gekende schilderij mee. Op zijn paard vertrekt Napoleon richting Parijs. </p>
                    </div>
                    <object aria-label="stad" className={style.layer3} style={{ height: "100%", transform: `translateX(${(posThird/15)}px)`}} data="./assets/BG5.svg"></object>
                    <object aria-label="stad" className={style.layer2} style={{ height: "100%", transform: `translateX(${(posThird/25)}px)`}} data="./assets/BG6.svg"></object>
                    <object aria-label="wolken" className={style.layer1} style={{ height: "20%", left: 400, top: 20}} data="./assets/clouds.svg"></object>
                </div>
                <Lottie ref={map} height={'100%'} width={"160rem"} style={{marginLeft: "-25rem", marginRight: 0, zIndex: 3}} options={{
                        loop: false,
                        autoplay: false,
                        animationData: mapAnimation.default,
                }}/>
                 <div style={{position: "relative", height:"100%", marginLeft: "-50rem", zIndex: 2, width: (height * 5)}} >
                    <object aria-label="napoleon" className={style.layer2} style={{ height: "50%", bottom: 0, transform: `translateX(${(posFourth/7)+3100}px)`}} data="./assets/napoleon2.svg"></object>
                    <object aria-label="galerij" className={style.layer1} style={{ height: "100%", left: 0, top: 0}} data="./assets/galerij.svg"></object>
                </div>

                <div style={{position: "relative", height:"100%", width: (height * 5)}} >
                    <object aria-label="parijs" className={style.layer2} style={{ height: "90%", bottom: 50, transform: `translateX(${(posFifth/15)+750}px)`}} data="./assets/parijs.svg"></object>
                    <object aria-label="stad" className={style.layer1} style={{ height: "100%", left: 0, top: 0}} data="./assets/BG7.svg"></object>
                </div>

                <Lottie ref={paper} height={'100%'} width={height * 2.1} style={{marginLeft: "-25rem", marginRight: 0, zIndex: 3}} options={{
                        loop: false,
                        autoplay: false,
                        animationData: paperAnimation.default,
                }}/>
                <div className={style.great}>
                    <p className={style.greatTitle}>Geweldig!</p>
                    <div className={style.greatContentWrapper}>
                        <p>Je hebt verhaal</p>
                        <img className={style.greatNumber} src="./assets/2.svg" alt="2" />
                        <p>volbracht!</p>
                    </div>
                    <Levels  level={2}/>
                </div>
                <div className={style.next}>
                    <p className={style.nextTitle}>Een nieuwe postkaart is onderweg!</p>
                    <div className={style.nextCardWrapper}>
                        <img className={style.nextNumber} src="./assets/3red.svg" alt="drie" />
                        <img className={style.nextCard} src='./assets/card.svg' alt="kaartje" />
                    </div>
                    <Button
                        action={() => {
                            history.push("/overview")
                            store.arts[0].levels[1].setDone();
                            store.update()
                        }} 
                        button={"button"} 
                        content={<span className={style.btnText}>Naar overzicht</span>} 
                        height={86}/>
                </div>
            </div>
        </main>
    )
}

export default ChapterTwo;