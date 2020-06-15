import React, { useRef, useState }from "react";
import Lottie from 'react-lottie'
import useSound from 'use-sound';
import { useStore } from '../../../hooks/UseStore';
import useWindowSize from "../../../hooks/useWindowSize";
import { useHistory } from 'react-router-dom';
import style from "./ChapterOne.module.css";
import Button from '../../Ui/Button/Button';
//import AnimatedText from '../../Ui/AnimatedText/AnimatedText';
import * as buildingAnimation from "./building.json";
import * as pigeonAnimation from "./pigeon.json";
import * as lightsAnimation from "./lights.json";
import * as mapAnimation from "./map.json";
import pigeonSound from './pigeon.mp3';
import SecretCode from "../../Games/SecretCode/SecretCode";


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
    const [notification, setNotification] = useState(false);
    const [pigeonText, setPigeonText] = useState(false);
    const [pastorText, setPastorText] = useState(false);
    const [dyckText, setDyckText] = useState(false);
    const [pigeonGameText, setPigeonGameText] = useState(false);
    const [posFirst, setPosFirst] = useState(2000);
    const [posSecond, setPosSecond] = useState(7000);
    const [posThird, setPosposThird] = useState(13600);
    // const [ani, setAni] = useState(true);
    // const [anim, setAnim] = useState(true);

    const scroll = (e) => {
        const container = e.currentTarget.scrollLeft;
        console.log(container);
        if (container > 0 && container < 700) {
            //setAni(false)
        } 
        if (container > 750 && container < 2250) {
            building.current.anim.goToAndStop(container-750); 
        } 
        if (container > 2250 && container < 4850) {
            setPosFirst(container);
        } 
        if (container > 7500 && container < 10000) {
            setPosSecond(container);
        } 
        if (container > 10000 && container < 11000) {
            //setAnim(false)
        } 
        if (container > 11500 && container < 13600) {
            pigeon.current.anim.goToAndStop((container-11500)*2); 
        }
        if (container > 13600 && container < 16000) {
            setPosposThird(container)
        } 
        if (container > 17000 && container < 19000) {
            map.current.anim.goToAndStop((container-17000)*2.5); 
        } 
    }

    return (
        <section className={style.wrapper} onScroll={e => scroll(e)}>
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
                {notification ?  <div className={style.notification}>
                        <img className={style.coin} src={`./assets/coin.svg`} alt="munt"/>
                        <p> +500</p>
                </div> : null}
               
                <p className={style.title}>
                    <svg className={style.titleBar} width="345" height="19" viewBox="0 0 345 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.294922 7.63197L344.295 0.000175428L332.288 19H0.294922V7.63197Z" fill="#FFF1F0"/>
                    </svg>
                    <span>Kortrijk</span>
                    <span>1630</span>
                </p>
                <div className={style.textWrapper}>
                    Op een mooie maandagmorgen wordt de Kortrijkse bevolking wakker. Het zijn de klokken van de Onze-Lieve-Vrouwekerk die door de straten weerklinken.
                    {/* <AnimatedText paused={ani} text={"Op een mooie maandagmorgen wordt de Kortrijkse bevolking wakker. Het   zijn de klokken van de Onze-Lieve-   Vrouwekerk die door de straten      weerklinken."}/> */}
                </div>
                <div className={style.pigeonWrapper}>
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
                        }} alt="duif" src="./assets/duif.svg"/>
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
                <div style={{position: "relative", height:"100%", width: (height * 5.2)}}>
                    <object className={style.layer2} data='./assets/kerk.svg' aria-labelledby="kerk" style={{height: "100%", top: 0, left: ((posFirst/10)-500)}}></object>
                    <object className={style.layer1} data='./assets/BG.svg' aria-labelledby="stad" style={{height: "100%", marginLeft: -2000}}></object>
                </div>
                <div style={{position: "relative", height:"100%", width: (height * 2)}}>
                    <object className={style.layer2} data='./assets/pastoorWelkSchilderij.svg' aria-labelledby="pastoor" style={{height: "100%", top: 0, left: 0, transform: `translateX(${((posSecond/10)-900)}px)`, zIndex: 99}}></object>
                    <object className={style.layer1} data='./assets/welkSchilderij.svg' aria-labelledby="keuze maken" style={{height: "100%", zIndex: 98}}></object>
                </div >
                <object data='./assets/schrijven.svg' style={{height: "100%", marginLeft: "-70rem"}} aria-labelledby="schrijven"></object>
                <div className={style.letter} style={{width: (height * 3)}}>
                <div className={style.textWrapper}>
                    Via een witte duif stuurt Roger zijn boodschap de lucht in. De duif maakt zijn reis richting Antwerpen.
                    {/* <AnimatedText paused={anim} text={"Via een witte duif stuurt Roger zijn  boodschap de lucht in. De duif      maakt zijn reis richting Antwerpen."}/> */}
                </div>
                    <Lottie ref={pigeon} height={'100%'} width={1000} style={{marginLeft: "20rem", marginRight: 0}} options={{
                        loop: false,
                        autoplay: false,
                        animationData: pigeonAnimation.default,
                    }}/>
                </div>
                <div style={{position: "relative", height:"100%", marginLeft: -50, width: (height * 3.8)}}>
                    <div className={`${style.layer3} ${style.dyckWrapper}`} style={{height: "100%", bottom: 0, left: 0, transform: `translateX(${((posThird/7)-1110)}px)`}}>
                        {dyckText ? <div className={`${style.textBalloon} ${style.textBalloonBigMargin}`}>
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
                        <img onClick={() => setDyckText(true)} className={dyckText ? "" : style.glow} style={{marginTop: -250, width: "100%"}}  src='./assets/vanDyckEzel.svg' alt="Van Dyck"/>
                        {/* <object data='./assets/vanDyckEzel.svg' className={style.layer3} style={{height: "60%"}} aria-labelledby="Van Dyck" ></object> */}
                    </div>
                    <object className={style.layer2} data='./assets/gebouwenAntwerpen.svg' aria-labelledby="Antwerpen" style={{height: "80%", top: 0, left: 0, transform: `translateX(${((posThird/15)-870)}px)`}}></object>
                    <object className={style.layer1} data='./assets/BG3.svg' aria-labelledby="stad" style={{height: "100%"}}></object>
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
            </div>
        </section>
    )
}

export default ChapterOne;