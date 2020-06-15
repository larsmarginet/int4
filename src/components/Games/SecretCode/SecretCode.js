import React, { useState, useRef }from "react"; 
import Lottie from 'react-lottie';
import useSound from 'use-sound';
import style from "./SecretCode.module.css";
import Button from "../../Ui/Button/Button";
import * as chestAnimation from "./kist.json";
import moneySound from '../../Maps/HomeMap/sound.mp3';
import { useStore } from "../../../hooks/UseStore";

const SecretCode = ({notification}) => {
    const store = useStore();
    const [paused, setPaused] = useState(true);

    const first = useRef();
    const second = useRef();
    const third = useRef();
    const fourth = useRef();
    const fifth = useRef();
    const sixth = useRef();

    const [play] = useSound(moneySound);

    const lock = useRef("");
  

    const submit = e => {
        e.preventDefault()
        if(first.current.value !== "" && second.current.value !== "" && third.current.value !== "" && fourth.current.value !== "" && fifth.current.value !== "" && sixth.current.value !== "") {
            if (first.current.value === "1" && second.current.value === "7" && third.current.value === "2" && fourth.current.value === "8" && fifth.current.value === "3" && sixth.current.value === "5") {
                setPaused(true)
                lock.current.animate([
                    // keyframes
                    { opacity: 1 }, 
                    { opacity: 0 }
                  ], { 
                    // timing options
                    duration: 400,
                    iterations: 1
                  });
                  setTimeout(() => { setPaused(false) },390);
            } else {
                lock.current.animate([
                    // keyframes
                    { transform: 'translate(30px)' }, 
                    { transform: 'translate(-30px)' },
                    { transform: 'translate(15px)' }, 
                    { transform: 'translate(8px)' }, 
                    { transform: 'translate(0px)' }, 
                  ], { 
                    // timing options
                    duration: 400,
                    iterations: 1
                  });
            }
        }
    }

    return (
        <div className={style.wrapper}>
            {paused ? <img style={{width: "96rem", height: "100%"}} alt="kist" src="./assets/kist.svg" /> :  
            <Lottie  height={'100%'} width={'96rem'} isClickToPauseDisabled={true} style={{margin: 0}} options={{
                    loop: false,
                    autoplay: true,
                    isStopped: true,
                    isPaused: paused,
                    animationData: chestAnimation.default
                }}/>}
            
            {paused ? 
            <form ref={lock} onSubmit={submit} className={style.form}>
                <div className={style.inputWrapper}>
                    <input type="number" className={style.formInput} ref={first}></input>
                    <input type="number" className={style.formInput} ref={second}></input>
                    <input type="number" className={style.formInput} ref={third}></input>
                    <input type="number" className={style.formInput} ref={fourth}></input>
                    <input type="number" className={style.formInput} ref={fifth}></input>
                    <input type="number" className={style.formInput} ref={sixth}></input>
                </div>
                <Button
                    button={"square"} 
                    content={
                        <svg width="56" height="62" viewBox="0 0 56 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6474 12.7517C5.05616 26.9745 24.5581 33.4446 24.5581 33.4446L24.6085 32.9966L27.1789 29.1048C23.8737 27.5871 14.1863 22.3669 19.5613 14.5728C25.7288 5.61713 35.3196 14.9703 36.0332 15.7126L38.1434 14.1168C38.0976 14.1423 24.2386 -1.47112 14.6474 12.7517Z" fill="#BE988D"/>
                            <path d="M13.5744 12.8699C3.98311 27.0927 23.4851 33.5628 23.4851 33.5628L23.5354 33.1149L26.1059 29.223C22.8007 27.7053 13.1133 22.4852 18.4883 14.691C24.6558 5.73535 34.2466 15.0886 34.9601 15.8308L37.3985 12.1325C37.3527 12.158 23.1656 -1.35289 13.5744 12.8699Z" fill="#FFCBC8"/>
                            <path d="M17.2379 31.2851L44.5074 25.7484L50.0477 47.8568L22.0217 54.8348L17.2379 31.2851Z" fill="#CBBEBD"/>
                            <path d="M16.5542 30.7063L43.7518 25.1497L49.2923 47.258L21.3126 54.2102L16.5542 30.7063Z" fill="#FFF1F0"/>
                        </svg> 
                    } 
                    width={92}
                    height={86}/>
            </form> : <Button
                    action={() => {
                        notification();
                        play();
                        store.updateMoney(500);
                    }}
                    button={"button"} 
                    content={
                        <span className={style.btnText}>Claim je prijs</span>
                    } 
                    width={302}
                    height={72}/>}
        </div>
    )   
}

export default SecretCode;