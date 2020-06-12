import React, { useRef, useState }from "react";
import Lottie from 'react-lottie'
import { useStore } from '../../../hooks/UseStore';
import { useHistory } from 'react-router-dom';
import style from "./ChapterOne.module.css";
import Button from '../../Ui/Button/Button';
import AnimatedText from '../../Ui/AnimatedText/AnimatedText';
import * as animation from "./animare.json";


const ChapterOne = () => {
    const store = useStore();
    const history = useHistory();
    if(store.arts[0].levels[0].unlocked === false) {
        history.push('/');
    } 
    const [anim, setAnim] = useState(true);
    const lottie = useRef();
    const scroll = (e) => {
        const container = e.currentTarget.scrollLeft;
        lottie.current.anim.goToAndStop(container); 
        if (container > 3400) {
            setAnim(false);
        }   
    }

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: animation.default,
      };

    return (
        <section className={style.wrapper} onScroll={e => scroll(e)}>
            <div  className={style.characters}>
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
                <Lottie ref={lottie} height={'90%'} options={defaultOptions}/>
                <p className={style.spacer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <AnimatedText paused={anim} text={"Hello world! It is me Lars"}/>
            </div>
        </section>
    )
}

export default ChapterOne;