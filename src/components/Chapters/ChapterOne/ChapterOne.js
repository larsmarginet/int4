import React, { useRef, useState }from "react";
import Lottie from 'react-lottie';
import useSound from 'use-sound';
import { useStore } from '../../../hooks/UseStore';
import useWindowSize from "../../../hooks/useWindowSize";
import { useHistory } from 'react-router-dom';
import style from "./ChapterOne.module.css";
import Button from '../../Ui/Button/Button';
import * as swipeAnimation from "../assets/swipe.json";
import * as buildingAnimation from "./assets/building.json";
import * as pigeonAnimation from "./assets/pigeon.json";
import * as lightsAnimation from "./assets/lights.json";
import * as mapAnimation from "./assets/map.json";
import pigeonSound from '../assets/pigeon.mp3';
import SecretCode from "../../Games/SecretCode/SecretCode";
import Levels from "../assets/Levels/Levels";
import Progress from "../assets/Progress/Progress";


const ChapterOne = () => {
    const store = useStore();
    const history = useHistory();
    if(store.arts[0].levels[0].unlocked === false) {
        history.push('/');
    } 
    const {height} = useWindowSize();
    const [play] = useSound(pigeonSound);
    const building = useRef();
    const pigeon = useRef();
    const map = useRef();
    const [chapter, setChapter] = useState(1);
    const [swipe, setSwipe] = useState(true);
    const [notification, setNotification] = useState(false);
    const [pigeonText, setPigeonText] = useState(false);
    const [pastorText, setPastorText] = useState(false);
    const [dyckText, setDyckText] = useState(false);
    const [pigeonGameText, setPigeonGameText] = useState(false);
    const [posFirst, setPosFirst] = useState(2000);
    const [posSecond, setPosSecond] = useState(7000);
    const [posThird, setPosposThird] = useState(13600);

    const scroll = (e) => {
        const container = e.currentTarget.scrollLeft;
        // console.log(container);
        if (container > (height * 0) && container < (height * .2)) {
            setChapter(1);
            setSwipe(false)
        } 
        if (container > (height * .94) && container < (height * 2.9297)) {
            building.current.anim.goToAndStop(container-750); 
        } 
        if (container > (height * 2.9297) && container < (height * 6.3151)) {
            setPosFirst(container);
        } 
        if (container > (height * 6.4) && container < (height * 6.5)) {
            setChapter(2)
        } 
        if (container > (height * 9.5) && container < (height * 12.3268)) {
            setPosSecond(container);
        } 
        if (container > (height * 12.4) && container < (height * 12.5)) {
            setChapter(3)
        } 
        if (container > (height * 14.6094) && container < (height * 17.29)) {
            pigeon.current.anim.goToAndStop((container-(height * 14.6094))*2); 
        }
        if (container > (height * 17.3) && container < (height * 17.4)) {
            setChapter(4)
        }
        if (container > (height * 17.4) && container < (height * 20.8333)) {
            setPosposThird(container)
        } 
        if (container > (height * 20.9) && container < (height * 21)) {
            setChapter(5)
        }
        if (container > (height * 22) && container < (height * 27.7396)) {
            map.current.anim.goToAndStop((container-(height * 22))*2.5); 
        } 
    }

    return (
        <section className={style.wrapper} onScroll={e => scroll(e)}>
            <h2 style={{display: "none"}}>Deel 1</h2>
            <div className={style.story} style={{width: (height * 30)}}>
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
                {notification ?  <div className={style.notification}>
                        <img className={style.coin} src={`./assets/coin.svg`} alt="munt"/>
                        <p> +500</p>
                </div> : null}
                <div className={style.swipe} style={swipe ? {pointerEvents: "none"} : {display: "none"}}>
                    <Lottie height={'100%'} width={'50rem'} isClickToPauseDisabled={true} style={{margin: 0, zIndex: 4, }} options={{
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        animationData: swipeAnimation.default,
                    }}/></div>
               <div className={style.progress} >
                   <Progress chapter={chapter}/>
               </div>
                <p className={style.title}>
                    <svg className={style.titleBar} width="345" height="19" viewBox="0 0 345 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.294922 7.63197L344.295 0.000175428L332.288 19H0.294922V7.63197Z" fill="#FFF1F0"/>
                    </svg>
                    <span>Kortrijk</span>
                    <span>1630</span>
                </p>
                <div className={style.textWrapper}>
                    <p>Op een mooie maandagmorgen wordt de Kortrijkse bevolking wakker. Het zijn de klokken van de Onze-Lieve-Vrouwekerk die door de straten weerklinken.</p>
                </div>
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
                        <p className={style.textBalloonContent}>Ik ben Thierry de tijdreizende duif, aangenaam!  Ik zal je alles vertellen over dit schilderij.  De afgelopen eeuwen heb ik het één en ander in de gaten kunnen houden!</p>
                    </div> : <div className={style.spacer}></div>}
                    <img className={ pigeonText ? "" : style.glow } onClick={() => {
                        play()
                        setPigeonText(true)
                        }} alt="duif" style={{zIndex: 6}} src="./assets/duif.svg"/>
                </div>
               
                <Lottie ref={building} height={'100%'} width={'250rem'} isClickToPauseDisabled={true} style={{marginLeft: "-10rem", marginRight: 0, zIndex: 4}} options={{
                    loop: false,
                    autoplay: false,
                    animationData: buildingAnimation.default,
                }}/>

                <div className={style.pastorWrapper} style={{ transform: `translateX(${((posFirst/10)-600)}px)`, zIndex: 55}}>
                    {pastorText ? <div className={`${style.textBalloon} ${style.textBalloonMargin}`}>
                    <Button
                        action={() => setPastorText(false)}
                        button={"smallSquare"} 
                        content={
                            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.5823 12.6137L25.4564 3.73956L22.3246 0L14.1129 9.94926L13.9639 9.75904L5.10174 0.896906L2.48223 4.48262L11.2895 12.3167L11.1478 12.4324L0 22.3244L4.2779 24.9181L13.7057 15.0999L13.7826 15.1936L22.4289 25.1155L26.6778 22.5858L16.3606 12.8016L16.5823 12.6137Z" fill="white"/>
                            </svg>
                        } 
                        height={43}
                        width={45}/>
                        <p className={style.textBalloonContentSmall}>Ik ben pastoor Roger. De Onze-Lieve-Vrouwekerk van Kortrijk is mijn thuis. Ik werk ondertussen al 15 jaar in deze prachtige kerk. Ik hou van mijn werk, want zo kan ik elke dag genieten van mijn kunstschatten. Ik zie de kunstwerken in mijn kerk als de  kinderen die ik nooit had.</p>
                    </div> : <div  className={style.spacer}></div>}
                    <img onClick={() => setPastorText(true)} className={pastorText ? "" : style.glow} style={{marginTop: -150}}  src='./assets/pastoor.svg' alt="pastoor"/>
                </div>
                
                <div className={style.textWrapper} style={{marginLeft: "-10rem"}}>
                    <p>Pastoor Roger staat vol trots voor zijn kerk. Er zit hem iets dwars. Er mist iets in zijn kerk maar hij weet niet goed wat... </p>
                </div>
                <div style={{position: "relative", height:"100%", width: (height * 5)}}>
                    <object className={style.layer2} data='./assets/kerk.svg' aria-label="kerk" style={{height: "100%", top: 0, left: ((posFirst/10)-500)}}></object>
                    <object className={style.layer1} data='./assets/BG.svg' aria-label="stad" style={{height: "100%", marginLeft: -2000}}></object>
                </div>
                <div style={{position: "relative", height:"100%", width: (height * 2)}}>
                    <object className={style.layer2} data='./assets/pastoorWelkSchilderij.svg' aria-label="pastoor" style={{height: "100%", top: 0, left: 0, transform: `translateX(${((posSecond/10)-900)}px)`, zIndex: 4}}></object>
                    <object className={style.layer1} data='./assets/welkSchilderij.svg' aria-label="keuze maken" style={{height: "100%", zIndex: 3}}></object>
                </div >
                <object data='./assets/schrijven.svg' style={{height: "100%", marginLeft: "-70rem"}} aria-label="schrijven"></object>
                <div className={style.letter} style={{width: (height * 3)}}>
                    <div className={style.textWrapper}>
                        <p>Via een witte duif stuurt Roger zijn boodschap de lucht in. De duif maakt zijn reis richting Antwerpen.</p>
                    </div>
                    <Lottie ref={pigeon} height={'100%'} width={1000} style={{marginLeft: "20rem", marginRight: 0}} options={{
                        loop: false,
                        autoplay: false,
                        animationData: pigeonAnimation.default,
                    }}/>
                </div>
                <div style={{position: "relative", height:"100%", marginLeft: -50, width: (height * 3.8)}}>
                    <div className={`${style.layer3} ${style.dyckWrapper}`} style={{height: "100%", bottom: 0, left: 0, transform: `translateX(${((posThird/7)-1110)}px)`, zIndex: 6}}>
                        {dyckText ? <div className={`${style.textBalloonReverse} ${style.textBalloonBigMargin}`}>
                        <Button
                            action={() => setDyckText(false)}
                            button={"smallSquare"} 
                            content={
                                <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.5823 12.6137L25.4564 3.73956L22.3246 0L14.1129 9.94926L13.9639 9.75904L5.10174 0.896906L2.48223 4.48262L11.2895 12.3167L11.1478 12.4324L0 22.3244L4.2779 24.9181L13.7057 15.0999L13.7826 15.1936L22.4289 25.1155L26.6778 22.5858L16.3606 12.8016L16.5823 12.6137Z" fill="white"/>
                                </svg>
                            } 
                            height={43}
                            width={45}/>
                            <p className={style.textBalloonContentSmall}>Ik ben Antoon van Dyck. Ik ben geboren en getogen in Antwerpen. Desserts zijn mijn allergrootste passie. Ik leef voor taarten, wafels en gebak. Men zegt dat ik een groots schilder ben. Ik maak schilderijen in ruil voor desserts. </p>
                        </div> : <div  className={style.spacer}></div>}
                        <img onClick={() => setDyckText(true)} className={dyckText ? "" : style.glow} style={{marginTop: -290, width: "100%", zIndex: 6}}  src='./assets/vanDyckEzel.svg' alt="Van Dyck"/>
                    </div>
                    <object className={style.layer2} data='./assets/gebouwenAntwerpen.svg' aria-label="Antwerpen" style={{height: "80%", top: 0, left: 0, transform: `translateX(${((posThird/15)-870)}px)`}}></object>
                    <object className={style.layer1} data='./assets/BG3.svg' aria-label="stad" style={{height: "100%"}}></object>
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
                        <p className={style.textBalloonContent}>Pastoor Roger heeft zijn geheime wafelrecept goed verstopt. Los het raadsel op van het eerste kaartje en open de kist. Help Pastoor Roger aan zijn schilderij!</p>
                    </div> : <div className={style.spacer}></div>}
                    <img className={ pigeonGameText ? "" : style.glow } onClick={() => {
                        play()
                        setPigeonGameText(true)
                        }} alt="duif" src="./assets/duif.svg"/>
                </div>
                <div className={style.secretCodeWrapper}>
                    <SecretCode notification={() => setNotification(true)}/>
                </div>
                <Lottie ref={map} height={'100%'} width={'180rem'} isClickToPauseDisabled={true} style={{margin: 0, zIndex: 55}} options={{
                    loop: false,
                    autoplay: false,
                    animationData: mapAnimation.default,
                }}/>
                <Lottie height={'100%'} width={'200rem'} isClickToPauseDisabled={true} style={{margin: 0, transform: 'scale(1.2) translateX(-400px)'}} options={{
                    loop: true,
                    autoplay: true,
                    animationData: lightsAnimation.default,
                }}/>
                <div className={style.great}>
                    <p className={style.greatTitle}>Geweldig!</p>
                    <div className={style.greatContentWrapper}>
                        <p>Je hebt verhaal</p>
                        <img className={style.greatNumber} src="./assets/1.svg" alt="1" />
                        <p>volbracht!</p>
                    </div>
                    <Levels  level={1}/>
                </div>
                <div className={style.next}>
                    <p className={style.nextTitle}>Een nieuwe postkaart is onderweg!</p>
                    <div className={style.nextCardWrapper}>
                        <img className={style.nextNumber} src="./assets/2red.svg" alt="twee" />
                        <img className={style.nextCard} src='./assets/card.svg' alt="kaartje" />
                    </div>
                    <Button
                        action={() => {
                            history.push("/overview")
                            store.arts[0].levels[0].setDone();
                        }} 
                        button={"button"} 
                        content={<span className={style.btnText}>Naar overzicht</span>} 
                        height={86}/>
                </div>
            </div>
        </section>
    )
}

export default ChapterOne;