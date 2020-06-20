import React, {useState, useRef} from 'react';
import { useStore } from '../../../hooks/UseStore';
import { useObserver } from 'mobx-react-lite';
import useSound from 'use-sound';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';
import useWindowSize from "../../../hooks/useWindowSize";
import Levels from "../assets/Levels/Levels";
import Cards from "./assets/Cards/Cards";
import Progress from "../assets/Progress/Progress";
import Bar from "./assets/Bar/Bar";
import style from "./ChapterFour.module.css";
import Button from '../../Ui/Button/Button';
import moneySound from "../../Maps/HomeMap/sound.mp3";
import musicSound from "./assets/audio/audio.mp3";
import coinSound from "./assets/audio/coin.mp3";
import pigeonSound from '../assets/pigeon.mp3';
import * as willemAnimation from "./assets/Lottie/willem.json";
import * as swipeAnimation from "../assets/swipe.json";
import * as partyAnimation from "./assets/Lottie/party.json";
import SnakeGame from '../../Games/Snake/SnakeGame';


const ChapterFour = () => {
    const store = useStore();
    const history = useHistory();
    if(store.arts[0].levels[3].unlocked === false) {
        history.push('/');
    } 
    const {height} = useWindowSize();
    const [play] = useSound(moneySound);
    const [playCoin] = useSound(coinSound);
    const [playPigeon] = useSound(pigeonSound);
    const [playMusic, {stop}] = useSound(musicSound, {
        sprite: {
            rock: [0, 53000],
            DJ: [61000, 34000],
            flute: [97000, 41000],
            pop: [138000, 46000], 
        },
        onend: () => {
            setVinyl(false)
          },
      });

    const willem = useRef();
    const party = useRef();
    const [chapter, setChapter] = useState(1);
    const [swipe, setSwipe] = useState(true);
    const [notificationOne, setNotificationOne] = useState(false);
    const [notificationTwo, setNotificationTwo] = useState(false);
    const [pigeonGameText, setPigeonGameText] = useState(false);
    const [modal, setModal] = useState(false);
    const [vinyl, setVinyl] = useState(false);
    const [posFirst, setPosFirst] = useState(height * .4);
    const [posSecond, setPosSecond] = useState(height * 4.1);
    const [posThird, setPosThird] = useState(height * 12.7);
    const [directeurText, setDirecteurText] = useState(false);

    const scroll = (e) => {
        const container = e.currentTarget.scrollLeft;
        //console.log(container);
        if (container > (height * 0) && container < (height * .2)) {
            setChapter(1)
            setSwipe(false)
        } 
        if (container > (height * .4) && container < (height * 4.056)) {
            setPosFirst(container - (height * .4));
        } 
        if (container > (height * 4.1) && container < (height * 7.1)) {
            setPosSecond(container - (height * 4.1));
        } 
        if (container > (height * 7.1) && container < (height * 7.2)) {
            setChapter(2)
        } 
        if (container > (height * 12.7) && container < (height * 16)) {
            setPosThird(container - (height * 12.7));
        }
        if (container > (height * 16) && container < (height * 16.05)) {
            setChapter(3)
        } 
        if (container > (height * 16.05) && container <= (height * 16.9)) {
            willem.current.anim.goToAndStop(1);
        }
        if (container > (height * 17) && container < (height * 19.2)) {
            willem.current.anim.goToAndStop(((container)-(height * 17))*2.2);
        } 
        if (container > (height * 19.3) && container < (height * 19.4)) {
            setChapter(4)
        } 
        if (container > (height * 20) && container < (height * 21)) {
            party.current.anim.goToAndStop(1);
        } 
        if (container > (height * 21.1) && container < (height * 24.5)) {
            party.current.anim.goToAndStop(((container)-(height * 21.04))*1.6);
        } 
        if (container > (height *  24.6) && container < (height *  24.7)) {
            setChapter(5)
        } 
    }

    return useObserver(() => (
        <main className={style.wrapper} onScroll={e => scroll(e)}>
        <h2 style={{display: "none"}}>Deel 1</h2>
        <div className={style.story} style={{width: (height * 33)}}>
            <div className={style.button}>
                <Button
                    action={() => history.goBack()}
                    button={"square"} 
                    content={
                        <img src='./assets/mapIcon.svg' alt='terug naar kaart' />
                    } 
                    height={86}/>
            </div>
            {notificationOne ?  <div className={style.notification}>
                    <img className={style.coin} src={`./assets/coin.svg`} alt="munt"/>
                    <p> +3</p>
            </div> : null}
            {notificationTwo ?  <div className={style.notification}>
                    <img className={style.coin} src={`./assets/coin.svg`} alt="munt"/>
                    <p> +5</p>
            </div> : null}
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
                <span>Brussel</span>
                <span>1817</span>
            </p>
            <div className={style.textWrapper}>
                <p>Na al die tijd is het schilderij is nog steeds in handen van directeur Bosschaert. De inwoners van Kortrijk zijn de wanhoop nabij, er lijkt geen enkele manier te zijn om hun prachtwerk terug te krijgen.</p>
            </div>
            <div style={{position: "relative", height:"100%", width: (height * 3.5)}}>
                <div className={`${style.layer4} ${style.directeurWrapper}`} style={{height: "100%", bottom: 0, left: 0, transform: `translateX(${((posFirst/7)+1000)}px)`}}>
                        {directeurText ? <div style={{marginLeft: "40rem"}} className={`${style.textBalloonBig}`}>
                        <Button
                            action={() => setDirecteurText(false)}
                            button={"smallSquare"} 
                            content={
                                <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.5823 12.6137L25.4564 3.73956L22.3246 0L14.1129 9.94926L13.9639 9.75904L5.10174 0.896906L2.48223 4.48262L11.2895 12.3167L11.1478 12.4324L0 22.3244L4.2779 24.9181L13.7057 15.0999L13.7826 15.1936L22.4289 25.1155L26.6778 22.5858L16.3606 12.8016L16.5823 12.6137Z" fill="white"/>
                                </svg>
                            } 
                            height={43}
                            width={45}/>
                            <p className={style.textBalloonContent}>Ik ben meneer Bosschaert, directeur van het Museum voor Schone Kunsten in Brussel. Ik ben altijd strak in het pak want een goed voorkomen vind ik zeer belangrijk. Stiekem speel ik heel graag spelletjes. Ik speel ze zelfs nog liever wanneer ik er geld mee kan verdienen! Tot nu toe won ik nog nooit, maar ik wacht geduldig tot ik eindelijk geluk heb in het spel... </p>
                        </div> : <div  className={style.spacer}></div>}
                        <img onClick={() => setDirecteurText(true)} className={directeurText ? "" : style.glow} style={{marginTop: -290, width: "60%", zIndex: 6}}  src='./assets/directeur.svg' alt="directeur"/>
                    </div>
                <object className={style.layer3} data='./assets/stars.svg' aria-label="sterren" style={{height: "30%", top: 0, left: 0, transform: `translateX(${((posFirst/15)+350)}px)`}}></object>
                <object className={style.layer2} data='./assets/cafeBrussel.svg' aria-label="cafe" style={{height: "100%", top: 0, left: 0, transform: `translateX(${((posFirst/20))}px)`}}></object>
                <object className={style.layer1} data='./assets/BG8.svg' aria-label="stad" style={{ top: 0, left: 0, height: "70%"}}></object>
            </div>
            <div style={{position: "relative", height:"100%", width: (height * 3.5)}}>
                <object className={style.layer4} data='./assets/hand.svg' aria-label="hand" style={{ bottom: 0, left: 0, height: "60%", transform: `translateX(${((posSecond/7)+1200)}px)`}}></object>
                <div className={style.layer3} style={{height: "30%", bottom: 0, left: 0, transform: `translateX(${((posSecond/15)+1200)}px)`}}>
                    <div className={style.tableWrapper}>
                        <img onClick={() => {
                            setNotificationOne(true);
                            store.updateMoney(3)
                            play();
                            }} style={{width: "40%", zIndex: 3}}  src='./assets/chips.svg' alt="chips"/>
                        
                        <object data='./assets/drink.svg' aria-label="tafel" style={{width: "15%"}}></object>
                    </div>
                </div>
                <object className={style.layer2} data='./assets/table.svg' aria-label="tafel" style={{ bottom: 0, left: 0, height: "90%", transform: `translateX(${((posSecond/20)+700)}px)`}}></object>
                <object className={style.layer1} data='./assets/BG9.svg' aria-label="ramen" style={{ top: 0, left: 0, height: "100%"}}></object>
            </div>
            <div className={style.textWrapper}>
                <p>Na het inzetten van al zijn centen tijdens een potje poker, krijgt Bosschaert het benauwd. Het spel verloopt helemaal niet zoals hij het gepland heeft. Bosschaert verliest al zijn centen. Als laatste hoop op winst zet hij een pronkstuk uit zijn collectie in. </p>
            </div>
            <div style={{position: "relative", height:"100%", marginLeft: "15rem", width: (height * 3.3)}}>
                <object className={style.layer3} style={{bottom: 0, right: "15%", height: "70%" }} data='./assets/painting.svg'aria-label='de kruisoprichting'></object>
                <div className={style.layer2} style={{bottom: "20%", left: "20rem"}}><p style={{width: "40rem", fontSize: "3rem"}}>Helaas, het mocht niet zijn voor Bosschaert. Een vreemde lange man wint alles! Bosschaert druipt zonder zijn bezittingen af. </p></div>
                <div className={style.layer2} style={{height: "35%", width: "140rem", top:"25%", left:"25%"}}>
                    <Cards notification={() => {setNotificationTwo(true); play(); store.updateMoney(5)}}/>
                </div>
                <object className={style.layer1} data='./assets/poker.svg' aria-label="poker" style={{ top: 50, left: 0, height: "90%"}}></object>
            </div>
            <div style={{position: "relative", height:"100%", marginLeft: "15rem", width: (height * 4.3)}}>
                <div className={style.layer3} style={{top: "45%", right: 0}}><p style={{ fontSize: "3rem"}}>Een tijdje later las Willem I in de krant: </p></div>
                <object className={style.layer3} style={{bottom: 0, left: "20%", transform: `translateX(${posThird/10}px)`, height: "70%" }} data='./assets/menu.svg'aria-label='Thierry'></object>
                <div className={style.layer2} style={{ bottom: 0, left: "25%",  transform: `translateX(${posThird/15}px)`, height: "90%"}} >
                    <Bar click={() => setModal(true)} />
                </div>
                <object className={style.layer1} data='./assets/BG10.svg' aria-label="bar" style={{ top: 0, left: 0, height: "100%"}}></object>
            </div>
            <Lottie ref={willem} height={'100%'} width={height * 2.74} isClickToPauseDisabled={true} style={{margin: 0, zIndex: 3}} options={{
                        loop: false,
                        autoplay: false,
                        animationData: willemAnimation.default,
                }}/>
            <div className={style.textWrapper}>
                <p>Onder groot applaus wordt Willem I in Kortrijk ontvangen. Hij is de held die het geliefde schilderij na al die jaren terug kan brengen. Het geluk van de Kortrijkzanen kan niet op! </p>
                <p>Door al dat reizen heeft het schilderij wel wat afgezien en kan het een goede opknapbeurt gebruiken... </p>
            </div>
            <Lottie ref={party} height={'100%'} width={height * 5} isClickToPauseDisabled={true} style={{margin: 0, zIndex: 3}} options={{
                        loop: false,
                        autoplay: false,
                        animationData: partyAnimation.default,
            }}/>
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
                        <p className={style.textBalloonContent}>Het schilderij heeft doorheen zijn reis veel schade opgelopen, de verf pelt af , de vernis is beschadigd en het kader hangt los. Help ons het schilderij te restaureren. </p>
                    </div> : <div className={style.spacer}></div>}
                    <img className={ pigeonGameText ? "" : style.glow } onClick={() => {
                        playPigeon();
                        setPigeonGameText(true)
                        }} alt="duif" src="./assets/duif.svg"/>
                </div>
            <div className={style.gameWrapper}>
                <SnakeGame />
            </div>
            <object data='./assets/kerkKunstwerk.svg' aria-label="kerk" style={{height: "100%"}}></object>


            <div className={style.great}>
                    <p className={style.greatTitle}>Geweldig!</p>
                    <div className={style.greatContentWrapper}>
                        <p>Je hebt verhaal</p>
                        <img className={style.greatNumber} src="./assets/4.svg" alt="4" />
                        <p>volbracht!</p>
                    </div>
                    <Levels  level={4}/>
                </div>
                <div className={style.next}>
                    <p className={style.nextTitle}>Een nieuwe postkaart is onderweg!</p>
                    <div className={style.nextCardWrapper}>
                        <img className={style.nextNumber} src="./assets/5red.svg" alt="vijf" />
                        <img className={style.nextCard} src='./assets/card.svg' alt="kaartje" />
                    </div>
                    <Button
                        action={() => {
                            history.push("/overview")
                            store.arts[0].levels[3].setDone();
                        }} 
                        button={"button"} 
                        content={<span className={style.btnText}>Naar overzicht</span>} 
                        height={86}/>
                </div>


            {modal ? 
            <div className={style.modalWrapper}>
                <div className={style.modal}>
                        <div className={style.modalHeader}>
                            <div className={style.modalHeaderMoney}>
                                <img className={style.coin} src={`./assets/coin.svg`} alt="munt"/>
                                <p>{store.money}</p>
                            </div>
                            <Button
                            action={() => {setModal(false); stop();setVinyl(false)}}
                            button={"smallSquare"} 
                            content={
                                <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.5823 12.6137L25.4564 3.73956L22.3246 0L14.1129 9.94926L13.9639 9.75904L5.10174 0.896906L2.48223 4.48262L11.2895 12.3167L11.1478 12.4324L0 22.3244L4.2779 24.9181L13.7057 15.0999L13.7826 15.1936L22.4289 25.1155L26.6778 22.5858L16.3606 12.8016L16.5823 12.6137Z" fill="white"/>
                                </svg>
                            } 
                            height={43}
                            width={45}/>
                        </div>
                        <div className={style.modalContent}>
                            <p className={style.modalContentTitle} >Vraag jouw plaat aan</p>
                            <img onClick={() => {if(store.money >= 2){stop();playCoin();store.updateMoney(-2);setTimeout(function(){ setVinyl(true);playMusic({id: 'pop' })}, 1500);}}} className={style.modalContentPop} src="./assets/pop.svg" alt="pop"/>
                            <img onClick={() => {if(store.money >= 2){stop();playCoin();store.updateMoney(-2);setTimeout(function(){ setVinyl(true);playMusic({id: 'rock' })}, 1500);}}}className={style.modalContentRock} src="./assets/rock.svg" alt="rock"/>
                            <img onClick={() => {if(store.money >= 2){stop();playCoin();store.updateMoney(-2);setTimeout(function(){ setVinyl(true);playMusic({id: 'DJ' })}, 1500);}}} className={style.modalContentDj} src="./assets/DJ.svg" alt="DJ"/>
                            <img onClick={() => {if(store.money >= 2){stop();playCoin();store.updateMoney(-2);setTimeout(function(){ setVinyl(true);playMusic({id: 'flute' })}, 1500);}}} className={style.modalContentFluit} src="./assets/fluit.svg" alt="fluit"/>
                            <div className={style.modalContentPlaat}>
                                <img style={{position: "absolute", width: "35%", bottom: 0, right: 0, zIndex: 1001}} src="./assets/naald.svg" alt="naald"/>
                                <img className={vinyl ? style.rotate : ""} style={{width: "95%", marginRight: "2rem"}} src="./assets/plaat.svg" alt="plaat"/>
                            </div>
                            
                        </div>
                </div>  
            </div> : ""}
        </div>
        </main>
    ))
}

export default ChapterFour;